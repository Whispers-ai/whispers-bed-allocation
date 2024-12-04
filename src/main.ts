
// https://primevue.org/autoimport/

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Tooltip from 'primevue/tooltip';


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import ToastService from 'primevue/toastservice';
import Noir from './presets/Noir';
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';
import Select from 'primevue/select';
import IconField from 'primevue/iconfield';
import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';


import './assets/tabler-payments.css'
import './assets/tabler-vendors.css'
import './assets/tabler-flags.css'
import './assets/tabler.css'

import 'primeicons/primeicons.css'


import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// import './assets/main.css'

// import process from 'process';
// import global from 'global';

// window.process = process;
// window.global = global;

const app = createApp(App)

app.use(createPinia())

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Button', Button);
app.component('MultiSelect', MultiSelect);
app.component('Select', Select);
app.component('IconField', IconField);
app.component('InputText', InputText);
app.component('Panel', Panel);


app.use(ToastService);

app.directive('tooltip', Tooltip);
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.use(router)
app.mount('#app')
