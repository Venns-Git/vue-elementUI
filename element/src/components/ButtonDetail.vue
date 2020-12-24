<template>
  <div>
      <h1>创建简单的按钮</h1>
      <el-button>默认按钮</el-button>
      <h1>使用按钮的属性</h1>
      <el-button type="primary">primary</el-button>
      <el-button type="primary" size="mini" icon="el-icon-platform-eleme"></el-button>
      <el-button type="primary" round>primary</el-button>
      <h1>按钮组的使用</h1>
      <el-button-group>
          <el-button type="primary">上一页</el-button>
          <el-button type="primary">上一页</el-button>
      </el-button-group>
  </div>
</template>

<script>
export default {
    name: 'buttonDetail'
}
</script>

<style>

</style>