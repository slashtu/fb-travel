import React, { Component } from 'react';

import Layout from 'components/Layout'
const { LContent, LHeader } = Layout;

import Header from 'components/Header';
import SidebarNavigation from 'components/SidebarNavigation';
import Map from 'components/Map';
import Table from 'components/Table';

import style from './App.css';

let SDK;

export default class App extends Component {

  state = {
    name: 'name',
    taggedPlaces: [],
  };

  click = () => {
    this.setState({name: 'slash'})
  }

  componentDidMount(){

    var self = this;
    // This is called with the results from from FB.getLoginStatus().
    

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        console.log()
        statusChangeCallback(response);
      });
    }

    window.fbAsyncInit = function() {
      FB.init({

        appId      : '306917059703858',
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
      });

      // Now that we've initialized the JavaScript SDK, we call 
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.

      SDK = FB;

      FB.getLoginStatus(function(response) {
        console.log(response)
        // statusChangeCallback(response);

        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          testAPI();
        } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          // document.getElementById('status').innerHTML = 'Please log ' +
            // 'into this app.';
            self.login();
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          // document.getElementById('status').innerHTML = 'Please log ' +
            // 'into Facebook.';
            self.login();
        }

      });

      // self.login();

    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


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
     }, {scope: 'email, user_tagged_places'});

    // SDK.getLoginStatus(function(response) {
    //   console.log(response)
    //   statusChangeCallback(response);
    // });


  }

  getFriends = () => {
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
          console.log(this.state.taggedPlaces)
    return (
      <Layout>
        <LHeader>
          <Header />
        </LHeader>
        <LContent>
          <button onClick={this.login}>fb login</button>
          <button onClick={this.getFriends}>get friends</button>
          <div id="status"></div>
          <Table source={this.state.taggedPlaces} />
        </LContent>
      </Layout>
    );
  }
}
