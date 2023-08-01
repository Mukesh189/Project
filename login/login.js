
// vALIDATION
function validation() 
{
    var msg
    if (document.myform.passwords.value.length>3) 
    {
        document.getElementById('mukesh1').innerText="Poor"
        document.getElementById('mukesh1').style.color="red"
    }

    if (document.myform.passwords.value.length>5) 
    {
        document.getElementById('mukesh1').innerText="Good"
        document.getElementById('mukesh1').style.color="Orange"
    }

    if (document.myform.passwords.value.length>7) 
    {
        document.getElementById('mukesh1').innerText="Strong"
        document.getElementById('mukesh1').style.color="Green"
    }
}

// ALRET

function blacnk() 
{
    var blank = document.forms["myform"]["user"].value;
    if (blank == "" || blank == null)
     {
        alert("Please Enter the username!");
        return false;
    }

    var alpha = /^[A-Za-z]+$/;
    if (!alpha.test(blank)) 
    {
        alert("Please fill only alpha username");
        return false;
    }




    // Password
    var passwors = document.forms["myform"]["passwords"].value;
    if (passwors == "" || passwors == null) 
    {
        alert("Please Enter the Password!!");
        return false
    }
}