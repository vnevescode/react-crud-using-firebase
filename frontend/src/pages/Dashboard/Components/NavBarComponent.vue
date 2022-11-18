<template>
    <div class="navbar">
        <h3 class="logo"><i class="fa fa-star"></i> Logo Marca</h3>
        <a href="" class="logout" @click.prevent="logout"><i class="fa fa-sign-out-alt"></i> Sair</a>
    </div>
</template>

<script>
    export default {
        name: 'NavBarComponent',
        methods: {
            logout(){
                setTimeout(()=>{
                    console.log("teste")
                    this.$router.push({ name: 'Login'});
                }, 1000);
                //this.$router.push({ name: 'Login'});
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/_main';

    .navbar{
        .logo{
            color: $white;
        }

        .logout{
            color: $white;
            text-decoration: none;
        }

        .logout:hover{
            width: 60px;
            background-color: $purple;
            border-radius: 8px;
        }
    }
</style>