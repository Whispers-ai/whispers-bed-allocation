<template>
  <div class="page page-center">
    <div class="container container-normal py4">
      <div class="row align-items-center g-4 ">
        <div class="col-lg">
          <div class="container-tight">
            <div class="card card-md mt-4">
              <div class="card-body">
                <div class="text-center mb-4">
                  <a href="" class="navbar-brand navbar-brand-autodark">
                    <img src="@/assets/logo.svg" height="200" alt=""></a>
                </div>
                <div v-if="!newPasswordRequired">
                  <form @submit.prevent="onSubmit">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" v-model="username" placeholder="Username" required />
                    </div>
                    <div class="mb-2">
                      <label class="form-label">
                        Senha
                        <!-- <span class="form-label-description">
                    <a href="localhost:5173/forgot-password.html">Esqueci a Senha</a>
                  </span> -->
                      </label>
                      <input type="password" class="form-control" v-model="password" placeholder="Password" required />
                    </div>
                    <!-- <div class="mb-2">
                <label class="form-check">
                  <input type="checkbox" class="form-check-input"/>
                  <span class="form-check-label">Remember me on this device</span>
                </label>
              </div> -->
                    <div class="form-footer">
                      <button type="submit" class="btn btn-primary w-100">Acessar</button>
                    </div>
                  </form>
                </div>
                <div v-if="newPasswordRequired">
                  <h2 class="h2 text-center mb-4">Cadastre uma nova senha</h2>
                  <form @submit.prevent="onSubmitNewPassword">
                    <div class="mb-2">
                      <label class="form-label">
                        Nova Senha
                      </label>
                      <input type="password" class="form-control" v-model="newPassword" placeholder="Nova senha"
                        required />
                    </div>
                    <div class="form-footer">
                      <button type="submit" class="btn btn-primary w-100">Cadastrar nova senha</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="text-center text-secondary mt-3">
        Ainda não tem uma conta? <a href="localhost:5173/sign-up.html" tabindex="-1">Cadastre-se</a>
      </div> -->
        </div>
        <div class="col-lg d-none d-lg-block">
          <div class="container-tight">
            <span class="d-block mx-auto" height=400>
              <img src="../assets/secure_login.svg" alt="Illustration">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '@/awsConfig';

export default {
  data() {
    return {
      username: '',
      password: '',
      newPassword: '',
      newPasswordRequired: false,
      cognitoUser: null
    };
  },
  methods: {
    onSubmit() {
      const authDetails = new AuthenticationDetails({
        Username: this.username,
        Password: this.password
      });

      const user = new CognitoUser({
        Username: this.username,
        Pool: UserPool
      });

      user.authenticateUser(authDetails, {
        onSuccess: (result) => {
          // console.log('Login successful:', result);
          localStorage.setItem('accessToken', result.accessToken.jwtToken);
          localStorage.setItem('idToken', result.idToken.jwtToken);
          localStorage.setItem('refreshToken', result.refreshToken.jwtToken);
          // Redirect to the home page
          this.$router.push('/');
        },
        onFailure: (err) => {
          console.error('Login failed:', err);
          alert('Login failed');
        },
        newPasswordRequired: (userAttributes, requiredAttributes) => {
          this.newPasswordRequired = true;
          this.cognitoUser = user;
        }
      });
    },
    onSubmitNewPassword() {
      if (this.cognitoUser) {
        this.cognitoUser.completeNewPasswordChallenge(this.newPassword, {}, {
          onSuccess: (result) => {
            // console.log('New password set successfully:', result);
            this.newPasswordRequired = false;
            // Você pode redirecionar o usuário ou salvar o token
          },
          onFailure: (err) => {
            console.error('Failed to set new password:', err);
            alert('Failed to set new password');
          }
        });
      }
    }
  }
};
</script>