<template>
    <div class="my-card">
        <div class="content top">
            <h3 class="title">{{ titleCard }}</h3>
            <p class="percentage"><i class="fa fa-arrow-up"></i> {{percentage}}</p>
        </div>

        <div class="content footer">
            <i :class="['fa icon', icon]"></i>
            <p class="quatity">{{qtd}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardsComponent',
        props:{
            titleCard: String,
            percentage: String,
            icon: String,
            qtd: String,
                                    
        }
    }
</script>

<style lang="scss" scoped>

    @import '@/assets/scss/_main';

    .my-card{
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: $purple;
        padding: 15px;
        border-radius: 7px;
        color: $white;

        .content{
            display: flex;
            justify-content: space-between;
        }

        .top{
            .title{
                font-size: 25px;
            }

            .percentage{
                color: lightgreen;
            }
        }

        .footer{
            font-size: 25px;
            .icon{
                font-size: 30px;
            }
        }
    }





</style>