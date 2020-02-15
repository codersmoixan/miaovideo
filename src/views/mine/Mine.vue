<template>
    <div class="mine-container">
        <header-title :pageTitle="pageTitle"></header-title>
        <div class="login">
            <div class="user-name-box">
                <input type="text" placeholder="账户名/手机号/Email">
            </div>
            <div class="password-box">
                <input type="text" placeholder="请输入您的密码">
            </div>
            <div class="submit">
                <button>登录</button>
            </div>
        </div>
        <div class="handle">
            <div class="register">立即注册</div>
            <div class="retrieve">找回密码</div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '@/components/header/HeaderTitle.vue'

export default {
    name: 'Mine',
    data() {
        return {
            pageTitle: '我的喵喵'
        }
    },
    components: {
        HeaderTitle
    },
}
</script>

<style scoped lang="less">
    .login {
        width: 100%;
        margin-top: 49px;
        
        input {
            padding-left: 15px; 
            width: 100%;
            height: 45px;
            border: none;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
            outline: none;
        }
        input::-webkit-input-placeholder {
            /* 修改字体颜色 */
                
            /* 修改字号，默认继承input */
            font-size: 13px;
            /* 设置背景色 */
                
        }
        .submit {
            padding-top: 15px;
            button {
                width: 95%;
                height: 45px;
                background: coral;
                border: none;
                font-weight: 700;
                color: #fff;
                font-size: 18px;
                border-radius: 5px;
            }
        }
    }
    .handle {
        display: flex;
        padding: 5px 10px;
        width: 100%;
        font-size: 12px;
        color: coral;
        div {
            width: 50%;
        }
        .register {
            text-align: left;
        }
        .retrieve {
            text-align: right;
        }
    }
</style>