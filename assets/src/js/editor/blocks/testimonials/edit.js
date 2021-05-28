import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {InspectorControls} from '@wordpress/block-editor';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { Panel, PanelBody, Spinner, CheckboxControl, TextControl } from '@wordpress/components';

import SortTestimonials from './sort-testimonials';
import TestimonialSlider from './slider';

const TestimonialsEdit = ( { attributes, setAttributes } ) => {
	const { testimonials, pageLinkText, pageLink } = attributes;
	const [ allTestimonials, setAllTestimonials ] = useState( [] );
	const [ errors, setErrors ] = useState();
	const [ isBusy, setIsBusy ] = useState( true );

	const fetchTestimonials = async () => {
		try {
			const response = await apiFetch( {
				path: '/ow-features/v1/testimonials'
			} );

			window.owFeatures.testimonials = response;
			setAllTestimonials( response );
		} catch ( error ) {
			if ( error?.message ) {
				setErrors( error.message );
			}
		} finally {
			setIsBusy( false );
		}
	};

	useEffect( () => {
		if ( ! window.owFeatures.testimonials ) {
			fetchTestimonials();
		} else {
			setIsBusy( false );
			setAllTestimonials( window.owFeatures.testimonials );
		}
	}, [] );

	const setSelectedTestimonials = ( selectedTestimonials ) => {
		setAttributes( { testimonials: selectedTestimonials } );
	};

	const onSelectTestimonial = ( testimonial ) => {
		const index = testimonials.findIndex( ( item ) => {
			return item.id === testimonial.id;
		} );

		if ( 0 <= index ) {
			const tmpTestimonials = [ ...testimonials ];
			tmpTestimonials.splice( index, 1 );
			setSelectedTestimonials( tmpTestimonials );
		} else {
			setSelectedTestimonials( [ ...testimonials, testimonial ] );
		}
	};

	const isTestimonialSelected = ( testimonial ) => {
		const index = testimonials.findIndex( ( item ) => {
			return item.id === testimonial.id;
		} );

		return ( 0 <= index );
	};

	if ( isBusy ) {
		return (
			<div className='wp-block-embed is-loading'>
				<Spinner />
				<p>{ __( 'Fetching Testimonials', 'ow-features' ) }...</p>
			</div>
		);
	}

	if ( errors ) {
		return (
			<div className="wp-block-embed is-loading">
				{ errors }
			</div>
		);
	}

	if ( 1 > allTestimonials.length ) {
		return (
			<div className="wp-block-embed is-loading">
				{ __( 'No testimonial found', 'ow-features' ) }
			</div>
		);
	}

	return (
		<Fragment>
			<InspectorControls>
				<Panel>
					<PanelBody title={  __( 'Select Testimonials', 'ow-features' ) }>
						<div className="ow-testimonial-block-select-items">
							{
								allTestimonials.map( ( testimonial ) => {
									return (
										<CheckboxControl
											key={ testimonial.id }
											label={ testimonial.author_name }
											checked={ isTestimonialSelected( testimonial ) }
											onChange={ () => onSelectTestimonial( testimonial ) }
										/>
									);
								} )
							}
						</div>
					</PanelBody>
					<PanelBody title={ __( 'Sort items', 'ow-features' ) }>
						<SortTestimonials
							testimonials={ testimonials }
							setSelectedTestimonials={ setSelectedTestimonials }
						/>
					</PanelBody>
					<PanelBody title={ __( 'Page Link', 'ow-features' ) }>
						<TextControl
							label={ __( 'Page Link Text', 'ow-features' ) }
							value={ pageLinkText }
							onChange={ ( value ) => setAttributes( { pageLinkText: value } ) }
						/>

						<TextControl
							label={ __( 'Page Link', 'ow-features' ) }
							value={ pageLink }
							onChange={ ( value ) => setAttributes( { pageLink: value } ) }
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			{
				( 1 > testimonials.length ) ? (
					<div className="wp-block-embed is-loading">
						{ __( 'No testimonial selected', 'ow-features' ) }
					</div>
				) : (
					<TestimonialSlider testimonials={ testimonials } />
				)
			}
		</Fragment>
	);
};

export default TestimonialsEdit;
