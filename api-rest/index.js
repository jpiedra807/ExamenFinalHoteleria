'use strict'

const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 1412

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }

app.locals.hotels = require('./data.json')

const resp = {
    status: '',
    message:'',
    params:'',
    hotels:[]
}

/*Return All Hotels*/
app.get('/api/v1/hotels', cors(corsOptions), (request, response)=>{
    let hotels = app.locals.hotels;

    if (hotels.length==0){
        resp.status = 'error'
        resp.message ='not Hotels!'
        return response.status(200).send(resp)
    }
    resp.status = 'success'
    resp.message = ''
    resp.hotels = hotels
    response.status(200).send(resp)
})

/*Return Hotel by Name*/
app.get('/api/v1/hotels/:name', cors(corsOptions), (request, response)=>{

    let name = request.params.name.toUpperCase()
    let hotels = app.locals.hotels.filter(hotel => hotel.name.toUpperCase().indexOf(name)>0)
    resp.params = request.params

    if (hotels.length==0){
        resp.status = 'error'
        resp.message ='Hotel not exist!'
        resp.hotels = []
        return response.status(200).send(resp)
    }

    resp.status = 'success'
    resp.message = ''
    resp.hotels = hotels

    return response.status(200).send(resp)
})


app.listen(port, ()=>{
    console.log(`API REST Corriendo en localhost:${port}`)
})
