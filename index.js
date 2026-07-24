function sum(a,b){
    return a+b;
}
// const result = sum(20,50);
// console.log("Sum " + result);


// function SumWithMsg(clbk,msg){
//     const result = clbk(20,40);
//     console.log(msg + ":" + result)
// }
// SumWithMsg(sum, "Hey using calculation with JS")


function login(msg,err){
    if(err){
        console.log("Error is " + err)
    }else{
        console.log ("Welcome "+ msg);
    }
}
function loginVerification(username,password,clbk){
    if (username == "Ishan1610" && password == "XYZ"){
        clbk("Success", null);
    }else{
        clbk(null, "Username or password is incorrect")
    }
}
loginVerification("Ishan1610", "XYZ", login)