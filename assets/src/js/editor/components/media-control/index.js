import {MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import {Button, ResponsiveWrapper} from '@wordpress/components';
import {__, sprintf} from '@wordpress/i18n';

const MediaControl = ( {addMediaHandler, removeMediaHandler, media, mediaId, isIcon} ) => {
	const title = isIcon ? __( 'icon', 'ow-features' ) : __( 'image', 'ow-features' );

	return (
		<div className='editor-post-featured-image'>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={addMediaHandler}
					value={mediaId}
					allowedTypes={ [ 'image' ] }
					render={ ( {open} ) => (
						<Button
							className={ 0 === mediaId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
							onClick={open}
						>
							{ ! mediaId && sprintf( __( 'Choose an %s', 'ow-features' ), title ) }
							{media !== undefined &&
							<ResponsiveWrapper
								naturalWidth={ media.media_details.width }
								naturalHeight={ media.media_details.height }
							>
								<img src={media.source_url} />
							</ResponsiveWrapper>
							}
						</Button>
					)}
				/>
			</MediaUploadCheck>

			{ 0 !== mediaId &&
			<MediaUploadCheck>
				<MediaUpload
					title={ sprintf( __( 'Replace %s', 'ow-features' ), title ) }
					value={mediaId}
					onSelect={addMediaHandler}
					allowedTypes={[ 'image' ]}
					render={( {open} ) => (
						<Button onClick={open} isSecondary>{ sprintf( __( 'Replace %s', 'ow-features' ), title ) }</Button>
					)}
				/>
			</MediaUploadCheck>
			}
			{ 0 !== mediaId &&
			<MediaUploadCheck>
				<Button onClick={removeMediaHandler} isLink isDestructive>{ sprintf( __( 'Remove %s', 'ow-features' ), title ) }</Button>
			</MediaUploadCheck>
			}
		</div>
	);
};

export default MediaControl;
