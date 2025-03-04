document.getElementById("active").innerText = localStorage.getItem("User");

            var bookNamesJSON = localStorage.getItem("bname");
            var bookidJSON = localStorage.getItem("bid");
            var bookAuthorJSON = localStorage.getItem("aname");
            var CategoryJSON = localStorage.getItem("cat");

            if (bookNamesJSON !== null) {
    
                var bookNames = JSON.parse(bookNamesJSON);
            }
            if (bookidJSON !== null) {
                var bookId = JSON.parse(bookidJSON);
            }
        
            if (bookAuthorJSON !== null) {
                var bookAuthor = JSON.parse(bookAuthorJSON);
            }
            if (CategoryJSON !== null) {
                var category = JSON.parse(CategoryJSON);
            }
    
            for(let i=0;i<bookNames.length;i++){

                
                document.write("<tr> <td>"+bookNames[i]+" </td> <td>"+ bookId[i]+"</td> <td>"+bookAuthor[i]+"</td> <td>"+category[i]+"</td> <td> <button onclick='window.location = \"AdminMenu.html?value1="+i+"\"'>Edit Book</button>&nbsp<button onclick='deletebook("+i+");' class=\"delete\">Delete Book</button> </td>  </tr>")
            }
            function deletebook(index)
            {
                bookNames.splice(index, 1);
                bookAuthor.splice(index, 1);
                bookId.splice(index, 1);
                category.splice(index, 1);
                localStorage.setItem("bname", JSON.stringify(bookNames));
                localStorage.setItem("bid", JSON.stringify(bookId));
                localStorage.setItem("aname", JSON.stringify(bookAuthor));
                localStorage.setItem("cat", JSON.stringify(category));
                location.reload();
            }
          