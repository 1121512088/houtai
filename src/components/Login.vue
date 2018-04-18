<template>
    <div>
        <div class="page-container">
            <h1>Login</h1>

                <div>
                    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="账号" prop="name">
                            <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                        </el-form-item>
                     
                    
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        </el-form-item>
                    </el-form>
                
                </div>

                <!-- -->
                <div>

                </div>
            
        </div>

    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data () {

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };

            var validatePass3 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入账号'));
                } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('name');
                }
                callback();
                }
            };

            return {

                ruleForm2: {
                    pass: '',    //账号
                    checkPass: '',
                    name:''     //密码
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    name: [
                        { validator: validatePass3, trigger: 'blur' }
                    ]
                }
            }
        },
        
        methods :{
            //封装的element-ui组件 按钮
            submitForm(formName) {
                
                 //两种请求方式
                // this.$http.get('/static/test.json').then((res) => {
                //     console.log(res)
                // })
                // axios.get('/static/test.json').then((res) => {
                    
                // })               
                //请求服务
                // login(this.username,this.password,'123asdsad')
                // .then((res) => {
                //     console.log(res)
                // })


                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        
                        //点击时候去判断是否账号密码正确
                        this.$store.dispatch('actions_login',{
                            username:this.ruleForm2.name,
                            password:this.ruleForm2.pass,
                            notify:this.$notify,
                            router:this.$router
                        })
                       
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '请输入账号密码'
                        });

                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }

    }

</script>

<style scoped>

</style>