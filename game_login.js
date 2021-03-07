function strt() {
    player1_n=document.getElementById("player1_input").value;
    player2_n=document.getElementById("player2_input").value;

    localStorage.setItem("player1_name",player1_n);
    localStorage.setItem("player2_name",player2_n);
    window.location="game_page.html";
}