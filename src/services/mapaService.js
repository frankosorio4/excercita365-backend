const axios = require('axios')
const linkApi = 'https://cep.awesomeapi.com.br/json/'
const linkGoogleMaps = 'https://www.google.com/maps?q='

async function getLatitudeLongitude(cep) {
    try {
        const response = await axios.get(`${linkApi}${cep}`)    

        
        if(!(response.data)) {
            return {erro: 'CEP não encontrado'}
        }

        const {lat, lng} = response.data
        
        return {lat, lng}

    } catch (error) {
        return {erro: 'CEP não encontrado'}
    }
}

async function getLinkGoogleMaps(coordernadas) {
    try {
        const {lat, lng} = coordernadas
        
        if(!(lat) || !(lng)) {
            return {erro: 'Latitude e Longitude não encontradas'}
        }

        const link = `${linkGoogleMaps}${lat},${lng}`
        
        return link

    } catch (error) {
        return {erro: 'Erro ao montar o link do Google Maps'}
    }
}

module.exports = { getLatitudeLongitude, getLinkGoogleMaps }