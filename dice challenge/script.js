

function draw(){
    image1=document.getElementsByClassName("image")[0];
    image2=document.getElementsByClassName("image")[1];
    num1="images/dice"+Math.floor(Math.random()*6)+".png";
    num2="images/dice"+Math.floor(Math.random()*6)+".png";
    image1.src=num1;
    image2.src=num2;
    if(num1>num2)
    {
        document.getElementById("heading").innerHTML="Player1 wins🚩";
    }
    else if(num1==num2){
        document.getElementById("heading").innerHTML=" Draw ";
    }
    else
    {
        document.getElementById("heading").innerHTML="Player2 wins🚩";
    }
}


