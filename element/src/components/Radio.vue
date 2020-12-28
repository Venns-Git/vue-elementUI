<template>
  <div>
      <h1>Radio组件使用</h1>
      <!-- 组件的创建 -->
      <el-radio label="男" name="sex" @change="aa" v-model="label">男</el-radio>
      <el-radio label="女" name="sex" @change="aa" v-model="label" border size="small">女</el-radio>
      
      <h1>单选按钮组</h1>
      <!-- 创建单选按钮组 -->
      <el-radio-group v-model="radio" size="mini">
        <el-radio :label="3" border>备选项</el-radio>
        <el-radio :label="6" border>备选项</el-radio>
        <el-radio :label="9" border>备选项</el-radio>
      </el-radio-group>
  </div>
</template>

<script>
export default {
    name: 'Radio',
    data(){
        return{
            label: '男',
            radio: 3
        }
    },
    methods:{
        aa(){ //定义的事件处理函数
            alert(this.label);
        }
    }
}
</script>

<style>

</style>