$(function(){
    getOriginImgInfo();
});

var originImg = {
    "imgUrl": "http://activity.xitaoinfo.com/demo/grand_view.jpg",
    "height": "",
    "imgNum": "",
    "cutUnit": "200",
    "quality": "100",
    "version": "v2"
};

function getOriginImgInfo(){
    $.ajax({
        url: originImg.imgUrl + '?imageInfo',
        type: "GET",
        dataType: "json",
        success: function(data){
            if(data != null){
                originImg.height = data.height;
                originImg.imgNum = data.height/originImg.cutUnit;
                var rawImgWidth = window.devicePixelRatio * $(window).width();

                var list = [];
                var img = '';
                for(var i = 0 ;i < originImg.imgNum ; i++){
                    img = (originImg.imgUrl + "?imageMogr2/crop/!960x"
                    +originImg.cutUnit+"a0a"+(i*originImg.cutUnit)+'/interlace/1'+'/thumbnail/'+rawImgWidth+'x'
                    +'/quality/'+(originImg.quality)+'/ver='+originImg.version);
                    list.push({
                        img:img,
                    })
                }
                var data = {
                    list : list
                }
                console.log(list);
                var html = template("imgWrapper",data);
                $("#wrapper").append(html);
                var imgHeight = $("body").width()*200/960;
                $(".img").height(imgHeight);
                $(".lazy").unveil(100);
            }
        }
    })
}

