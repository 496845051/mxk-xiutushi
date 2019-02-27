<template>
  <div>
    <el-card>
      <div slot="header">
        <span>注册页面</span>
        <el-button
          type="text"
          @click="$router.back()"
          icon="el-icon-arrow-left"
          class="el-card-header-right-btn"
          >去登陆</el-button
        >
      </div>
      <div>
        <el-form
          label-width="80px"
          :model="formData"
          :rules="formRules"
          ref="form"
        >
          <el-form-item> </el-form-item>
          <el-form-item label="用户名" required prop="userName">
            <el-input v-model="formData.userName"></el-input>
          </el-form-item>

          <el-form-item label="密码" required prop="password">
            <el-input v-model="formData.password" type="password"></el-input>
          </el-form-item>

          <el-form-item label="员工工号" required prop="employeeNo">
            <el-input v-model="formData.employeeNo"></el-input>
          </el-form-item>

          <el-form-item label="邮箱" required prop="email">
            <el-input v-model="formData.email"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        userName: '496845051',
        password: 'ojh2525805',
        employeeNo: '201521122109',
        email: '496845051@qq.com'
      },
      formRules: {}
    }
  },
  methods: {
    handleSubmit () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$POST('users/register', this.formData).then(() => {})
        } else {
          this.$message.error('输入有误！')
        }
      })
    },
    handleReset () {
      for (let key in this.formData) {
        this.formData[key] = ''
      }
    }
  }
}
</script>

<style scoped></style>
