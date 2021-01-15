# 😁plui 菲络组件库

<p style="text-align:center;"><img src="http://image.plog.top/plui/logo_gaitubao_256x258.ico" style="width:64px;"/></p>

<p><img src="http://image.plog.top/github-brand/pass.svg" alt="Build Status - Cirrus" style="max-width:100%;">
</p>

## 项目介绍

- 菲络社区的 UI 库，旨在方便协作开发，减少前端的维护成本
- 项目基于 Vue3 + Typescript 编写
- 开发工具使用 Vscode 基于脚手架 vite 搭建
- 项目暂时未添加测试，目前仅由 Perfumere <1061393710@qq.com>和 XaDon <780006473@qq.com>维护开发

## 😵 第一步安装的 Vscode 插件

1、EditorConfig 2、Gitlens 3、Vetur 4、Eslint 5、Prettier
![vscode插件](http://image.plog.top/plugins.png?imageView2/0/format/webp/q/75)

## 👀 注意事项

- [分支介绍](./BRANCH.md)
- [目录介绍](./CATALOG.md)
- 启动时需要从`根目录`打开，`.vscode`目录下配置了一些插件配置
- .开头的文件夹和目录均不要修改，这些是大家的公共配置
- 设置好 git，安装好插件，进入 dev，首先需要 yarn install，然后 yarn dev
- 项目跑通证明你的配置已经 OK，那么就可以进行开发了
- master 分支 merge 只能通过 pull request 的方式进行
- 使用 yarn build 并且合并到 master 后，可以在 philuo.github.io 及时看到 demo 的更新

## 🐞 本地调试

为方便集成开发调试请根据自己的环境自行配置，配置文件位于根目录下的.vscode/launch.json
本项目当前仅配置了基础的功能，未加入断点功能。可以参考知乎，掘金等论坛的设置方法。

## 😵git 环境配置

```
// 正确设置上传时Win上的开发环境
git config --global core.autocrlf input
git config --global --unset core.safecrlf
// 正确设置上传时的用户
git config user.name  <githubName>
git config user.email <githubEmail>

// 设置好后再去执行
git clone https://github.com/philuo/plui.git
```

## 🤪 项目开始

```
cd dev

yarn install
```

### 😳 开发者模式

```
yarn dev
```

### 😬 生产打包

```
yarn build
```

### 解释说明
- 执行 `git status` 时看到有文件修改却找不到

因为，配置文件比较多，目录结构显得不清晰，使用了 `.vscode/settings.json` 中将部分文件隐藏掉了

- 关于发包

（1）发包功能已经集成到了CI上，不需要本地发包，也不要本地发包！
（2）发包的版本需要自己使用下方命令，来查看已经存在的最新版本

```bash
# 查看最新版本
yarn info @yuo/plui version
npm view @yuo/plui version
# 查看全部版本
yarn info @yuo/plui versions
npm view @yuo/plui versions
```

在已存在版本的基础上，结合本次发包需求，手动修改 `./dev/package.json` 中的 `version` 字段

（3）发包之前需要前执行build然后阅读并手动修改 ./dev/main.ts中的相关代码块

（4）确定远程没有本次要打的tag，有时本地删除了远程没有删除掉tag需要注意！

（5）确定问题后就可以发包了, 注意tag的版本和npm包的版本要保持一致！，如果CI发包失败，需删除本地和远程的对应tag
到github的actions中查找失败原因，并打tag再次发包

```bash
# 远程最新的tag: v0.0.1
git tag v0.0.2
# 推送tag
git push --tags
```