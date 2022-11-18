<template>
    <DashboardComponent>             
        <template v-slot:slot-pages>
            <div class="content-pages">
                <p>Products</p>
                <ProductsListsComponent :products="products"/>      
            </div>
        </template>          
</DashboardComponent>
</template>

<script>

import DashboardComponent from '../Dashboard/DashboardComponent';
import ProductsListsComponent from '../../components/ProductsListsComponent';
import axios from 'axios';

export default {
        
    name: 'ProductsComponent',            
    data(){
        return{
            products: []
        }
    },
    mounted(){
        this.getProducts();
    },
    methods:{
        async getProducts(){
            try {
                const response = await axios.get('http://localhost:8000/index').catch(err =>{
                    if( err.response.status === 404){
                        throw new Error(`| Error ${err.response.status} | ${err.config.url} not found`);
                    }
                    throw err;
                });

                //teste
                /* const response2 = await axios.get('http://localhost:8000/api/').catch(err =>{
                    if( err.response.status === 404){
                        throw new Error(`| Error ${err.response.status} | ${err.config.url} not found`);
                    }
                    throw err;
                });
                console.log("API LARAVEL --> " + response2.status); */

                // If there is no Error populate Array
                this.products = response.data;
                console.log("Aqui" + response.data);

            } catch(err){
                const error = err;
                console.log(error.message);
            }           
        }   
    },
    components:{
        DashboardComponent,
        ProductsListsComponent
        
    }        
}
</script>

<style lang="scss" scoped>
    .content-pages{
        padding: 20px;
    }
</style>