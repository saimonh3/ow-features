/**
 * Import WP Dependencies
 */
import {RawHTML} from '@wordpress/element';
import { dateI18n, format } from '@wordpress/date';

const PostCard = ( props ) => {
	const {
		post,
		renderFeaturedImage,
		displayCategory,
		displayPostContent,
		addLinkToFeaturedImage,
		displayPostDate,
		currentAuthor,
		displayAuthor,
		displayPostContentRadio,
		categoryNames,
		titleTrimmed,
		featuredImage,
		postExcerpt,
		dateFormat,
	} = props;

	return (
		<article className='wp-block-ow-feature-block-recent-posts__item'>
			{ renderFeaturedImage &&
			<figure className='wp-block-ow-feature-block-recent-posts__header'>
				{ addLinkToFeaturedImage ? (
					<a
						href={ post.link }
						rel="noreferrer noopener"
					>
						{ featuredImage }
					</a>
				) : (
					featuredImage
				) }
			</figure>
			}
			<div className='wp-block-ow-feature-block-recent-posts__content'>
				{ displayCategory &&
				<p className='wp-block-ow-feature-block-recent-posts__category'>
					{ categoryNames }
				</p>
				}
				<a
					href={ post.link }
					rel="noreferrer noopener"
					className='wp-block-ow-feature-block-recent-posts__title'
				>
					{titleTrimmed}
				</a>

				{displayPostContent && 'excerpt' === displayPostContentRadio && (
					<div className="wp-block-ow-feature-block-recent-posts__excerpt">
						{ postExcerpt }
					</div>
				) }
				{ displayPostContent && 'full_post' === displayPostContentRadio && (
					<div className="wp-block-ow-feature-block-recent-posts__full-content">
						<RawHTML key="html">
							{ post.content.raw.trim() }
						</RawHTML>
					</div>
				) }

				<div className='wp-block-ow-feature-block-recent-posts__footer'>
					{ displayPostDate && post.date_gmt && (
						<time
							dateTime={ format( 'c', post.date_gmt ) }
							className="wp-block-ow-feature-block-recent-posts__date"
						>
							{ dateI18n( dateFormat, post.date_gmt ) }
						</time>
					) }
					{ displayAuthor && currentAuthor &&
					<p className='wp-block-ow-feature-block-recent-posts__author'>
						By <strong>{ currentAuthor.name }</strong>
					</p>
					}
				</div>
			</div>
		</article>
	);
};

export default PostCard;
