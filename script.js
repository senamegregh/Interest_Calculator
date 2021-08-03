function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    document.getElementById(interest).value;
    var year = new Date().getFullYear()+parseInt(year);
    document.getElementById("result").innerHTML="if you deposit"(principal)/ <br/>
    "at an interest rate of"(rate)%/ <br/> "you will receive an amount of"(amount)/ <br/> in the (year)/ <br/>
    "No of years".value=="year"
}
function updateRate()
{
    var rate_val = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate_val
}       
function checkdata()
{
    var principal = document.getElementById(principal);
    if(principal.value=="0") {
        alert("enter a positive value")
        principal.focus(); return principal;
    }
    if(principal.value==""){
        alert("enter a positive value")
        principal.focus(); return principal;
    }
}
