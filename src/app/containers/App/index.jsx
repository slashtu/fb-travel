import React, { Component } from 'react';

import { connect } from 'react-redux';

// redux
import { fetchFBLoginStatus } from 'actions';

// containers
import TravelInfo from 'containers/TravelInfo';

// components
import Layout from 'components/Layout';
import AppBar from 'components/AppBar';
import Map from 'components/Map';

import css from './App.css';

const { Content, Header, Row } = Layout;

class App extends Component {

  state = {
    name: 'name',
    taggedPlaces: [],
  };

  click = () => {
    this.setState({name: 'slash'})
  }

  componentDidMount(){
    this.props.fetchFBLoginStatus();
  }

  login = () => {
    console.log('login')
    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
      });
    }

    function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
      }
    }

    FB.login(function(response) {
      statusChangeCallback(response);
    }, {scope: 'public_profile,email,user_friends,user_tagged_places'});

    // SDK.getLoginStatus(function(response) {
    //   console.log(response)
    //   statusChangeCallback(response);
    // });
  }

  getTaggedPlaces = () => {
    const self = this;
    FB.api(
      '/me/tagged_places',
      'GET',
      {},
      function(response) {
        self.setState({taggedPlaces: response.data});
      }
    );
  }

  render() {
    return (
      <Layout>
        <Header>
          <AppBar/>
        </Header>
        <Content>
          <TravelInfo taggedPlaces={this.state.taggedPlaces} />
        </Content>
      </Layout>
    );
  }
}

function mapStateToProps({ FB }) {
  return {
    FB
  };
}

export default connect(
  mapStateToProps, {
    fetchFBLoginStatus,
  }
)(App)
