var inputNum=document.querySelectorAll(".try");
var resultNum=[];
var countNum=0;
var clcBtn=document.querySelector("#check");
var winnerCheck=false;
var bonusOn=false;
clcBtn.addEventListener("click",numChecker);

function numChecker(){
    for(var i=0;i<7;i++){
        resultNum[i]=Math.ceil(Math.random()*45);
    }

    for(var i=0;i<7;i++){
        for(var j=0;j<7;j++){
            if(resultNum[i]===resultNum[j]){
                if(i===j) continue;
                resultNum[j]=Math.ceil(Math.random()*45);
            }
        }
    }
    
    for(var i=0;i<6;i++){
        for(var j=0;j<6;j++)
        {
            if(parseInt(inputNum[i].value)===resultNum[j]){
                countNum++;
            }
        }
    }

    if(countNum===6) winnerCheck=true;
    else if(parseInt(inputNum[6].value)===resultNum[6]) bonusOn=true;
    showResult();
}

function showResult(){
    var wrapper=document.querySelector("#input");
    var showGrade=document.querySelector("#display");
    wrapper.style.display="none";

    if(winnerCheck==true){
        showGrade.innerHTML=`<li>1등!! 축하드립니다🎉🎉🎉🎉</li><li>정답 번호는 ${resultNum[0]}, ${resultNum[1]}, ${resultNum[2]}, ${resultNum[3]}, ${resultNum[4]}, ${resultNum[5]}, 보너스번호는 ${resultNum[6]}입니다.</li>`;
    } else if((countNum===5)&&(bonusOn==true)){
        showGrade.innerHTML=`<li>2등!! 축하드립니다🎉🎉🎉🎉</li><li>정답 번호는 ${resultNum[0]}, ${resultNum[1]}, ${resultNum[2]}, ${resultNum[3]}, ${resultNum[4]}, ${resultNum[5]}, 보너스번호는 ${resultNum[6]}입니다.</li>`;
    } else if(countNum===5){
        showGrade.innerHTML=`<li>3등!! 축하드립니다🎉🎉🎉🎉</li><li>정답 번호는 ${resultNum[0]}, ${resultNum[1]}, ${resultNum[2]}, ${resultNum[3]}, ${resultNum[4]}, ${resultNum[5]}, 보너스번호는 ${resultNum[6]}입니다.</li>`;
    } else if(countNum===4){
        showGrade.innerHTML=`<li>4등!! 축하드립니다🎉🎉🎉🎉</li><li>정답 번호는 ${resultNum[0]}, ${resultNum[1]}, ${resultNum[2]}, ${resultNum[3]}, ${resultNum[4]}, ${resultNum[5]}, 보너스번호는 ${resultNum[6]}입니다.</li>`;
    } else if(countNum===3){
        showGrade.innerHTML=`<li>5등!! 축하드립니다🎉🎉🎉🎉</li><li>정답 번호는 ${resultNum[0]}, ${resultNum[1]}, ${resultNum[2]}, ${resultNum[3]}, ${resultNum[4]}, ${resultNum[5]}, 보너스번호는 ${resultNum[6]}입니다.</li>`;
    }
    else{
        showGrade.innerHTML=`<li>꽝😆 다음 기회에.</li><li>정답 번호는 ${resultNum[0]}, ${resultNum[1]}, ${resultNum[2]}, ${resultNum[3]}, ${resultNum[4]}, ${resultNum[5]}, 보너스번호는 ${resultNum[6]}입니다.</li>`;
    }
    
}