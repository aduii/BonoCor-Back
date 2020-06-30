const { db } = require('../../database');

const getCountries = () => {
    return new Promise ((resolve,reject)=>{
        const sql = `SELECT * FROM country`;
        db.query(sql,(err,rows)=>{
            if(err){
                console.log('ERROR DB', err);
            }else{
                return resolve(rows)
            }
        })
    })
}

module.exports = {
    getCountries
}