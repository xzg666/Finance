<template>
  <div>
    <el-dialog
      title="提示"
      :visible="show"
      width="30%"
     :before-close="close"
    >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色" prop="character">
    <el-input v-model="ruleForm.character"></el-input>
  </el-form-item>
  <el-form-item label="备注" prop="remark">
    <el-input v-model="ruleForm.remark"></el-input>
  </el-form-item>
  <el-form-item label="创建原因" prop="reason">
    <el-input v-model="ruleForm.reason"></el-input>
  </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="close"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        ...mapState(["rowData"])
    },
    beforeUpdate(){
        console.log('---',this.rowData)
        this.ruleForm = this.rowData
    },
    data(){
        return{
            ruleForm:{
                character:"",
                remark:"",
                reason:""
            },
             rules: {
        character: [
          { required: true, message: "请输入角色名称", trigger: "change" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
        reason: [
          { required: true, message: "请输入创建原因", trigger: "blur" },
        ],
      },

        }
    },
    methods:{
        close(){
            this.$emit('update:show',false)
        }
    }
};
</script>

<style scoped>
</style>