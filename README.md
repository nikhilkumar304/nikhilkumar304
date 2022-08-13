<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nikhil_kumar_portfolio</title>
    <style>
        #body{
            background: white ;
            color: black;
        }
        img{
            width: 150px;
            height: 150px;
            border-radius: 100px;
        }
        tr{
            display: flex;
            margin: 23px 0px;
            padding: 0px 11px;
        }
        td{
            padding: 2px 12px;
            font-size: 18px;
            line-height: 22px;
        }
        hr{
            height: 1px;
            border: 1px solid black;
            background-color: black;
        }
        ul{
            line-height: 22px;
        }
        .technical-section {
           margin: 0px 40px;
        }
        .technical-section li{
            padding: 7px 2px;
        }
        .technical-td{
            padding-right: 250px;
        }
        .technical-tr{
            margin: 0px 0px;
        }
        
        h4{
            margin: 2px 2px;
        }
        #btn{
            float: right;
            margin-top: -180px;
            margin-right: 20px;
            width: 70px;
        }
    </style>
</head>
<body id="body">
    <table>
        <tr>
            <td>
                <img id ="img" src="Profile2.jpg" alt="image" >
            </td>
            <td>
                <h3>Nikhil Kumar</h3>
                <em>student of jecrc university</em><br>
               web developer & designer<br> 
               i 💔 coffee and brew my own beers
            </td>
        </tr>
    </table>
    <button id="btn">dark</button>
    <hr class="hr">
    <h4>Education</h4>
    <ul>
        <li>MCA from jecrc university,jaipur                (pursuing 2021-2023)</li>
        <li>BSC from js university,shikohabad               (2021)</li>
        <li>Intermediate from Kids Corner Happy sr.sec school,firozabad             (2017)</li>
        <li>High School from Kids Corner Happy sr.sec school,firozabad              (2015)</li>
    </ul>
    <hr class="hr">
    <h4>Technical Skills</h4>
    <table class="technical-section">
        <tr class="technical-tr">
            <td class="technical-td">
                <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>JAVASCRIPT</li>
                   <li>MYSQL</li> 
                </ul>
            </td>
            <td class="technical-td">
                <ul>
                   <li>CORE JAVA</li>
                   <li>C</li>
                   <li>C++</li> 
                   <li>CORE PYTHON</li> 
                </ul>
            </td>
        </tr>
    </table>
    <hr class="hr">
    <h4>Experience & Certificate:</h4>
        <ul class="experience-td">
           <li>Workshop of FullStack Development by Edureka</li>
           <li>Workshop of UI/UX by Jecrc university</li>
           <li>Workshop of Microsoft Excel by Ludifu</li>
           <li>Course on Computer Concepts(CCC)</li> 
           <li>Web Development Crash Course by Udemy - 2022</li> 
           <li>Python Course by Programming Hero - 2021</li> 
           <li>Python Crash Course by Eduonix - 2020</li> 
        </ul>
    <hr class="hr">
    <h4>Extra Curricular Activities:</h4>
       <ul class="ExtraCCA">
          <li>Participated in Valorant in JU RHYTHM 2022</li>
          <li>Participated in Amphibot in JU RHYTHM 2022</li>
          <li>Particpated in Chess Competition in Kids Corner 2015</li>
       </ul>
    <hr class="hr">  
    <h4>Hobbies:</h4>
       <ul class="hobbies">
          <li>Teaching</li>
          <li>Listening music</li>
          <li>Photography</li>
          <li>Surfing Internet</li>
       </ul>
       
       
<script>
document.getElementById('btn').addEventListener('click',set);
function set()
{
    document.getElementById('btn').innerText;
    switch(document.getElementById('btn').innerText)
    {
        case "dark":
        {    
            document.querySelector("img").src="Profile.jpg";
            document.querySelector("body").style.background="black";
            document.getElementById("btn").innerText="light";
            document.querySelector("body").style.color="white";
            for(var i=0;i<=6;i++){
            document.getElementsByClassName("hr")[i].style.backgroundColor="white";
            }
           
           
        } 
        case "light":
        {    
            document.querySelector("img").src="Profile2.jpg";
            document.querySelector("body").style.background="white";
            document.getElementById("btn").innerText="dark";
            document.querySelector("body").style.color="black";
            for(var i=0;i<=6;i++){
            document.getElementsByClassName("hr")[i].style.backgroundColor="black";
            }
           
        } 
    }
     
}

</script>
</body>
</html>
