$(function() {
    // var dateContainer = $("#date");
    // // http://date.jsontest.com
        var div1 = $("#books");
        getBooks();
        function getBooks(){
        $.ajax({
            url: "http://localhost:8282/books/",
            type: "GET"
        }).done(function(result) {
                div1.empty();
            var booksArray = result;
            for (var i = 0; i <booksArray.length ; i++) {
                    var input = booksArray[i].title;
                    var idBook = booksArray[i].id;
                    console.log(input);
                    var element = $('<div class="book" data-id=' +idBook + '><h2>' + input + '</h2><div class="book-content"></div><a href="#" class="link", data-id=' +idBook + '>Link</a></div>');
                    div1.append(element);
            }
        });
        }




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
    var inputTytul = $('#tytul');


    var button = $('#send');



    button.on('click', function () {
        var inputAutorValue = inputAutor.val();
        var inputIsbnValue = inputIsbn.val();
        var inputWydawcaValue = inputWydawca.val();
        var inputTytulValue = inputTytul.val();
        var book = { title: inputTytulValue, author: inputAutorValue, isbn: inputIsbnValue, publisher: inputWydawcaValue };
        $.ajax({
            url: 'http://localhost:8282/books/',
            data: JSON.stringify(book),
            dataType: "json",
            contentType: "application/json",
            method: "POST"
        }).done(function() {
            alert('PUT completed');
            getBooks();

        });

    })


    $(document).on('click', ".link", function (event) {
        $.ajax({
            url: "http://localhost:8282/books/" + this.dataset.id,
            method: "DELETE"
        });
    });



});