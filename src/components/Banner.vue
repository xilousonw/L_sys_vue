<template>
    <div class="banner">
        <el-carousel height="400px">
            <el-carousel-item v-for="item in banner_list">
                <router-link :to="item.link">
                    <img :src="item.image" :alt="item.title">
                </router-link>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        // data:function(){},
        data() {
            return {
                banner_list: []
            }
        },
        created() {
            this.$axios.get(this.$settings.base_url + '/home/banner/').then(response => {
                console.log(response.data)
                this.banner_list=response.data})
                .catch(error => {

                })
        },

    }
</script>

<style scoped>
    .el-carousel__item {
        height: 400px;
        min-width: 1200px;
    }
    .el-carousel__item img {
        height: 400px;
        margin-left: calc(50% - 1920px / 2);
    }
</style>