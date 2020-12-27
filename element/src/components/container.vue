<template>
  <div>
      <h1>容器组件的使用</h1>
      <!-- 创建容器 -->
      <el-container>
          <!-- header -->
          <el-header height="50px">
            我是标题
          </el-header>
            <!-- 容器的嵌套使用 -->
          <el-container>
            <!-- asider -->
            <el-aside width="200px">
              <!-- aside -->
              我是菜单
            </el-aside>
            <el-main>
              我是中心内容
            </el-main>
          </el-container>
          <el-footer height="100px">
              我是页脚
          </el-footer>          
      </el-container>
  </div>
</template>

<script>
export default {
    name: 'container'
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>