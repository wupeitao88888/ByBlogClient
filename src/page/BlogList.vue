<template>
 
      <div class="infinite-list-wrapper" style="overflow:auto;">
   
        <div class="block">
          <el-image :src="src" fit="cover"></el-image>
        </div>

        <ul
          class="list">
          <li v-for="item in articleList" :key="item.value" class="list-item" v-on:click="handleSelect(item)" >
            <el-card class="box-card">
                <el-row>
                    <el-col :span="24"><div class="grid-content"><span class="title">{{item.title}}</span></div></el-col>
                </el-row>
                 <el-row class="contentrow">
                    <el-col :span="24"><div class="grid-content"><span class="content">{{item.content}}</span></div></el-col>
                </el-row>
                 <el-row class="contentrow">
                    <el-col :span="24">
                        <div class="grid-content">
                        <span class="author">作者：{{item.nickname}}</span>&nbsp;&nbsp;&nbsp;
                        <span class="author">阅读：{{item.pageview}}</span>&nbsp;&nbsp;&nbsp;
                        <span class="author">点赞：{{item.hits}}</span>&nbsp;&nbsp;&nbsp;
                        <span class="author">评论：{{item.commentsnum}}</span>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
          </li>
        </ul>
      </div>

</template>
<script>
import Base from "./base/Base.vue";
import { isEmpty } from "../kit/EmptyKit";
import { ajax_post } from "../kit/HttpKit";
import { GET_BLOG_LIST } from "../config/ApiConfig";
import { connect } from 'net';
export default {
  name: "BlogList",
  extends: Base,
  data: function() {
    return {
    mdata:'',
    articleList:[],
    count: 10,
    loading: false,
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    };
  },
  beforeMount: function() {
    //获取项目列表
    const _self = this;
    ajax_post(
      GET_BLOG_LIST,
      {},
      function(data) {
        console.log("返回值："+JSON.stringify(data))
        _self.articleList = data;
      },
      function(code, message) {
      }
    );
  },
  methods: {
     handleSelect:function(item){
       console.log('item.cid:'+item.cid)
       this.$router.push({path:'BlogInfo',query: {id:item.cid}})
    }
  }
};
</script>
<style>

ul li{
  list-style: none;
  margin: 0px;
  padding: 0px;
}
ul{
  padding-inline-start: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
}
.box-card{
  width: 60%;
  height: auto;
  margin-top: 15px;
}
.el-image{
    width: 60%;
    height: 200px;
    margin-top: 30px;
}

.infinite-list-wrapper{
  padding: 0px;
  margin: 0px;
  margin-left: 10%;
}
.title{
  font-size: 18px;
  color:#000;
}
.content{
  font-size: 14px;
  color:#333333;
 
}
.contentrow{
  margin-top: 15px;
}
.author{
    font-size: 12px;
    color: #3c3c3c;
}
</style>