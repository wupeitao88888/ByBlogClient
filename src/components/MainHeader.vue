<template>
  <el-header style="text-align: right; font-size: 12px">
    <el-row>
      <el-col :span="12">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">友链</el-menu-item>
          <el-menu-item index="3">关于</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <span style="color:#fff;">登陆</span>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data: function() {
    return { activeIndex: "1" };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({ path: "BlogList", query: { id: key } });
      //  this.$router.push({path:'/home'})
    }
  }
};
</script>
<style>
.el-header {
  height: 60px;
  line-height: 60px;
  background: #545c64;
}
.el-menu {
  height: 57px;
}

.floatright {
  float: right;
  width: auto;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-header {
  border-bottom: solid 1px #545c64;
}
</style>