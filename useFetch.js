// const div = document.getElementById('container');
// const button = document.getElementById('btn');
// console.log(div);
// const h2 = document.createElement("h2");
// h2.innerText = "Data is loading...";
// console.log(h2);

// function cart(ele){
//     alert("Cart is calling" + ele);
// }
// async function display(){
//     try{
//     div.appendChild(h2);
//         // div.innerHTML='<h2 style="color:blue;">Hello Using DOM</h2>';
//     const serverdata =await fetch('https://fakestoreapi.com/products');
//     const jsondata = await serverdata.json();
//     // console.log(jsondata[1].title)
//     // div.innerHTML=`<h2 style="color:white;background-color:grey;"> ${JSON.stringify(jsondata)}</h2>`;

//     let table = `<table border=4px>
//         <tr>
//         <th>image</th>
//         <th>itemId</th>
//         <th>itemTitle</th>
//         <th>itemPrice</th>
//         </tr>
//         ${
//             jsondata.map((ele)=>(
//             `<tr>
//             <td><img src = ${ele.image} heigth = 40 width = 40></td>
//             <td>${ele.id}</td>
//             <td>${ele.title}</td>
//             <td>${ele.price}</td>
//             <td><button onclick = cart(${ele.id})>Add to Cart</button></td>
//             </tr>`
//             ))
//     }
//     </table>`
//     div.innerHTML = table;

// }catch(e){
//     console.log("error is:" + e);
// }
// finally{
// div.removeChild(h2);
// }
// }

// button.addEventListener('click',display);


// const showResume = document.getElementById('showResume');
// const resumeDetails = document.getElementById('resumeDetails');

// showResume.addEventListener('click', function () {

//     resumeDetails.innerHTML = `
//         <h1>My Resume</h1>

//         <h2>Personal Details</h2>
//         <p><strong>Name:</strong> Ishan Pandey </p>
//         <p><strong>Email:</strong> ishan.24b1531020@gmail.com</p>
//         <p><strong>Phone:</strong> 8171280352</p>
//         <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh</p>

//         <h2>Education</h2>
//         <p>B.Tech in Computer Science (AIML)</p>

//         <h2>Skills</h2>
//         <ul>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>JavaScript</li>
//             <li>C++</li>
//             <li>Java</li>
//         </ul>

//         <h2>Projects</h2>
//         <p>Resume Builder Project</p>

//         <h2>About Me</h2>
//         <p>I am a student interested in web development and programming.</p>
//     `;
// });



const div = document.getElementById('container');
const button = document.getElementById('btn');
console.log(div);
const h2 = document.createElement("h2");
h2.innerText = "Data is loading...";
console.log(h2);

function cart(ele){
    alert("Cart is calling" + ele);
}
async function display(){
    try{
    div.appendChild(h2);
        // div.innerHTML='<h2 style="color:blue;">Hello Using DOM</h2>';
    const serverdata =await fetch('https://fakestoreapi.com/products');
    const jsondata = await serverdata.json();
    // console.log(jsondata[1].title)
    // div.innerHTML=`<h2 style="color:white;background-color:grey;"> ${JSON.stringify(jsondata)}</h2>`;

  let table = `<table border="4">
<tr>
    <th>Image</th>
    <th>Item ID</th>
    <th>Item Title</th>
    <th>Item Price</th>
    <th>Action</th>
</tr>

${jsondata.map((ele) => `
<tr>
    <td><img src="${ele.image}" height="40" width="40"></td>
    <td>${ele.id}</td>
    <td>${ele.title}</td>
    <td>${ele.price}</td>
    <td><button onclick="cart(${ele.id})">Add to Cart</button></td>
</tr>
`).join("")}

</table>`;


    div.innerHTML = table;

}catch(e){
    console.log("error is:" + e);
}
finally{
div.removeChild(h2);
}
}

button.addEventListener('click',display);