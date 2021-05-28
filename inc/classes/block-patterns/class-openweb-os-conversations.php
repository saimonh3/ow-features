<?php
namespace OW_Features\Features\Inc\Block_Patterns;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Openweb_OS_Conversations
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Block_Patterns
 */
class Openweb_OS_Conversations extends Base {
	use Singleton;

	protected $name = 'openweb-os-conversations';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	public function get_config(): array {
		return apply_filters(
			'ow_features_get_' . $this->get_name() . '_config',
			array(
				'title'         => esc_html__( 'OpenWeb OS Conversations', 'ow-features' ),
				'categories'    => array( $this->category ),
				'viewportWidth' => 1440,
				'content'       => '<!-- wp:group --><div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":96}},"className":"ow-features-openweb-os-conversations-title"} --><h2 class="has-text-align-center ow-features-openweb-os-conversations-title" style="font-size:96px">The OpenWebOS: Good conversations do great things.</h2><!-- /wp:heading --><!-- wp:paragraph {"align":"center","className":"ow-features-openweb-os-conversations-description","fontSize":"30-18"} --><p class="has-text-align-center ow-features-openweb-os-conversations-description has-30-18-font-size">We built OpenWebOS because when the conversation is high-quality, people stay to read and take part. That community brings publishers independence from the social media giants, and brings brands a safe advertising experience. It all starts with a good conversation.</p><!-- /wp:paragraph --><!-- wp:columns {"className":"ow-features-openweb-os-conversations-item"} --><div class="wp-block-columns ow-features-openweb-os-conversations-item"><!-- wp:column --><div class="wp-block-column"><!-- wp:paragraph {"className":"left","fontSize":"30-18"} --><p class="left has-30-18-font-size">OpenWebOS offers engagement and conversion funnels that turn casual readers into a community of loyal, active, registered users.</p><!-- /wp:paragraph --></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:image {"id":7107,"sizeSlug":"large","linkDestination":"none","className":"right"} --><figure class="wp-block-image size-large right"><img src=" ' . esc_url( ow_features_get_image_path( 'group-7@2x.png' ) ) . ' " alt="" class="wp-image-7107"/></figure><!-- /wp:image --></div><!-- /wp:column --></div><!-- /wp:columns --><!-- wp:columns {"className":"ow-features-openweb-os-conversations-item"} --><div class="wp-block-columns ow-features-openweb-os-conversations-item"><!-- wp:column {"className":"ow-features-openweb-os-conversations-item"} --><div class="wp-block-column ow-features-openweb-os-conversations-item"><!-- wp:paragraph {"className":"left","fontSize":"30-18"} --><p class="left has-30-18-font-size">Your community is your key to first-party data. OpenWebOS turns engagement into insights, and insights into sustainable revenue.</p><!-- /wp:paragraph --></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:image {"id":7108,"sizeSlug":"large","linkDestination":"none","className":"right"} --><figure class="wp-block-image size-large right"><img src=" ' . esc_url( ow_features_get_image_path( 'group-8@2x.png' ) ) . ' " alt="" class="wp-image-7108"/></figure><!-- /wp:image --></div><!-- /wp:column --></div><!-- /wp:columns --><!-- wp:columns {"className":"ow-features-openweb-os-conversations-item"} --><div class="wp-block-columns ow-features-openweb-os-conversations-item"><!-- wp:column --><div class="wp-block-column"><!-- wp:paragraph {"className":"left","fontSize":"30-18"} --><p class="left has-30-18-font-size">Quality conversations means a brand-safe environment at scale across high-intent, high-engagement communities on the open web.</p><!-- /wp:paragraph --></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:image {"id":7109,"sizeSlug":"large","linkDestination":"none","className":"right"} --><figure class="wp-block-image size-large right"><img src=" ' . esc_url( ow_features_get_image_path( 'group-9@2x.png' ) ) . ' " alt="" class="wp-image-7109"/></figure><!-- /wp:image --></div><!-- /wp:column --></div><!-- /wp:columns --></div></div><!-- /wp:group -->'
			)
		);
	}
}
