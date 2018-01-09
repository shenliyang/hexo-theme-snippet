# hexo-theme-snippet

Snippet 简洁而不简单，也许是一款你寻找已久hexo主题。

如果本主题也是你喜欢的菜，请动动手指 [Star](https://github.com/shenliyang/hexo-theme-snippet/stargazers) 支持一下:pray:

[![Build Status](https://www.travis-ci.org/shenliyang/hexo-theme-snippet.svg?branch=master)](https://www.travis-ci.org/shenliyang/hexo-theme-snippet)
[![codebeat badge](https://codebeat.co/badges/6ef2dcd2-af90-40e0-9628-ac689441f774)](https://codebeat.co/projects/github-com-shenliyang-hexo-theme-snippet-master)
[![mnt-image](https://img.shields.io/maintenance/yes/2017.svg)](../../commits/master)
[![hexo version](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg)](http://hexo.io)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shenliyang/hexo-theme-snippet/blob/master/LICENSE)

[主题预览 Demo](http://shenliyang.github.io) 

![hexo-theme-snippet](http://7xpw2b.com1.z0.glb.clouddn.com/hexo-sinppet/img/snippet-screenshots2000.jpg)


## 主题特点

- [x] 原生JavaScript实现
- [x] 样式支持CSS预处理器Less，方便主题自定义
- [x] 文章过期提醒功能
- [x] 文章阅读进度条
- [x] 网站公告功能
- [x] 首页图片懒加载
- [x] 首页文章缩略图自动检索文章内图片，支持自动随机图片
- [x] 主题支持响应式
- [x] 站内本地搜索和谷歌搜索
- [x] 评论系统支持友言和Gitment
- [x] 版权信息可配置
- [x] 支持网站统计和文章推送
- [x] 移动端的简洁设计
- [x] 支持代码高亮并支持自定义高亮样式
- [x] 支持Shell脚本一键使用Travis CI持续部署Hexo博客


# **基础篇**

> 如果你在此之前使用的是 `Hexo 2.x` 版本，为了避免未知的错误，请备份好数据，或者建立新的博客目录

### 1. 环境搭建

需要`Node.js` 环境、`Git` 环境以及 `Hexo` ,如果你尚未安装或者不了解 `Hexo`，请参考 [官方教程](https://hexo.io/zh-cn/docs/index.html) 进行了解以及安装。如果需要构建工具请自行安装，或使用本主题的Gulp方式。


### 2. 下载主题

有两种方式获取本主题--下载 `*.zip` 文件和通过 `git`方式：

1. 下载 [Snippet主题](https://github.com/shenliyang/hexo-theme-snippet) 文件解压后放在 `themes` 目录下，和博客中的landscape为同级目录

2. Git方式，在Hexo根目录执行：
``` bash
    git clone git://github.com/shenliyang/hexo-theme-snippet.git themes/snippet
``` 

### 3. 安装主题插件

因为 **hexo-theme-snippet** 使用了 `ejs` 模版引擎 、 `Less` CSS预编译语言以及在官方插件的基础上
进行功能的开发，以下为必装插件：

``` bash
    npm install hexo-renderer-ejs --save
    npm install hexo-renderer-less --save
    npm install hexo-deployer-git --save
```

### 4. 部署主题

> 如果没有更改过主题源文件可以跳过1,2步骤


1. Gulp打包构建，压缩优化部署前的代码。  [Gulp入门指南](http://www.gulpjs.com.cn/docs/getting-started/)
``` bash
    npm install   //安装项目依赖
```

2. 拷贝gulpfile.js文件到项目根目录下(非主题目录)
``` bash
    gulp 或者 gulp default   //执行打包任务
```

3. 清空hexo静态文件和缓存，并重新生成
``` bash
    hexo clean && hexo g  //清空缓存并生成静态文件
```

4. 本地预览，确没有问题再进行发布
``` bash
    hexo s -p 4000 或者 hexo s  //启动本地服务默认
```

5. 当gulp执行完成，并提示  `please execute： hexo d` 时，可以进行发布
``` bash
    hexo d 或者 gulp deploy  //部署发布
```


### 5. 更新主题

主题可能会不定时优化和更新，更新主题代码：

``` bash
    cd themes/snippet
    git pull
``` 

# **主题篇**

### 1. 主题配置

``` yaml

# layout -- 布局相关
# language: zh-CN 默认语言

## menu -- 导航菜单显示{[@page:名字,@url:地址,@icon:图标]}
menu:
- page: home 
  url: /
  icon: fa-home

## favicon -- 网站图标位置{@favicon}
favicon: /favicon.ico

## rss --rss文件位置{@rss}
rss: /atom.xml


# 各个小工具的设置

## widgets -- 6个左边小工具{@widgets:[notification,category,archive,tagcloud,friends]}
widgets:
- search
- notification 
- social
- category
- archive
- tagcloud
- friends

# 各个小工具的设置

## 搜索
jsonContent:
  searchLocal: true // 是否启用本地搜索
  searchGoogle: true //是否启用谷歌搜索
  posts:
    title: true 
    text: true
    content: true
    categories: false
    tags: false

## notification config --网站公告设置,支持 html 和 纯文本
notification: |- 
            <p>主题已经上线！欢迎下载或更新~ <br/>
            主题下载：<a href="https://github.com/shenliyang/hexo-theme-snippet" title="fork me" target="_blank">Snippet主题</a> <br/>
            <hr/>接受贡献，包括不限于提交问题与需求，修复代码。欢迎Pull Request<br/>支持主题：<a href="https://github.com/shenliyang/hexo-theme-snippet/stargazers">Star一下</a></p>

## 社交设置{@name:社交工具名字，@icon:社交工具图标，@href:设置工具链接} [参考图标](http://fontawesome.io/icons/)
social:
 - name: Github
   icon: git
   href: //github.com/shenliyang
   
## 文章分类设置{@cate_config:{@show_count:是否显示数字，@show_current: 是否高亮当前category}}
cate_config:
   show_count: true
   show_current: true

## 文章归档设置{@arch_config:/*参数参考：https://hexo.io/zh-cn/docs/helpers.html#list-archives*/}
arch_config:
   type: 'monthly'
   show_count: true
   order: -1

## 友链设置{@链接名称：链接地址{@links:[,,,]}}
links:
    - 主题作者: http://www.shenliyang.com


# 主题自定义个性化配置

## 网站宣传语{@branding：网站宣传语(不设置显示本地图片)}
branding: 从未如此简单有趣

## 设置banner背景图片
banner:
    img:


## 首页文章列表缩略图
### 加载规则: 自定义文章缩略图(在Front-matter中添加的'img'字段) > 文章内的图片 > defaultImgs(随机获取) > 无图模式列表
  
## 自定义随机图片
defaultImgs:
  - http://www.example.jpg //远程图片链接示例
  - /img/default-1.jpg //本地图片链接示例

## 截取文章首页描述字数
excerptLength: 120

## 当无目录时的显示文字，默认为'无'
noCategoryText: '无'

## 代码高亮配置{@highlightTheme: 主题名称(默认为default)}
主题名称：[参考网站](https://cdnjs.com/libraries/highlight.js)
## 常用可配置名称[default,github,foundation,googlecode,monokai-sublime,monokai,monokai,xcode,vs2015,tomorrow,hybrid]

highlightTheme: default 

## 文章过期提醒功能 {@warning:{days:临界天数(默认300天,设置0关闭功能),text:提醒文字/*%d为过期总天数占位符*/}}
warning:
  days: 300  
  text: '本文于%d天之前发表，文中内容可能已经过时。'
  
## 文章内声明{@declaration: {enable:是否开启,title:声明标题,tip:提示内容}}
declaration:
  enable: true
  title: '转载声明'
  tip: |-
      商业转载请联系作者获得授权,非商业转载请注明出处 © <a href="" target="_blank">Snippet</a>


## 主题评论

### gitment
gitment:
  enable: false
  owner: 
  repo: 
  client_id: 
  client_secret: 
  labels: 
  perPage: 
  maxCommentHeight:
  
### 友言评论(默认选项)
uyan:
  enable: true
  uyan_id: 


## 网站访问统计

### 网盟CNZZ统计 参考网站: [网盟CNZZ](http://www.umeng.com/) 
cnzz_anaylytics: 

### 百度统计 参考网站: [百度统计](https://tongji.baidu.com/)
baidu_anaylytics: 

### 百度文章推送  参考网站: [百度站长](http://zhanzhang.baidu.com/)  
baidu_push:

### 谷歌统计 参考网站：[谷歌统计](https://www.google-analytics.com/)
google_anaylytics: 

### 腾讯分析 参考网站：[腾讯分析](http://ta.qq.com/)
tencent_analytics: 


## ICON配置 (不配则启用本地Font Icon)
fontAwesome: //cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css

## 网站主题配置
since: 2017
robot: 'all' ### 控制搜索引擎的抓取和索引编制行为，默认为all
version: 1.2.0

```

### 主题使用技巧及功能扩展
1. 修改新增文章Front-matter模板,修改`scaffolds`目录下的`post.md`模板
``` yml
--- 
title: {{ title }} // 标题
date: {{ date }}   // 时间
categories:        // 分类
tags:              // 标签
comments: false    // 是否开启评论
img:               // 自定义缩略图
---
```

2. 启用站内本地搜索功能

如果要使用本地站点搜索，必须安装插件hexo-generator-json-content来创建本地搜索json文件 
```bash
    npm i hexo-generator-json-content@2.2.0 -S
```
然后修改主题配置_config.yml文件下`jsonContent`相关参数。

# **提升篇**

## 1. Travis CI 介绍
CI即持续集成系统。对个人而言，就是让你的代码在提交到远程(这里是GitHub)，立即自动编译，自动化测试、自动部署等。

不需要在担心更换电脑时，还要从新部署环境的问题，只要你能向远程推送文章，其他的事情就都可以交给Travis CI处理就ok了。

## 2. Travis CI 使用

> 默认前提是已经通过Github进行授权登录Travis网站，并关联了GitHub上的仓库和相关配置。
1. 拷贝主题下的`gulpfile.js` `travis.yml` `travis.sh` 到项目根目录

2. 配置travis.yml 文件
``` yml
language: node_js #使用Node语言环境
node_js: stable #安装稳定版Node

sudo: false  

#cache 启用缓存，加快构建速度
cache: 
  directories:
    - "node_modules"

notifications: #启用通知
  email:
    recipients:
      - snippet@91h5.cc #接收构建消息的邮件 不需要可设置为false
    on_success: never #部署成功时，可设置alway never change
    on_failure: always #部署失败时，同上

# S: Build Lifecycle
install:
  - npm install  #安装依赖

before_script:
  - export TZ='Asia/Shanghai' #设置时区
  - npm install -g gulp  #安装Gulp
  - chmod +x _travis.sh  #授权脚本执行权限

script:
  - hexo clean && hexo g #清除缓存并生成静态文件
  - gulp #执行gulp任务

after_success: #实行成功时(以后扩展功能使用)

after_script:
  - ./_travis.sh #执行部署脚本
# E: Build LifeCycle

branches:
  only:
    - dev #需要监听部署的分支
env:
 global:
   - GH_REF: github.com/shenliyang/shenliyang.github.io.git #更改为自己git地址
```

3. 提交代码到Github，实现自动部署
4. 当 .travis.yml 配置文件修改完成后，将其提交到远程仓库的 hexo 分支下，此时如果之前的配置一切ok，我们应该能在 Travis CI 的博客项目主页页面中看到自动构建已经在开始执行了。上面会显示出构建过程中的日志信息及状态等。

## 3. 主题开发
Gulp 执行启用主题二次开发模式
``` bash
    gulp dev 
```
会监听样式less或者JS文件的变动。然后执行上面的【主题发布】即可。

### 运行预览
``` bash
    hexo clean && hexo g && hexo s -p 4000
```

监听4000端口，使用浏览器打开地址`http://localhost:4000`进行预览。


# **其他**

## 感谢

在设计这款主题的时候参考了好多主题和博客的设计和创意，深表感谢！ 

## 贡献
接受各种形式的贡献，包括但不限于提交问题或需求，修复代码。
欢迎大家提Issue或者Pull Request。

如果觉得本主题还不错，==欢迎  [Star](https://github.com/shenliyang/hexo-theme-snippet/stargazers)下==，您的支持和鼓励才是后续更新最大的动力

## 版本更新

### v1.0.0
- 提交至官方hexo-theme-snippet仓库，Snippet主题正式上线
- 增加Travis CI 持续集成自动部署

### v1.1.0
- 重构样式并优化Less文件，方便二次开发和自定义主题样式。
- 新增 右侧社交边栏 小工具。

### v1.2.0
- 增加本地搜索和谷歌搜索
- 增加返回顶部

## 最近更新日志
- 修改loading图片加载Bug
- 修改table样式覆盖问题
- 简化配置项，方便用户下载即可使用
- 优化Less文件，方便二次开发和专属定制
- 修改主题样式显示细节
- 修改主题语言配置 //TODO

- 整理归类统计代码并增加腾讯统计
- 更新高亮代码库

## License

[MIT](/LICENSE)