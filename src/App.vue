<template>
  <div id="app">
      <el-container style="height: 100%; border: 1px solid #eee">  
          <el-aside width="200px" style="background-color: #022050">
            <el-menu 
              :default-openeds="['2']" 
              style="background-color: #022050;" 
              text-color="#fff"
              router>

              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-loading"></i>
                  <router-link to="/newAdvertising" class="newSing">新建广告</router-link>
                </template>
                
              </el-submenu>
              
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>首页概览</template>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>广告管理</template>
                    <div style="background-color:#1C2941">
                        <el-menu-item index="/home">广告计划</el-menu-item>
                        <el-menu-item index="/element">广告单元</el-menu-item>
                        <el-menu-item index="/originality">广告创意</el-menu-item>
                    </div>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>数据中心</template>
              </el-submenu>

              <el-submenu index="4">
                <template slot="title"><i class="el-icon-setting"></i>工具箱</template>
              </el-submenu>
            </el-menu>
          </el-aside>
          
          <el-container>
            <el-header style="text-align: right; font-size: 12px">
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>{{username}}</span>
            </el-header>

 <!-- 路由显示内容 -->
              <el-main>    
                <router-view></router-view>
              </el-main>
            
            </el-container>
          </el-container>
    </el-container>
  
           

  </div>
</template>

<script>
//挂载Vuex
  import store from './store/store.js' 
  import {mapState} from 'vuex'

  export default {
    name: 'App',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    computed: {
      ...mapState(['username'])
    },

    //挂载Vue
    store

  }
</script>

<style>

body,html{
  width:100%;
  height:100%;
}

#app {
  width:100%;
  height:100%;
  position:relative;
}
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

.newSing{
  text-decoration:none;
  color:#fff;
}

</style>
