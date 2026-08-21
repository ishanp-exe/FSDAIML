const div = document.getElementById('Container');
const bt = document.getElementById('btn');

const h1 = document.createElement('h1');
h1.innerText = "Data Is Loading...";

let obj = {
    Name: "Ishan Pandey",
    Roll: 90,
    Branch: "AIML",
    Clg: "ABES Engineering College",
    TechStack: "AI Integration"
};

function display() {
    div.appendChild(h1);

    setTimeout(() => {
        let table = `
            <table border="4">
                <tr>
                    <th colspan="2">Resume</th>
                </tr>
                <tr>
                    <th>Name:</th>
                    <td>${obj.Name}</td>
                </tr>
                <tr>
                    <th>RollNo:</th>
                    <td>${obj.Roll}</td>
                </tr>
                <tr>
                    <th>Branch:</th>
                    <td>${obj.Branch}</td>
                </tr>
                <tr>
                    <th>College:</th>
                    <td>${obj.Clg}</td>
                </tr>
                <tr>
                    <th>TechStack:</th>
                    <td>${obj.TechStack}</td>
                </tr>
            </table>
        `;

        div.innerHTML = table;
    }, 1000);
}

bt.addEventListener('click', display);