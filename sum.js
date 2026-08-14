// function sum(a,b){
// console.log(a+b);
// }
// sum(3,2)
// function sum(a, b) {
//     return a + b;
// }
// function sumWithMsg(clbk, msg) {
//     const result = clbk(20, 40);
//     console.log(msg + ":" + result);
// }
// sumWithMsg(sum, "Hey calculation with js");


// function login(msg, error) {
//     if (error) {
//         console.log("Error: " + error);
//     }
//     else {
//         console.log("Success: " + msg);
//     }
// }

// function loginVerification(username, password, clbk) {
//     if (username === "0325" && password === "0325") {
//         clbk("Login successful", null);
//     }
//     else {
//         clbk(null, "Invalid username or password");
//     }
// }
// loginVerification("0325", "0325", login)
// // Callback function

// function checkNumber(num, clbk) {
//     clbk(num);
// }
// function oddEven(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
// checkNumber(7, oddEven);

// console.log("First")
// // setTimeout (() => {console.log("Second")},1000);
// for (i = 0; i < 10000; i++) {
//     console.log("Second")
// }
// console.log("Third")



// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 setTimeout(() => {
//                     setTimeout(() => {
//                         setTimeout(() => {
//                             setTimeout(() => {

//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// Promises

const myPromise = new Promise((resolve,rejet)=>{
    username = "Ishan";
    password = "1234"
    if(username == "Ishan" && password == "1234"){
        resolve("Success")
    }else{
        reject("Username or Password is incorrect")
    }
})
myPromise.then((msg)=>{
    console.log(msg)
}) .catch((msg)=>{
    console.log(msg)
}) .finally(()=>{
    console.log("All the resources have been closed/memory released")
})


async function handleLogin(){
    try{
        await myPromise
    } catch(e){
        console.log(e)
    }
    finally{
        console.log("All the resources have been closed/memory released")
    }
}
handleLogin();