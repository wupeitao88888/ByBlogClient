<template>

    <div>
            <el-row class="blog_title blog_info_width">
                <el-col :span="24">
                    <div class="grid-content">
                        <el-page-header @back="goBack" content="">
                        </el-page-header>
                    </div>
                </el-col>
            </el-row>
            <el-row class="blog_info_width">
                <el-col :span="24">
                    <div class="grid-content">
                        <p class="b_title">{{b_title}}</p>
                        <p class="author"><span>作者:&nbsp;&nbsp;{{author}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>阅读:&nbsp;&nbsp;{{pageview}}</span></p>
                    </div>
                </el-col>
            </el-row>
            
           <div class="blog_info_width" v-html="b_content"></div>

            <el-row class="blog_info_width ">
                <el-col :span="12">
                    <div class="grid-content">
                        <p class="like_hits">喜欢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;{{hits}}</p>
                    </div>
                </el-col>
                 <el-col :span="12">
                    <div class="grid-content">
                        <p class="yuedu" style="float:right"><span>举报文章</span>&nbsp;&nbsp;&nbsp;<span>© 著作权归作者所有</span>&nbsp;&nbsp;&nbsp;</p>
                    </div>
                </el-col>
            </el-row>
            <div class="blog_info_width b-border b-comments">
                <el-avatar  :src="avatar" style="float:left;">{{avatarName}}</el-avatar>
                <span style="line-height:110px;margin-left:17px;font-size:20px;">{{author}}</span>
                <div class="grid-content" style="float:right;margin-top:12px;margin-right:12px;">
                        <p class="like_hits">关注他</p>
                </div>
            </div>


     <el-timeline class="blog_info_width" >
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>

      

    </div>
</template>
<script>
import Base from "./base/Base.vue";
import { isEmpty } from "../kit/EmptyKit";
import { ajax_post } from "../kit/HttpKit";
import { GET_BLOG_INFO } from "../config/ApiConfig";
import marked from 'marked'
export default {
  name: "BlogInfo",
  extends: Base,
  data: function() {
    return {
    b_title:"",
    b_content:"",
    pageview:"0",
    hits:"0",
    author:"",
    avatar:"",
    avatarName:"",//如果没有图片就取  昵称的第一个字
    
    };
  },
  beforeMount: function() {
     const _self = this;
    console.log("参数：Cid="+this.$route.query.id);
    ajax_post(
      GET_BLOG_INFO,
      {cid: _self.$route.query.id},
      function(data) {
        console.log("返回值："+JSON.stringify(data))
        
        _self.b_title=data.title;

        console.log('转成html:'+marked(data.blog.content))
        _self.b_content=marked(data.blog.content)
        _self.pageview=data.blog.pageview
        _self.hits=data.blog.hits;

        _self.author=data.user.nickname
        if(isEmpty(data.user.avatar)){
            _self.avatarName=(data.user.nickname+"").substring(0,1);
        }else{
            _self.avatarName="";
            _self.avatar=data.user.avatar;
        }
      },
      function(code, message) {
      }
    );
  },
  methods: {
    goBack(){
        this.$router.go(-1);
    }
  }
};
</script>
<style>
.el-page-header__left::after{
    width: 0px;
}

.blog_title{
 
    margin-top: 10px;
   
}

.blog_info_width{
   margin-left: 10%;
    width: 60%;
}
.b_title{
    text-align: center;
    color: #000;
    font-size: 34px;
    font-weight:700;
}
.b-border{
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.b-comments{
    height: 110px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.like_hits{
    width: 165px;
    height: 57px;
    border-radius: 30px;
    border: 1px #EA6F5A solid;
    line-height: 57px;
    color: #EA6F5A;
    text-align: center;
}
.yuedu{
    color: #cccccc;
    font-size: 12px;
    position: relative;
    top: 45px;
}
.author{
    color: #cccccc;
    font-size: 12px;
    float: right;
}
.blog_info_width .el-avatar{
    height: 90px;
    width: 90px;
    background: rebeccapurple;
    line-height: 90px;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 10px;
}
</style>