<template>
    <div class="step-container">
        <div v-if="type==='register'">
            <el-steps :space="200" :active="active" finish-status="success" align-center>
                <el-step title="验证手机号"></el-step>
                <el-step title="设置密码" ></el-step>
                <el-step title="注册成功"></el-step>
            </el-steps>
        </div>
        <div v-else>
            <el-steps :space="200" :active="active" finish-status="success" align-center>
                <el-step title="验证身份"></el-step>
                <el-step title="设置新密码" ></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
        </div>
        <div class="step-content">
            <el-form v-bind:model="ruleForm1" status-icon ref="ruleForm1"  label-width="100px" v-if="step === 0" :rules="rules1">
                <el-form-item label="手机号" prop="tel">
                    <el-input type="text" v-model="ruleForm1.tel" auto-complete="off" placeholder="请输入您的手机号"></el-input>
                </el-form-item>
                <el-form-item label="手机验证码" prop="verifycode">
                    <el-input type="password" v-model="ruleForm1.verifycode" auto-complete="off" placeholder="请输入验证码"></el-input>

                </el-form-item>
                <el-form-item label="图形验证码" prop="imgcode">
                    <el-input type="password" v-model="ruleForm1.imgcode" auto-complete="off" placeholder="请输入图形验证码"></el-input>
                </el-form-item>
                <el-form-item>
                     <el-button type="primary" @click="goto(1)">提交</el-button>
                </el-form-item>
            </el-form>
            <el-form v-if="step === 1" :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" :rules="rules2" validate-on-rule-change> 
                <el-form-item label="设置密码" prop="pass">
                    <el-input type="text" v-model="ruleForm2.pass" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="text" v-model="ruleForm2.checkPass" placeholder="请再次输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                     <el-button type="primary" @click="submitForm(2,'ruleForm2')">立即注册</el-button>
                </el-form-item>
            </el-form>
            <div class="success" v-if="step === 2">
                <i class="el-icon-success"></i>
                <div v-if="type==='register'">恭喜您注册成功</div>
                <div v-else>密码已设置成功</div>
                <el-button type="primary" @click="tologin">去登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                //至少包含2种的组合数字+特殊字符、字母+特殊字符、数字+字母
                // const reg =/((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,20}/i;
                // if(reg.test(value)){
                //     if (this.ruleForm2.checkPass !== '') {
                //         this.$refs.ruleForm2.validateField('checkPass');
                //     }
                    callback();
                // }else{
                //     return callback(new Error("建议使用字母、数据和符合两种及以上的组合，6-20个字符"))
                // }
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
        var checkPhone =(rule,value,callback) =>{
            if(!value){
                return callback(new Error("手机号不能为空"))
            }else{
                const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if(reg.test(value)){
                    callback()
                }else{
                    return callback(new Error("请输入正确的手机号"))
                }
            }
        }

        return{
            active:0,
            step:0,
            ruleForm1:{
                tel:'',
                verifycode:'',
                imgcode:''
            },
            ruleForm2:{
                pass:'',
                checkPass:''
            },
            rules1:{

            },
            rules2:{
                pass:[
                    {validator: validatePass, trigger: 'change'}
                ],
                checkPass:[
                    {validator: validatePass2, trigger: 'change'}
                ]

            }

        }
    },
    props:['type'],
    methods:{
        goto(e){
            this.step = e;
            this.active=e; 
        },
        submitForm(step,formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.step == step;
                    this.active = step;
                } else {
                    // this.$message({message:"消息错误"})
                    return false;
                }
            });
        },
        tologin(){
            this.$router.push({path:'/login'})
        },

    }
}
</script>
<style lang="scss" scoped>
    .step-container{
        width: 600px;
        margin:100px auto;
    }
</style>
