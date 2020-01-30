import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '160081861275-3rn2oqccg7mdj3ica9fsgfmfnatu9gq9.apps.googleusercontent.com', 
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;