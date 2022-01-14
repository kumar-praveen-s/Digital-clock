function time(){
    let h=document.getElementById("hours");
    let m=document.getElementById("minutes");
    let s=document.getElementById("seconds");
    let am=document.getElementById("select-am-pm");
    let time=new Date();
    let hh=time.getHours();
    let mm=time.getMinutes();
    let ss=time.getSeconds();
    let ampm = hh >= 12 ? 'PM' : 'AM';
    if (hh > 12) {
        hh -= 12;
    }
    if (hh == 0) {
        hh = 12;
    }
    h.innerHTML=hh;
    m.innerHTML=mm;
    s.innerHTML=ss;
    am.innerHTML=ampm;
}
setInterval(time,1000);
function setTime(){
    let h1=document.getElementById("Wake-up-time").value;
    let h2=document.getElementById("lunch-time").value;
    let h3=document.getElementById("nap-time").value;
    let hh=new Date().getHours();
    if(h1==hh){
        document.getElementById("pic-container").style.backgroundImage="url(./assets/1.png)";
        document.getElementById("text").innerHTML="Wake up";
    }
    if(h2==hh){
        document.getElementById("pic-container").style.backgroundImage="url(./assets/2.png)";
        document.getElementById("text").innerHTML="Let's Have some Lunch";
    }
    if(h3==hh){
        document.getElementById("pic-container").style.backgroundImage="url(./assets/3.png)";
        document.getElementById("text").innerHTML="Good night";
    }
    displayvalue(h1,h2,h3);
}
function displayvalue(h1,h2,h3){
    let v1=document.getElementById("Wake-up-time").options[document.getElementById("Wake-up-time").selectedIndex].text;
    let v2=document.getElementById("lunch-time").options[document.getElementById("lunch-time").selectedIndex].text;
    let v3=document.getElementById("nap-time").options[document.getElementById("nap-time").selectedIndex].text;
    let newElement1=document.createElement("p");
    let newElement2=document.createElement("p");
    let newElement3=document.createElement("p");
    let pd=document.getElementById("option-select-view-container");
    newElement1.setAttribute("class","style-p1");
    newElement2.setAttribute("class","style-p1");
    newElement3.setAttribute("class","style-p1");
    if(h1=='none'){
        newElement1.innerHTML="";
    }
    else{
        newElement1.innerHTML="Wake up Time : "+ v1;
        pd.appendChild(newElement1);
    }
    if(h2=='none'){
        newElement2.innerHTML="";
    }
    else{
        newElement2.innerHTML="Lunch Time : "+ v2;
        pd.appendChild(newElement2);
    }
    if(h3=='none'){
        newElement3.innerHTML="";
    }
    else{
        newElement3.innerHTML="Nap Time : "+ v3;
        pd.appendChild(newElement3);
    }
}