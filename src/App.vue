<template>
    <div id="app">
        我是App组件
        <h2>链接如下：</h2>
        <router-link to="/home">到主页面</router-link><br>
        <router-link to="/search">到搜索页面</router-link><br>
        <router-link to="/login">到登录页面</router-link><br>
        <router-link to="/register">到注册页面</router-link>
        <div>
            <h2>显示内容如下：</h2>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App'
    }
</script>
