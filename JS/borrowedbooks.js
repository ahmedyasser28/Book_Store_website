document.getElementById("active").innerText = localStorage.getItem("User");
       
            var bookNamesJSON = localStorage.getItem("bname");
            var bookidJSON = localStorage.getItem("bid");
            var bookAuthorJSON = localStorage.getItem("aname");
            var CategoryJSON = localStorage.getItem("cat");
            var AvbJSON=localStorage.getItem("avb");
      
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
            
            if (AvbJSON !== null) {
    
                var bools = JSON.parse(AvbJSON);
            }
    
            for(let i=0;i<bookNames.length;i++){


                if(bools[i]=="0")
                {
                    document.write("<tr> <td class=\"unavb\">"+bookNames[i]+" </td> <td class=\"unavb\">"+ bookAuthor[i]+"</td> <td class=\"unavb\">"+bookId[i]+"</td> <td class=\"unavb\">"+category[i]+"</td> <td> <button onclick='returnbook("+i+");' >return</button></td>  </tr>")

                }
               
            }
            
            
            function returnbook(index)
            {
                bools[index]="1";
                localStorage.setItem("bname", JSON.stringify(bookNames));
                localStorage.setItem("bid", JSON.stringify(bookId));
                localStorage.setItem("aname", JSON.stringify(bookAuthor));
                localStorage.setItem("cat", JSON.stringify(category));
                localStorage.setItem("avb",JSON.stringify(bools));
                location.reload();
            }
            
            