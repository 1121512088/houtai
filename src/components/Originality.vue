<!-- Page页面  实现Element-ui效果  -->
<template>
    <div class="originality">
        <div class="originality_header"><b>12345</b> <span>单元</span></div>

         <div class="titleP">
            <span>所有广告计划 > DD-广告测试团队-20171102-4 > </span> <font>12345</font>
        </div>

        <div class="cell">
            <span>单元：20171102</span>
            <span>投放周期:2017/5/1-2017/5/3<i class="el-icon-edit"></i></span>
            <span>定向：男,小学,10-16岁,北京,天津,上海,武汉,贵州,宁夏,乌鲁木齐...</span>
            <span>出价方式：CPC</span>
            <span>出价：1.5<i class="el-icon-edit"></i></span>
            <span>全部</span>
        </div>
        

        <!-- Tab -->
        <div>
            <el-table
                :data="tableData1"
                border
                style="width: 100%">
                <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="province"
                label="省份"
                width="120">
                </el-table-column>
                <el-table-column
                prop="city"
                label="市区"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                width="300">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="邮编"
                width="120">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>

                </template>
                </el-table-column>
            </el-table>
        </div>

        <div>
            <el-pagination
                :small=true
                background
                :page-size=1
                layout="prev, pager, next"
                :total=sum
                @current-change="current_change">
            </el-pagination>
        </div>
       
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },
        created() {
            //首页进入刷新3条数据
            this.tableData1 = this.tableData.slice(0,this.pageSize)
        },
        mounted() {
            //页面跟新完后，重新修改共多少页
            this.sum = Math.ceil(this.tableData.length/3);
        },
        methods:{
            //修改page触发该事件
            current_change(e) {
                let num = document.querySelector('.active').innerText;
                this.tableData1 = this.tableData.slice((num-1)*3,num*3)
            }
        },
        data() {
        return {
            sum:0,
            pageSize:3,
            tableData1:[],
            tableData: [{
            date: '2016-05-03',
            name: '王小虎1',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            },{
            date: '2016-05-03',
            name: '王小虎2',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            },{
            date: '2016-05-03',
            name: '王小虎3',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            },{
            date: '2016-05-03',
            name: '王小虎4',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-02',
            name: '王小虎5',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-04',
            name: '王小虎6',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-01',
            name: '王小虎7',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }]
        }
        }
    }
</script>

<style scoped>
.originality{
    width:100%;
    height:100%;
}
    .originality_header{
        font-size:24px;
        height:40px;
    }
    .originality_header b { 
        float:left;
    }
    .originality_header>span{
        background:#6759D6;
        height:20px;
        width:35px;
        border-radius:16px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #FFFFFF;
        text-align:center;
        margin:0 10px;
        font-weight:100;
    }
    .titleP{
        margin:20px 0;
        font-size:12px;
    }
    .titleP>span{
        color:#ccc;
    }
    .cell{
        display:flex;
        justify-content:space-between;
        height:60px;
        align-items:center;
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
    }

</style>

