/**
 * Theme Style Selection Screen.
 */

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { StyleCard, StyleCardGroup, withWizardScreen } from '../../../../components/src';
import './style.scss';
import ScreenshotStyle0 from './images/screenshot-style-0.png';
import ScreenshotStyle1 from './images/screenshot-style-1.png';
import ScreenshotStyle2 from './images/screenshot-style-2.png';
import ScreenshotStyle3 from './images/screenshot-style-3.png';
import ScreenshotStyle4 from './images/screenshot-style-4.png';
import ScreenshotStyle5 from './images/screenshot-style-5.png';

/**
 * Theme Style Selection Screen.
 */
class ThemeStyleSelection extends Component {
	/**
	 * Render.
	 */
	render() {
		const { updateThemeStyle, themeStyle } = this.props;
		return (
			<StyleCardGroup>
				<StyleCard
					cardTitle={ __( 'Default', 'newspack-plugin' ) }
					image={ ScreenshotStyle0 }
					isActive={ themeStyle === 'default' }
					onClick={ () => updateThemeStyle( 'default' ) }
				/>
				<StyleCard
					cardTitle={ __( 'Style 1', 'newspack-plugin' ) }
					image={ ScreenshotStyle1 }
					isActive={ themeStyle === 'style-1' }
					onClick={ () => updateThemeStyle( 'style-1' ) }
				/>
				<StyleCard
					cardTitle={ __( 'Style 2', 'newspack-plugin' ) }
					image={ ScreenshotStyle2 }
					isActive={ themeStyle === 'style-2' }
					onClick={ () => updateThemeStyle( 'style-2' ) }
				/>
				<StyleCard
					cardTitle={ __( 'Style 3', 'newspack-plugin' ) }
					image={ ScreenshotStyle3 }
					isActive={ themeStyle === 'style-3' }
					onClick={ () => updateThemeStyle( 'style-3' ) }
				/>
				<StyleCard
					cardTitle={ __( 'Style 4', 'newspack-plugin' ) }
					image={ ScreenshotStyle4 }
					isActive={ themeStyle === 'style-4' }
					onClick={ () => updateThemeStyle( 'style-4' ) }
				/>
				<StyleCard
					cardTitle={ __( 'Style 5', 'newspack-plugin' ) }
					image={ ScreenshotStyle5 }
					isActive={ themeStyle === 'style-5' }
					onClick={ () => updateThemeStyle( 'style-5' ) }
				/>
			</StyleCardGroup>
		);
	}
}

export default withWizardScreen( ThemeStyleSelection );
