<?php
/**
 * To load all classes that register post type.
 *
 * @package ow-features
 */

namespace OW_Features\Features\Inc;

use \OW_Features\Features\Inc\Post_Types\Press_Article;
use \OW_Features\Features\Inc\Post_Types\Case_Studies;
use OW_Features\Features\Inc\Post_Types\Testimonials;
use \OW_Features\Features\Inc\Post_Types\Webinars;
use \OW_Features\Features\Inc\Traits\Singleton;


/**
 * Class Post_Types
 */
class Post_Types {

	use Singleton;

	/**
	 * To store instance of post type.
	 *
	 * @var array List of instance of post type.
	 */
	protected static $instances = [];

	/**
	 * Construct method.
	 */
	protected function __construct() {

		$this->register_post_types();
	}

	/**
	 * To initiate all post type instance.
	 *
	 * @return void
	 */
	protected function register_post_types() {

		self::$instances = [
			Press_Article::SLUG => Press_Article::get_instance(),
			Case_Studies::SLUG  => Case_Studies::get_instance(),
			Webinars::SLUG      => Webinars::get_instance(),
			Testimonials::SLUG      => Testimonials::get_instance(),
		];

	}

	/**
	 * To get instance of all post types.
	 *
	 * @return array List of instances of the post types.
	 */
	public static function get_instances() {
		return self::$instances;
	}

	/**
	 * Get slug list of all custom post type.
	 *
	 * @return array List of slugs.
	 */
	public static function get_post_types() {
		return array_keys( self::$instances );
	}

}
