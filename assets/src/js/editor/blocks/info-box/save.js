import {useBlockProps} from '@wordpress/block-editor';

const save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { title, description, makeSquare } = attributes;

	return (
		<div key='info-box' {...blockProps}>

			{ ! makeSquare && <div className='outer-div'></div>}

			<div className={makeSquare ? 'inner-div square-shape' : 'inner-div'}>
				<div className='title'>
					{title}
				</div>
				<p className='description'>{description}</p>
			</div>
		</div>
	);
};

export default save;
