const TestimonialSlider = ( { testimonials } ) => {
	return (
		<div class="ow-testimonial-block-slider">
			{
				testimonials.map( ( testimonial ) => {
					return (
						<div className="slider-item-wrapper">
							<div
								className="slider-item"
								key={ testimonial.id }

							>
								<div className="slider-top">
									<div className="slider-logo">
										<img
											src={ testimonial.logo[0] }
											alt={ `${ testimonial.author_name } logo` }
										/>
									</div>

									<div className="slider-content">
										{ testimonial.content }
									</div>

								</div>
								<div className="slider-bottom">
									<div className="slider-author">
										<div className="slider-author-image">
											<img
												src={ testimonial.author_profile_picture[0] }
												alt={ testimonial.author_name }
											/>
										</div>
										<div className="slider-author-info">
											<h4>{ testimonial.author_name }</h4>
											<p>{ testimonial.author_designation }</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				} )
			}
		</div>
	);
};

export default TestimonialSlider;
