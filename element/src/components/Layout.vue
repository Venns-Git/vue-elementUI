<template>
  <div>
      <h1>layout布局组件的使用</h1>
      <!-- 创建一行 -->
      <el-row>
        <el-col :span="6"><div style="border:1px solid red">占用6分</div></el-col>
        <el-col :span="6"><div style="border:1px solid red">占用6分</div></el-col>
        <el-col :span="6"><div style="border:1px solid red">占用6分</div></el-col>
        <el-col :span="6"><div style="border:1px solid red">占用6分</div></el-col>
      </el-row>

      <el-row :gutter="10" tag="span">
        <el-col :span="6"><div style="border:1px solid red">占用6分</div></el-col>
        <el-col :span="6"><div style="border:1px solid red">占用6分</div></el-col>
        <el-col :span="6"><div style="border:1px solid red">占用6分</div></el-col>
        <el-col :span="6"><div style="border:1px solid red">占用6分</div></el-col>
      </el-row>

      <h1>layout组件中使用偏移</h1>
      <el-row>
        <el-col :span="12" :offset="6" :push="3"><div style="border:1px solid red">占用12分</div></el-col>
        <el-col :span="6" ><div style="border:1px solid red">占用6分</div></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style>

</style>