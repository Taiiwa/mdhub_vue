<template>
    <div style='margin:300px 700px'>

        <Table :datas="datas" :height="400" :border='true'>
            <TableItem title="商品名" prop="name" :width="150"></TableItem>
            <TableItem title="价格" prop="price" :width="150"></TableItem>
            <TableItem title="数量" :width="100">
                <!-- 定义加减按钮和数字 -->
                <template slot-scope="{data}">
                    <button class='h-btn h-btn-s h-btn-green'>
                        <i class='h-icon-minus' @click='less(datas,data)'></i>
                    </button>
                    {{ data.count }}
                    <button class='h-btn h-btn-s h-btn-green'>
                        <i class='h-icon-plus' @click='more(datas,data)'></i>
                    </button>
                </template>
            </TableItem>
            <TableItem title="操作" :width="100">
                <template slot-scope="{data}">
                    <Button text-color="red" icon="h-icon-trash" @click="remove(datas, data)">Delete</Button>
                </template>
            </TableItem>
            <div slot="empty">暂时无数据</div>
        </Table>
        <br>
        <br>
        <span class="float-right">
            总价为：￥{{ mount }}
        </span>
    </div>
</template>

<script>
export default {

    data:function(){
        return{
            datas:[
                {name:'和绘',price:800,count:0},
                {name:'汉王',price:400,count:0},
                {name:'友基',price:600,count:0},
                
            ],
        }
    },
    methods:{
        remove(datas, data) {
            data.count = 0
        },
        less(datas, data) {
            if (data.count!=0) {
                data.count -= 1
            }
        },
        more(datas, data) {
            data.count += 1
        }
    },
    computed:{
        mount:function(){
            var total = 0
            for (var i=0; i<this.datas.length; i++){
                total += this.datas[i].count * this.datas[i].price
            }
            return total
        }
    }

}
</script>

<style>

</style>
