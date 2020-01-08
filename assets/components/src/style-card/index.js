/**
 * Style Card
 */

/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import { ResponsiveWrapper } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Button, Card, Modal } from '../';
import './style.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

class StyleCard extends Component {
	/**
	 * Constructor.
	 */
	constructor() {
		super( ...arguments );
		this.state = {
			modalShown: false,
			width: 0,
			height: 0,
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	/**
	 * Render.
	 */
	render( props ) {
		const { className, cardTitle, demo, image, isActive, onClick, ...otherProps } = this.props;
		const { modalShown, width, height } = this.state;
		const classes = classnames(
			'newspack-style-card',
			isActive && 'newspack-style-card__is-active',
			className
		);
		return (
			<div className={ classes } tabindex="0">
				<div className="newspack-style-card__image">
				{ image && <img src={ image } /> }
					<div className="newspack-style-card__actions">
						{ ! isActive && <Button isPrimary isSmall onClick={ onClick }>{ __( 'Activate' ) }</Button> }
						{ demo &&
							<Button
								isDefault
								isSmall
								onClick={ () => this.setState( { modalShown: true } ) }
							>
								{ __( 'View Demo' ) }
							</Button>
						}
					</div>
				</div>
				<div className="newspack-style-card__content">
					<h2 className="newspack-style-card__heading">
						<span className="newspack-style-card__title">{ cardTitle }</span>
						{ isActive && <span className="newspack-style-card__status">{ __( 'Active' ) }</span> }
					</h2>
				</div>
				{ modalShown && (
					<Modal
						onRequestClose={ () => this.setState( { modalShown: false } ) }
						isWide
						className="newspack-modal__style-card"
					>
						<Card noBackground isWide>
							<ResponsiveWrapper
								naturalWidth={ width }
								naturalHeight={ height }
							>
								<iframe src={ demo }></iframe>
							</ResponsiveWrapper>
						</Card>
					</Modal>
				) }
			</div>
		);
	}
}

export default StyleCard;
