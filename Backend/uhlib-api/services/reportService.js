const db = require('./db');
const helper = require('../helper');
const { json } = require('express');

async function get(date1, date2){
    const rows = await db.query(
      `SELECT * FROM USERS where created_at >= '${date1}' and created_at <= '${date2}'; `
    );
    console.log(`SELECT * FROM USERS where created_at >= '${date1} and created_at <= ${date2};`);
    const data = helper.cleanRows(rows);
    var ndata = JSON.parse(JSON.stringify(data).split('"user_id":').join('"id":'));
    console.log('num users', ndata);
    return ndata;
}

async function getloans(){
    const rows = await db.query(
      `SELECT Count(distinct user_id) as data FROM TRANSACTION;`
    );
    console.log(JSON.stringify(rows))
    const data = helper.cleanRows(rows)[0];

    return data;  
  
    // const data = JSON.parse(helper.cleanRows(rows));
    // print(JSON.stringify(data));
    // return data['Count(distinct user_id)'];
}

async function getfinespaid(){
    const rows = await db.query(
      `SELECT SUM(final_amount) AS "Total Fines" from PAID_FINES where is_paid = 0;`
    );
    console.log(JSON.stringify(rows))
    const data = helper.cleanRows(rows)[0];

    return data;  
  
    // const data = JSON.parse(helper.cleanRows(rows));
    // print(JSON.stringify(data));
    // return data['Count(distinct user_id)'];
}

async function getpieitems(){
    const rows = await db.query(
      `SELECT item_type as item, Count(item_type) as data FROM ITEMS group by item_type;`
    );
    console.log(JSON.parse(JSON.stringify(rows)))
    
    var result = [];
    result.push(['A','B']);

    for (var i = 0; i < rows.length; i++) {
        var obj = rows[i];
        const res = [];
        const keys = Object.keys(obj);
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            res.push(obj[key]);
        }

        result.push(res);
    }
    console.log(result);

    return result;  
}
// get the transaction report 
// body = {startdate string, enddate string }
// route: /api/reports/transaction 
getTransactionReport = async (req,res, next)=>{ 
  try{
    const startdate= req.params.startdate 
    const enddate = req.params.enddate 
    const query = `call transaction_report("${startdate}", "${enddate}" ) ; `
    const rows = await db.promisePool.query(query, [])
    var data = helper.cleanRows(rows[0])
    var result  = data[0]
    for (var i= 0 ; i < result.length ; ++ i){
      if (result[i].day_revenue == null){ 
        result[i].day_revenue = 0 
      }
    }
    result = result.map( row => ([
      row.date_label, 
      row.day_revenue
    ]))
    return res.json(result)
  }catch(err){
    next(err)
  }
}

getTransactionCount = async(req,res,next)=>{
  try{
    const startdate= req.params.startdate 
    const enddate = req.params.enddate 
    const query = `call transaction_count("${startdate}", "${enddate}" ) ; `
    const rows = await db.promisePool.query(query, [])
    var data = helper.cleanRows(rows[0])
    var result  = data[0]
    result = result.map( row => ([
      row.date_label, 
      row.count_trans
    ]))
    return res.json(result)
  }catch(err){
    next(err)
  }
}
getTotalTrans = async (req, res, next)=>{
  try{
    const startdate= req.params.startdate 
    const enddate = req.params.enddate 
    const query = `select count(*) as count, sum(total_price) as total from TRANSACTION where date_created between "${startdate}" and "${enddate}" ; `
    const rows = await db.query(query, [])
    const data = helper.cleanRows(rows)
    return res.json(data[0])
  }catch(err){
    next(err)
  }
}

module.exports = {
    get,
    getloans,
    getpieitems, 
    getTransactionReport,
    getTransactionCount,
    getTotalTrans
}

function create_condition_string (length, value){ 
    var array = Array(length).fill(value)
    return array.join()
  }