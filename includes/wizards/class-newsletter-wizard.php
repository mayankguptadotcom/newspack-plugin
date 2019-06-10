<?php
/**
 * Newspack Newsletter Wizard.
 *
 * @package Newspack
 */

namespace Newspack;

defined( 'ABSPATH' ) || exit;

require_once NEWSPACK_ABSPATH . '/includes/wizards/class-wizard.php';

/**
 * Newsletter Wizard.
 */
class Newsletter_Wizard extends Wizard {

	/**
	 * The name of this wizard.
	 *
	 * @var string
	 */
	protected $name = 'Newsletters';

	/**
	 * The slug of this wizard.
	 *
	 * @var string
	 */
	protected $slug = 'newspack-newsletter-wizard';

	/**
	 * The capability required to access this wizard.
	 *
	 * @var string
	 */
	protected $capability = 'manage_options';

	/**
	 * Enqueue Subscriptions Wizard scripts and styles.
	 */
	public function enqueue_scripts_and_styles() {
		parent::enqueue_scripts_and_styles();
		wp_enqueue_media();

		if ( filter_input( INPUT_GET, 'page', FILTER_SANITIZE_STRING ) !== $this->slug ) {
			return;
		}

		wp_enqueue_script(
			'newspack-newsletter-wizard',
			Newspack::plugin_url() . '/assets/dist/newsletter.js',
			[ 'wp-components' ],
			filemtime( dirname( NEWSPACK_PLUGIN_FILE ) . '/assets/dist/newsletter.js' ),
			true
		);

		wp_register_style(
			'newspack-newsletter-wizard',
			Newspack::plugin_url() . '/assets/dist/newsletter.css',
			[ 'wp-components' ],
			filemtime( dirname( NEWSPACK_PLUGIN_FILE ) . '/assets/dist/newsletter.css' )
		);
		wp_style_add_data( 'newspack-newsletter-wizard', 'rtl', 'replace' );
		wp_enqueue_style( 'newspack-newsletter-wizard' );
	}
}
new Newsletter_Wizard();
