
  document.getElementById("active").innerText = localStorage.getItem("User");
  var bookNamesJSON = localStorage.getItem("bname");
  var bookidJSON = localStorage.getItem("bid");
  var bookAuthorJSON = localStorage.getItem("aname");
  var CategoryJSON = localStorage.getItem("cat");
  var urlParams = new URLSearchParams(window.location.search);
  var bookindex = urlParams.get('value1');

  if (bookNamesJSON !== null) {

      var bookNames = JSON.parse(bookNamesJSON);
  }
  if (bookidJSON !== null) {
      var bookId = JSON.parse(bookidJSON);
  }

  if (bookAuthorJSON !== null) {
      var bookAuthor = JSON.parse(bookAuthorJSON); 
  }
  if (bookAuthorJSON !== null) {
      var category = JSON.parse(CategoryJSON); 
  }
  
 
  document.write("<tr><th>Book's name</th><td>"+bookNames[bookindex]+" </td></tr><tr><th>ID</th><td>"+bookId[bookindex]+" </td></tr><tr><th>Author name</th><td>"+bookAuthor[bookindex]+" </td></tr><tr><th>category</th><td>"+category[bookindex]+" </td></tr>")
