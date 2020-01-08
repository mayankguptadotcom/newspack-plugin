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
import ScreenshotStyle0 from './images/screenshot-style-0.png';
import ScreenshotStyle1 from './images/screenshot-style-1.png';
import ScreenshotStyle2 from './images/screenshot-style-2.png';
import ScreenshotStyle3 from './images/screenshot-style-3.png';
import ScreenshotSacha from './images/screenshot-sacha.png';
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
					demo="https://dalstondemo.wordpress.com/?demo"
				/>
				<StyleCard
					cardTitle={ __( 'Style 1', 'newspack-plugin' ) }
					image={ ScreenshotStyle1 }
					isActive={ themeStyle === 'style-1' }
					onClick={ () => updateThemeStyle( 'style-1' ) }
					demo="https://maylanddemo.wordpress.com/?demo"
				/>
				<StyleCard
					cardTitle={ __( 'Style 2', 'newspack-plugin' ) }
					image={ ScreenshotStyle2 }
					isActive={ themeStyle === 'style-2' }
					onClick={ () => updateThemeStyle( 'style-2' ) }
					demo="https://balasanademo.wordpress.com/?demo"
				/>
				<StyleCard
					cardTitle={ __( 'Style 3', 'newspack-plugin' ) }
					image={ ScreenshotStyle3 }
					isActive={ themeStyle === 'style-3' }
					onClick={ () => updateThemeStyle( 'style-3' ) }
					demo="https://exforddemo.wordpress.com/?demo"
				/>
				<StyleCard
					cardTitle="Sacha"
					image={ ScreenshotSacha }
					isActive={ themeStyle === 'style-4' }
					onClick={ () => updateThemeStyle( 'style-4' ) }
					demo="https://barnsburydemo.wordpress.com/?demo"
				/>
				<StyleCard
					cardTitle={ __( 'Style 5', 'newspack-plugin' ) }
					image={ ScreenshotStyle5 }
					isActive={ themeStyle === 'style-5' }
					onClick={ () => updateThemeStyle( 'style-5' ) }
					demo="https://rivingtondemo.wordpress.com/?demo"
				/>
			</StyleCardGroup>
		);
	}
}

export default withWizardScreen( ThemeStyleSelection );
