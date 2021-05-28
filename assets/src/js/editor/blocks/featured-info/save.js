import { useBlockProps } from '@wordpress/block-editor';
import {RightArrowIcon} from '../../../icons';

const save = ( {attributes} ) => {
	const blockProps = useBlockProps.save();
	const { title, description, linkTitle, linkUrl, mediaUrl, iconUrl } = attributes;

	return (
		<div {...blockProps}>
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
	);
};

export default save;
