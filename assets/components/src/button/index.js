/**
 * Button
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { Button as BaseComponent } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

class Button extends Component {
	/**
	 * Render.
	 */
	render( props ) {
		const { className, isRipple, ...otherProps } = this.props;
		const classes = classnames(
			'newspack-button',
			className,
			isRipple && 'is-ripple',
		);
		return <BaseComponent className={ classes } { ...otherProps } />;
	}
}

export default Button;
