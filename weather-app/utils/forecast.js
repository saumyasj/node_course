const request= require('request')

const forecast=(latitude, longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=659d6e2ec6974d61ab9be1342be80a33&query='+latitude+','+longitude+'&units=f'
    request({url,json:true},(error, {body})=>{
        if(error){
            //low level error 
            callback('Unable to connect to weather service',undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)

        }else{
            callback(undefined,'It is currently '+ body.current.temperature+' degrees outside and '+body.current.humidity+' humidity. The wind direction is '+body.current.wind_dir)

        }
    })


}

module.exports=forecast