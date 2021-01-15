# Git 工作示意图

```
master拉分支，功能特性拉dev分支，bug拉hotfix分支
```

## 分支介绍

- master: 可发布环境(全局仅一条分支)

- dev: 开发环境(每个开发者都有多个此类型分支)

- hotfix: 热修复环境(每个开发者都有多个此类型分支)

### master 分支

```
master分支用来发布到生产环境
master分支的代码要保证是随时可发布
master分支需要从其他分支提交Merge Request（MR）审批后的代码
master分支的代码发布后，应该打一个tag，记录版本库的一个快照
tag命名约定：
发布的是期望下一版的版本，例如上一版本是0.0.3的后续版本
小版本： patch_0.0.4
中版本： minor_0.1.0
大版本： major_1.0.0
```

### dev 分支

```
dev分支是从master拉出的分支
dev分支用来开发功能特性
dev分支合并到master时需要提交MR
dev分支是短期分支，原则上代码合并到master后，可以删除特定分支
dev分支命名约定：dev/开发者_功能(全小写+下划线)，如：dev/perfumer_avator, //开发头像功能
```

### hotfix 分支

```
hotfix分支是从master拉出的分支
hotfix分支用来修复线上bug
hotfix合并到master时需要提交MR
hotfix分支是短期分支，原则上代码合并到master后，可以删除特定分支
hotfix分支命名约定：hotfix/开发者_功能(全小写+下划线)，如：hotfix/perfumer_avator //修复头像功能模块bug
```
