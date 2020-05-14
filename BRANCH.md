# Git工作示意图
![分支介绍](http://image.plog.top/github-brand/6.png?imageView2/0/format/webp/q/75)
```
master拉分支，功能特性拉dev分支，线上bug拉hotfix分支
feature或hotfix分支完成开发，自测后自己觉得没大问题了切换到test分支merge该分支
发布test测试通过后，切换至feature/hotfix分支发起MR，合并到master分支
发布master代码到  预发布【内测】（pretest）--> 线上（production）
```

## 分支介绍
- master:     可发布环境(全局仅一条分支)

- dev:        开发环境(每个开发者都有多个此类型分支)

- hotfix:     热修复环境(每个开发者都有多个此类型分支)

- test:       测试环境(全局仅一条分支)


### master分支
```
master分支用来发布到生产环境
master分支的代码要保证是随时可发布
master分支需要从其他分支提交Merge Request（MR）审批后的代码
master分支的代码发布后，应该打一个tag，记录版本库的一个快照
tag命名约定：v(大版本号.小版本号.小版本号下的发布次数)，如v1.1.1
```

### dev分支
```
dev分支是从master拉出的分支
dev分支用来开发功能特性
dev分支合并到master时需要提交MR
dev分支是短期分支，原则上代码合并到master后，可以删除特定分支
dev分支命名约定：dev/开发者_功能(全小写+下划线)，如：dev/perfumer_avator, //开发头像功能
```

### hotfix分支
```
hotfix分支是从master拉出的分支
hotfix分支用来修复线上bug
hotfix合并到master时需要提交MR
hotfix分支是短期分支，原则上代码合并到master后，可以删除特定分支
hotfix分支命名约定：hotfix/开发者_功能(全小写+下划线)，如：hotfix/perfumer_avator //修复头像功能模块bug
```

### test分支
```
test分支用来决定是否可以从对应版本的dev、hotfix发布到master环境
test分支是dev分支、hotfix分支的代码集合
test分支的代码不应该直接被修改
test分支不应该合并到其他分支
```