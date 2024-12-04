<template>
    <div>
      <p>Autenticando...</p>
    </div>
  </template>
  
  <script>
  import { CognitoUserPool } from 'amazon-cognito-identity-js';
  import UserPool from '@/awsConfig';
  
  export default {
    mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      
      if (code) {
        // Handle the authentication response here
        // This is an example, you will need to adjust it based on your flow
        const cognitoUserPool = new CognitoUserPool({
          UserPoolId: UserPool.getUserPoolId(),
          ClientId: UserPool.getClientId()
        });
        
        // This part is for handling the authorization code grant flow
        // If you are using implicit flow or another method, adjust accordingly
        cognitoUserPool.client.request('POST', '/oauth2/token', {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `grant_type=authorization_code&code=${code}&client_id=${UserPool.getClientId()}&redirect_uri=${window.location.origin}/callback`
        }, (err, response) => {
          if (err) {
            console.error('Error during token exchange:', err);
            return;
          }
          // console.log('Token response:', response);
          // You can now use the tokens received in the response
          // For example, you can store them in localStorage
          localStorage.setItem('accessToken', response.access_token);
          localStorage.setItem('idToken', response.id_token);
          localStorage.setItem('refreshToken', response.refresh_token);
          
          // Redirect to the home page or another page
          this.$router.push('/');
        });
      } else {
        console.error('No authorization code found in the URL.');
      }
    }
  };
  </script>
  