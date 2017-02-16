'use strict';
import loadScript from 'tiny-load-script';

let SDK;

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
        appId      : '306917059703858',
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