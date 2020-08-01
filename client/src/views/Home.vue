<template>
  <el-container style="height: 100vh">
    <el-header>
      <h3>地图坐标显示</h3>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>系统管理</template>
            <el-menu-item-group>
              <el-menu-item index="/home/showMap">显示地图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>


  export default {
    name: 'Home',
    methods:{
      exit(){
        window.sessionStorage.clear();
        this.$router.push('/login')
      }
    }

  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .el-aside {
    color: #333;
  }

</style>
