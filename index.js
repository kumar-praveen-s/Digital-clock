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
        document.getElementById("pic-container").style.backgroundImage="url(./image/1.png)";
        document.getElementById("text").innerHTML="Wake up";
    }
    if(h2==hh){
        document.getElementById("pic-container").style.backgroundImage="url(./image/2.png)";
        document.getElementById("text").innerHTML="Let's Have some Lunch";
    }
    if(h3==hh){
        document.getElementById("pic-container").style.backgroundImage="url(./image/3.png)";
        document.getElementById("text").innerHTML="Good night";
    }
    displayvalue1(h1);
    displayvalue2(h2);
    displayvalue3(h3);
}
function displayvalue1(h1){
    let i1=document.getElementById("Wake-up-time");
    let v1=i1.options[i1.selectedIndex].text;
    if(h1=="none"){
        document.getElementById("style-p1").innerHTML="";
    }
    else{
        document.getElementById("style-p1").innerHTML="Wake up Time : "+ v1;
    }
}
function displayvalue2(h2){
    let i1=document.getElementById("lunch-time");
    let v1=i1.options[i1.selectedIndex].text;
    if(h2=="none"){
        document.getElementById("style-p2").innerHTML="";
    }
    else{
        document.getElementById("style-p2").innerHTML="Lunch Time : "+ v1;
    }
}
function displayvalue3(h3){
    let i1=document.getElementById("nap-time");
    let v1=i1.options[i1.selectedIndex].text;
    if(h3=="none"){
        document.getElementById("style-p3").innerHTML="";
    }
    else{
        document.getElementById("style-p3").innerHTML="nap Time : "+ v1;
    }
}