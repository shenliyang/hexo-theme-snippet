function lazyImage(post) {
  var content = post.content.toString();
  var imgRe = /<img.*?\ssrc=[\'\"]\S+[\'\"]\s.*?>/gim;
  var urlRe = /(http:|https:|\/|\.)\S+(?="\s)/i;
  var imgUrlsArr = content.match(imgRe);
  var data = [];
  imgUrlsArr &&
    imgUrlsArr.forEach(function (item) {
      data.push(item.match(urlRe)[0]);
    });
  return data;
}

hexo.extend.helper.register("lazyImage", lazyImage);
