/*! TenVideoPlayer_V2 - v2.0.0 - 2018-03-14 15:58:23
 * Copyright (c) 2018
 * Powered by Tencent-Video Web Front End Team 
*/
!function(a,b){function c(b){var c;return b.relatedBtn&&(g?(c=a.$.getUrlParam("from",b.relatedBtn.attr("href")),c=c.replace(/\D/g,"")):c=a.$.getUrlParam("confid",b.relatedBtn.attr("data-downloadurl"))),!c&&b.promotionId&&(c=b.promotionId),!c&&b.downloadBtn&&(c=b.downloadBtn.attr("data-promotionId")),c||140}function d(b,d){var e=d.t,f={vid:e.curVideo.getVid(),appCase:g?3:1,reportStep:b,val:d.initStep||1,_t:+new Date};f.promotionId=c(d),e.config.reportFrom&&e.config.reportFrom.page&&(f.xinwenTpl=e.config.reportFrom.page+""),f.recommendType=1,e.config.isShortVideo&&(f.recommendType=2),a.bossReport.appLunchShowClickReport(f)}function e(a){this.userop=a;var c=b.extend({},f,a);return this.op=c,this.init(c),this}var f={pluginName:"AppRecommend",text1:"\u67e5\u770b\u516c\u4f17\u53f7\u66f4\u591a\u89c6\u9891",picCgi:a.common.get_request_url("rmd_mobile"),navCurrentClass:"tvp_current",downloader:!0,range:[1,2],downloaderCallback:"transferDownloadState",tpl:['<div data-role="relatebox" id="${relateid}" class="tvp_related_layer tvp_related_layer_nobanner tvp_none">','<div class="tvp_related">','<div data-role="relatemove" class="tvp_related_inner">',"<% for(var i=0;i<list.length;i++) {%>",'<ul class="tvp_related_list">',"<% for(var j=0;j<list[i].length;j++) {%>",'<li class="tvp_item">','<a data-alginfo="<%=list[i][j].alginfo%>" data-action="applink" data-vid="<%=list[i][j].id%>" ${iframe} data-role="relatelink" data-url="#" href="#" class="tvp_related_link">','<div class="tvp_figure">','<img src="<%=list[i][j].pic3url%>" alt="" class="tvp_pic">',"<% if(list[i][j].isFull==1) { %>",'<div class="tvp_mark_skew">\u5b8c\u6574\u7248</div>',"<% } %>","<% if(list[i][j].isVipFree===1) { %>",'<div class="tvp_mark_skew">\u4f1a\u5458</div>',"<% } %>","</div>",'<div class="tvp_title"><%=list[i][j].title%></div>',"</a>","</li>","<% }%>","</ul>","<% }%>","</div>",'<div class="tvp_related_nav">',"<% for(var i=0;i<navCount;i++) {%>",'<div data-role="relatetrigger" class="tvp_dot"></div>',"<% }%>","</div>",'<div class="tvp_related_gap"></div>',"</div>",'<div data-role="replay" class="tvp_replay"><div class="tvp_icon_replay"></div>\u91cd\u65b0\u64ad\u653e</div>',"</div>"].join(""),tpl2:['<div style="display:none;" data-role="relatebox" class="tvp_related" id="${relateid}">','   <div data-role="relatemove" class="tvp_related_inner">',"		<% for(var i=0;i<list.length;i++) {%>","			<% if(i==0) {%>",'			<ul class="${listclass}">',"			<% }%>","			<% if(i>0 && i%3==0) {%>","			</ul>",'			<ul class="${listclass}">',"			<% }%>",'			<li class="tvp_item">','				<a data-action="applink" ${iframe} data-role="relatelink" data-url="#" href="#" data-vid="<%=list[i].id%>" class="tvp_related_link"><img class="tvp_figure" src="<%=list[i].picurl%>" /><strong class="tvp_title"><%=list[i].title%></strong></a>',"			</li>","			<% if(i==list.length-1) {%>","			</ul>","			<% }%>","		<% }%>","   </div>","	<% if(list.length>3) {%>",'	<div class="tvp_related_nav">',"	<% for(var i=0;i<list.length;i++) {%>","		<% if(i%3==0) {%>",'			<i data-role="relatetrigger" class="dot"></i>',"		<% }%>","	<% }%>","   </div>","	<% }%>","</div>",'<div style="display:none;" data-role="replay" class="tvp_replay"><i class="tvp_icon_replay"></i>\u91cd\u65b0\u64ad\u653e</div>'].join(""),shortVideoTpl:['<div class="tvp_full_layer tvp_none" data-role="relatebox">','<div class="tvp_layer_inner">','<div class="tvp_desc">\u6253\u5f00\u817e\u8baf\u89c6\u9891</div>','<a href="#" class="tvp_btn_normal" data-role="relatebox-btn"><%=data.title%></a>',"</div>",'<div data-role="replay" class="tvp_replay"><div class="tvp_icon_replay"></div>\u91cd\u65b0\u64ad\u653e</div>',"</div>"].join(""),recommendTips:['<div class="related_banner" data-role="relatetips">','  <div class="related_banner_inner">\u5230\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef\uff0c\u770b\u66f4\u591a\u7cbe\u5f69\u63a8\u8350</div>',"</div>"].join(""),bannerTpl:['<div data-role="appbannerbox" class="tvp_app_download" style="display:none">','   <a data-action="applink" data-role="appbannerlink" class="tvp_download_app" href="${url}" ${iframe}>','		<i class="tvp_icon_logo"></i>','		<span class="tvp_download_app_wording"><span class="tvp_download_app_title" data-role="appbannertext1">${text1}</span><span data-role="appbannertext2" class="tvp_download_app_desc">${text2}</span></span>','		<span data-role="appbannerbtntext" class="tvp_app_btn_em">${btnText}</span>',"	</a>","</div>"].join(""),downLoadLayer:['<div class="tvp_download_layer" data-role="download-layer" style="display:none;">','<div class="tvp_promote_text" data-role="promote-text">\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b\u54df</div>','<div class="tvp_promote_download" data-status="downloading">','<div class="tvp_promote_progress" data-role="appbannerbtnprogress"></div>',"</div>",'<div class="tvp_dowanload_finish tvp_none" data-role="finish">','<span class="tvp_icon_finish"></span>','<span class="tvp_btn">\u4e0b\u8f7d\u5df2\u5b8c\u6210\uff0c\u70b9\u51fb\u5b89\u88c5</span>',"</div>","</div>"].join(""),installedTips:['<div class="tvp_install_success">','<div class="tvp_tips">\u5b89\u88c5\u5df2\u5b8c\u6210\uff0c<br>\u70b9\u51fb\u53ef\u76f4\u63a5\u64ad\u653e</div>','<span class="tvp_arrow"></span>',"</div>"].join("")},g=!1,h=!1;b.extend(e.prototype,{init:function(a){var c=a.t,d=this;this.op=b.extend(a,{$mod:c.$UILayer||c.$videomod,currentIndex:0,relateid:"tvp_related_"+c.playerid,eventType:b.os.hasTouch?"touchend":"click",currentTime:0,replayClicked:!1,tjReportParams:"",isWechatIframe:2==a.type?!0:!1,vidArray:[]}),this.op.useH5Link=a.useH5Link?!0:!1,a.t&&a.t.config&&a.t.config.plugins&&!a.t.config.plugins.AppBanner&&!a.t.config.plugins.AppFollow&&!a.t.config.plugins.AppBannerOnPause&&(this.op.useH5Link=!0),this.fixParams(a),d.isShortVideo=d.op.t.config.isShortVideo,d.longVideoID=d.op.t.config.longVideoID||d.op.vid,this.op.promotionId||(this.op.promotionId=140),this.initFirstEvent(this.op).done(function(){return d.isShortVideo?(d.showRecommendList=!0,d.initShortVideoRole(),d.initEvent(a),void d.fixShortVideoOpen()):void d.requestAndInit(a)}),this.op&&this.op.t&&this.op.t.$video&&this.op.t.$video[0]&&this.op.t.$video.on("tvp:player:videochange",function(){a.vid=a.t.curVideo.getVid(),d.remove(),d.requestAndInit(a)})},remove:function(){this.op&&this.op.$mod&&this.op.$mod.find&&this.op.$mod.find("[data-role=relatebox]").remove()},requestAndInit:function(a){var b=this;b.getList(a).done(function(c){c?(b.showRecommendList=!0,b.initRoles(c),b.fixVideoUrl(a),b.initEvent(a)):b.showRecommendList=!1})},fixShortVideoOpen:function(){var e=this,f={promotionId:this.op.promotionId||c(e.op.t.config),vid:e.longVideoID};e.op&&e.op.t&&(e.op.t.curVideo.getCoverId()||e.op.t.config.coverId)&&(f.cid=e.op.t.curVideo.getCoverId()||e.op.t.config.coverId),f.openUrl=null,f.promotionId&&(this.op.promotionId=f.promotionId),a.app.check(f).done(function(c){if(c&&!c.hasApp&&b.os.android&&(b.browser.WeChat||b.browser.MQQClient)&&this.op&&this.op.useH5Link&&this.op.t&&this.op.t&&this.op.t.curVideo&&this.op.t.curVideo.getVid){var h=f.vid;return h||(h=this.op.t.curVideo.getVid()),void e.$btn.attr("href","//m.v.qq.com/play.html?vid="+h)}if(c&&c.url){if(e.hasApp=c.hasApp,g=c.hasApp,f.promotionId&&(c.url=c.url.replace(/confid=\d+/,"confid="+f.promotionId)),e.op.t.config&&e.op.t.config.shortVideoOpenUrl&&(c.openUrl=e.op.t.config.shortVideoOpenUrl),b.browser.WeChat&&c.openUrl&&-1===c.openUrl.indexOf("wxplugopenid")){var i=b.getUrlParam("openid",window!=top?top.location.href.toString():"");i&&(c.openUrl+="&wxplugopenid="+i)}e.openUrl=c.openUrl,e.downloadUrl=c.url,e.updateFullVideoBtn(c.openUrl,c.url),e.hasApp?d(6,e.op):(a.app.bindTryOpenAppBanner&&e.op&&!e.op.noTryOpenApp&&a.app.bindTryOpenAppBanner({$btn:e.$btn}),d(1,e.op)),e.$btn.on("click",function(){if(e.op.relatedBtn=e.$btn,e.hasApp)d(7,e.op);else{var a=e.$btn.attr("data-wifi")+"";"null"===a&&d(2,e.op)}})}c&&c.hasApp&&a.common.bindNewMethodOnOpenAppInWeixin(e.$btn),e.fixShortVideoUrlEvent(e.op)})},updateFullVideoBtn:function(b,d){if(b=b||this.openUrl,d=d||this.downloadUrl,b&&d){var e={};"undefined"!=typeof b&&(e.href=d),"undefined"!=typeof d&&(e["data-url"]=b),e["data-promotionid"]=this.op.promotionId||c(this.op.t.config),e["data-recommendtype"]=this.op.t.config.isShortVideo?2:1,this.hasApp&&b&&(e.href=b),this.$btn.attr(e),this.hasApp&&a.common.bindNewMethodOnOpenAppInWeixin(this.$btn)}},isShowByLanscape:function(a){var b=!1,c=a.width(),d=a.height(),e=530;return c>d&&c>e&&(b=!0),b},insertTip:function(){},removeTip:function(){var a=this.op,b=a.$mod,c=b.find('[data-role="relatetips"]');c&&c.remove&&c.remove()},fixUI:function(){var a=this.op,c=a.t,d=a.$mod,e=d.find(".tvp_video");if(!c.$UILayer){d.addClass("tvp_container");var f=e.find(".tvp_shadow");f.length||(f=b('<div class="tvp_shadow"></div>').appendTo(e),f.hide()),this.$shadow=f}},fixShowShortVideo:function(a){this.showRecommendList&&(a?(this.$relateBox.removeClass("tvp_none"),this.$replay.removeClass("tvp_none"),this.op.t.$video.trigger("overlay_ctrl_hidereplay")):(this.$relateBox.addClass("tvp_none"),this.$replay.addClass("tvp_none")))},fixShow:function(a){if(this.showRecommendList){if(this.isShortVideo)return void this.fixShowShortVideo(a);if(!this.isLimitVideo()){var b=this,c=this.op,d=c.t,e=c.$mod,f=this.$shadow,g=this.$relateBox,i=this.$replay,j=c.t.$video[0];"function"==typeof c.t.hasDurationLimit&&c.t.hasDurationLimit()||(a?(d.hidePlayer(j),d.$UILayer?(d.hideControl(),d.$video.trigger("overlay_ctrl_hidereplay"),setTimeout(function(){d.$UILayer.removeClass("tvp_onpause")},100)):(e.addClass("tvp_finished"),f.show()),c.currentIndex=0,b.move(),b.setDataListPageInfo(),b.resizeNavDot(),g.show(),setTimeout(function(){e.find(".tvp_overlay_play").addClass("tvp_none")},550),i.show(),h||(h=!0)):(b.hasReport=!1,c.replayClicked||(g.hide(),i.hide(),d.showPlayer(j),d.$UILayer||(e.removeClass("tvp_finished"),f.hide()))))}}},getList:function(c){var d=b.Deferred(),e=f.picCgi,g={otype:"json",size:c.size||12,id:c.vid};return e=a.common.get_request_url("like"),g=c.isWechatIframe?b.extend(g,{uin:0,playright:7,pidx:0,msgtype:175,tablist:9}):b.extend(g,{uin:0,playright:7,pidx:0,msgtype:174,tablist:9}),"undefined"!==b.type(c.isInsertCurId)&&(g.isInsertCurId=c.isInsertCurId),-1===e.indexOf("?")?-1===e.indexOf("callback")&&(e+="?callback=?"):-1===e.indexOf("callback")&&(e+="&callback=?"),c.vidArray=[],b.ajax({url:e,data:g,dataType:"jsonp",jsonCache:600}).done(function(a){var e=!1,f=!1;a&&a.tablist&&1===a.tablist.length&&a.tablist[0]&&a.tablist[0].media_info&&a.tablist[0].media_info.length&&(e=a.tablist[0].media_info,c.tjReportParams=a.tablist[0]),e?(b.each(e,function(a,d){if(c.vidArray.push(d.id),c.isWechatIframe&&(!d.id||!d.pic3url||!d.title))return f=!0,!0;if("object"===b.type(d.c_imgtag))for(var e in d.c_imgtag)"mark_vip_free"===d.c_imgtag[e].param&&(d.isVipFree=1)}),f||d.resolve(e)):d.resolve()}).fail(function(){d.resolve()}),d},getAppBanner:function(){var a=this.op.t,c=b.Deferred();if(b.createAppBanner)c.resolve();else{var d=a.config.libpath+a.config.pluginUrl.AppBanner;b.getScript(d,function(){c.resolve()})}return c},fixUrl:function(a,b){return b&&(a=a.replace("${vid}",b)),a+"&from="+this.op.appmsgid+"&extend="+this.op.biz},fixVideoUrl:function(){var c=this,e=this.op,f=this.$links,h=b.extend({},e);h.vid="",h.openUrl=null,a.app.check(h).done(function(i){return i&&!i.hasApp&&b.os.android&&(b.browser.WeChat||b.browser.MQQClient)&&e&&e.useH5Link?void f.each(function(a,c){var d=b(c),e=d.attr("data-vid");e&&d.attr("href","//m.v.qq.com/play.html?vid="+e)}):(i&&i.url&&(h.promotionId&&(i.url=i.url.replace(/confid=\d+/,"confid="+h.promotionId)),f.each(function(d,f){var g=b(f).data("vid");i.hasApp||b.os.ios?(f.href=c.fixUrl(i.url,g),!i.hasApp&&e.downloadPage&&b(f).attr("href",e.downloadPage)):(b.os.ios||!a.$.browser.WeChat&&!a.$.browser.MQQClient?b(f).attr("href",e.downloadPage||i.url):b(f).attr("data-downloadurl",i.url),e.downloadPage&&b(f).attr("href",e.downloadPage)),b(f).attr("data-url",c.fixUrl(i.openUrl,g))}),g=i.hasApp,g?(f.on("click",function(){var a=b(this);e.relatedBtn=a,d(7,e)}),a.common.bindNewMethodOnOpenAppInWeixin(f)):a.app.bindTryOpenAppBanner&&c.op&&!c.op.noTryOpenApp&&a.app.bindTryOpenAppBanner({$btn:f})),void c.fixVideoUrlEvent(e))})},fixControl:function(a){var b=this.op,c=b.t,d=5,e=c.control.$control,f=c.instance.isFullScreen&&c.config.isHtml5UseFakeFullScreen,g=this.$relateBox;if(1==a&&f){var h=g.css("z-index");e.css("z-index",h+1),c.showControl()}1!==a&&e.css("z-index",d),2==a&&g.is("not:hidden")&&c.hideControl()},fixShortVideoUrlEvent:function(c){var d=this;if(c.downloader&&(this.$btn.attr("data-downloadurl",c.downloadUrl),b.downloadClick_wechat&&b.downloadClick_wechat.hasDownloader&&(b.downloadClick_wechat.bindDownloader(this.$btn,"click"),d.$btn.attr("data-promotionid",c.promotionId),a.app.getAppMd5(c.promotionId).done(function(a){a&&a.md5&&d.$btn.attr("data-downloadmd5",a.md5)})),b.downloadClick_mqq&&b.downloadClick_mqq.hasDownloader)){var e=this.$btn.attr("href");this.$btn&&this.$btn.attr&&e&&0===e.indexOf("http://")&&this.$btn.attr("data-downloadurl",e).removeAttr("href"),b.downloadClick_mqq.bindDownloader(this.$btn,"click")}},fixVideoUrlEvent:function(c){var d=this,e=this.$links||b([]);c.downloader&&!c.downloadPage&&(this.$relateBox.attr("data-downloadurl",c.downloadUrl),b.downloadClick_wechat&&b.downloadClick_wechat.hasDownloader&&(b.downloadClick_wechat.bindDownloader(this.$relateBox,"click"),a.app.getAppMd5(c.promotionId).done(function(a){a&&a.md5&&d.$relateBox.attr("data-downloadmd5",a.md5)})),b.downloadClick_mqq&&b.downloadClick_mqq.hasDownloader&&b.downloadClick_mqq.bindDownloader(this.$relateBox,"click")),e.on("click",function(){var d=b(this),e=d.attr("data-vid"),f=d.attr("data-alginfo");a.bossReport.apprecommend_report({tab_id:c.tjReportParams.tab_id,oper:2,vid:e,page:c.currentIndex,rlist:f})})},fixParams:function(){function a(a){var d=b.getUrlParam(a,c);return d&&(d=decodeURIComponent(d),d=b.filterXSS(d)),d}var c=window!=top?document.referrer:document.location.href,d=this.op;d.biz=a("__biz"),d.appmsgid=a("appmsgid")},swipeHistory:{},move:function(b){this.setDataListPageInfo();var c,e=this.op,f=0,h=e.currentIndex,i=0,j=e.$mod.width(),k=(e.$mod.height(),this);this.op.t.$video.on("tvp:player:videochange",function(){k.swipeHistory={}});var l=function(){if(!k.swipeHistory.hasOwnProperty(f)){k.swipeHistory[f]=null,d(g?6:1,e);var b=e.tjReportParams.media_info.slice(0),c=k.pageSize*f,h=b.splice(c,k.pageSize),i=[];a.$(h).each(function(a,b){i.push(b.alginfo)}),a.bossReport.apprecommend_report({tab_id:e.tjReportParams.tab_id,oper:1,vid:e.vid,page:f,rlist:i.join("+")})}};c=Math.round(e.vidArray.length/this.pageSize)-1,"left"==b&&(f=h+1),"right"==b&&(f=h-1),b||(f=h),0>f||f>c||(i-=f*j,this.$mover.css({"-webkit-transform":"translateX("+i+"px)"}),e.currentIndex=f,this.fixTrigger(),l())},recommendSwipe:function(){var a,b=this,c={};this.$relateBox.off("touchstart").off("touchmove").off("touchend").off("touchcancel").on("touchstart",function(b){b=b&&b.touches&&b.touches.length?b.touches[0]:b,c.x1=b.pageX,c.y1=b.pageY,c.x2=0,c.x2=0,a=!1}).on("touchmove",function(b){return b=b&&b.touches&&b.touches.length?b.touches[0]:b,c.x2=b.pageX,c.y2=b.pageY,a=c.x2&&Math.abs(c.x1-c.x2)>6?!0:!1,a?!1:void 0}).on("touchend touchcancel",function(d){a&&(c.x2-c.x1<0?b.move("left"):b.move("right"))})},setDataListPageInfo:function(){this.op&&this.op.t&&"function"===b.type(this.op.t.isFakeFullscreen)&&this.op.t.isFakeFullscreen()?(this.pageSize=4,this.listInPage=4):(this.pageSize=2,this.listInPage=4),this.baseSize=2},resizeNavDot:function(){if(this.op&&this.op.t&&"function"===b.type(this.op.t.isFakeFullscreen)&&this.op.t.isFakeFullscreen()){var a=parseInt(this.dataListCount/this.pageSize);this.$navDot.each(function(c,d){c+1>a?b(d).css({display:"none"}):b(d).css({display:"inline-block"})})}else this.$navDot.css({display:"inline-block"})},initShortVideoRole:function(){var a=f.shortVideoTpl,c=this.op,d="\u7acb\u5373\u89c2\u770b\u66f4\u591a\u5185\u5bb9";c.t&&c.t.config&&c.t.config.shortVideoBtnTitle&&(d=c.t.config.shortVideoBtnTitle,d&&d.length>13&&(d=d.substr(0,13)+"..."));var e=b.tmpl(a),g=e({data:{title:d}});c.$mod.find("[data-role=relatebox]").remove(),c.$mod.append(g),this.$relateBox=c.$mod.find("[data-role=relatebox]"),this.$replay=c.$mod.find("[data-role=replay]"),this.$btn=c.$mod.find('[data-role="relatebox-btn"]'),this.initDownloadLayer()},initRoles:function(a){this.fixUI(),this.setDataListPageInfo();var c=this.op,d=this,e=c.$mod,g=f.tpl,h="tvp_related_list tvp_related_list_v2";g=b.formatTpl(g,{relateid:c.relateid,listclass:h,iframe:window!=top?'target="_parent"':""});var i,j,k=[],l=[];if(a&&a.length){j=a.slice(0),i=Math.round(j.length/this.baseSize),this.navCount=i,this.dataListCount=j.length;for(var m=0,n=Math.round(j.length/this.listInPage)+1;n>m;m++)l=j.splice(0,this.listInPage),l&&l.length&&k.push(l);var o=b.tmpl(g),p=this.isShowByLanscape(e),q=o({list:k,navCount:i});p&&e.addClass("tvp_landscape"),e.find('[data-role="relatebox"]').remove(),e.append(q),this.$box=e.find('[data-role="relatebox"]'),this.$navDot=e.find('[data-role="relatetrigger"]'),this.resizeNavDot();var r=function(){var a=function(){var a=d.isShowByLanscape(e);a?e.addClass("tvp_landscape"):e.removeClass("tvp_landscape"),c.currentIndex=0,d.move()};setTimeout(function(){a()},500)},s=window!==top&&top.location.href?top:window;s.addEventListener&&s.addEventListener("orientationchange",r,!1);var t=function(){d.setDataListPageInfo(),d.resizeNavDot()};c.$mod.off("tvp:bullet:enterfullscreen").on("tvp:bullet:enterfullscreen",t).off("tvp:bullet:cancelfullscreen").on("tvp:bullet:cancelfullscreen",t),this.$relateBox=e.find("[data-role=relatebox]"),this.$replay=e.find("[data-role=replay]"),this.$links=e.find("[data-role=relatelink]"),this.$triggers=e.find("[data-role=relatetrigger]"),this.$mover=e.find("[data-role=relatemove]"),this.$lists=e.find(".tvp_related_list"),this.fixTrigger(),this.initDownloadLayer(),this.isShortVideo?this.$box.attr("data-recommendtype","2"):this.$box.attr("data-recommendtype","1")}},initDownloadLayer:function(){var c=this.op.$mod,e=this,g=b.tmpl(f.downLoadLayer,{});c.find('[data-role="download-layer"]').remove(),c.append(g);var h,i=c.find("div.tvp_download_layer"),j=i.find(".tvp_dowanload_finish");h=c.parent().parent().find('[data-role="appfollow_btn"]'),h&&h.length||(h=c.parent().parent().find('[data-role="appbannerlink"]')),h.on("tvp:appdownload:downloading",function(){a.log("tvp:appdownload:downloading"),j.addClass("tvp_none"),i.find(".tvp_promote_download").attr("data-status","downloading"),i.show()}).on("tvp:appdownload:complete",function(){a.log("tvp:appdownload:complete"),j.removeClass("tvp_none"),b.downloadClick_wechat?b.downloadClick_wechat.bindDownloader(j.find(".tvp_btn")):b.downloadClick_mqq&&b.downloadClick_mqq.bindDownloader(j.find(".tvp_btn")),h.one("tvp:appdownload:afterInstall",function(){a.log("tvp:appdownload:afterInstall");i.parent();i.hide(),e.isShortVideo&&e.updateFullVideoBtn(e.openUrl,e.openUrl),a.log("isShortVideo="+e.isShortVideo),e.isShortVideo&&e.$btn.off("click.report_3537_open").on("click.report_3537_open",function(){a.log("click.report_3537_open"),d(7,e.op)})}),i.show()}).on("tvp:appdownload:fail",function(){i.hide()}).on("tvp:appdownload:pause",function(){a.log("tvp:appdownload:pause"),i.find(".tvp_promote_download").attr("data-status","pause")}).on("tvp:appdownload:cancel",function(){i.hide()}),this.op.t.$video.on("tvp:player:videochange",function(){i.hide()})},fillBanner:function(a){var c=this,d=b.extend({},c.userop,{style:"none",isAutoReport:!1,reportParams:{int5:1},t:a.t,vid:a.vid,tpl:f.bannerTpl,modId:a.relateid});this.getAppBanner().done(function(){b.createAppBanner(d).done(function(a){c.AppBanner=a;var b=a.$btn,d=b.attr("href");b.attr("href",c.fixUrl(d))})})},fixTrigger:function(){if(this.$triggers.length){var a=this.op.currentIndex,b=this.op;this.$triggers.removeClass(b.navCurrentClass).eq(a).addClass(b.navCurrentClass)}},initFirstEvent:function(a){var c=a.t,d=c.$video,e=d[0],f=!1,g=b.Deferred();return d.on("timeupdate",function(){c&&c.isPlayingLoadingAd&&!c.isPlayingLoadingAd()&&(e.currentTime&&(a.currentTime=e.currentTime),!f&&parseInt(c.getDuration())-parseInt(a.currentTime)<7&&(f=!0,g.resolve()))}),g},isLimitVideo:function(){return this.op.t.instance.DurationLimitInstance.enable},initEvent:function(c){var e=c.t,f=this,g=e.$video,h=g[0],i=this.$replay;i.on(c.eventType,function(){c.replayClicked=!0,setTimeout(function(){c.replayClicked=!1,h.currentTime=c.currentTime=0,h.play()},500)}),g.on("pause paused",function(){if(!e.isTouching&&!f.isShortVideo){var a=parseInt(e.getDuration()),d=this,g=parseInt(b.os.iphone?c.currentTime:h.currentTime);return a-g>5?void f.fixShow(0):void setTimeout(function(){d.paused&&!f.op.t.control.isTouching&&(e.config&&e.config.isShortVideo||f.fixShow(1))},400)}}),g.on("ended",function(){f.showRecommendList?f.fixShow(1):f.op.t.$video.trigger("overlay_ctrl_showreplay")}),g.on("play playing",function(){f.fixShow(0)});var j=this.$box||this.$btn;j&&j.on&&b.os.ios&&j.off("touchend.ios_report_3537_click").on("touchend.ios_report_3537_click",function(){f.hasApp?d(7,f.op):d(1,f.op)}),this.recommendSwipe(),this.op.t.$mod.off("tvp:recommend:orientationchange").on("tvp:recommend:orientationchange",function(){f.move();try{b(top).off("orientationchange.recommend")}catch(a){}});try{b(top).off("orientationchange.recommend").on("orientationchange.recommend",function(){setTimeout(function(){f.move()},400)})}catch(k){}if(this.op.t.$mod.on("tvp:recommend:showtip",function(){f.insertTip()}),this.op.t.$mod.on("tvp:recommend:hidetip",function(){f.removeTip()}),e.control){var l=e.control.$control,m=l.find(a.html5skin.elements.fullscreen);m.on(c.eventType,function(){f.move()})}}}),b.extend(b,{createAppRecommend:function(a){a.promotionId&&(a.openUrl&&(a.openUrl=a.openUrl.replace(/from=\d+/,"from="+a.promotionId)),a.downloadUrl&&(a.downloadUrl=a.downloadUrl.replace(/confid=\d+/,"confid="+a.promotionId)),a.t&&a.t.config&&a.t.config.shortVideoOpenUrl&&(a.t.config.shortVideoOpenUrl=a.t.config.shortVideoOpenUrl.replace(/from=\d+/,"from="+a.promotionId)));var c=b.Deferred(),d=new e(a);return a.t&&(a.t.AppRecommend=d),c.resolve(d),c}})}(tvp,tvp.$),function(a,b){b.extend(a.Player.fn,{buildAppRecommend:function(a){return}})}(tvp,tvp.$);