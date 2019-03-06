# hexo-theme-snippet

Snippet 简洁而不简单，也许是一款你寻找已久hexo主题。

如果本主题也是你喜欢的菜，请动动手指 [Star](https://github.com/shenliyang/hexo-theme-snippet/stargazers) 支持一下

[![Build Status](https://www.travis-ci.org/shenliyang/hexo-theme-snippet.svg?branch=master)](https://www.travis-ci.org/shenliyang/hexo-theme-snippet)
[![Read the Docs](https://img.shields.io/readthedocs/pip/stable.svg)](https://github.com/shenliyang/hexo-theme-snippet/blob/master/README.md)
[![HitCount](http://hits.dwyl.io/shenliyang/hexo-theme-snippet.svg)](http://hits.dwyl.io/shenliyang/hexo-theme-snippet)
[![mnt-image](https://img.shields.io/maintenance/yes/2019.svg)](../../commits/master)
[![codebeat badge](https://codebeat.co/badges/6ef2dcd2-af90-40e0-9628-ac689441f774)](https://codebeat.co/projects/github-com-shenliyang-hexo-theme-snippet-master)
[![GitHub stars](https://img.shields.io/github/stars/shenliyang/hexo-theme-snippet.svg)](https://github.com/shenliyang/hexo-theme-snippet/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/shenliyang/hexo-theme-snippet.svg)](https://github.com/shenliyang/hexo-theme-snippet/network)
[![hexo version](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg)](http://hexo.io)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shenliyang/hexo-theme-snippet/blob/master/LICENSE)


[主题Demo戳这里](http://shenliyang.github.io?rf=gh-demo)

![hexo-theme-snippet](http://snippet.shenliyang.com/img/snippet-screenshots1000.jpg "Snippet主题")


## 主题特点

- [x] 原生JavaScript实现，去jQuery化
- [x] 样式支持CSS预处理器Less，方便主题自定义
- [x] 文章过期提醒功能
- [x] 文章阅读进度条
- [x] 网站公告功能
- [x] 首页图片懒加载
- [x] 首页文章缩略图自动检索文章内图片，支持自动随机图片
- [x] 主题支持响应式
- [x] 支持3D云标签
- [x] 支持文章推送和文章打赏
- [x] 站内本地搜索和谷歌搜索
- [x] 支持多个第三方评论系统
- [x] 支持网站统计和不蒜子访客统计
- [x] 移动端的简洁设计
- [x] 支持代码高亮并支持自定义高亮样式
- [x] 支持Shell脚本通过Travis CI自动化部署Hexo博客
- [x] 支持Hexo自动化部署结果发送邮件和实时推送到钉钉



# **基础篇**

> 如果你在此之前使用的是 `Hexo 2.x` 版本，为了避免未知的错误，请备份好数据，或者建立新的博客目录

>"主题目录" => `themes\hexo-theme-snippet`, "Hexo根目录" => 项目主目录;
"主题配置" => `themes\hexo-theme-snippet\_config.yml`, "Hexo配置" => 项目主目录下`_config.yml`

### 1. 环境搭建

需要`Node.js` 环境、`Git` 环境以及 `Hexo` ,如果你尚未安装或者不了解 `Hexo`，请参考 [官方教程](https://hexo.io/zh-cn/docs/index.html) 进行了解以及安装。如果需要构建工具请自行安装，或使用本主题的Gulp方式。


### 2. 下载主题

有两种方式获取本主题--下载 `*.zip` 文件和通过 `git`方式：

1. 下载 [Snippet主题](https://github.com/shenliyang/hexo-theme-snippet) 文件解压后放在 `themes` 目录下，和博客中的landscape为同级目录

2. Git方式，在Hexo根目录执行：
``` bash
git clone git://github.com/shenliyang/hexo-theme-snippet.git themes/hexo-theme-snippet
```

### 3. 安装主题插件

因为 **hexo-theme-snippet** 使用了 `ejs` 模版引擎 、 `Less` CSS预编译语言以及在官方插件的基础上
进行功能的开发，以下为必装插件：

``` bash
npm i hexo-renderer-ejs hexo-renderer-less hexo-deployer-git -S
```

### 4. 部署主题

> 如果没有更改过主题源文件,也不需要代码优化可以跳过1,2,3步骤


1. gulp打包构建，拷贝主题目录下`package.json`文件到Hexo根目录下，然后安装项目的开发依赖。  [Gulp入门指南](http://www.gulpjs.com.cn/docs/getting-started/)
``` bash
npm i   //安装项目依赖
```

2. 在Hexo根目录下创建一个名为 gulpfile.js 的文件：
``` bash
require('./themes/hexo-theme-snippet/gulpfile');
```

3. 运行 gulp：
``` bash
gulp 或者 gulp default   //执行打包任务
```

4. 清空hexo静态文件和缓存，并重新生成
``` bash
hexo clean && hexo g  //清空缓存并生成静态文件
```

5. 本地预览，确没有问题再进行发布
``` bash
hexo s -p 4000 或者 hexo s  //启动本地服务默认
```

6. 当gulp执行完成，并提示  `please execute： hexo d` 时，可以进行发布
``` bash
hexo d 或者 gulp deploy  //部署发布
```

### 5. 更新主题

主题可能会不定时优化和更新，更新主题代码：

``` bash
cd themes/hexo-theme-snippet
git pull
```

# **主题篇**

### 1. 主题配置

``` yaml

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
## 推荐组合方式：[{type: 'monthly',format: 'YYYY年MM月'},{type: 'yearly',format: 'YYYY年'}]
arch_config:
   type: 'monthly'
   format: 'YYYY年MM月'
   show_count: true
   order: -1

## 标签云设置{/*参数参考：http://www.goat1000.com/tagcanvas-options.php */}
tagcloud:
  tag3d: false // 是否启用3D标签云
  textColour: '#444' // 字体颜色
  outlineMethod: 'block' // 选中模式(outline|classic|block|colour|size|none)
  outlineColour: '#FFDAB9' // 选中模式的颜色
  interval: 30 // 动画帧之间的时间间隔，值越大，转动幅度越大
  freezeActive: true // 选中的标签是否继续滚动
  frontSelect: true // 不选标签云后部的标签
  reverse: true // 是否反向触发
  wheelZoom: false // 是否启用鼠标滚轮

## 友链设置{@链接名称：链接地址{@links:[,,,]}}
links:
  - Hexo官网: https://hexo.io/zh-cn/


# 主题自定义个性化配置

## 网站宣传语{@branding：网站宣传语(不设置显示本地图片)}
branding: 从未如此简单有趣

## 设置banner背景图片{@img:自定义图片地址(支持绝对和相对路径),主题默认{"静态背景":"banner.jpg"},{"动态背景":"banner2.jpg"},{"动态星空背景":"banner3.jpg"}}
## 例如：http://snippet.shenliyang.com/img/banner|2|3.jpg, 或者 './img/banner-img.jpg'(相对本地资源地址)
banner:
  img: http://snippet.shenliyang.com/img/banner.jpg


## 设置carousel{@img:图片地址,@url:点击跳转链接(默认值:"javascript:")}
carousel:
  img: 'img/head-img.jpg'
  url: 'javascript:'

## 首页列表底部面板{@homePanel: 是否开启}
homePanel: true

## 首页文章列表缩略图
### 加载规则: 自定义文章缩略图(在Front-matter中添加的'img'字段) > 文章内的图片 > defaultImgs(随机获取) > 无图模式列表

## 自定义随机图片
defaultImgs:
  - http://www.example.jpg //远程图片链接示例
  - /img/default-1.jpg //本地图片链接示例

### 文章摘要{@摘要显示优先级：自定义摘要 > 自动截取摘要 }
### 自定义摘要范围{@<!--more-->:截取more之前的内容为摘要}
### 自动截取摘要{@excerptLength:自动截取文章前多少个字为摘要，不配置默认：120字}
excerptLength: 120

## 是否开启文章目录
toc: true

## 代码高亮配置{@highlightTheme: 主题名称,(配置暂时不可用，后续开发中…)}

highlightTheme: default //TODO

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

## 文章打赏{@reward: {alipay:支付宝打赏,wepay:微信打赏,tip:打赏提示语; 链接都为空,关闭打赏功能}}
reward:
  alipay: ''
  wepay: '../img/reward-wepay.jpg'
  tip: 赞赏是不耍流氓的鼓励


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

### 来必力(默认选项)
livere:
  enable: true
  livere_uid:

### 友言评论(服务不稳定，经常无法加载)
uyan:
  enable: false
  uyan_id:

### Disqus评论(需要翻墙，或者搭建代理)
disqus:
  enable: false
  shortname: snippet
  count: false

### 畅言评论(需要ICP备案)
changyan:
  enable: false
  appid:
  conf:

### Valine评论 参考网站: [valine评论](https://valine.js.org/)
valine:
  enable: true
  appId:
  appKey:
  placeholder: 说点什么吧
  notify: false // 邮件通知
  verify: false // 验证码
  avatar: mm // avatar头像
  meta: nick,mail // 输入框内容，可选值nick,mail,link
  pageSize: 10

## Gitalk评论 参考网站: [一个基于Github Issue和Preact开发的评论插件](https://gitalk.github.io/)
gitalk:
   enable: false
   clientID: "" // Github 应用ID
   clientSecret: "" // Github 应用密钥
   repo: "hexo-theme-snippet" // 存储你评论 issue 的 Github 仓库名（建议直接用 GitHub Page 的仓库名），注：只写仓库名称，不写完整地址，比如：hexo-theme-snippet, 而不是 https://github.com/shenliyang/hexo-theme-snippet
   owner: shenliyang  // Github 用户名(github登录时用的名称)
   admin: shenliyang // 这个仓库的管理员，可以有多个，用数组表示，一般写自己用户名即可
   perPage: 10 //每次加载的数据大小，最多100
   id: "" // 如果为值"location.pathname"不建议填写(除非你有更好的方式)，由于id字段限制长度为50字符，默认为空时主题会进行判断处理。

## 网站访客统计 [不蒜子统计](http://busuanzi.ibruce.info/)
visit_counter:
   site: true // 总访问量和访问人数统计
   page: true // 文章阅读量统计

## 网站访问统计

### 网盟CNZZ统计 参考网站: [网盟CNZZ](http://www.umeng.com/)
cnzz_anaylytics:

### 百度统计 参考网站: [百度统计](https://tongji.baidu.com/)
baidu_anaylytics:

### 谷歌统计 参考网站：[谷歌统计](https://www.google-analytics.com/)
google_anaylytics:

### 腾讯分析 参考网站：[腾讯分析](http://ta.qq.com/)
tencent_analytics:

### 百度站点认证
baidu-site-verification:

### 百度自动推送(@baidu_push: 是否启用百度自动推送)  参考网站: [百度站长资源](https://ziyuan.baidu.com/college/courseinfo?id=267&page=2#h2_article_title18)
baidu_push:

## ICON配置 (不配则启用本地Font Icon)
fontAwesome: //cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css

## 网站主题配置
since: 2017  //建站时间
robot: 'all'  //控制搜索引擎的抓取和索引编制行为，默认为all
version: 1.2.1  //当前主题版本号
```

### 主题使用技巧及功能扩展
1. 修改新增文章Front-matter模板,修改`scaffolds`目录下的`post.md`模板
> 模板文件内部不要保留注释部分,关键词后面请使用英文冒号
``` yml
  ---
  title: {{ title }} // 标题
  date: {{ date }}   // 时间
  categories: ['分类1','分类2'] // 分类
  tags: ['标签1','标签2']       // 标签
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
  - npm install -g gulp  #全局安装Gulp
  - chmod +x _travis.sh  #授权脚本执行权限

script:
  - hexo clean && hexo g #清除缓存并生成静态文件
  - gulp #执行gulp任务

after_success: #执行成功时(以后扩展功能使用)

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
4. 当 `.travis.yml `配置文件修改完成后，将其提交到远程仓库的 hexo 分支下，此时如果之前的配置一切ok，我们应该能在 Travis CI 的博客项目主页页面中看到自动构建已经在开始执行了。上面会显示出构建过程中的日志信息及状态等。

## 3. 主题开发
Gulp 执行启用主题开发模式
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

如果觉得本主题还不错，== 欢迎  [Star](https://github.com/shenliyang/hexo-theme-snippet/stargazers)下 ==，您的支持和鼓励才是后续更新最大的动力


## 宗旨
主题宗旨：**致力主题简洁轻量，配置方便开箱即用**，该主题项目会持续维护和更新，不会跑路，请放心使用。

> Hexo框架追求的是快速、简洁，高效。喜欢绚丽，添加各种功能，折腾的朋友，建议移步至：[wordpress官网](https://cn.wordpress.org/)


## 你不知道的提Issues技巧
> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。

<b>* 已阅读以上文章，并知晓，可以 </b> [提Issues](https://github.com/shenliyang/hexo-theme-snippet/issues/new) 了。


## 常见问题

#### 1. 搜索功能不能用，content.json文件找不到？

需要安装hexo-generator-json-content插件：

``` bash
npm i hexo-generator-json-content@2.2.0 -S
```

#### 2. 谷歌搜索没有响应？

如果使用谷歌搜索没有响应，确定是否已经科学上网

#### 3. 怎么设置首页文章缩略图自动检索文章内图片？

首页文章缩略图加载规则: 自定义文章缩略图 > 自动检索文章内的图片 > defaultImgs(随机获取) > 无图模式列表

在`Front-matter`中：
指定img变量 -> 为固定缩略图
不指定img变量 -> 自动检索文章内的图片


#### 4. 在url哪里可以访问到本地静态文件吗？

在主题 `source` 目录下新建文件夹，例如: `static`文件夹，然后添加静态资源，例如: xxx.pdf文件， 访问：*`http://yoursite.com/static/xxx.pdf`*

#### 5. 这个主题有分页功能吗？

主题已经集成分页功能，在Hexo配置中修改

| 参数       | 描述        | 默认值  |
| ------------- |:-------------:| :-----:|
| per_page     | 每页显示的文章量 (0 = 关闭分页功能) |  10 |
| pagination_dir     | 分页目录      |   page |

#### 6. 为什么右侧小工具标题都为英文呢？

可能是您忘记预设网站语言，而启用默认语言了，请先在Hexo配置中调整 language 设定

``` bash
language: zh-CN
```

#### 7. 关于Hexo标签和分类方法的分歧

> 只有文章支持分类和标签，您可以在 Front-matter 中设置。在其他系统中，分类和标签听起来很接近，但是在 Hexo 中两者有着明显的差别：分类具有顺序性和层次性，也就是说  `Foo, Bar` 不等于 `Bar, Foo`；而标签没有顺序和层次。

如果您有过使用WordPress的经验，就很容易误解Hexo的分类方式。WordPress支持对一篇文章设置多个分类，而且这些分类可以是同级的，也可以是父子分类。但是Hexo不支持指定多个同级分类。下面的指定方法：

``` bash
categories:
- Diary
- Life
```

会使分类Life成为Diary的子分类，而不是并列分类。因此，有必要为您的文章选择尽可能准确的分类。

Hexo官方文档: [分类方法的分歧](https://hexo.io/zh-cn/docs/front-matter#分类和标签)

> 没有找到你需要的问题解决方案，建议阅读[《你不知道的提Issues技巧》](https://github.com/shenliyang/hexo-theme-snippet#你不知道的提Issues技巧) 再提Issues。  


## 版本更新日志

  - 增加Gitalk评论系统
  - 增加博客自动化部署结果实时推送到手机钉钉上，第一时间了解部署情况

## License

[MIT License](/LICENSE)
