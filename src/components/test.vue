<template>
    <div>
        <Button @click='counter++'>天若有情天亦老，我为长者续一秒</Button>
        <br>
        您已经续了 {{ counter }} 秒
        <br>
        <br>
        {{ reverse_msg }}

        <!-- 绑定样式 -->
        <div :class='{active:isacticve}'>

        </div>
        <ul>
            <!-- 涉及逻辑与法用花括号括起来 -->
            <li v-for='(item,index) in tlist' :key=index :class='{on:index%2==0,off:index%2!=0}'>
                {{ index + 1}}
                &nbsp;&nbsp;
                {{ item.text }}
                &nbsp;&nbsp;
                {{ item.role }}
            </li>

        </ul>

        <div v-if="type === 'A'">

            李太白

        </div>

        <div v-else-if="type === 'B'">

            杜子美

        </div>

        <div v-else>

            杜工部

        </div>

        <h1 v-show='lishangyin'>李商显</h1>

        {{ msg }}

    </div>
</template>

<script>
export default {
    data:function(){
        return{
            msg:'不以物喜，不以己悲',
            lishangyin:1,
            type:'1',
            tlist:[
                {text:'汉赋', role:'曹植'},
                {text:'唐诗', role:'李白'},
                {text:'宋词', role:'苏轼'},
                {text:'元曲', role:'关汉卿'},
                {text:'明小说', role:'罗贯中'}
                ],
            isacticve:true,
            counter:0,
        }
    },
    // 计算属性
    computed:{
        // 反转
        reverse_msg:function(){
            return '古人云：'+this.msg.split('').reverse().join('')
        }
    },
    // 监听属性
    vatch:{
        counter:function(nval,oval){
            console.log('计数器的变化：' + nval + '变成了' + oval)
        }
    },
    method:{

    }
    

}
</script>

<style>

.on{
    background: #ccf
}
.off{
    background: #cff
}
.active{
    width:100px;
    height:20px;
    background: tomato
}

</style>
