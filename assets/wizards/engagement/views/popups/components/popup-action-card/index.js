/**
 * Popup Action Card
 */

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';
import { Popover, Panel, PanelRow, PanelBody, Tooltip } from '@wordpress/components';

/**
 * Material UI dependencies.
 */
import FilterListIcon from '@material-ui/icons/FilterList';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import {
	ActionCard,
	Button,
	CategoryAutocomplete,
	ToggleControl,
} from '../../../../../../components/src';
import './style.scss';

class PopupActionCard extends Component {
	state = {
		categoriesVisibility: false,
		popoverVisibility: false,
	};

	/**
	 * Construct the appropriate description for a single Pop-up based on categories and sitewide default status.
	 *
	 * @param {Object} Popup object.
	 */
	descriptionForPopup = popup => {
		const { categories, sitewide_default: sitewideDefault } = popup;
		if ( sitewideDefault ) {
			return __( 'Sitewide default', 'newspack' );
		}
		if ( categories.length > 0 ) {
			return (
				__( 'Categories: ', 'newspack' ) + categories.map( category => category.name ).join( ', ' )
			);
		}
		return __( 'Inactive', 'newspack' );
	};

	/**
	 * Generate class names for a single popup based on categories, sitewide default status, and if data is available.
	 *
	 * @param {Object} Popup object.
	 */
	classNameForPopup = popup => {
		const { sitewide_default: sitewideDefault, categories } = popup;
		let statusClass;
		if ( sitewideDefault ) {
			statusClass = 'newspack-card__is-primary';
		} else if ( categories.length ) {
			statusClass = 'newspack-card__is-supported';
		} else {
			statusClass = 'newspack-card__is-disabled';
		}
		return classnames( 'newspack-engagement__popups-action-card', statusClass );
	};

	/**
	 * Render.
	 */
	render = () => {
		const { categoriesVisibility, popoverVisibility } = this.state;
		const { deletePopup, popup, setCategoriesForPopup, setSiteWideDefaultPopup } = this.props;
		const {
			id,
			categories,
			title,
			sitewide_default: sitewideDefault,
			edit_link: editLink,
			delete_link: deleteLink,
		} = popup;
		return (
			<ActionCard
				className={ this.classNameForPopup( popup ) }
				title={ decodeEntities( title ) }
				key={ id }
				description={ this.descriptionForPopup( popup ) }
				actionText={
					<Fragment>
						<Tooltip text={ __( 'Category filtering', 'newspack' ) }>
							<Button
								isSmall
								onClick={ () => this.setState( { categoriesVisibility: ! categoriesVisibility } ) }
							>
								<FilterListIcon />
							</Button>
						</Tooltip>
						<Tooltip text={ __( 'More options', 'newspack' ) }>
							<Button
								isSmall
								onClick={ () => this.setState( { popoverVisibility: ! popoverVisibility } ) }
							>
								<MoreVertIcon />
							</Button>
						</Tooltip>
						{ popoverVisibility && (
							<Popover
								position="bottom right"
								className="components-autocomplete__popover"
								onFocusOutside={ event => this.setState( { popoverVisibility: false } ) }
							>
								<Panel>
									<PanelBody>
										<PanelRow className="newspack-engagement__popups-action-card__panel-row first">
											<ToggleControl
												label={ __( 'Sitewide Defaults' ) }
												checked={ sitewideDefault }
												onChange={ value =>
													this.setState( { popoverVisibility: false }, () =>
														setSiteWideDefaultPopup( id )
													)
												}
											/>
										</PanelRow>
										<PanelRow className="newspack-engagement__popups-action-card__panel-row">
											<Button isSmall href={ decodeEntities( editLink ) }>
												<EditIcon />
												{ __( 'Edit', 'newspack' ) }
											</Button>
										</PanelRow>
										<PanelRow className="newspack-engagement__popups-action-card__panel-row">
											<Button isSmall onClick={ () => deletePopup( id ) }>
												<DeleteIcon />
												{ __( 'Delete', 'newspack' ) }
											</Button>
										</PanelRow>
									</PanelBody>
								</Panel>
							</Popover>
						) }
					</Fragment>
				}
			>
				{ categoriesVisibility && (
					<CategoryAutocomplete
						value={ categories || [] }
						onChange={ tokens => setCategoriesForPopup( id, tokens ) }
						label={ __( 'Category Filtering', 'newspack ' ) }
						disabled={ sitewideDefault }
					/>
				) }
			</ActionCard>
		);
	};
}

PopupActionCard.defaultProps = {
	popup: {},
	deletePopup: () => null,
	setCategoriesForPopup: () => null,
	setSiteWideDefaultPopup: () => null,
};

export default PopupActionCard;
