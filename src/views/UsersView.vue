<template>
  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <!-- Page pre-title -->

          <h2 class="page-title">Cadastro de Usuários</h2>
          <div class="text-secondary mt-1">
            Aqui você pode visualizar e gerenciar os usuários do sistema.
          </div>
        </div>
        <!-- Page title actions -->
        <div class="col-auto ms-auto d-print-none">
          <div class="btn-list">
            <RouterLink to="new-user" class="btn btn-primary d-none d-sm-inline-block">
              <IconPlus class="icon" />

              Novo usuário
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-cards">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Usuários</h3>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-vcenter">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td class="text-end">
                        <div class="btn-list justify-content-end">
                          <a href="#" class="btn btn-icon btn-outline-primary ">
                            <IconPencil class="icon" />
                          </a>
                          <a href="#" class="btn btn-icon btn-outline-danger">
                            <IconTrash class="icon" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IconHome, IconPlus, IconPencil, IconTrash } from "@tabler/icons-vue";
import { RouterLink } from "vue-router";

export default {
  components: { IconHome, IconPlus, IconPencil, IconTrash },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@gmail.com",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@gmail.com",
        },
        {
          id: 3,
          name: "Michael Johnson",
          email: "michael.johnson@gmail.com",
        },
        {
          id: 4,
          name: "Emily Davis",
          email: "emily.davis@gmail.com",
        },
        {
          id: 5,
          name: "Daniel Wilson",
          email: "daniel.wilson@gmail.com",
        },
        {
          id: 6,
          name: "Olivia Brown",
          email: "olivia.brown@gmail.com",
        },
        {
          id: 7,
          name: "William Taylor",
          email: "william.taylor@gmail.com",
        },
        {
          id: 8,
          name: "Sophia Anderson",
          email: "sophia.anderson@gmail.com",
        },
        {
          id: 9,
          name: "James Martinez",
          email: "james.martinez@gmail.com",
        },
        {
          id: 10,
          name: "Ava Thomas",
          email: "ava.thomas@gmail.com",
        },
      ],
    };
  },
  mounted() {
    // Fetch users from Cognito and populate the users array
    // You can use AWS SDK or any other library to interact with Cognito
    // Example:
    // cognito.listUsers().then(response => {
    //   this.users = response.data.users;
    // }).catch(error => {
    //   console.error(error);
    // });
  },
};
</script>

<style>
/* Add Tabler styles here */
</style>
