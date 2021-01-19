import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLEAUTH_API_KEY,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  signOut = () => {
    this.auth.signOut();
  }

  signIn = () => {
    this.auth.signIn();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div></div>;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.signOut} className="ui red google button">
          <i className="ui google icon"></i>
          Logout
        </button>
      );
    } else {
      return (
        <button onClick={this.signIn} className="ui red google button">
          <i className="ui google icon"></i>
          Login with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
};

export default GoogleAuth;
