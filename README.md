# 😁plui 菲络组件库

![Plui_Logo.png](./dev/src/assets/image/icon/logo.jpg)

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

```
(1) 不要在npm publish本地发版!!!
(2) 需要发版前看下最新的已存在的版本
(3) 如果现在的package.json中version字段值不是包的最新版，那个更新它，一般来说不要改！
(4) 发版的tag需要同步等于最新版本的包
(6) package.json中的version这个值由CI发包成功后自动更新，手动不要随便动它！
(7) 通过打tag方式触发CI发版，执行 `git tag <patch/minor/major>_1.0.1` 之后 `git push origin <tagName>`
```

## 发包注意事项

- tag命名
```
patch_*.*.*、patch-*.*.*
minor_*.*.*、minor-*.*.*
major_*.*.*、major-*.*.*
# 例如 minor_1.2.0(之前版本应该是minor_1.1.*)
# 例如 patch_1.2.10(之前版本应该是patch_1.2.9)
# 例如 major_2.0.0(之前版本应该是patch_1.*.*/minor_1.*.0)
```

- patch版本的tag在dev/hotfix分支上推送
- minor、major版本的tag在master分支推送

```
（1）确定远程没有本次要打的tag，有时本地删除了远程没有删除掉tag需要注意！

（2）确定后就可以发包了，如果CI发包失败，需删除本地和远程的对应tag
到github的actions中查找失败原因，并打tag再次发包，这样做是为了github的tag与npm包版本对应起来

（3）发包后，验证不能用一定要及时删除它 unpublish, 这个是有 72小时时间限制的，过期npm就不能删除了！

（4）确认本地和远程tag，因为同时开发push 也许会导致tag要推送却已经被别人推送占用了
```

## 发包例子

- 中大型包

发布新组件、版式修改大、代码行数多、增加新的依赖包等

- 小型包

补丁，部分组件上新的属性等，样式兼容等

```bash
# 拉取最新的远程主分支
git checkout master
git pull origin master
# 查看tags
git tag
# 例如远程最新的tag: patch_0.0.10
# 本次是中型版本更新，已经有本地commit并且build后的效果也验证了，那么就先把commit推到远程
# (1) 提交commit到远程
git checkout dev/Perfumere_pre_0.1.0
git push origin dev/Perfumere_pre_0.1.0
# (2) 并在平台上申请PR, 通知CR合入master
# 向master提交pull_request
# (3) CR已经成功合入master后，切换到master上，本地打上tag本次期望更新的版本号
git checkout master
git pull
git tag minor_0.1.0
# (4) 推送tag
git push origin minor_0.1.0
```
