const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ac1d57ebd9a11f05b3f91fc6a02a3d70&query=' + longitude + ',' + latitude + '&units=f'

    request({ url, json: true}, (error, { body } = {} ) => {
        if(error) {
            callback('No connection to service.', undefined)
        } else if (body.error) {
            callback('Unable to find location, please specify location.', undefined)
        } else {
            temp = body.current.temperature,
            feel = body.current.feelslike,
            descript = body.current.weather_descriptions[0],
            humidity = body.current.humidity
            callback(undefined, descript + '. It is currently ' + temp + ' degrees out. It feels like ' + feel + ' degrees out. The humidity is ' + humidity)
        }
    })
}
module.exports = forecast