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
        

        <div>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
            </el-pagination>
        </div>

    </div>
</template>

<script>

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

