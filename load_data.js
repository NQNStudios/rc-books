document.addEventListener("DOMContentLoaded", function(){
    console.log("document ready");
    var options = {
    valueNames: [ 'title', 'authors', 'shelf' ],
    item: '<tr><td class="title"></td><td class="authors"></td><td class="shelf"></td></tr>'
    };

    var bookList = new List('books', options, books);
});
