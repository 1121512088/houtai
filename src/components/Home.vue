<template>
    <div>
        <div class="zheng" >
            
             <div>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>整体情况</el-breadcrumb-item>
                    
                </el-breadcrumb>
             </div>
                <div class="right">
                    <el-tabs v-model="activeName" style='border:none' @tab-click="handleClick">
                        <el-tab-pane label="近7天" name="first">近7天</el-tab-pane>
                        <el-tab-pane label="近30天" name="second">近30天</el-tab-pane>
                    </el-tabs>
                   <div class="block">
                        <!--  <span class="demonstration">月</span>  -->
                        <el-date-picker
                            v-model="value4"
                            type="month"
                            placeholder="请选择时间">
                        </el-date-picker>
                    </div>

                    <div class="block">
                        <el-date-picker
                            v-model="value41"
                            type="month"
                            placeholder="请选择时间">
                        </el-date-picker>
                    </div>
                </div>  
        </div>
            
          <div>
                 <el-row :gutter="12">
                    <el-col :span="6">
                        <el-card shadow="always">
                        总是显示
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">
                        鼠标悬浮时显示
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="never">
                        从不显示
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="never">
                        从不显示
                        </el-card>
                    </el-col>
                </el-row>

            </div>

            <div class="baoguang">
                 <el-select v-model="value" placeholder="曝光量">
                     <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <el-select v-model="value" placeholder="点击数">
                     <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                     </el-option>
                </el-select>
            </div>

            <div>
                <div ref="mains" id="mains" style="width: 100%;height:400px;"></div>
            </div>

    </div>
</template>

<script>

    import echarts from 'echarts'
    export default {
    data() {
      return {
        TimeState:"",
        TimeEnd:"",
        activeName: 'second',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }],
        value: '',
        option : {   
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        },
        value4:"",
        value41:""
      };
    },
    watch: {
        value4 (news,old) {    //news新值   TimeState开始的值
            let d = new Date(news);
            let youWant=d.getFullYear() + '-' + (d.getMonth() + 1);  
            this.TimeState = youWant;

            //容错  是否有第二个日期
            if(this.TimeEnd) {
                this.setTime(this.TimeState,this.TimeEnd)       //调用计算中间差年份月份
            }
        },
        value41 (news,old) {    //TimeEnd 结束的值

            let d2 = new Date(news);
            let youWant2=d2.getFullYear() + '-' + (d2.getMonth() + 1);  
            this.TimeEnd = youWant2;
            
            //容错  是否有第一个日期
            if(this.TimeEnd) {
                this.setTime(this.TimeState,this.TimeEnd)       //调用计算中间差年份月份
            }
            
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      setTime (a,b) {
            
            let start = a.split('-')
            let end = b.split('-')
            
            let arr = [];
            let one = 13;   //月份 
            
            for(let i = start[0];i<=end[0];i++) {    //先把 最初年份 到  最末年份遍历
                if(start[0] == end[0]) {   //判断  当前年份  加到  最后的年份  就 吧 最后的年份的月份 赋值 给 one 
                    one = end[1]
                }

                for(let j = start[1];j<=one; j++) {    //开始年份的 月份 遍历 12 月 改成了变量(one)13 因为<=  下面 j ==13 判断所用
                    if(j == 13) {                   //等于 13月份  把开始的月份改成1月份  开始
                        start[1] = 1                
                        start[0]++                 //再把 年份 加1
                        
                        if(start[0] == end[0]) {   //判断  当前年份  加到  最后的年份  就 吧 最后的年份的月份 赋值 给 one 
                            one = end[1]
                        }
                    } else {
                        arr.push(`${start[0]}/${j}`)
                    }
                }
            }
            var myChart = echarts.init(this.$refs.mains);
            this.option.xAxis.data = arr
            myChart.setOption(this.option);
      }

    },mounted () {
        var myChart = echarts.init(this.$refs.mains);
        myChart.setOption(this.option);
        //自适应
        window.onresize = () => {
            myChart.resize()
        }
    },

  };


</script>


<style scoped>
    .zheng{
        display:flex;
        justify-content: space-between
    }
    .right{
        display:flex;
    }
    .baoguang{
        margin-top:20px;
        display:flex;
        justify-content: space-between
    }
</style>
