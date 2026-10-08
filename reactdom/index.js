// console.log("Hello...")

const container=document.getElementById('container');
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},"Name: Rahul Kumar")
const h21=React.createElement('h2',{style:{color:'red'}},"Roll: 254545")
const h1=React.createElement('h1',{style:{color:'white',backgroundColor:'brown'}},'ABES Engineering College');
const img=React.createElement('img',{src:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl95b3VuZ19naXJsX3dpdGhfc3R1ZGVudF9iYWNrcGFja19hbl82OWU5MGJmMC04OTRiLTQ3Y2QtOTlmNS1kZTBmZmU0MThiYWJfMS5wbmc.png', style:{height:'100px', width:'100px'}})

const div=React.createElement('div',{style:{border:'4px solid red',width:'300px', height:'400px'}},img,h1,h2,h21);
root.render(div);