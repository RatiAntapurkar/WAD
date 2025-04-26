$(document).ready(function() {
    $("#submit").click(function() {
        const user = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val()
        };
        let users = JSON.parse(localStorage.getItem("users") || "[]");

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
        alert("User Added");
        
    })
 
    $("#delete").click(function() {
        const emailToDelete = $("#email").val(); 
        let users = JSON.parse(localStorage.getItem("users") || "[]")

        users = users.filter(user => user.email !== emailToDelete);

        localStorage.setItem("users", JSON.stringify(users));
        alert("User Deleted");
        
    })
})