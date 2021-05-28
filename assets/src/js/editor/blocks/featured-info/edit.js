/**
 * WP Dependencies
 */
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {withSelect} from '@wordpress/data';

/**
 * Internal Dependencies
 */
import MediaControl from '../../components/media-control';
import {RightArrowIcon} from '../../../icons';

const withEdit = ( {attributes, setAttributes, image, icon} ) => {
	const blockProps = useBlockProps();
	const {title, description, mediaId, mediaUrl, iconId, iconUrl, linkTitle, linkUrl} = attributes;

	const addMedia = ( media ) => {
		setAttributes( {
			mediaId: media.id,
			mediaUrl: media.url,
		} );
	};

	const removeMedia = () => {
		setAttributes( {
			mediaId: 0,
			mediaUrl: ''
		} );
	};

	const addIcon = ( media ) => {
		setAttributes( {
			iconId: media.id,
			iconUrl: media.url,
		} );
	};

	const removeIcon = () => {
		setAttributes( {
			iconId: 0,
			iconUrl: ''
		} );
	};

	/**
	 * Adds inspector control in the sidebar.
	 */
	const controls = (
		<InspectorControls key="featured-info-inspector">
			<Panel>
				<PanelBody
					title={ __( 'Featured Info Settings', 'ow-features' ) }
					initialOpen={true}
				>
					<PanelRow>
						<TextControl
							label={ __( 'Title', 'ow-features' ) }
							value={ title }
							onChange={title => setAttributes( {title} )}
						/>
					</PanelRow>
					<PanelRow>
						<TextareaControl
							label={ __( 'Description', 'ow-features' ) }
							value={ description }
							onChange={description => setAttributes( {description} )}
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label={ __( 'Link Title', 'ow-features' ) }
							value={ linkTitle }
							onChange={linkTitle => setAttributes( {linkTitle} )}
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label={ __( 'Link URL', 'ow-features' ) }
							value={ linkUrl }
							onChange={linkUrl => setAttributes( {linkUrl} )}
						/>
					</PanelRow>

				</PanelBody>

				<PanelBody
					title={ __( 'Featured Image', 'ow-features' ) }
					initialOpen={false}
				>
					<PanelRow>
						<MediaControl
							addMediaHandler={addMedia}
							removeMediaHandler={removeMedia}
							media={image}
							mediaId={mediaId}
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Featured Icon', 'ow-features' ) }
					initialOpen={false}
				>
					<PanelRow>
						<MediaControl
							addMediaHandler={addIcon}
							removeMediaHandler={removeIcon}
							media={icon}
							mediaId={iconId}
							isIcon={true}
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>
	);

	return [
		controls,
		<div key='featured-info' {...blockProps}>
			{iconUrl &&
			<div className='featured-info-icon'>
				<img src={iconUrl} alt='image alt' />
			</div>
			}

			<div className='featured-info-block'>
				<div className='featured-info-block__left featured-info-block__item'>
					<h2 className='featured-info-block__left__title'>{title}</h2>
					<p className='featured-info-block__left__desc'>{description}</p>
					<a href={linkUrl} className='featured-info-block__left__link'>{linkTitle}
						<RightArrowIcon />
					</a>
				</div>

				{mediaUrl &&
				<div className='featured-info-block__right featured-info-block__item'>
					<img src={mediaUrl} alt='image alt' />
				</div>
				}
			</div>
		</div>
	];
};

const edit = withSelect( ( select, props ) => {
	return {
		image: props.attributes.mediaId ? select( 'core' ).getMedia( props.attributes.mediaId ) : undefined,
		icon: props.attributes.iconId ? select( 'core' ).getMedia( props.attributes.iconId ) : undefined,
	};
} )( withEdit );

export default edit;
