function addbook() {

    var bookname = document.getElementById("Book's_name").value;
    var bookid = document.getElementById("Book's_ID").value;
    var authorname = document.getElementById("Author_name").value;
    var select = document.getElementById("Category");
    var category = select.options[select.selectedIndex].value;

    
    if (bookname === "" || bookid === "" || authorname === "" || category === "") {
        alert("Please fill in all fields.");
        window.location.reload();
        return;
    }

    var existingBookNames = localStorage.getItem("bname");
    var exisitngBookID = localStorage.getItem("bid");
    var exisitngBookauthor = localStorage.getItem("aname");
    var exisitngCategory = localStorage.getItem("cat");
    var exisitngbool=localStorage.getItem("avb")

    
    if (existingBookNames === null) {
        
        existingBookNames = [];
    } else {
        
        existingBookNames = JSON.parse(existingBookNames);
    }

    if (exisitngBookID === null) {
        
        exisitngBookID = [];
    } else {
        
        exisitngBookID = JSON.parse(exisitngBookID);
    }

    if (exisitngBookauthor === null) {
        
        exisitngBookauthor = [];
    } else {
        
        exisitngBookauthor = JSON.parse(exisitngBookauthor);
    }
    if (exisitngCategory === null) {
        
        exisitngCategory = [];
    } else {
        
        exisitngCategory = JSON.parse(exisitngCategory);
    }
    if (exisitngbool === null) {
       
        exisitngbool = [];
    } else {
        
        exisitngbool = JSON.parse(exisitngbool);
    }

    
    existingBookNames.push(bookname);
    exisitngBookID.push(bookid);
    exisitngBookauthor.push(authorname);
    exisitngCategory.push(category);
    exisitngbool.push("1");


    localStorage.setItem("bname", JSON.stringify(existingBookNames));
    localStorage.setItem("bid", JSON.stringify(exisitngBookID));
    localStorage.setItem("aname", JSON.stringify(exisitngBookauthor));
    localStorage.setItem("cat", JSON.stringify(exisitngCategory));
    localStorage.setItem("avb",JSON.stringify(exisitngbool));

    alert("New book is added successfully");
    window.location.reload();
    
}

