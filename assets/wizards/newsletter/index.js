/**
 * Newsletter Wizard.
 */

/**
 * WordPress dependencies
 */
import { Component, Fragment, render } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
	FormattedHeader,
} from '../../components/src';
import './style.scss';

/**
 * Newsletter wizard.
 */
class NewsletterWizard extends Component {

	/**
	 * Render.
	 */
	render() {
		return (
			<Fragment>
				<FormattedHeader
					headerText={ __( 'Setup Newsletter Options' ) }
					subHeaderText={ __( 'Here are a few things to keep building your audience and promote your content.' ) }
				/>
			</Fragment>
		);
	}
}

render( <NewsletterWizard />, document.getElementById( 'newspack-newsletter-wizard' ) );
