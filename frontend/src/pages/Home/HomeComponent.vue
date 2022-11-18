
<template>
    <DashboardComponent>             
            <template v-slot:slot-pages>
                <div class="content-pages">
                    <!-- <p>Home</p> -->
                    <!--  <CardsComponent/> -->
                    <div>
                        <div class="row">
                            <div class="col-12 col-md-3">
                                <CardsComponent 
                                    :titleCard="'Clientes'" 
                                    :percentage="'7%'" 
                                    :icon="'fa-star'" 
                                    :qtd="'7590'"
                                />
                            </div>
                            <div class="col-12 col-md-3">
                                <CardsComponent 
                                    :titleCard="'Produtos'" 
                                    :percentage="'15%'" 
                                    :icon="'fa-users'" 
                                    :qtd="'28590'"
                                />
                            </div>
                            <div class="col-12 col-md-3">
                                <CardsComponent 
                                    :titleCard="'Serviços'" 
                                    :percentage="'45%'" 
                                    :icon="'fa-users'" 
                                    :qtd="'10270'"
                                />
                            </div>
                            <div class="col-12 col-md-3">
                                <CardsComponent 
                                    :titleCard="'Relatorios'" 
                                    :percentage="'64%'" 
                                    :icon="'fa-users'" 
                                    :qtd="'12387'"
                                />
                            </div>
                            
                        </div>
                    </div>  
                    
                    <div class="container mt-4">
                        <div class="row">
                            <div class="col-12 col-md-12">                                
                                <ListsComponent :users="users"/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </template>
    </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent';
import CardsComponent from '../../components/CardsComponent';
import ListsComponent from '../../components/ListsComponent';
import axios from 'axios';

export default{
    name: 'HomeComponent',    
    data(){
        return{
            users: []
        }
    },
    mounted(){
        this.getUsers();
    },
    methods:{
        async getUsers(){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users').catch(err =>{
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
                this.users = response.data;
            } catch(err){
                const error = err;
                console.log(error.message);
            }           
        }   
    },
    components: {
        DashboardComponent,
        CardsComponent,
        ListsComponent
    }
}
</script>

<style lang="scss" scoped> 
    .content-pages{
        padding: 20px;
       
    }
</style>
