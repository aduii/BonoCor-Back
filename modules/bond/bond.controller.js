const bondService = require('./bond.service');

const createBond = async(req, res) => {
    try {
        const response = await bondService.createBond(req.body);
        if( !response.error ){
            return res.json(response);
        }else{
            res.status(400);
            return res.json(response)
        }
    } catch (error) {
        res.status(400)
        return res.json(null);
    }
}

const findBondByUserId = async(req, res) => {
    try {
        const response = await bondService.findBondByUserId(req.params.userId);
        if( !response.error ){
            return res.json(response);
        }else{
            res.status(400);
            return res.json(response)
        }
    } catch (error) {
        res.status(400)
        return res.json(null);
    }
}

const findBondByBondId  = async(req, res) => {
    try {
        const response = await bondService.findBondByBondId(req.params.bondId);
        if( !response.error ){
            return res.json(response);
        }else{
            res.status(400);
            return res.json(response)
        }
    } catch (error) {
        res.status(400)
        return res.json(null);
    }
}

module.exports = {
    createBond,
    findBondByUserId,
    findBondByBondId
}
