/**
 * Muriel-styled Card with a button/link inside.
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { Card as BaseComponent } from '@wordpress/components';

/**
 * Internal dependencies
 */
import murielClassnames from '../../shared/js/muriel-classnames';

import './style.scss';

class ActionCard extends Component {

	/**
	 * Render.
	 */
	render( props ) {
		const { className, ...otherProps } = this.props;
		const classes = murielClassnames( 'muriel-action-card', className );
		return (
			<BaseComponent className={ classes } { ...otherProps } />
		);
	}
}

export default ActionCard;
