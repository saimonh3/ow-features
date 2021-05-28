<?php
namespace OW_Features\Features\Inc\Block_Patterns;

use OW_Features\Features\Inc\Traits\Singleton;

defined( 'ABSPATH' ) || exit;

/**
 * Class Info_Box
 *
 * @since 1.1.0
 *
 * @package OW_Features\Features\Inc\Block_Patterns
 */
class Info_Box extends Base {
	use Singleton;

	protected $name = 'info-box';

	/**
	 * Get block config
	 *
	 * @return array
	 */
	public function get_config(): array {
		return apply_filters(
			'ow_features_get_' . $this->get_name() . '_config',
			array(
				'title'         => esc_html__( 'Info Box', 'ow-features' ),
				'categories'    => array( $this->category ),
				'viewportWidth' => 1440,
				'content'       => '<!-- wp:group --><div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":90}},"className":"ow-info-box-title"} --><h2 class="has-text-align-center ow-info-box-title" style="font-size:90px">Quality is your key to sustainable revenue</h2><!-- /wp:heading --><!-- wp:columns {"className":"ow-info-boxes"} --><div class="wp-block-columns ow-info-boxes"><!-- wp:column {"className":"ow-info-box"} --><div class="wp-block-column ow-info-box"><!-- wp:columns --><div class="wp-block-columns"><!-- wp:column {"className":"ow-info-box-row"} --><div class="wp-block-column ow-info-box-row"><!-- wp:ow-feature-block/info-box --><div class="wp-block-ow-feature-block-info-box"><div class="outer-div"></div><div class="inner-div"><div class="title">Effective Moderation</div><p class="description">Proven, AI- and Machine Learning-powered moderation.</p></div></div><!-- /wp:ow-feature-block/info-box --></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:ow-feature-block/info-box --><div class="wp-block-ow-feature-block-info-box"><div class="outer-div"></div><div class="inner-div"><div class="title">Quality Conversations</div><p class="description">High-quality, civil discussions that attract users and create value.</p></div></div><!-- /wp:ow-feature-block/info-box --></div><!-- /wp:column --></div><!-- /wp:columns --></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:columns --><div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column"><!-- wp:ow-feature-block/info-box --><div class="wp-block-ow-feature-block-info-box"><div class="outer-div"></div><div class="inner-div"><div class="title">Community</div><p class="description">Increased retention, registrations, time on site, and pages per session.</p></div></div><!-- /wp:ow-feature-block/info-box --></div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column"><!-- wp:ow-feature-block/info-box {"makeSquare":true} --><div class="wp-block-ow-feature-block-info-box"><div class="inner-div square-shape"><div class="title">Sustainability</div><p class="description">OpenWeb provides sustainable revenue through context-relevant, high-value advertising at scale.</p></div></div><!-- /wp:ow-feature-block/info-box --></div><!-- /wp:column --></div><!-- /wp:columns --></div><!-- /wp:column --></div><!-- /wp:columns --></div></div><!-- /wp:group -->'
			)
		);
	}
}
