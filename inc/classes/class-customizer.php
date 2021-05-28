<?php
/**
 * Customizer class.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc;

use OW_Features\Features\Inc\Traits\Singleton;

/**
 * Class Customizer
 */
class Customizer {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {
		$this->setup_hooks();
	}

	/**
	 * To setup action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {

		/**
		 * Action
		 */
		add_action( 'customize_register', [ $this, 'customize_register' ] );

	}

	/**
	 * Customize register.
	 *
	 * @param \WP_Customize_Manager $wp_customize Theme Customizer object.
	 *
	 * @action customize_register
	 */
	public function customize_register( \WP_Customize_Manager $wp_customize ) {

		$this->social_icon_section( $wp_customize );
		$this->footer_section( $wp_customize );

	}

	/**
	 * Add Footer section settings.
	 *
	 * @param \WP_Customize_Manager $wp_customize Theme Customizer object.
	 */
	public function footer_section( $wp_customize ) {

		$wp_customize->add_section(
			'ow_footer',
			[
				'title'       => esc_html__( 'Footer', 'ow-features' ),
				'description' => esc_html__( 'Footer', 'ow-features' ),
			]
		);

		// Footer Text.
		$text_setting_id = 'ow_footer_text';

		$wp_customize->add_setting(
			$text_setting_id,
			[
				'default'           => '',
				'capability'        => 'edit_theme_options',
				'sanitize_callback' => 'esc_html',
			]
		);

		$wp_customize->add_control(
			$text_setting_id,
			[
				'label'    => esc_html__( 'Copyright text', 'ow-features' ),
				'section'  => 'ow_footer',
				'settings' => $text_setting_id,
				'type'     => 'text',
			]
		);

		// Footer Logo.
		$footer_logo_setting_id = 'ow_footer_logo';
		$logo_label             = __( 'Footer Logo', 'ow-features' );
		$this->upload_image( $wp_customize, $footer_logo_setting_id, $logo_label );

		// Brand Logos.
		$brand_logos = [
			__( 'Brand Logo One', 'ow-features' ),
			__( 'Brand Logo Two', 'ow-features' ),
			__( 'Brand Logo Three', 'ow-features' ),
			__( 'Brand Logo Four', 'ow-features' ),
			__( 'Brand Logo Five', 'ow-features' ),
		];

		foreach ( $brand_logos as $key => $brand_logo ) {
			$logo_setting_id = sprintf( 'ow_brand_logo_%s', $key );
			$this->upload_image( $wp_customize, $logo_setting_id, $brand_logo );
		}
	}

	/**
	 * Upload Image
	 *
	 * @param \WP_Customize_Manager $wp_customize Theme Customizer object.
	 * @param string $setting_id Setting id.
	 * @param string $label Label.
	 */
	public function upload_image( $wp_customize, $setting_id, $label ) {

		// Add settings in the footer section.
		$wp_customize->add_setting(
			$setting_id,
			[
				'default'    => '',
				'capability' => 'edit_theme_options',
			]
		);

		// Add controls for image in footer section.
		$wp_customize->add_control(
			new \WP_Customize_Image_Control(
				$wp_customize,
				$setting_id,
				[
					'label'    => esc_html( $label ),
					'section'  => 'ow_footer',
					'settings' => $setting_id,
				]
			)
		);

	}

	/**
	 * Add social icon section.
	 *
	 * @param \WP_Customize_Manager $wp_customize Theme Customizer object.
	 */
	public function social_icon_section(  $wp_customize ) {

		// Social Icons.
		$social_icons = [ 'facebook', 'twitter', 'linkedin', 'instagram' ];

		$wp_customize->add_section(
			'ow_social_links',
			[
				'title'       => esc_html__( 'Social Links', 'ow-features' ),
				'description' => esc_html__( 'Social links', 'ow-features' ),
			]
		);

		foreach ( $social_icons as $social_icon ) {

			$setting_id = sprintf( 'ow_%s_link', $social_icon );

			$wp_customize->add_setting(
				$setting_id,
				[
					'default'           => '',
					'capability'        => 'edit_theme_options',
					'sanitize_callback' => 'esc_url',
				]
			);

			$wp_customize->add_control(
				$setting_id,
				[
					'label'    => esc_html( $social_icon ),
					'section'  => 'ow_social_links',
					'settings' => $setting_id,
					'type'     => 'text',
				]
			);
		}
	}


}
