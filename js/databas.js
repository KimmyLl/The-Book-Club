//Titel på hemsidan
$.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jhilAunbb77LGdv58T8iWHJbgNBgvxVr", function(data){
  var headers = [document.getElementById("title1"), document.getElementById("title2"), document.getElementById("title3"), document.getElementById("title4"), document.getElementById("title5"), document.getElementById("title6")]
  for (var i = 0; i < 6; i++) {
    headers[i].innerHTML = JSON.stringify(data.results.books[i].title);
  }
});

//Titel på hover
$.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jhilAunbb77LGdv58T8iWHJbgNBgvxVr", function(data){
  var headers = [document.getElementById("hovertitle1"), document.getElementById("hovertitle2"), document.getElementById("hovertitle3"), document.getElementById("hovertitle4"), document.getElementById("hovertitle5"), document.getElementById("hovertitle6")]
  for (var i = 0; i < 6; i++) {
    headers[i].innerHTML = JSON.stringify(data.results.books[i].title);
  }
});

//Författare på hemsidan
$.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jhilAunbb77LGdv58T8iWHJbgNBgvxVr", function(data){
  var headers = [document.getElementById("author1"), document.getElementById("author2"), document.getElementById("author3"), document.getElementById("author4"), document.getElementById("author5"), document.getElementById("author6")]
  for (var i = 0; i < 6; i++) {
    headers[i].innerHTML = JSON.stringify(data.results.books[i].author);
  }
});

//Författare på hover
$.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jhilAunbb77LGdv58T8iWHJbgNBgvxVr", function(data){
  var headers = [document.getElementById("hoverauthor1"), document.getElementById("hoverauthor2"), document.getElementById("hoverauthor3"), document.getElementById("hoverauthor4"), document.getElementById("hoverauthor5"), document.getElementById("hoverauthor6")]
  for (var i = 0; i < 6; i++) {
    headers[i].innerHTML = JSON.stringify(data.results.books[i].author);
  }
});

//Sammanfattning på boken vid hover
$.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jhilAunbb77LGdv58T8iWHJbgNBgvxVr", function(data){
  var headers = [document.getElementById("description1"), document.getElementById("description2"), document.getElementById("description3"), document.getElementById("description4"), document.getElementById("description5"), document.getElementById("description6")]
  for (var i = 0; i < 6; i++) {
    headers[i].innerHTML = JSON.stringify(data.results.books[i].description);
  }
});
