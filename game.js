player_1name = localStorage.getItem("user_1name");
player_2name = localStorage.getItem("user_2name");

document.getElementById("p_1_name").innerHTML= player_1name;
document.getElementById("p_2_name").innerHTML= player_2name;

var p1_score = 0;
var p2_score = 0;

var ques_turn = "p1";
var answer_turn = "p2";

document.getElementById("user_1score").innerHTML= p1_score;
document.getElementById("user_2score").innerHTML = p2_score;

document.getElementById("question_turn").innerHTML=player_1name;
document.getElementById("answer_turn").innerHTML=player_2name;

function ask_ques(){
    num_1 = document.getElementById("NUMBER1").value; 
    num_2 = document.getElementById("NUMBER2").value;
    result = num_1 * num_2;

    question = "<h4 id = 'word' >Q : "+num_1+ " x "+num_2+"</h4>";
    input_box = "<br> Answer : <input type = 'text' id = 'input_guess_word'/>";
    check_btn = "<br> <br> <button class = 'btn btn-info' onclick = 'check_guess()'> CHECK </button>";

    q_box = question + input_box + check_btn;

    document.getElementById("output_ques").innerHTML=q_box;
    document.getElementById("NUMBER1").value="";
    document.getElementById("NUMBER2").value="";

}
function check_guess(){
    guess = document.getElementById("input_guess_word").value;
    if (guess == result){
      if (answer_turn == "p1"){
        p1_score = p1_score+1;
        document.getElementById("user_1score").innerHTML= p1_score;
      }
      else{
        p2_score= p2_score+1;
        document.getElementById("user_2score").innerHTML= p2_score;
      }
    }

    if (answer_turn == "p1"){
        answer_turn = "p2";
        document.getElementById("answer_turn").innerHTML= player_2name;
    }

    else{
        answer_turn = "p1";
        document.getElementById("answer_turn").innerHTML= player_1name;
    }

    if (ques_turn == "p1"){
        ques_turn = "p2";
        document.getElementById("question_turn").innerHTML= player_2name;
    }
    else{
        ques_turn = "p1";
        document.getElementById("question_turn").innerHTML= player_1name;
    }
    document.getElementById("output_ques").innerHTML="";

}