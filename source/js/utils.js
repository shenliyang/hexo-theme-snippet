/* global NexT: true */

Snippet.utils = Snippet.$u = {
    /**
     * Wrap images with fancybox support.
     */
    wrapImageWithFancyBox: function () {
        $('.post img').not('.group-picture img').not('.post-reward img').each(function () {

            var $image = $(this);
            var imageTitle = $image.attr('title');
            var imageDataSrc = $image.data('src');
            var $imageWrapLink = $image.parent('a');

            if ($imageWrapLink.size() < 1) {
                if(imageDataSrc != null && imageDataSrc != undefined){
                    $imageWrapLink = $image.wrap('<a href="' + imageDataSrc + '"></a>').parent('a');
                }else{
                    $imageWrapLink = $image.wrap('<a href="' + this.getAttribute('src') + '"></a>').parent('a');
                }
            }

            $imageWrapLink.addClass('fancybox');
            $imageWrapLink.attr('rel', 'group');

            if (imageTitle) {
                $imageWrapLink.append('<p class="image-caption">' + imageTitle + '</p>');
                $imageWrapLink.attr('title', imageTitle); //make sure img title tag will show correctly in fancybox
            }
        });

        $('.fancybox').fancybox({
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    },

    registerBackToTop: function () {
        //添加置顶
        var THRESHOLD = 50;
        var $top = $('.back-to-top');

        $(window).on('scroll', function () {
            $top.toggleClass('back-to-top-on', window.pageYOffset > THRESHOLD);
        });

        $top.on('click', function () {
            $('body').velocity('scroll');
        });
    },
    /**
     * Escape meta symbols in jQuery selectors.
     *
     * @param selector
     * @returns {string|void|XML|*}
     */
    escapeSelector: function (selector) {
        return selector.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, '\\$&');
    },
    displaySidebar: function () {
        if (!this.isDesktop() || this.isPisces()) {
            return;
        }
        $('.sidebar-toggle').trigger('click');
    },
    getScrollbarWidth: function () {
        var $div = $('<div />').addClass('scrollbar-measure').prependTo('body');
        var div = $div[0];
        var scrollbarWidth = div.offsetWidth - div.clientWidth;

        $div.remove();

        return scrollbarWidth;
    },
    /**
     * Affix behaviour for Sidebar.
     *
     * @returns {Boolean}
     */
    needAffix: function () {
        return true;
    }

}