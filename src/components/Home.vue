<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <div class="row-header">
        <div class="header-left">
<!--          <img src="../assets/img/home-logo.png" alt="">-->
          <span style="color: #67b3ff">SERVER LOG MANAGEMENT</span>
        </div>
        <div class="header-right">
          <el-menu class="header-right-menu" mode="horizontal" :default-active="1">
            <el-menu-item index="1">文档</el-menu-item>
            <el-menu-item index="2">资源</el-menu-item>
            <el-menu-item index="3">可视化</el-menu-item>
            <el-menu-item index="4">
              GitHub
            </el-menu-item>
          </el-menu>
          <el-avatar :size="small" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-header>
    <el-container>
      <!-- 菜单栏 -->
      <el-aside width="200px">
        <el-menu default-active="2" :unique-opened="true" active-text-color="red" text-color="black">
          <el-submenu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>菜单一</span>
            </template>
            <el-menu-item index="1-1">
              <el-icon :size="20">
                <edit />
              </el-icon>
              item one
            </el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
            <el-submenu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item four one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <span>菜单二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <span>菜单三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span>菜单四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>

        </el-main>
        <el-footer>
          <el-rate v-model="rateValue" allow-half />
          <div>
            <el-link type="primary">友情链接</el-link>&nbsp;|&nbsp;
            <el-link type="primary">友情链接</el-link>&nbsp;|&nbsp;
            <el-link type="primary">友情链接</el-link>&nbsp;|&nbsp;
            <el-link type="primary">友情链接</el-link>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>

  <!-- 回到顶部 -->
  <el-backtop :bottom="100">
    <div style="height: 100%;width: 100%;background-color: #f2f5f6;box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);text-align: center;line-height: 40px;color: #1989fa;">
      UP
    </div>
  </el-backtop>
</template>

<script>

  import {ref} from "vue";

  export default {
    data() {

      return {
        noresize: false,
        rateValue: 0,
        small: 40,
        circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      }
    },

    methods: {
      Test() {
        const result = this.$http.get('/user/test', null);
        console.log(result)
      }
    }
  }
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  overflow: hidden;
}

.el-header {
  height: 50px;
  padding: 0;
  font-size: 22px;
  overflow: hidden;
  border-bottom: 1px solid #e5e7eb;

  .row-header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 90%;

    .header-right {

      .header-right-menu {

        .el-menu-item {
          padding: 0 15px;
        }

        .el-menu-item:hover {
          color: #67b3ff;
        }
      }
    }
  }

  // 文字居中对齐
  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  border: 1px solid #e5e7eb;


  .el-menu {
    // padding-top: 10px;
  }
}

.el-main {
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e5e7eb;

  .pc-card {
    width: 300px;
    height: 150px;
  }
}

.el-footer {
  height: 50px;
  border-bottom: 1px solid #e5e7eb;

  >div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
