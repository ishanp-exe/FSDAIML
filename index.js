// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//            const result=clbk(20,40);
//            console.log(msg+":"+result)
// }

// sumWithMsg(sum,"Hey using calculation with jS")




// function login(msg,error){
//     if(error){
//         console.log("Error is"+error)
//     }
//     else{
//         console.log("Welcome"+msg);
//     }
// }

//  function loginVerification(username,password,clbk){
//    if(username=="ptomer40" && password=="1234556"){
//     clbk("Success",null);
//    }else{
//     clbk(null,"Username or password is incorrect")
//    }

//  }

//  loginVerification("ptomer40","1234556",login)




//    console.log("First")
// //    setTimeout(()=>{console.log("Second")},1000)
// for(i=0;i<10000;i++){
//     console.log("Second")
// }
//    console.log("Third")


// callBack hell
// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 setTimeout(()=>{
//                     setTimeout(()=>{
//                         setTimeout(()=>{
//                             setTimeout(()=>{
//                                 setTimeout(()=>{

//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


// Promises 


    // const myPromise=new Promise((resolve,reject)=>{
    //    username="ptomer40";
    //    password="1234"
    //    if(username=="ptomer40" && password=="1234"){
    //     resolve("success")
    //    }else{
    //     reject("username or password is incorrect")
    //    }})

    //    myPromise.then((msg)=>{
    //      console.log(msg)
    //    }).catch((msg)=>{
    //     console.log(msg)
    //    }).finally(()=>{
    //     console.log("All the resources have been closed/memory released")
    //    })

  // async function handleLogin(){
  //     try{
  //            await myPromise
             
  //     } catch(e){
  //        console.log(e)
  //     } 
  //     finally{
  //       console.log("All the resources have been closed/memory released")
  //     }
  //   }
  //   handleLogin();


