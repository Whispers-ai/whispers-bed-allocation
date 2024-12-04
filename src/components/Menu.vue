<script>
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import UserPool from '@/awsConfig';

export default {
  name: "MenuVue",
  methods: {
    logout() {
      const userPool = new CognitoUserPool({
        UserPoolId: UserPool.getUserPoolId(),
        ClientId: UserPool.getClientId()
      });

      const cognitoUser = userPool.getCurrentUser();

      if (cognitoUser) {
        cognitoUser.signOut();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('idToken');
        localStorage.removeItem('refreshToken');
        localStorage.clear();
        this.$router.push('/login');
      } else {
        console.warn('No user to sign out.');
      }
    }
  },
};
</script>
<template>
  <header class="navbar navbar-expand-md navbar-light d-print-none">
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1
        class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"
      >
        <a href=".">
          <img
            src="@/assets/logo.svg"
            width="110"
            height="32"
            alt="Tabler"
            class="navbar-brand-image"
          />
        </a>
      </h1>

      <div class="collapse navbar-collapse" id="navbar-menu">
        <div
          class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center"
        >
          <ul class="navbar-nav">
            <RouterLink
              to="/"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              custom
            >
              <li class="nav-item" :class="[isActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">
                  <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="5 12 3 12 12 3 21 12 19 12" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                  </span>
                  <span class="nav-link-title"> Home </span>
                </a>
              </li>
            </RouterLink>

            <RouterLink
              to="/bed-requests"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              custom
            >
              <li class="nav-item" :class="[isActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">
                  <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-report-medical"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                      ></path>
                      <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                      <line x1="10" y1="14" x2="14" y2="14"></line>
                      <line x1="12" y1="12" x2="12" y2="16"></line>
                    </svg>
                  </span>
                  <span class="nav-link-title"> Pedidos </span>
                </a>
              </li>
            </RouterLink>
            <RouterLink
              to="/leitos"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              custom
            >
              <li class="nav-item" :class="[isActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">
                  <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-emergency-bed"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M8 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5" /><path d="M10 6h4" /><path d="M12 4v4" /><path d="M12 12v2l-2.5 2.5" /><path d="M14.5 16.5l-2.5 -2.5" /></svg>
                  </span>
                  <span class="nav-link-title"> Leitos </span>
                </a>
              </li>
            </RouterLink>

           <RouterLink
              to="/pedidos"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              custom
            >
              <li class="nav-item" :class="[isActive && 'active']">
                <a class="nav-link" :href="href" @click="navigate">
                  <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-checkup-list"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 14h.01" /><path d="M9 17h.01" /><path d="M12 16l1 1l3 -3" /></svg>
                  </span>
                  <span class="nav-link-title"> Relatórios </span>
                </a>
              </li>
            </RouterLink>

            <!-- Loggout -->

            <RouterLink @click="logout" to="/login" class="nav-link">
              <span class="nav-link-icon d-md-none d-lg-inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-logout"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                  />
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
              </span>
              <span class="nav-link-title"> Sair </span>
            </RouterLink>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
