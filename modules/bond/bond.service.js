const createBond = async(bond) => {
    try {
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

const findUserById = (iduser) => {
    return new Promise ((resolve,reject)=>{
        const sql = `SELECT * FROM user WHERE id = "${iduser}"`;
        db.query(sql,(err,rows)=>{
            if(err){
                console.log('ERROR DB', err);
            }else{
                return resolve(rows)
            }
        })
    })
}