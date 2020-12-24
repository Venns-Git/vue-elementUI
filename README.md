# 1.关于ElementUI

饿了么前端团队开发的一款基于vue的`网站快速成型工具`和`桌面端组件库`

# 2.安装ElementUI

## 2.1通过vue脚手架创建项目

```shell
vue init webpacke element
```

- element:项目名，可自定义

## 2.2在vue脚手架项目中安装elementUI

```markdown
# 1.下载ElementUI依赖
	npm i element-ui -S
# 2.指定当前项目中使用elementUI
	import 'element-ui/lib/theme-chalk/index.css';
	import ElementUI from 'element-ui';
	
	//在vue脚手架中使用elementUI
	Vue.use(ElementUI);
```

# 3.按钮组件

## 3.1 默认样式按钮

```html
<el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
</el-row>
```

##  3.2 简洁按钮，鼠标移动上去才会显示背景颜色

```html
<el-row>
    <el-button plain>朴素按钮</el-button>
    <el-button type="primary" plain>主要按钮</el-button>
    <el-button type="success" plain>成功按钮</el-button>
    <el-button type="info" plain>信息按钮</el-button>
    <el-button type="warning" plain>警告按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
</el-row>
```
## 3.3 圆角按钮

```html
<el-row>
    <el-button round>圆角按钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
    <el-button type="success" round>成功按钮</el-button>
    <el-button type="info" round>信息按钮</el-button>
    <el-button type="warning" round>警告按钮</el-button>
    <el-button type="danger" round>危险按钮</el-button>
</el-row>
```

## 3.4 图标按钮

```html
<el-row>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
```

# 4.按钮组件的详细使用

`总结：使用elementUI的相关组件时，所以的组件都是el-组件名称开头`

## 4.1 创建按钮

```html
<el-button>默认按钮</el-button>
```

## 4.2 按钮属性的使用

```html
<el-button type="primary" 属性名=属性值>primary</el-button>
```

`总结：在elementUI中的所有组件的属性全部写在组件的标签上`

## 4.3 按钮组的使用

```html
<el-button-group>
    <el-button type="primary">上一页</el-button>
    <el-button type="primary">上一页</el-button>
</el-button-group>
```

# 5. Link文字链接组件

