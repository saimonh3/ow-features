import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Flex, FlexItem, Button } from '@wordpress/components';
import { Icon, chevronUp, chevronDown } from '@wordpress/icons';

const SortTestimonials = ( { testimonials, setSelectedTestimonials } ) => {
	const moveUp = ( index ) => {
		if ( 0 === index ) {
			return;
		}

		moveItem( index, ( index - 1 ) );
	};

	const moveDown = ( index ) => {
		if ( index === ( testimonials.length - 1 ) ) {
			return;
		}

		moveItem( index, ( index + 1 ) );
	};

	const moveItem = ( oldIndex, newIndex ) => {
		const tmpTestimonials = [ ...testimonials ];

		tmpTestimonials.splice(
			newIndex,
			0,
			tmpTestimonials.splice( oldIndex, 1 ) .pop()
		);

		setSelectedTestimonials( tmpTestimonials );
	};

	return (
		<div className="ow-testimonial-block-sort-items">
			{
				( 1 <= ! testimonials.length ) ? (
					<em>{ __( 'Please select some testimonials first', 'ow-feature' ) }</em>
				) : (
					<Fragment>
						{
							testimonials.map( ( testimonial, index ) => {
								return (
									<Flex className="ow-testimonial-block-sort-items-item">
										<FlexItem>
											{ testimonial.author_name }
										</FlexItem>
										<FlexItem>
											<Button
												icon={ <Icon icon={ chevronUp } /> }
												isSmall
												disabled={ 0 === index }
												onClick={ () => moveUp( index ) }
											/>
											<Button
												icon={ <Icon icon={ chevronDown } /> }
												isSmall
												disabled={ index === ( testimonials.length - 1 ) }
												onClick={ () => moveDown( index ) }
											/>
										</FlexItem>
									</Flex>
								);
							} )
						}
					</Fragment>
				)
			}
		</div>
	);
};

export default SortTestimonials;
