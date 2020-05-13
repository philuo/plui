# 😁plui 菲络组件库

## 项目介绍
- 菲络社区的UI库，旨在方便协作开发，减少前端的维护成本
- 项目基于Vue3 + Typescript编写
- 开发工具使用Vscode 基于脚手架vue-cli@4.3.1搭建
- 项目暂时未添加测试，目前仅由Perfumer <1061393710@qq.com>和XaDon <780006473@qq.com>维护开发

## 😵启动项目需要安装的Vscode插件
![Eslint](http://image.plog.top/github-brand/1.png?imageView2/0/format/webp/q/75)
![Beautify](http://image.plog.top/github-brand/2.png?imageView2/0/format/webp/q/75)
![Vetur](http://image.plog.top/github-brand/3.png?imageView2/0/format/webp/q/75)
![EditorConfig](http://image.plog.top/github-brand/4.png?imageView2/0/format/webp/q/75)

### 👀启动时需要从`根目录`打开，`.vscode`目录下配置了一些插件配置

## 🤪项目开始
```
// 正确设置上传时Win上的开发环境

git config --global core.autocrlf true
git config --global core.safecrlf true
git config user.name Perfumer
git config user.email xxx@qq.com

// 设置好后再去执行
git clone https://github.com/philuo/plui.git
```
```
cd dev

yarn install
```

### 😳开发者模式
```
yarn dev
```

### 😬生产打包
```
yarn build
```
生成了modern和legacy两种包，默认index.html应用modern模式

打包分析时看report.html，一般不使用legacy模式生成的包文件
### 😩打包分析
```
yarn report
```
- 兼容的备份打包分析
build/legacy-report.html
- 现代浏览器打包分析
build/report.html