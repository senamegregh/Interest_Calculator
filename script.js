var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rateval").innerText=rateval;
}       
updateRate("rateval");

var result = document.getElementById("interest").value;

function compute(){
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
    if(principal.value=="0") {
        alert("enter a positive value")
        principal.focus(); return principal;
    }
    if(principal.value==""){
        alert("enter a positive value")
        principal.focus(); return principal;
    }
}onclick.button=compute();
