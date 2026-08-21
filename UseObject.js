const employee = {
    empId: 2,
    name: 'XYZ',
    designation: 'Java Developer',
    techstack: [{
        plang: "Java",
        server: "Apache Tomcat",
        database: "mySql",
        database2: "mongodb"
    },
{
        plang: "python",
        server: "Django",
        database: "mySql",
        database2: "mongodb"
    },
{
        plang: "React",
        server: "Node Server",
        database: "mySql",
        database2: "mongodb"
    }]
}
console.log(employee.techstack[0])
console.log(employee.techstack[2])
console.log(employee.techstack[2].server)