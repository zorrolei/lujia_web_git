$(function () {
    $('.zx-video').each(function (i,item) {
        var video = $(item).attr('videoUrl');
        var img = $(item).attr('imgUrl');
        var id = $(item).find('>div').eq(0).attr('id');
        console.log(video,img);
        var w = parseInt($(item).width());
        var h = w * (365/710);
        $(item).css({'width':w + 'px','height': h + 'px'});
        
        setplayer(id, video, img);
    });
});

function setplayer(elID,url, imgUrl) {

    console.log(elID,url, imgUrl);
    // var tempEl = "v-player";
    /*
    var thePlayer = jwplayer(tempEl).setup({
        file: url,
        image: imgUrl,
        flashplayer: "./js/vendor/jwplayer/jwplayer.flash.swf",
        autostart: false,
        repeat: false,
        width: "100%",
        height: "100%"
    });
    return thePlayer;
    */
    var videoObject = {
        container: '#' + elID,//“#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
        flashplayer:false,//如果强制使用flashplayer则设置成true
        video:url,//视频地址
        poster:imgUrl
    };
    var player=new ckplayer(videoObject);
    setTimeout(function(){
        $('.logochdknbrnrdiw').hide();
    },66)
    
    return player;
}