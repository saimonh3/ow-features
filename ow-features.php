<?php
/**
 * Plugin Name: OW Features
 * Description: All backend functionality will take place in this plugin. Like, registering post type, taxonomy, widget and meta box, custom REST API endpoiints.
 * Plugin URI:  https://rtcamp.com
 * Author:      rtCamp
 * Author URI:  https://rtcamp.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Version:     1.1.0
 * Text Domain: ow-features
 *
 * @package ow-features
 */

define( 'OW_FEATURES_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'OW_FEATURES_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'OW_FEATURES_BUILD_URI', untrailingslashit( plugin_dir_url( __FILE__ ) ) . '/assets/build' );
define( 'OW_FEATURES_BUILD_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/assets/build' );
define( 'OW_FEATURES_IMAGES_URI', untrailingslashit( plugin_dir_url( __FILE__ ) ) . '/assets/images' );
define( 'OW_FEATURES_TEMPLATE_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/templates/' );

// phpcs:disable WordPressVIPMinimum.Files.IncludingFile.UsingCustomConstant
require_once OW_FEATURES_PATH . '/inc/helpers/autoloader.php';
require_once OW_FEATURES_PATH . '/inc/helpers/custom-functions.php';
// phpcs:enable WordPressVIPMinimum.Files.IncludingFile.UsingCustomConstant

/**
 * To load plugin manifest class.
 *
 * @return void
 */
function ow_features_features_plugin_loader() {
	\OW_Features\Features\Inc\Plugin::get_instance();
}

ow_features_features_plugin_loader();
