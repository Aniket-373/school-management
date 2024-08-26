const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aniketbhoir@21",
    database: "school_management",
});

connection.connect((err)=>{
    if(err){
        console.log("Error connecting with MySQL database",err)
    }else{
        console.log("Connected to MySQL Database")
    }
});


module.exports = connection;