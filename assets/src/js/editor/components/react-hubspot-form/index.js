/**
 * External dependencies.
 */
import Proptypes from 'prop-types';
import HubspotForm from 'react-hubspot-form';

/**
 * ReactHubspotForm Component.
 *
 * @return {jsx}
 */
const ReactHubspotForm = ( { formId, portalId, setSubmitted, tagName } ) => {
	if ( ! formId ) {
		return null;
	}

	const handleFormSubmit = () => {
		if ( 'function' === typeof setSubmitted ) {
			setSubmitted( true );
		}

		if ( 'undefined' === typeof window.dataLayer || ! tagParent ) {
			return;
		}

		window.dataLayer.push( { event: 'formAction', cfEventTag: tagName } );
	};

	return (
		<HubspotForm
			portalId={ portalId }
			formId={ formId }
			onSubmit={ handleFormSubmit }
		/>
	);
};

ReactHubspotForm.propTypes = {
	formId: Proptypes.string.isRequired,
	portalId: Proptypes.string.isRequired,
	tagName: Proptypes.string,
	tagParent: Proptypes.string
};

ReactHubspotForm.defaultProps = {
	tagName: '',
	tagParent: ''
};

export default ReactHubspotForm;
