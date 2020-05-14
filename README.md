# 😁plui 菲络组件库

## 项目介绍
- 菲络社区的UI库，旨在方便协作开发，减少前端的维护成本
- 项目基于Vue3 + Typescript编写
- 开发工具使用Vscode 基于脚手架vue-cli@4.3.1搭建
- 项目暂时未添加测试，目前仅由Perfumer <1061393710@qq.com>和XaDon <780006473@qq.com>维护开发

## 😵第一步安装的Vscode插件
1、EditorConfig 2、Gitlens 3、Vetur 4、Eslint 5、Beautify
![vscode插件](http://image.plog.top/git-brand/vscode-plugin1.png?imageView2/0/format/webp/q/75)
## 👀注意事项
- [分支介绍](./BRANCH.md)
- [目录介绍](./CATALOG.md)
- 启动时需要从`根目录`打开，`.vscode`目录下配置了一些插件配置
- .开头的文件夹和目录均不要修改，这些是大家的公共配置
- 设置好git，安装好插件，进入dev，首先需要yarn install，然后 yarn dev
- 项目跑通证明你的配置已经OK，那么就可以进行开发了
- master分支merge只能通过pull request的方式进行

## 😵git环境配置
```
// 正确设置上传时Win上的开发环境

git config --global core.autocrlf false
git config --global --unset core.safecrlf
git config user.name  <githubName>
git config user.email <githubEmail>

// 设置好后再去执行
git clone https://github.com/philuo/plui.git
```
## 🤪项目开始
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