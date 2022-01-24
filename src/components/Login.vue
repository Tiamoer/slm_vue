<template>
  <div class="container">
    <div class="small_container">
      <div class="title">
        <h1><span style="color: #67b3ff">SLM</span>-服务器日志管理系统</h1>
        <h2><span>Vue3 + SpringBoot</span></h2>
      </div>
      <el-tabs class="box" :stretch="true" type="border-card">
        <!-- 登录模块 -->
        <el-tab-pane label="登录" class="login_box">
          <!-- 登陆表单区域 -->
          <el-form label-width="0px" ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
            <!-- 账户 -->
            <el-form-item prop="account">
              <el-input v-model="loginForm.account" type="text" placeholder="账号"
                        prefix-icon="el-icon-user" clearable/>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
              <el-input v-model="loginForm.password" type="password" placeholder="密码"
                        prefix-icon="el-icon-lock" show-password/>
            </el-form-item>
            <!-- 记住我 -->
            <el-form-item class="remeberMe">
              <el-switch v-model="loginForm.remeberMe" inline-prompt active-text="记住我"/>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-row>
              <el-form-item style="width:100%">
                <el-button type="primary" class="my_btn" @click="Login" round>登录</el-button>
              </el-form-item>
            </el-row>
            <!-- 注册等 -->
            <el-row justify="end">
              <a href="" style="font-size: 13px">找回密码</a>
            </el-row>
          </el-form>
        </el-tab-pane>
        <!-- 注册模块 -->
        <el-tab-pane label="注册" class="register_box">
          <el-form label-width="0px" ref="registerFormRef" :model="registerForm" :rules="registerFormRules">
            <!-- 用户名 -->
            <el-form-item prop="name">
              <el-tooltip content="显示在页面上的名称" placement="right" effect="light">
                <el-input v-model="registerForm.name" type="text" placeholder="用户名"
                          prefix-icon="el-icon-edit-outline" clearable/>
              </el-tooltip>
            </el-form-item>
            <!-- 账户名 -->
            <el-form-item prop="account">
              <el-tooltip content="登陆用的账号" placement="right" effect="light">
                <el-input v-model="registerForm.account" type="text" placeholder="账号"
                          prefix-icon="el-icon-user" clearable/>
              </el-tooltip>
            </el-form-item>
            <!-- 邮箱 -->
            <el-form-item prop="email">
              <el-tooltip content="找回密码时使用的邮箱" placement="right" effect="light">
                <el-input v-model="registerForm.email" type="email" placeholder="邮箱"
                          prefix-icon="el-icon-message" clearable/>
              </el-tooltip>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
              <el-input v-model="registerForm.password" type="password" placeholder="密码"
                        prefix-icon="el-icon-lock" show-password/>
            </el-form-item>
            <!-- 重复密码 -->
            <el-form-item prop="repassword">
              <el-input v-model="registerForm.repassword" type="password" placeholder="重复密码"
                        prefix-icon="el-icon-lock" show-password/>
            </el-form-item>
            <!-- 按钮 -->
            <el-row>
              <el-form-item style="width:100%" class="login_btn">
                <el-button type="primary" class="my_btn" @click="Register" round>注册</el-button>
              </el-form-item>
            </el-row>
          </el-form>

        </el-tab-pane>

      </el-tabs>
    </div>

    <!-- Logo -->
    <div class="login_logo">
      <span>@自清闲</span>
    </div>
  </div>
</template>

<script>
// import { getCurrentInstance, ref } from 'vue'
export default {
  data() {
    // 登录页公告
    this.$notify({
      title: '公告',
      type: 'info',
      message: 'SLM V0.1 Beta 上线',
    });
    // 密码二次确认
    const repasswordvali = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码！'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致！'));
      } else {
        callback();
      }
    }
    return {
      // 数据绑定对象
      loginForm: {
        account: "",
        password: "",
        remeberMe: false,
      },
      registerForm: {
        name: "",
        account: "",
        email: "",
        password: "",
        repassword: ""
      },
      // 表单验证规则
      loginFormRules: {
        account: [{
          required: true,
          message: "请输入登录账户！",
          trigger: "blur"
        },
          {
            min: 5,
            max: 20,
            message: "长度在 5 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [{
          required: true,
          message: "请输入登录密码",
          trigger: "blur"
        },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
      registerFormRules: {
        name: [{
          required: true,
          message: "请输入用户名称！",
          trigger: "blur"
        },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        account: [{
          required: true,
          message: "请输入账户！",
          trigger: "blur"
        },
          {
            min: 5,
            max: 20,
            message: "长度在 5 到 20 个字符",
            trigger: "blur",
          },
        ],
        email: [{
          required: true,
          message: "邮箱不能为空！",
          trigger: "blur"
        },
          {
            type: "email",
            message: "邮箱格式不正确！",
            trigger: "blur"
          },
        ],
        password: [{
          required: true,
          message: "请输入密码！",
          trigger: "blur"
        },
          {
            min: 5,
            max: 20,
            message: "长度在 5 到 20 个字符",
            trigger: "blur",
          },
        ],
        repassword: [{
          required: true,
          message: "请输入密码！",
          trigger: "blur"
        },
          {
            min: 5,
            max: 20,
            message: "长度在 5 到 20 个字符",
            trigger: "blur",
          },
          {
            validator: repasswordvali,
            trigger: "blur",
            required: true
          },
        ],
      }
    };
  },

  methods: {
    // 登录
    Login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        // 如果提交表单验证失败，结束！
        if (!valid) return;
        const result = await this.$http.post('/doLogin', this.loginForm)
        if (result.data.code !== 200) {
          this.$message({
            message: '账号或密码错误!',
            type: "error",
            showClose: true,
            center: true,
          });
          return;
        }
        // 保存登录信息到本地
        this.$store.commit('SET_TOKEN', result.data.data.slmToken);
        this.$store.commit('SET_USERINFO', result.data.data.userInfo);
        await this.$router.push('/home');
      });
    },

    // 注册
    Register() {
      this.$refs.registerFormRef.validate(async (valid) => {
        // 如果提交表单验证失败，结束！
        if (!valid) return;
        const result = await this.$http.post('/doRegister', this.registerForm);
        console.log(result);
        if (result.data.code === 401) {
          this.$message({
            message: '用户' + this.registerForm.account + '已存在！',
            type: 'error',
            showClose: true,
            center: true
          });
          return;
        }
        if (result.data.code === 200) {
          this.$message({
            message: '用户' + this.registerForm.account + '注册成功！',
            type: 'success',
            showClose: true,
            center: true,
          });
          // 保存登录信息到本地
          this.$store.commit('SET_TOKEN', result.data.data.slmToken);
          this.$store.commit('SET_USERINFO', result.data.data.userInfo);
          await this.$router.push('/home');
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.my_btn {
  width: 100%;
}

.container {
  background: url("../assets/img/bg-login.png") no-repeat;
  background-size: 100% 100%;
  // background-color: #2b4b6b;
  height: 100vh;

  .login_logo {
    font-size: 22px;
    font-weight: bolder;
    color: #67b3ff;
    position: absolute;
    top: 5%;
    left: 5%;
  }

  .title {
    text-align: center;

    h1 {
      font-size: 22px;
    }

    h2 {
      color: #67b3ff;
      font-size: 13px;
      font-weight: bolder;
    }
  }

  .small_container {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 3px;
    border: 5px solid #d9ecff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .login_box {

      a {
        text-decoration: none;
        font-size: 13px;
        color: #b4b4b4;
      }

      a:hover {
        color: #67b3ff;
      }

    }
  }

}
</style>
