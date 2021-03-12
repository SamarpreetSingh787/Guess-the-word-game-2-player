player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_ques").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_ans").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_div_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_div_2);
    console.log(charAt2);

    length_m_1 = word.length - 1;
    charAt3 = word.charAt(length_m_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    ques_w = "<h4 id='word_display'>Q. " + remove_charAt3 + "</h4>";
    ipt_bx = "<br>Answer: <input type='text' id='ipt_word' placeholder='Enter your answer here'>";
    check_btn = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = ques_w + ipt_bx + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

ques_turn = "player1";
ans_turn = "player2";

function check() {
        get_ans = document.getElementById("ipt_word").value;
        ans = get_ans.toLowerCase();
        console.log("Answer in lower case - " + ans);

        if (ans == word) 
        {
          if (ans_turn == "player1") {
              player1_score = player1_score+1;
              document.getElementById("player1_score").innerHTML = player1_score;
         
          }
          else{
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;
          }       
        }
        if (ques_turn == "player1"){
            ques_turn ="player2";
            document.getElementById("player_ques").innerHTML = "Question turn - " + player2_name;
        }
        else {
            ques_turn ="player1";
            document.getElementById("player_ques").innerHTML = "Question turn - " + player1_name;
        }

        if (ans_turn == "player1"){
            ans_turn ="player2";
            document.getElementById("player_ans").innerHTML = "Answer turn - " + player2_name;
        }
        else {
            ans_turn ="player1";
            document.getElementById("player_ans").innerHTML = "Answer turn - " + player1_name;
        }

        document.getElementById("output").innerHTML = "";
}