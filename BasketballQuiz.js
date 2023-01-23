function validateQuiz(){
    var ans1 = document.getElementById("a").value;
 var score = 0;
if(ans1 == "5"){
score++;
}
var ans2 = document.getElementById("b").value;
if(ans2 == "No"){
    score++;
    }
    var ans3 = document.getElementById("c").value;
if(ans3 == "Shooting Guard" || ans2 == "Point Guard" || ans2 == "Center" || ans2 == "Small Forward" || ans2 == "Power Forward"){
    score++;
    }
    var ans4 = document.getElementById("d").value;
    if(ans4 =="Shooting" || ans4 == "Dribbling" || ans4 =="Passing" || ans4 == "Rebounding" || ans4 == "Defense"){
        score++;
    }
    var ans5 = document.getElementById("e").value;
    if(ans5 == "LeBron James" || ans5 == "Kobe Bryant" || ans5 == "Michael Jordan"){
        score++;
    }
    alert("Score: "+score);
}