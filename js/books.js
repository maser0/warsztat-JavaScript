$(function() {
    // var dateContainer = $("#date");
    // // http://date.jsontest.com
        var div1 = $("#books");
        $.ajax({
            url: "http://localhost:8282/books/",
            type: "GET"
        }).done(function(result) {
            var booksArray = result;
            for (var i = 0; i <booksArray.length ; i++) {
                    var input = booksArray[i].title;
                    var idBook = booksArray[i].id;
                    console.log(input);
                    var element = $('<div class="book" data-id=' +idBook + '><h2>' + input + '</h2><div class="book-content"></div></div>');
                    div1.append(element);
            }
        });
var buttons = $('.button')



        $(document).on('click', ".book", function (event) {

           var currentBook = this;
             $.ajax({
                url: "http://localhost:8282/books/"+ this.dataset.id,
                type: "GET"
            }).done(function(result) {
                console.log(result)
                // console.log(event.target);
                var element= $("<span>" + "Id: "+ result.id+ ", " + "Autor: " + result.author + ", Isbn: " + result.isbn + ", Publisher: " + result.publisher + "</span>")

                 $(currentBook).find('.book-content').html(element);
            });
        })

    var inputAutor = $('#autor');
    var inputIsbn = $('#isbn');
    var inputWydawca = $('#wydawca');
    var inputAutorValue = inputAutor.value;
    var inputIsbnValue = inputIsbn.value;
    var inputWydawcaValue = inputWydawca.value;
    var button = $('#send');

    button.on('click', function () {
        $.ajax({
            url: 'http://example.com/books/',
            data: '{"isbn":"inputAutor", "title":"Thinking in Java"}',
            contentType: "application/json",
            method: "PUT"
        }).done(function () {
            alert('PUT completed');
        });



});