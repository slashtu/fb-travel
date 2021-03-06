'use strict';
import loadScript from 'tiny-load-script';

let SDK;

const ID = process.env.NODE_ENV === 'development'? 306917059703858 : 306910796371151;

/**
 * Facebook SDK getter
 * @return {Promise} Once resolved it will yield the Facebook SDK object, FB
 * @example
 * loadSDK().then(FB => console.log('FB has loaded'))
 */

export default function loadFBSDK () {
  SDK = SDK || new Promise(function (resolve) {
    function sdkReady () {
      window.FB.init({
        appId      : ID,
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
      });

      // Promise APIs
      window.FB.getLoginStatusAsync = function() {
        return new Promise(function(resolve, reject){
          window.FB.getLoginStatus(resolve);
        });  
      }

      window.FB.apiAsync = function (path, method, params) {
        return new Promise(function(resolve, reject){
          window.FB.api( path, method, params, resolve);
        });  
      }

      window.FB.loginAsync = function () {
        return new Promise(function(resolve, reject){
          window.FB.login( resolve, {scope: 'public_profile, user_tagged_places'});
        });  
      }
    //   FB.login(function(response) {
    //   statusChangeCallback(response);
    // }, {scope: 'public_profile,email,user_friends,user_tagged_places'});
      
      resolve(window.FB);
    }
    if (window.FB && window.FB.init) {
      sdkReady();
    } else {
      window.fbAsyncInit = sdkReady;
      if (!document.querySelector('script[src*="connect.facebook.net"]')) {
        loadScript('//connect.facebook.net/en_US/sdk.js');
      }
    }
  });
  return SDK;
};
