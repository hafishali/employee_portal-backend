// import json server
const jsonserver=require('json-server')
// create json server
const employeserver=jsonserver.create()
// set path for json file
const router=jsonserver.router('db.json')
// middelware
const middelware=jsonserver.defaults()
// server use middle ware and router
employeserver.use(middelware)
employeserver.use(router)
// setup port
const port=3010 || process.env.PORT

employeserver.listen(port,()=>{
    console.log(`employye server successfully runnning at PORT number ${port}`);
})