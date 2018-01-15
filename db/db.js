const mongoose = require('mongoose');

//////////////////////// DB LOCATION ////////////////////////
mongoose.connect('mongodb://localhost:27017/agents',{useMongodClient:true});


//////////////////////// LOG DB STATUS ////////////////////////
mongoose.connection.once('open', ()=>{
	console.log('connected to mongo')
});

mongoose.connection.on('disconnnected', () =>{
	console.log('mongodb is disconnected')
});

mongoose.connection.on('connnected', () =>{
	console.log('mongodb is connected')
});

mongoose.connection.on('error', (error) =>{
	console.log('connection error: '+error)
});