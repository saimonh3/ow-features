/**
 * External dependencies
 */
import { get, includes, invoke, isUndefined, pickBy } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {useState, useEffect, useRef, Fragment} from '@wordpress/element';
import { __experimentalGetSettings } from '@wordpress/date';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {pin} from '@wordpress/icons';
import { store as coreStore } from '@wordpress/core-data';
import {InspectorControls, useBlockProps, store as blockEditorStore, RichText} from '@wordpress/block-editor';
import {
	PanelBody,
	Placeholder,
	QueryControls,
	RadioControl,
	RangeControl,
	Spinner,
	ToggleControl,
} from '@wordpress/components';

/**
 * Internal Dependencies
 */
import PostCard from '../../components/post-card';
import { MIN_EXCERPT_LENGTH, MAX_EXCERPT_LENGTH, MAX_POSTS_COLUMNS } from './constants';

/**
 * Module Constants
 */
const CATEGORIES_LIST_QUERY = {
	// eslint-disable-next-line camelcase
	per_page: -1,
};
const USERS_LIST_QUERY = {
	// eslint-disable-next-line camelcase
	per_page: -1,
};
const edit = ( { attributes, setAttributes } ) => {
	const {
		headline,
		postsToShow,
		order,
		orderBy,
		categories,
		selectedAuthor,
		displayFeaturedImage,
		displayPostContentRadio,
		displayPostContent,
		displayPostDate,
		displayCategory,
		displayAuthor,
		columns,
		excerptLength,
		featuredImageSizeSlug,
		addLinkToFeaturedImage,
	} = attributes;

	const {
		latestPosts,
	} = useSelect(
		( select ) => {
			const { getEntityRecords, getMedia } = select( coreStore );
			const { getSettings } = select( blockEditorStore );
			const { imageSizes, imageDimensions } = getSettings();
			const catIds =
				categories && 0 < categories.length ?
					categories.map( ( cat ) => cat.id ) :
					[];
			const latestPostsQuery = pickBy(
				{
					categories: catIds,
					author: selectedAuthor,
					order,
					orderby: orderBy,
					// eslint-disable-next-line camelcase
					per_page: postsToShow,
				},
				( value ) => ! isUndefined( value )
			);
			const posts = getEntityRecords(
				'postType',
				'post',
				latestPostsQuery
			);

			return {
				defaultImageWidth: get(
					imageDimensions,
					[ featuredImageSizeSlug, 'width' ],
					0
				),
				defaultImageHeight: get(
					imageDimensions,
					[ featuredImageSizeSlug, 'height' ],
					0
				),
				imageSizeOptions: imageSizes
					.filter( ( { slug } ) => 'full' !== slug )
					.map( ( { name, slug } ) => ( {
						value: slug,
						label: name,
					} ) ),
				latestPosts: ! Array.isArray( posts ) ?
					posts :
					posts.map( ( post ) => {
						if ( ! post.featured_media ) {
							return post;
						}
						const image = getMedia( post.featured_media );
						let url = get(
							image,
							[
								'media_details',
								'sizes',
								featuredImageSizeSlug,
								'source_url',
							],
							null
						);
						if ( ! url ) {
							url = get( image, 'source_url', null );
						}
						const featuredImageInfo = {
							url,
							// eslint-disable-next-line camelcase
							alt: image?.alt_text,
						};
						return { ...post, featuredImageInfo };
					} ),
			};
		},
		[
			featuredImageSizeSlug,
			postsToShow,
			order,
			orderBy,
			categories,
			selectedAuthor,
		]
	);
	const [ categoriesList, setCategoriesList ] = useState( [] );
	const [ authorList, setAuthorList ] = useState( [] );
	const categorySuggestions = categoriesList.reduce(
		( accumulator, category ) => ( {
			...accumulator,
			[ category.name ]: category,
		} ),
		{}
	);
	const selectCategories = ( tokens ) => {
		const hasNoSuggestion = tokens.some( token => 'string' === typeof token && ! categorySuggestions[ token ] );

		if ( hasNoSuggestion ) {
			return;
		}

		// Categories that are already will be objects, while new additions will be strings (the name).
		// allCategories nomalizes the array so that they are all objects.
		const allCategories = tokens.map( ( token ) => {
			return 'string' === typeof token ?
				categorySuggestions[ token ] :
				token;
		} );

		// We do nothing if the category is not selected
		// from suggestions.
		if ( includes( allCategories, null ) ) {
			return false;
		}

		setAttributes( { categories: allCategories } );
	};

	const isStillMounted = useRef();

	useEffect( () => {
		isStillMounted.current = true;
		apiFetch( {
			path: addQueryArgs( '/wp/v2/categories', CATEGORIES_LIST_QUERY ),
		} )
			.then( ( data ) => {
				if ( isStillMounted.current ) {
					setCategoriesList( data );
				}
			} )
			.catch( () => {
				if ( isStillMounted.current ) {
					setCategoriesList( [] );
				}
			} );
		apiFetch( {
			path: addQueryArgs( '/wp/v2/users', USERS_LIST_QUERY ),
		} )
			.then( ( data ) => {
				if ( isStillMounted.current ) {
					setAuthorList( data );
				}
			} )
			.catch( () => {
				if ( isStillMounted.current ) {
					setAuthorList( [] );
				}
			} );
		return () => {
			isStillMounted.current = false;
		};
	}, [] );

	const dateFormat = __experimentalGetSettings().formats.date;

	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={ __( 'Post content settings' ) }
				initialOpen={true}
			>
				<ToggleControl
					label={ __( 'Post content' ) }
					checked={ displayPostContent }
					onChange={ ( value ) =>
						setAttributes( { displayPostContent: value } )
					}
				/>
				{ displayPostContent && (
					<RadioControl
						label={ __( 'Show:' ) }
						selected={ displayPostContentRadio }
						options={ [
							{ label: __( 'Excerpt' ), value: 'excerpt' },
							{
								label: __( 'Full post' ),
								value: 'full_post',
							},
						] }
						onChange={ ( value ) =>
							setAttributes( {
								displayPostContentRadio: value,
							} )
						}
					/>
				) }
				{ displayPostContent &&
				'excerpt' === displayPostContentRadio && (
					<RangeControl
						label={ __( 'Max number of words in excerpt' ) }
						value={ excerptLength }
						onChange={ ( value ) =>
							setAttributes( { excerptLength: value } )
						}
						min={ MIN_EXCERPT_LENGTH }
						max={ MAX_EXCERPT_LENGTH }
					/>
				) }
			</PanelBody>
			<PanelBody title={ __( 'Post meta settings' ) }>
				<ToggleControl
					label={ __( 'Display author name' ) }
					checked={ displayAuthor }
					onChange={ ( value ) =>
						setAttributes( { displayAuthor: value } )
					}
				/>
				<ToggleControl
					label={ __( 'Display post date' ) }
					checked={ displayPostDate }
					onChange={ ( value ) =>
						setAttributes( { displayPostDate: value } )
					}
				/>
				<ToggleControl
					label={ __( 'Display post category' ) }
					checked={ displayCategory }
					onChange={ ( value ) =>
						setAttributes( { displayCategory: value } )
					}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Featured image settings' ) }>
				<ToggleControl
					label={ __( 'Display featured image' ) }
					checked={ displayFeaturedImage }
					onChange={ ( value ) =>
						setAttributes( { displayFeaturedImage: value } )
					}
				/>
				{ displayFeaturedImage && (
					<ToggleControl
						label={ __( 'Add link to featured image' ) }
						checked={ addLinkToFeaturedImage }
						onChange={ ( value ) =>
							setAttributes( {
								addLinkToFeaturedImage: value,
							} )
						}
					/>
				) }
			</PanelBody>

			<PanelBody title={ __( 'Sorting and filtering' ) }>
				<QueryControls
					{ ...{ order, orderBy } }
					numberOfItems={ postsToShow }
					onOrderChange={ ( value ) =>
						setAttributes( { order: value } )
					}
					onOrderByChange={ ( value ) =>
						setAttributes( { orderBy: value } )
					}
					onNumberOfItemsChange={ ( value ) =>
						setAttributes( { postsToShow: value } )
					}
					categorySuggestions={ categorySuggestions }
					onCategoryChange={ selectCategories }
					selectedCategories={ categories }
					onAuthorChange={ ( value ) =>
						setAttributes( {
							selectedAuthor:
								'' !== value ? Number( value ) : undefined,
						} )
					}
					authorList={ authorList }
					selectedAuthorId={ selectedAuthor }
				/>

			</PanelBody>

		</InspectorControls>
	);

	const blockProps = useBlockProps();
	const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

	if ( ! hasPosts ) {
		return (
			<div { ...blockProps }>
				{ inspectorControls }
				<Placeholder icon={ pin } label={ __( 'Recent Posts' ) }>
					{ ! Array.isArray( latestPosts ) ? (
						<Spinner />
					) : (
						__( 'No posts found.' )
					) }
				</Placeholder>
			</div>
		);
	}
	const displayPosts = latestPosts.length > postsToShow ?
		latestPosts.slice( 0, postsToShow ) :
		latestPosts;

	return (
		<div>
			{inspectorControls}

			<div {...blockProps}>
				<RichText
					className='wp-block-ow-feature-block-recent-posts__headline'
					tagName='h1'
					value={ headline }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					onChange={ ( headline ) => setAttributes( { headline } ) }
				/>

				<div className='wp-block-ow-feature-block-recent-posts__items'>
					{displayPosts.map( ( post, i ) => {
						const titleTrimmed = invoke( post, [
							'title',
							'rendered',
							'trim',
						] );

						// eslint-disable-next-line camelcase
						let categoryNames = post?.category_names;
						categoryNames = categoryNames && categoryNames.slice( 0, 2 ).join( ', ' );

						let excerpt = post.excerpt.rendered;
						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;

						excerpt =
							excerptElement.textContent ||
							excerptElement.innerText ||
							'';

						const needsReadMore =
							excerptLength < excerpt.trim().split( ' ' ).length &&
							'' === post.excerpt.raw;

						const postExcerpt = needsReadMore ? (
							<>
								{ excerpt
									.trim()
									.split( ' ', excerptLength )
									.join( ' ' ) }
								{ /* translators: excerpt truncation character, default …  */ }
								{ __( ' … ' ) }
								<a href={ post.link } rel="noopener noreferrer">
									{ __( 'Read more', 'ow-features' ) }
								</a>
							</>
						) : (
							excerpt
						);

						const currentAuthor = authorList.find(
							( author ) => author.id === post.author
						);
						const {
							featuredImageInfo: {
								url: imageSourceUrl,
								alt: featuredImageAlt,
							} = {},
						} = post;

						const renderFeaturedImage = !! ( displayFeaturedImage && imageSourceUrl );


						const featuredImage = renderFeaturedImage ? (
							<img
								src={ imageSourceUrl }
								alt={ featuredImageAlt }
								height='320'
								width='600'
							/>
						) : {};

						return (
							<PostCard
								key={i}
								post={ post }
								renderFeaturedImage={renderFeaturedImage}
								displayCategory={displayCategory}
								displayPostContent={displayPostContent}
								addLinkToFeaturedImage={addLinkToFeaturedImage}
								displayPostDate={displayPostDate}
								currentAuthor={currentAuthor}
								displayAuthor={displayAuthor}
								displayPostContentRadio={displayPostContentRadio}
								categoryNames={categoryNames}
								titleTrimmed={titleTrimmed}
								featuredImage={featuredImage}
								postExcerpt={postExcerpt}
								dateFormat={dateFormat}
							/>
						);
					} )}
				</div>
			</div>
		</div>
	);
};

export default edit;
