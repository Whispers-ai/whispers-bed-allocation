<template>
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">Cadastro de Usuários</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="page-body">
        <div class="container-xl">
            <div class="row row-cards">
                <div class="col-12">
                    <div class="card">
                        <form @submit="submitForm">
                            <div class="card-header">
                                <h3 class="card-title">Usuários</h3>
                            </div>
                            <div class="card-body">

                                <div class="mb-3">
                                    <label class="form-label required">Nome:</label>
                                    <input type="text" class="form-control" id="name" v-model="user.name" required
                                        placeholder="João da Silva" control-id="ControlID-1"
                                        :class="inputClass('name')" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label required">Email:</label>
                                    <input type="email" class="form-control" id="email" v-model="user.email" required
                                        placeholder="joao@dominio.com" control-id="ControlID-2"
                                        :class="inputClass('email')" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label required">Senha:</label>
                                    <input type="password" class="form-control" id="password" v-model="user.password"
                                        required placeholder="********" control-id="ControlID-3"
                                        :class="inputClass('password')" />
                                </div>

                            </div>
                            <div class="card-footer text-end">
                                <div class="d-flex">
                                    <a href="#" class="btn btn-link">Cancelar</a>
                                    <button type="submit" class="btn btn-primary ms-auto"
                                        control-id="ControlID-4">Salvar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
            },
            touchedFields: {
                name: false,
                email: false,
                password: false,
            },
        };
    },
    computed: {
        isValidName() {
            return this.user.name.length > 0;
        },
        isValidEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(this.user.email);
        },
        isValidPassword() {
            return this.user.password.length >= 6;
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            if (this.isValidName && this.isValidEmail && this.isValidPassword) {
                console.log(this.user);
            } else {
                this.touchedFields.name = true;
                this.touchedFields.email = true;
                this.touchedFields.password = true;
                alert("Por favor, preencha todos os campos corretamente.");
            }
        },
        markAsTouched(field) {
            this.touchedFields[field] = true;
        },
        inputClass(field) {
            if (!this.touchedFields[field]) return '';
            if (field === 'name') return this.isValidName ? 'is-valid' : 'is-invalid';
            if (field === 'email') return this.isValidEmail ? 'is-valid' : 'is-invalid';
            if (field === 'password') return this.isValidPassword ? 'is-valid' : 'is-invalid';
            return '';
        },
    },

};
</script>

<style scoped>
/* Add your custom styles here */
</style>
