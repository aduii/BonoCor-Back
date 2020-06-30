const countryService = require('./country.service');

const getCountries = async(req, res) => {
    try {
        const response = await countryService.getCountries();
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
    getCountries
}