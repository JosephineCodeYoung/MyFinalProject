function validateQuiz(){
    var ans1 = document.getElementById("a").value;
    //alert(ans1);
 var score = 0;
if(ans1 == "11"){
score++;
}
alert(score);
}
function all(){
var ans3 = document.getElementById("c").value;
if(ans3 == "Quarterback"|| ans3 =="Running Back" || ans3 =="Fullback" || ans3 =="Wide Reciever" || ans3 =="Tight End" || ans3 =="Center" || ans3 =="Offensive Guards" || ans3 =="Left Guard" || ans3 =="Right Guard"|| ans3 =="Offensive Tackles" || ans3 =="Left Tackle" || ans3 =="Right Tackle"){
    score++;
    }
    
    var ans4 = document.getElementById("d").value;
    if(ans4 == "Shooting" || ans4 == "Dribbling" || ans4 == "Passing" || ans4 == "Recieving" || ans4 == "Tackling"){
        score++;
    }
    
    var ans5 = document.getElementById("e").value;
    if(ans5 =="Lionel Messi" || ans5 =="Cristiano Ronaldo" || ans5 =="Kylian Mbappe" || ans5 =="Neymar Jr" || ans5 =="Neymar Junior"){
        score++;
    }
    alert("Score: "+score);
}