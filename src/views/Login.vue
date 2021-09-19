<template>
  <div class="background">
    <el-row type="flex" justify="center" >
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">樱花金融后台管理系统</span>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
          >
            <el-form-item label="账号" prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" show-password v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-button type="primary" class="login" @click="login" >登录</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {post} from '@/utils/http.js'
export default {
  data(){
    return{
      ruleForm:{
        username:"",
        password:""
      },
       rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
       }
    }
  },
  methods:{
    login(){
      post('/login',this.ruleForm).then(res=>{
        // console.log('登录请求拿到数据',res)
        sessionStorage.setItem('userinfo',JSON.stringify(res.userinfo))
        this.$router.push('/')
      },error=>{
        console.log(error)
      })
    },
   
  }
};
</script>

<style  scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 30%;
}
.login{
  width: 85%;
  margin-left: 16%;
}
.background{
  background-color: rgba(173, 216, 230, .5);
  width: 100%;
  height: 100vh;
  padding-top: 10%;
}
</style>