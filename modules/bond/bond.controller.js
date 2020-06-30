const bondService = require('./bond.service');

const createBond = async(req, res) => {
    try {
        const response = await bondService.signup(req.body);
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