var n=document.getElementById('name');
var e=document.getElementById('email');
var p=document.getElementById('password');
var ph=document.getElementById('phone');
var flag=0

n.addEventListener('input',()=>{
    if(n.value=="")
    {
       flag=0;
       document.getElementById('nerror').innerHTML="Name Can't be Blank!!!"
    }
    else if(n.value.length<3)
    {
        flag=0;
        document.getElementById('nerror').innerHTML="Name should be of more than 3 char...!!!"
    }
    else if(n.value>=0 || n.value<=99999999999)
    {
        flag=0;
        document.getElementById('nerror').innerHTML="Name can't be a Number!!!!"
    }
    else{
        document.getElementById('nerror').innerHTML=""
        flag=1;
    }
})



function Vfrom()
{
    //create a loop to check white space in phone number

    //name validation [1. not blank  2. at least 3 char    3. not a number]
    if(n.value=="")
    {
       flag=0;
       alert("Name should not be blank!!!");
    }
    else if(n.value.length<3)
    {
        flag=0;
        alert("Name should be of at least 3 character!!!")
    }
    else if(n.value>=0 || n.value<=99999999999)
    {
        flag=0;
        alert("Name Should be Character not a number!!!")
    }
    

    //email validation [1. not blank    2. at least 6 char     3. must have @ at once in email id]
    else if(e.value=="")
    {
        flag=0
        alert("Email should not be blank!!!")
    }
    else if(e.value.length<6)
    {
        flag=0;
        alert("Email should be of at least 6 char...!!!")
    }
    //password validation [1. not blank  2. at least 7 char  ]
    else if(p.value=="")
    {
        flag=0;
        alert("Password can't be blank!!!");
    }
    else if(p.value.length<7)
    {
        flag=0;
        alert("password should be at least of 7 char...")
    }
    else if(ph.value=="")
    {
        flag=0;
        alert("Phone can't be blank!!!");
    }
    else if(ph.value.length!=10)
    {
        flag=0;
        alert("Phone can be of only 10 digits!!!")
    }
    else if(isNaN(ph.value))
    {
        flag=0;
        alert("Phone no shuld be digit not a char or special char...")
    }
    else if(((ph.value[0]).charCodeAt(0))==32 || ((ph.value[1]).charCodeAt(0))==32 || ((ph.value[9]).charCodeAt(0))==32)
    {
        flag=0;
        alert("White space is not allowed in phone number");
    }
    else{
        flag=1
    }
    if(flag==0)
    {
        return false; 
    }
    else{
        return true;
    }
   
}