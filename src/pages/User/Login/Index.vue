<template>
  <div>
    <el-card>
      <div slot="header">
        <span>登陆页面</span>
        <el-button
          type="text"
          @click="handleRegister"
          class="el-card-header-right-btn"
          >去注册 <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
      <div>
        <el-form
          label-width="80px"
          :model="formData"
          :rules="formRules"
          ref="form"
        >
          <el-form-item label="员工ID：" prop="employeeNo">
            <el-input
              v-model="formData.employeeNo"
              placeholder="请输入员工ID"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              type="password"
              v-model="formData.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      formData: {
        employeeNo: 'admin',
        password: 'admin'
      },
      formRules: {
        employeeNo: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  created () {},
  methods: {
    ...mapMutations(['SET_USER']),
    handleSubmit () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$API.login(this.formData).then(res => {
            if (res.code === 0) {
              this.SET_USER(
                Object.assign(res.data.userMessage, { token: res.data.token })
              )
              this.$message.success(res.msg)
              this.$router.push('/main/task')
            } else {
              this.$message.error(res.msg)
            }
          })
        } else {
          this.$message.error('输入有误！')
        }
      })
    },
    handleRegister () {
      this.$router.push('register')
    }
  }
}
</script>

<style scoped>
.register-btn {
  /* float: right; */
  margin-left: 20px;
}
</style>
