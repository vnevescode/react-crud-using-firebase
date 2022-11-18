<template>
    <div class="lists">
        <div class="top">
            <p><strong>Relatorios de Vôos</strong><span class="badge badge-info">{{ users.length}}</span></p>
            
        </div>

        <div class="content">
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <th scope="row">{{ user.id}}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                  </tr>
                  
                </tbody>
              </table>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListsComponent',
        props:{
            users: Array,
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/_main';
    
    .lists{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: $white;

        .top{
            .badge{
                background-color: $purple;
                margin-left: 10px;
            }
        }
    }
</style>