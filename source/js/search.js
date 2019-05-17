(function() {
    var searchWord = document.getElementById('search-key'),
        searchLocal = document.getElementById('search-local'),
        searchForm = document.getElementById('search-form'),
        searchMask = document.getElementById('result-mask'),
        searchWrap = document.getElementById('result-wrap'),
        searchResult = document.getElementById('search-result'),
        searchTpl = document.getElementById('search-tpl').innerHTML,
        winWidth, winHeight, searchData;
    if (window.innerWidth) {
        winWidth = parseInt(window.innerWidth);
    } else if ((document.body) && (document.body.clientWidth)) {
        winWidth = parseInt(document.body.clientWidth);
    }
    if (window.innerHeight) {
        winHeight = parseInt(window.innerHeight);
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = parseInt(document.body.clientHeight);
    }
    searchMask.style.width = winWidth + 'px';
    searchMask.style.height = winHeight + 'px';

    function tpl(html, data) {
        return html.replace(/\{\w+\}/g, function(str) {
            var prop = str.replace(/\{|\}/g, '');
            return data[prop] || '';
        });
    }

    function hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    function addClass(obj, cls) {
        if (!hasClass(obj, cls)) obj.className += " " + cls;
    }

    function removeClass(obj, cls) {
        if (hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    }

    function matcher(post, regExp) {
        return regtest(post.title, regExp) || regtest(post.text, regExp);
    }

    function regtest(raw, regExp) {
        regExp.lastIndex = 0;
        return regExp.test(raw);
    }

    function searchShow(){
        removeClass(searchWrap, 'hide');
        removeClass(searchMask, 'hide');
    }

    function searchHide(){
        addClass(searchWrap, 'hide');
        addClass(searchMask, 'hide');
    }

    function loadData(success) {
        if (!searchData) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', document.getElementsByTagName('meta')['root'].content + 'content.json', true);
            xhr.onload = function() {
                if (this.status >= 200 && this.status < 300) {
                    var res = JSON.parse(this.response || this.responseText);
                    searchData = res instanceof Array ? res : res.posts;
                    success(searchData);
                } else {
                    console.error(this.statusText);
                }
            };
            xhr.onerror = function() {
                console.error(this.statusText);
            };
            xhr.send();
        } else {
            success(searchData);
        }
    }

    function render(data) {
        var html = '';
        if (data.length) {
            html = data.map(function(post) {
                return tpl(searchTpl, {
                    title: filter(post.title, 'title'),
                    path: post.path,
                    content: filter(post.text, 'content')
                });
            }).join('');
        } else {
            if(searchWord.value == ''){
                searchHide();
            } else {
                html = '<div class="tips"><p>没有找到相关结果!</p></div>';
            }
        }
        searchResult.innerHTML = html;
    }

    function filter(art, type) {
        var keyword = searchWord.value;
        var index = art.indexOf(keyword);
        var artRe = art.replace(keyword, '<b>' + keyword + '</b>');
        if (type == 'title') {
            return artRe
        }
        if (type == 'content' && index > 0) {
            return artRe.substr(index - 15, 45);
        }
    }

    function search(e) {
        var key = this.value.trim();
        if (!key) {
            render('');
            return;
        }
        var regExp = new RegExp(key.replace(/[ ]/g, '|'), 'gmi');
        loadData(function(data) {
            var result = data.filter(function(post) {
                return matcher(post, regExp);
            });
            render(result);
        });
        e.preventDefault();
        searchShow();
        searchWord.onfocus = function() {
            searchShow();
        };
    }
    searchWord.onfocus = function() {
        searchWord.addEventListener('input', search);
    };
    searchMask.onclick = function() {
        searchHide();
    };
})();