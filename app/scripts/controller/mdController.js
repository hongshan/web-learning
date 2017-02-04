define(["app", "editormd", "marked", "en", 
                "link-dialog",
                "reference-link-dialog",
                "image-dialog",
                "code-block-dialog",
                "table-dialog",
                "emoji-dialog",
                "goto-line-dialog",
                "help-dialog",
                "html-entities-dialog", 
                "preformatted-text-dialog"], function(app, editormd,marked){
    app.controller('mdController', function($scope, $location, $state) {

        console.log("helllo", marked)
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: true,
          smartLists: true,
          smartypants: false
        });

        var content = marked("# (GitHub-Flavored) Markdown Editor\n\n"+

"Basic useful feature list:\n"+

" * Ctrl+S / Cmd+S to save the file\n"+
" * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML\n"+
" * Drag and drop a file into here to load it\n"+
" * File contents are saved in the URL so you can share files"+
" * [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing", {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
}, function(err, data){
    console.log("callback ", data)
    $("#test-editormd").html(data)
})
        // var show = document.createElement("hello")
        // console.log("content", content)
        // var show = document.createTextNode(content)
        

        // $("#test-editormd").html(content)

            // var testEditor;
            // // editormd.loadCSS("bower_components/codemirror/addon/fold/foldgutter");
            // testEditor = editormd("test-editormd", {
            //     emoji : false,
            //     path    : "bower_components/",
            // });
                
    });
})