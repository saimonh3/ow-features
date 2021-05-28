<?php
/**
 * Header_Footer_Schema class.
 *
 * Registers GraphQL schemas.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc\Schemas;

use OW_Features\Features\Inc\Traits\Singleton;

/**
 * Class Header_Footer_Schema
 */
class Header_Footer_Schema {

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

		// Register Header Type and Field.
		add_action( 'graphql_register_types', [ $this, 'register_header_type' ] );
		add_action( 'graphql_register_types', [ $this, 'register_header_field' ] );

		// Register Social Links Type.
		add_action( 'graphql_register_types', [ $this, 'register_social_links_type' ] );

		// Register Brand Logos Type.
		add_action( 'graphql_register_types', [ $this, 'register_brand_logos_type' ] );

		// Register Footer Type and Field.
		add_action( 'graphql_register_types', [ $this, 'register_footer_type' ] );
		add_action( 'graphql_register_types', [ $this, 'register_footer_field' ] );

	}

	/**
	 * Register header type.
	 */
	public function register_header_type() {
		register_graphql_object_type(
			'OWHeader',
			[
				'description' => __( 'Header Type', 'ow-features' ),
				'fields'      => [
					'siteLogoUrl' => [
						'type'        => 'String',
						'description' => __( 'Site logo URL', 'ow-features' ),
					],
					'siteTitle'   => [
						'type'        => 'String',
						'description' => __( 'Site title', 'ow-features' ),
					],
					'siteTagLine' => [
						'type'        => 'String',
						'description' => __( 'Site tagline', 'ow-features' ),
					],
				],
			]
		);
	}

	/**
	 * Register header field
	 */
	public function register_header_field() {

		register_graphql_field(
			'RootQuery',
			'getHeader',
			[
				'description' => __( 'Get header', 'ow-features' ),
				'type'        => 'OWHeader',
				'resolve'     => function () {

					/**
					 * Here you need to return data that matches the shape of the "OWHeader" type. You could get
					 * the data from the WP Database, an external API, or static values.
					 * For example in this case we are getting it from WordPress database.
					 */
					return [
						'siteLogoUrl' => $this->get_logo_url( 'custom_logo' ),
						'siteTitle'   => get_bloginfo( 'title' ),
						'siteTagLine' => get_bloginfo( 'description' ),
					];

				},
			]
		);

	}

	/**
	 * Register footer type.
	 */
	public function register_footer_type() {
		register_graphql_object_type(
			'OWFooter',
			[
				'description' => __( 'Header Type', 'ow-features' ),
				'fields'      => [
					'footerLogo'    => [
						'type'        => 'String',
						'description' => __( 'Footer logo URL', 'ow-features' ),
					],
					'copyrightText' => [
						'type'        => 'String',
						'description' => __( 'Copyright text', 'ow-features' ),
					],
					'brandLogos'    => [
						'type'        => [ 'list_of' => 'OWBrandLogos' ],
						'description' => __( 'Brand logos', 'ow-features' ),
					],
					'socialLinks'   => [
						'type'        => [ 'list_of' => 'OWSocialLinks' ],
						'description' => __( 'Social links', 'ow-features' ),
					],
				],
			]
		);
	}

	/**
	 * Register footer field
	 */
	public function register_footer_field() {

		register_graphql_field(
			'RootQuery',
			'getFooter',
			[
				'description' => __( 'Get footer', 'ow-features' ),
				'type'        => 'OWFooter',
				'resolve'     => function () {

					/**
					 * Here you need to return data that matches the shape of the "OWFooter" type. You could get
					 * the data from the WP Database, an external API, or static values.
					 * For example in this case we are getting it from WordPress database.
					 */
					return [
						'footerLogo'    => get_theme_mod( 'ow_footer_logo' ),
						'copyrightText' => $this->get_copyright_text(),
						'brandLogos'    => $this->get_brand_logos(),
						'socialLinks'   => $this->get_social_icons(),
					];

				},
			]
		);

	}

	/**
	 * Register social links field
	 */
	public function register_social_links_type() {
		register_graphql_object_type(
			'OWSocialLinks',
			[
				'description' => __( 'Social Links Type', 'ow-features' ),
				'fields'      => [
					'iconName' => [
						'type'        => 'String',
						'description' => __( 'Icon name', 'ow-features' ),
					],
					'iconUrl'  => [
						'type'        => 'String',
						'description' => __( 'Icon url', 'ow-features' ),
					],
				],
			]
		);
	}

	/**
	 * Register brand logos type
	 */
	public function register_brand_logos_type() {
		register_graphql_object_type(
			'OWBrandLogos',
			[
				'description' => __( 'Social Links Type', 'ow-features' ),
				'fields'      => [
					'brandName'  => [
						'type'        => 'String',
						'description' => __( 'Brand name', 'ow-features' ),
					],
					'brandImage' => [
						'type'        => 'String',
						'description' => __( 'Brand image', 'ow-features' ),
					],
				],
			]
		);
	}

	/**
	 * Get logo URL.
	 *
	 * @param string $key Key.
	 *
	 * @return string Image.
	 */
	public function get_logo_url( $key ) {

		$custom_logo_id = get_theme_mod( $key );
		$image          = wp_get_attachment_image_src( $custom_logo_id, 'full' );

		return $image[0];
	}

	/**
	 * Get social icons
	 *
	 * @return array $social_icons
	 */
	public function get_social_icons() {

		$social_icons      = [];
		$social_icons_name = [ 'facebook', 'twitter', 'linkedin', 'instagram' ];

		foreach ( $social_icons_name as $social_icon_name ) {

			$social_link = get_theme_mod( sprintf( 'ow_%s_link', $social_icon_name ) );

			if ( $social_link ) {
				array_push(
					$social_icons,
					[
						'iconName' => esc_attr( $social_icon_name ),
						'iconUrl'  => esc_url( $social_link ),
					]
				);
			}
		}

		return $social_icons;

	}

	/**
	 * Get brand logos
	 *
	 * @return array $brand_logos
	 */
	public function get_brand_logos() {

		$brand_logos       = [];
		$brand_logos_names = [
			__( 'Brand Logo One', 'ow-features' ),
			__( 'Brand Logo Two', 'ow-features' ),
			__( 'Brand Logo Three', 'ow-features' ),
			__( 'Brand Logo Four', 'ow-features' ),
			__( 'Brand Logo Five', 'ow-features' ),
		];

		foreach ( $brand_logos_names as $key => $brand_logo_name ) {

			$logo_setting_id = sprintf( 'ow_brand_logo_%s', $key );
			$img_url         = get_theme_mod( $logo_setting_id );

			if ( $img_url ) {
				array_push(
					$brand_logos,
					[
						'brandName'  => esc_attr( $brand_logo_name ),
						'brandImage' => esc_url( $img_url ),
					]
				);
			}
		}

		return $brand_logos;

	}

	/**
	 * Get copyright text
	 *
	 * @return mixed
	 */
	public function get_copyright_text() {
		return get_theme_mod( 'ow_footer_text' );
	}

}
