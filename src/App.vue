<template>
    <div class="container"><span>{{msg}}</span></div>
</template>

<script>
export default {
    data(){
        return{
            msg:'webpack4搭建vue环境基本完成，是不是很简单呢'
        }
    }
}
</script>

<style>
.container{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    color:red;
    box-shadow:5px 5px 5px 5px;
}
</style>
