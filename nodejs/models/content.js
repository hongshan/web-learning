var contentData = require("./dummyData/contents");
var getContentFromDB = function(contentID){
    if (contentID[0] == "p") {
            var data = contentData["public"];
            for (var i = 0; i < data.length; i++) {
                if (data[i]["id"] == contentID) {
                    return data[i];
                }
            };
            
    }
    else if (contentID[0] == "s"){
            var data = contentData["private"];
            for (var i = 0; i < data.length; i++) {
                if (data[i]["id"] == contentID) {
                    return data[i];
                }
            };
    }
    return {};
}
var contentModel = function(){
    this.getAllContents =function(req, res, next) {
        res.send({"0":"content1"});
    }
    this.getContent = function(req, res, next) {
        console.log(req.params.contentID[0]);
        
        res.send(getContentFromDB(req.params.contentID));
    }
}



module.exports = new contentModel();