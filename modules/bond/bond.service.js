const { db } = require('../../database');

const createBond = async(bond) => {
    try {
        delete bond.id;
        return new Promise ((resolve,reject)=>{
            const sql = `INSERT INTO bond SET ?`;
            db.query(sql,bond,(err,rows)=>{
                if(err){
                    console.log('ERROR DB', err);
                }else{
                    return resolve(rows)
                }
            })
        })
    } catch (err) {
        if (!(err instanceof DatasourceError)) {
            throw new ServiceError(err);
        }
        throw err;
    }
}


const findBondByUserId = (iduser) => {
    return new Promise ((resolve,reject)=>{
        const sql = `SELECT * FROM bond WHERE userId = "${iduser}"`;
        db.query(sql,(err,rows)=>{
            if(err){
                console.log('ERROR DB', err);
            }else{
                return resolve(rows)
            }
        })
    })
}


const findBondByBondId = (idbond) => {
    return new Promise ((resolve,reject)=>{
        const sql = `SELECT * FROM bond WHERE id = "${idbond}"`;
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
    createBond,
    findBondByUserId,
    findBondByBondId
}
