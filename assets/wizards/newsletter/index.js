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
	Checklist,
	Task,
} from '../../components/src';
import './style.scss';

/**
 * Newsletter wizard.
 */
class NewsletterWizard extends Component {
	/**
	 * Constructor.
	 */
	constructor() {
		super( ...arguments );
		this.state = {
			checklistProgress: 0,
		};
	}

	performCheckListItem = index => {
		const { checklistProgress } = this.state;
		this.setState( { checklistProgress: Math.max( checklistProgress, index + 1 ) } );
		console.log( checklistProgress );
	}

	dismissCheckListItem = index => {
		const { checklistProgress } = this.state;
		this.setState( { checklistProgress: Math.max( checklistProgress, index - 1 ) } );
	}

	/**
	 * Render.
	 */
	render() {
		const { checklistProgress } = this.state;
		return (
			<Fragment>
				<FormattedHeader
					headerText={ __( 'Setup Newsletter Options' ) }
					subHeaderText={ __( 'Here are a few things to keep building your audience and promote your content.' ) }
				/>
				<Checklist progressBarText={ __( 'Your setup list' ) }>
					<Task
						title={ __( 'Set up Mailchimp' ) }
						description={ __(
							"Connect your newsroom to Mailchimp."
						) }
						buttonText={ __( 'Set up' ) }
						completedTitle={ __( 'All set!' ) }
						active={ checklistProgress === 0 }
						completed={ checklistProgress > 0 }
						onClick={ () => this.performCheckListItem( 0 ) }
						onDismiss={ () => this.dismissCheckListItem( 0 ) }
					/>
					<Task
						title={ __( 'Set up newsletter subscription block' ) }
						description={ __(
							"Configure a re-usable block to add Mailchimp sign-up forms to any page of your site."
						) }
						buttonText={ __( 'Set up' ) }
						completedTitle={ __( 'All set!' ) }
						active={ checklistProgress === 1 }
						completed={ checklistProgress > 1 }
						onClick={ () => this.performCheckListItem( 1 ) }
						onDismiss={ () => this.dismissCheckListItem( 1 ) }
					/>
					<Task
						title={ __( 'Set up newsletter templataes' ) }
						description={ __(
							"Design the templates that Mailchimp will use to send out your newsletter."
						) }
						buttonText={ __( 'Configure' ) }
						active={ checklistProgress === 2 }
						completed={ checklistProgress > 2 }
						onClick={ () => this.performCheckListItem( 2 ) }
						onDismiss={ () => this.dismissCheckListItem( 2 ) }
					/>
					<Task
						title={ __( 'Set up campaigns' ) }
						description={ __(
							"Choose what to send, who to send it to, and when with campaigns."
						) }
						buttonText={ __( 'Configure' ) }
						active={ checklistProgress === 3 }
						completed={ checklistProgress > 3 }
						onClick={ () => this.performCheckListItem( 3 ) }
						onDismiss={ () => this.dismissCheckListItem( 3 ) }
					/>
				</Checklist>
			</Fragment>
		);
	}
}

render( <NewsletterWizard />, document.getElementById( 'newspack-newsletter-wizard' ) );
