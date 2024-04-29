const {Pool} = require('pg');
const types = require('pg').types;
require('dotenv').config();
console.log("Valor de USER:", process.env.USER)
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT_DB

})

//Para que la zona horario corresponda a la de la base de datos
types.setTypeParser(1184, (str: any) => str);
types.setTypeParser(1114, (str: any) => str);
export default pool;