<template>
  <div>
    <MainHeader />
    <router-view/>
  </div>
</template>
<script>
import Base from "./base/Base.vue";
import MainHeader from "../components/MainHeader.vue";
export default {
  name: "BlogMain",
  extends: Base,
  components: { MainHeader: MainHeader },
  data: function() {
    return {
    
    };
  },
  beforeMount: function() {
    
  },
  methods: {
    
  }
};
</script>
<style>
.projectItem {
  float: left;
}
.addBtn {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>