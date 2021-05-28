<?php
/**
 * Plugin manifest class.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc;

use OW_Features\Features\Inc\Schemas\Header_Footer_Schema;
use OW_Features\Features\Inc\Schemas\Sticky_Argument_Schema;
use OW_Features\Features\Inc\Schemas\WP_Options_Schema;
use OW_Features\Features\Inc\Schemas\Content_Raw_Schema;
use \OW_Features\Features\Inc\Traits\Singleton;
use OW_Features\Features\Inc\Rest_Controllers\Testimonials as Testimonials_REST_Controller;

/**
 * Class Plugin
 */
class Plugin {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		$this->setup_hooks();

		// Load plugin classes.
		Post_Types::get_instance();
		Assets::get_instance();
		Customizer::get_instance();
		Header_Footer_Schema::get_instance();
		Sticky_Argument_Schema::get_instance();
		WP_Options_Schema::get_instance();
		Content_Raw_Schema::get_instance();
		Blocks::get_instance();
		Block_Patterns::get_instance();

	}

	/**
	 * To setup action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {

		/**
		 * Actions
		 */
		add_action( 'init', [ $this, 'register_custom_menus' ] );
		add_action( 'after_setup_theme', [ $this, 'theme_support' ] );
		add_action( 'rest_api_init', [$this, 'register_rest_routes' ] );

		/**
		 * Filters
		 */
		add_filter( 'upload_mimes', [ $this, 'custom_mime_types' ] );

	}

	/**
	 * Register Menus.
	 */
	function register_custom_menus() {

		register_nav_menus(
			[
				'ow-menu-header'                  => esc_html__( 'Header Menu', 'ow-features' ),
				'ow-menu-footer-col-1'            => esc_html__( 'Footer Menu - Column One', 'ow-features' ),
				'ow-menu-footer-col-2'            => esc_html__( 'Footer Menu - Column Two', 'ow-features' ),
				'ow-menu-footer-col-3'            => esc_html__( 'Footer Menu - Column Three', 'ow-features' ),
				'ow-menu-footer-col-4'            => esc_html__( 'Footer Menu - Column Four', 'ow-features' ),
				'ow-menu-footer-col-1-powered-by' => esc_html__( 'Footer Menu - Column One Powered By', 'ow-features' ),
				'ow-menu-footer-col-2-powered-by' => esc_html__( 'Footer Menu - Column Two Powered By', 'ow-features' ),
			]
		);

	}

	/**
	 * Add theme supports
	 */
	function theme_support() {

		// Custom Logo.
		$defaults = [
			'height'      => 55,
			'width'       => 191,
			'flex-width'  => true,
			'flex-height' => true,
		];

		add_theme_support( 'custom-logo', $defaults );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		add_post_type_support( 'page', 'excerpt' );

		$site_colors = [
			[
				'name'  => esc_html__( 'White', 'ow-features' ),
				'slug'  => 'white',
				'color' => '#ffffff',
			],
			[
				'name'  => esc_html__( 'Black', 'ow-features' ),
				'slug'  => 'black',
				'color' => '#000000',
			],
			[
				'name'  => esc_html__( 'Blue', 'ow-features' ),
				'slug'  => 'blue',
				'color' => '#0058fe',
			],
			[
				'name'  => esc_html__( 'Peach', 'ow-features' ),
				'slug'  => 'peach',
				'color' => '#f1e9e7',
			],
			[
				'name'  => esc_html__( 'gray', 'ow-features' ),
				'slug'  => 'gray',
				'color' => '#7b7f83',
			],
			[
				'name'  => esc_html__( 'Pink', 'ow-features' ),
				'slug'  => 'pink',
				'color' => '#ff3cfe',
			],
			[
				'name'  => esc_html__( 'Green', 'ow-features' ),
				'slug'  => 'green',
				'color' => '#00e600',
			],
			[
				'name'  => esc_html__( 'Orange', 'ow-features' ),
				'slug'  => 'orange',
				'color' => '#fe4f00',
			],
		];

		add_theme_support( 'editor-color-palette', $site_colors );

		$site_fonts = [
			[
				'name'      => __( '40-25', 'ow-features' ),
				'size'      => 40,
				'slug'      => '40-25',
			],
			[
				'name'      => __( '30-18', 'ow-features' ),
				'size'      => 30,
				'slug'      => '30-18',
			],
			[
				'name'      => __( '20-18', 'ow-features' ),
				'size'      => 20,
				'slug'      => '20-18',
			],
			[
				'name'      => __( '18-18', 'ow-features' ),
				'size'      => 18,
				'slug'      => '18-18',
			],
			[
				'name'      => __( '18-12', 'ow-features' ),
				'size'      => 18,
				'slug'      => '18-12',
			],
			[
				'name'      => __( '16-12', 'ow-features' ),
				'size'      => 16,
				'slug'      => '16-12',
			],
			[
				'name'      => __( '15-12', 'ow-features' ),
				'size'      => 15,
				'slug'      => '15-12',
			],
		];

		add_theme_support( 'editor-font-sizes', $site_fonts );

		$this->add_image_sizes();

	}

	/**
	 * Add image sizes.
	 */
	public function add_image_sizes() {

		// Set post thumbnail size.
		set_post_thumbnail_size( 1140, 9999 );

		add_image_size( 'small_portrait', 321, 604, true );
		add_image_size( 'medium_landscape', 555, 332, true );
		add_image_size( 'medium_portrait', 555, 840, true );
		add_image_size( 'post_thumbnail_landscape', 1140, 460, true );
	}

	/**
	 * Add support for mimes- svg, svgz, doc.
	 *
	 * @param array $mimes Mimes.
	 *
	 * @return mixed
	 */
	function custom_mime_types( $mimes ) {

		// New allowed mime types.
		$mimes['svg']  = 'image/svg+xml';
		$mimes['svgz'] = 'image/svg+xml';
		$mimes['json'] = 'text/plain';

		// Optional. Remove a mime type.
		unset( $mimes['exe'] );

		return $mimes;
	}

	/**
	 * Register custom REST routes
	 *
	 * @return void
	 */
	public function register_rest_routes() {
		new Testimonials_REST_Controller();
	}
}
