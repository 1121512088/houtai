<template>
    <div id="newAdvertising">
      
      <div id="newAdvertising_mark" ref="newAdvertising_mark">
          <div id="newAdvertising_mark-2">
            <h4>选择模板</h4>
            <div class="Rl">
              <div @click="addImg(1)">单图</div>
              <div @click="addImg(2)">多图</div>
            </div>
            
          </div>
      </div>

<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title" style=""><b>建立广告计划</b></template>

          <el-menu-item index="1-1">选择计划</el-menu-item>
         
      </el-submenu>


      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>广告单元</template>
          
          <el-menu-item index="2-1">基本信息</el-menu-item>
          <el-menu-item index="2-2">定向</el-menu-item>
          <el-menu-item index="2-3">广告位</el-menu-item>
          <el-menu-item index="2-4">出价</el-menu-item>
       
      </el-submenu>


      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>广告创意</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">落地页</el-menu-item>
          <el-menu-item index="3-2">上传创意</el-menu-item>
        </el-menu-item-group>
     
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <!-- 左边 -->
    <el-main>

      <h4>广告创意</h4>
      <b>落地页</b>

      <div>
        着陆页地址： <input type="text" placeholder="请设置广告名称">  预览
      </div>
      
      <h4>上传创意</h4>
      <div style="color:red" @click="btn">+添加创意</div>


      <!-- 添加图片 -->
      <div :style="addImgsum == 1? 'display:block':'display:none'">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:9000/dsp-creative/creative/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>


      <button>
          提交
      </button>
    </el-main>
  </el-container>
</el-container>

    </div>
</template>


<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                imageUrl: '',
                addImgsum:0
            }
        },
        methods: {
          handleAvatarSuccess(res, file) {
            console.log(res,file)
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          },
          //添加创意
          btn() {
            this.$refs.newAdvertising_mark.style.display = 'block';
          },
          //单图多图
          addImg(number) {
              if(number == 1) {
                this.addImgsum = 1
              } else {
                this.addImgsum = 2
              }
              this.$refs.newAdvertising_mark.style.display = 'none';
          }
        }
    };

</script>


<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

  .el-aside {
    color: #333;
  }
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  #newAdvertising {
    width:100%;
    height:100%;
  }
  #newAdvertising_mark{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:rgba(0,0,0,.5);
    z-index:9;
    display:none;
  }
  #newAdvertising_mark-2{
    width:30%;
    height:30%;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#fff;
    z-index:9;
    margin:auto;

  }
  .Rl{
    display:flex;
    height:100%;
    justify-content:space-between;
  }
  .Rl div{
    flex:1;
    background:#eee;
  }
  

</style>


