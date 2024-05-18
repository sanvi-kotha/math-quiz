function log_in(){
    user1 = document.getElementById("user_1").value;
    user2 = document.getElementById("user_2").value;
    localStorage.setItem("user_1name",user1);
    localStorage.setItem("user_2name", user2);
    window.location.replace("game.html");
    
}


