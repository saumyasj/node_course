const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address=process.argv[2]

if(!address){
    console.log('Please provide an address')
}else{

    geocode(address,(error, {latitude, longitude,location}) => {
        if(error){
            return console.log(error)
        }
        
        forecast (latitude,longitude,(error,forecastdata)=>{
            if(error)
            {
                return console.log(error)
            }
    
            
            console.log(location)
            console.log(forecastdata)
        })
    })
}




























// const url='http://api.weatherstack.com/current?access_key=659d6e2ec6974d61ab9be1342be80a33&query=37.8267,%20-122.4233'

// request({url:url, json:true},(error, response)=>{
//     //we either have a value for error(no network connection) or response, not both
//     //low level error handler
//     //console.log(response.body.current) //will print the entire thing 

//     if(error){
//         console.log('Unable to connect to weather service')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//         //if there is no valid location, the api still gives a response with error code 

//     }
//     else {
//         console.log('It is currently '+ response.body.current.temperature+' degrees outside')
//         //this will get the http data and parse it and show reqd info 
//     }
// })
