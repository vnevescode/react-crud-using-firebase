<template>
    <div class="lists">
        <div class="top">
            <p><strong>Relatorios de Vôos</strong><span class="badge badge-info">{{ products.length }}</span></p>
            
        </div>

        <div class="content">
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Imagem</th>
                    <th scope="col">Detail</th>
                    <th scope="col">Criado em</th>
                    <th scope="col">Editado em</th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.id">
                    <th scope="row">{{ product.id}}</th>
                    <td>{{ product.name }}</td>
                    <td><img v-bind:src="product.image" class="product_img"/></td>
                    <td>{{ product.detail }}</td>
                    <td>{{ product.created_at }}</td>
                    <td>{{ product.updated_at }}</td>
                  </tr>
                  
                </tbody>
              </table>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductsListsComponent',
        props:{
            products: Array,
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

        .content{
            .table{
                .product_img{
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
</style>