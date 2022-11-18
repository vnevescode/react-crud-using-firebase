<template>
    <div class="sidebar">
        <div class="top">            
            <div class="avatar">
                <span><i class="fa fa-user icon"></i></span>
            </div>           
            <div class="info">
                <p class="name">Victor Neves</p>
                <p class="status">Online</p>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'Home'}"><i class="fa fa-home"></i> <span>Inicio</span></router-link></li>
                <li><router-link :to="{name: 'Products'}"><i class="fa fa-home"></i> <span>Produtos</span></router-link></li>
                <li><router-link :to="{name: 'Home'}"><i class="fa fa-home"></i> <span>Serviços</span></router-link></li>
                <li><router-link :to="{name: 'Home'}"><i class="fa fa-home"></i> <span>Relatórios</span></router-link></li>
                <!-- <li><router-link :to="{name: 'Products'}"><i class="fa fa-box"></i>Produtos</router-link></li>
                <li><router-link :to="{name: 'Products'}"><i class="fa fa-store"></i>Vendas</router-link></li>
                <li><router-link :to="{name: 'Products'}"><i class="fa fa-chart"></i>Relatórios</router-link></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideBarComponent',
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/_main';

    .sidebar{

        .top{
            width: 100%;
            
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 25px 5px;
            

            .avatar{

                margin-right: 10px;
                span {                    
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #ccc;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    align-items: center;
                    font-size: 25px;
                    color: #666666;
                }
            }

            .info{

                p {
                    margin: 0;
                    color: $white;
                }
                .name {
                    font-size: 20px;
                }

                .status{
                    font-size: 14px;
                }
            }

        }
        
        .menu {
            margin-top: 15px;
            display: flex;           
            padding-left: 70px;
            
            
            ul{
                padding-left: 0px;
                margin-bottom: 0px;
            }
            

            ul li{
                margin: 20px 0;
                font-size: 20px;
                list-style: none;
                font-weight: 200;
                

                a{
                    color: $white;
                    text-decoration: none;
                    
                    span{
                        color: $white;
                        margin-left: 5px;
                    }
                }

            }

            ul li:hover{
                width: 100%;
                background-color: $purple-dark;
                border-radius: 8px;
            }
        }
        
        
    }
</style>