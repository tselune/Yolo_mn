
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
const port = 5000;
// const express = require("express");
const queries = {
    getmedeenuud:`SELECT * FROM medeenuud `,
    getbyId:`SELECT * FROM medeenuud where id = $1`,
    deletebyId:`DELETE FROM medeenuud where id = $1`,
    insertCountry: `insert into medeenuud Values ($1, $2);`,
    upd_ccountry:`UPDATE medeenuud SET medee=$3 WHERE "C_rank" = $1;`
}


import pkg from 'pg';
const {Pool} = pkg;
const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "web",
    user: "postgres",
    password: "123"
})

const options = {
    definition: {
        openapi: '3.0.0',
        info:{
            title: 'WebAPI',
            version: '1.0.0',
        },
    },
    apis: ['./index.js',
    './index.js',
    ]
}

const openapiSpec = await swaggerJSDoc(options);
const UIoptions = {
    explorer:true
};
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpec, UIoptions));


/**
 * @openapi
 * /:
 *      get:
 *          summary: home
 *          description: Main datas
 *          responses:
 *              200:
 *                  description: respose for OK!
 *              500:
 *                  description: Error parsing!
 */
app.get('/', (req, res) =>{
    res.send("Hello World!");
})

app.listen(port, ()=>{
    console.log("server is listening")
})
/**
 * @openapi
 * /medeenuud:
 *      get:
 *          summary: medeenuud
 *          description: medeenuud datas
 *          responses:
 *              200:
 *                  description: response for OK!
 *              500:
 *                  description: Error parsing!
 */
app.get('/medeenuud', (req,res) =>{
    pool.query(queries.getmedeenuud, (err, data)=>{
        res.status(200).json(data.rows);
    })
})

/**
 * @openapi
 * /medeenuud/{c_name}:
 *      get:
 *          summary: get by Id
 *          parameters:
 *            - in: path
 *              name: c_name
 *              description: get medee
 *              required: true
 *              type: varchar
 *          responses:
 *              200: 
 *                  description: Done!
 *              500:
 *                  description: failed!
 */
app.get('/medeenuud/:c_name', (req, res)=>{
    let c_name = req.params.c_name;
    pool.query(queries.getbyId,[c_name] ,(err, data)=>{
        if(data.rowCount){
            res.status(200).json(data.rows);
        }
        else {
            res.status(404).send(`${c_name} Not found`);   
        }
    })
})
// /**
//  * @openapi
//  * /schools/post:
//  *      post:
//  *          summary: create medee
//  *          requestBody: 
//  *              description: desc Optional description in *Markdown*
//  *              required: true
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                          properties:
//  *                              sur_name: varchar
//  *                              description: medee
//  *          responses:
//  *                  200:
//  *                      description: response for OK!
//  *                  500:
//  *                      description: Error parsing!
//  */
// app.post('/medeenuud/post', (req, res)=>{
//     const {
//         c_id,
//         crank
//     } = req.body;
    
//     pool.query(queries.getbyId,[c_id], (err, data)=>{
//         if(data.rowCount){
//             res.send(`${C_name} registered`);
//         }
//         else{
//             pool.query(queries.insertCountry, [c_id,crank],(err,data)=>{
//                 res.status(201).send(`${c_id} created`);
//             })
//         }
//     })
// })
// /**
//  * @openapi
//  * /medeenuud/upt:
//  *      put:
//  *          summary: upt
//  *          requestBody: 
//  *              content:
//  */

// app.put('/medeenuud/upt', (req, res)=>{
//     const {
//         c_id,
//         crank
//     } = req.body;
//     pool.query(queries.getbyId,[c_id], (err, data)=>{
//         if(data.rowCount){
//             pool.query(queries.upd_ccountry, [c_id, crank], (err, data)=>{
//                 res.status(200).send(`${c_id} uptaded`);
//             })
//         }
//         else{
//             res.send(`${c_id} NOT REGISTERED TOUR ID`);
//         }
//     })
// })