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
        
       
if (category[bookindex]=="Comedy") {
        document.write("<div class=\"pack\"><form><label for=\"Book's_name\">Book name:</label><br><input type=\"text\" id=\"Book's_name\" name=\"Book's_name\" value=\""+bookNames[bookindex]+"\"><br><label for=\"Book's_ID\">Book id:</label><br><input type=\"text\" id=\"Book's_ID\" name=\"Book's_ID\" value=\""+bookId[bookindex]+"\"><br><label for=\"Author_name\">Author Name:</label><br><input type=\"text\" id=\"Author_name\" name=\"Author_name\" value=\""+bookAuthor[bookindex]+"\"><br> Select a Category:<br><select name=\"Category\" id=\"Category\" \"> <option value=\"Romance\">Romance</option><option value=\"Comedy\" selected>Comedy</option><option value=\"Crime\">Crime</option><option value=\"Adventure\">Adventure</option></select><div class=\"button-container\"><br><br><button onclick= 'edit(); alert(\"Changes saved \") ' type=\"button\" value=\"Save\">Save changes</button></div></form></div>");
}     
else if (category[bookindex]=="Crime") {
        document.write("<div class=\"pack\"><form><label for=\"Book's_name\">Book name:</label><br><input type=\"text\" id=\"Book's_name\" name=\"Book's_name\" value=\""+bookNames[bookindex]+"\"><br><label for=\"Book's_ID\">Book id:</label><br><input type=\"text\" id=\"Book's_ID\" name=\"Book's_ID\" value=\""+bookId[bookindex]+"\"><br><label for=\"Author_name\">Author Name:</label><br><input type=\"text\" id=\"Author_name\" name=\"Author_name\" value=\""+bookAuthor[bookindex]+"\"><br> Select a Category:<br><select name=\"Category\" id=\"Category\" \"> <option value=\"Romance\">Romance</option><option value=\"Comedy\" >Comedy</option><option selected value=\"Crime\">Crime</option><option value=\"Adventure\">Adventure</option></select><div class=\"button-container\"><br><br><button onclick= 'edit(); alert(\"Changes saved \")'  type=\"button\" value=\"Save\">Save changes</button></div></form></div>");
}  
else if (category[bookindex]=="Adventure") {
        document.write("<div class=\"pack\"><form><label for=\"Book's_name\">Book name:</label><br><input type=\"text\" id=\"Book's_name\" name=\"Book's_name\" value=\""+bookNames[bookindex]+"\"><br><label for=\"Book's_ID\">Book id:</label><br><input type=\"text\" id=\"Book's_ID\" name=\"Book's_ID\" value=\""+bookId[bookindex]+"\"><br><label for=\"Author_name\">Author Name:</label><br><input type=\"text\" id=\"Author_name\" name=\"Author_name\" value=\""+bookAuthor[bookindex]+"\"><br> Select a Category:<br><select name=\"Category\" id=\"Category\" \"> <option value=\"Romance\">Romance</option><option value=\"Comedy\">Comedy</option><option value=\"Crime\">Crime</option><option selected value=\"Adventure\">Adventure</option></select><div class=\"button-container\"><br><br><button onclick= 'edit(); alert(\"Changes saved \")'  type=\"button\" value=\"Save\">Save changes</button></div></form></div>");
}else
{
    document.write("<div class=\"pack\"><form><label for=\"Book's_name\">Book name:</label><br><input type=\"text\" id=\"Book's_name\" name=\"Book's_name\" value=\""+bookNames[bookindex]+"\"><br><label for=\"Book's_ID\">Book id:</label><br><input type=\"text\" id=\"Book's_ID\" name=\"Book's_ID\" value=\""+bookId[bookindex]+"\"><br><label for=\"Author_name\">Author Name:</label><br><input type=\"text\" id=\"Author_name\" name=\"Author_name\" value=\""+bookAuthor[bookindex]+"\"><br> Select a Category:<br><select name=\"Category\" id=\"Category\" \"> <option value=\"Romance\">Romance</option><option value=\"Comedy\">Comedy</option><option value=\"Crime\">Crime</option><option value=\"Adventure\">Adventure</option></select><div class=\"button-container\"><br><br><button onclick= 'edit(); alert(\"Changes saved \")'  type=\"button\" value=\"Save\">Save changes</button></div></form></div>");
}
function edit()
            {
                
                bookNames[bookindex]=document.getElementById("Book's_name").value;
                bookId[bookindex]=document.getElementById("Book's_ID").value;
                bookAuthor[bookindex]=document.getElementById("Author_name").value;
                category[bookindex]=document.getElementById("Category").value;
                localStorage.setItem("bname", JSON.stringify(bookNames));
                localStorage.setItem("bid", JSON.stringify(bookId));
                localStorage.setItem("aname", JSON.stringify(bookAuthor));
                localStorage.setItem("cat", JSON.stringify(category));
                location.reload();
                history.back();
            }