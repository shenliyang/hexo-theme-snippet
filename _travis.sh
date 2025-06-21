#--------------------------------------------
#!/bin/bash
# author：shenliyang
# website：https://github.com/shenliyang
# slogan：梦想还是要有的，万一实现了呢。
#--------------------------------------------

#定义时间
time=`date +%Y-%m-%d\ %H:%M:%S`

#执行成功
function success(){
   echo "success"
}

#执行失败
function failure(){
   echo "failure"
}

#默认执行
function default(){

  git clone https://${GH_REF} .deploy_git
  cd .deploy_git

  git checkout master
  cd ../

  mv .deploy_git/.git/ ./public/
  cd ./public

cat <<EOF >> README.md
部署状态 | 集成结果 | 参考值
---|---|---
完成时间 | $time | yyyy-mm-dd hh:mm:ss
部署环境 | $TRAVIS_OS_NAME + $TRAVIS_NODE_VERSION | window \| linux + stable
部署类型 | $TRAVIS_EVENT_TYPE | push \| pull_request \| api \| cron
启用Sudo | $TRAVIS_SUDO | false \| true
仓库地址 | $TRAVIS_REPO_SLUG | owner_name/repo_name
提交分支 | $TRAVIS_COMMIT | hash 16位
提交信息 | $TRAVIS_COMMIT_MESSAGE |
Job ID   | $TRAVIS_JOB_ID |
Job NUM  | $TRAVIS_JOB_NUMBER |
EOF

  git init
  git config user.name "shenliyang"
  git config user.email ""
  git add .
  git commit -m "Update Blog By TravisCI With Build $TRAVIS_BUILD_NUMBER"
  # Github Pages
  git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master
  # Gitee Pages
  git push --force --quiet "https://shenliyang:${GITEE_TOKEN}@${GITEE_REF}" master:master

  # Create Tag
  git tag v1.3.$TRAVIS_BUILD_NUMBER -a -m "Auto Taged By TravisCI With Build $TRAVIS_BUILD_NUMBER"
  # Github Pages
  git push --quiet "https://${GH_TOKEN}@${GH_REF}" master:master --tags
  # Gitee Pages
  git push --quiet "https://shenliyang:${GITEE_TOKEN}@${GITEE_REF}" master:master --tags
}

case $1 in
    "success")
	     success
       ;;
    "failure")
	     failure
	     ;;
	         *)
       default
esac

