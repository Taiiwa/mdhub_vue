<template>

    <div>
        <my_header></my_header>

            <br><br>

            &nbsp;&nbsp;&nbsp;&nbsp;<Breadcrumb :datas='crumb_datas'></Breadcrumb>
            <section class='featured-block text-center'>

                <div class='container'>
                    <table>
                        <tr>
                            <td>用户名</td>
                            <td><input type="text" v-model="username"></td>
                        </tr>
                        <tr>
                            <td>密码</td>
                            <td><input type="password" v-model="password"></td>
                        </tr>
                        <tr>
                            <td>验证码</td>
                            <td><input type="text" v-model="code"><img :src="src" @click='change_code'></td>
                        </tr>
                        <tr>
                            <td>
                                <Button @click='reset'>重置</Button>
                            </td>
                            <td>
                                <Button color=green @click='submit'>提交</Button>
                            </td>
                        </tr>
                    </table>

                </div>

            </section>

        <my_footer></my_footer>
    </div>


</template>

<script>
import my_header from './my_header'
import my_footer from './my_footer'
export default {
    data:function(){
        return{
            // 声明面包屑变量
            crumb_datas:[
                // 通过命名空间跳转
                {title:'首页',route:{name:'index'}},
                {title:'注册页面'},
            ],
            username:'',
            password:'',
            src:'http://127.0.0.1:8000/my_code',
            code:'',
        }
    },
    methods:{
        // 刷新验证码
        change_code:function(){
            this.src='http://127.0.0.1:8000/my_code?random='+Math.ceil(Math.random()*10)
        },
        
        // 重置
        reset:function(){
            this.username='';
            this.password='';
        },

        // 提交注册
        submit:function(){
            if(this.username == ''){
                this.$Message('用户名不能为空');
                return false;
            };
            if(this.password == ''){
                this.$Message('密码不能为空');
                return false;
            };
            this.axios.get(
                    'http://127.0.0.1:8000/register/', 
                    {
                        params:{
                            username:this.username,
                            password:this.password,
                            code:this.code
                        }
                    }
                ).then(result=>{
                    console.log(result);
                    this.$Message(result.data.message)
                })
        }
    },

    components:{
        my_header,
        my_footer,
    },
}
</script>

<style>
td{
    padding:10px
}
</style>
