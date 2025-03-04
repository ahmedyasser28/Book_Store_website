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

                
                if(bools[i]=="1")
                {
                    document.write("<tr> <td>"+bookNames[i]+" </td> <td>"+ bookAuthor[i]+"</td> <td>"+bookId[i]+"</td> <td>"+category[i]+"</td> <td> <button onclick='window.location = \"book_detials.html?value1="+i+"\"'>View details</button>&nbsp<button onclick='borrow("+i+");' class=\"borrow\">borrow</button> </td>  </tr>")

                }
                else
                {
                    document.write("<tr> <td class=\"unavb\">"+bookNames[i]+" </td> <td class=\"unavb\">"+ bookAuthor[i]+"</td> <td class=\"unavb\">"+bookId[i]+"</td> <td class=\"unavb\">"+category[i]+"</td> <td > <button onclick='window.location = \"book_detials.html?value1="+i+"\"'>View details</button>&nbsp<button  class=\"cantborrow\">borrow</button></td>  </tr>")

                }
               
            }
            
            
            function borrow(index)
            {
                bools[index]="0";
                localStorage.setItem("bname", JSON.stringify(bookNames));
                localStorage.setItem("bid", JSON.stringify(bookId));
                localStorage.setItem("aname", JSON.stringify(bookAuthor));
                localStorage.setItem("cat", JSON.stringify(category));
                localStorage.setItem("avb",JSON.stringify(bools));
                location.reload();
            }
            
            