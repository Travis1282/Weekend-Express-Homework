const 	mongoose = require('mongoose');

//////////////////////// SCHEMA ////////////////////////
const agentSchema = mongoose.Schema({
	name: {type: String, required: true},
	eMail: {type: String, require: true},
	password: {type: String, require: true},
	brokerage: {type: String, require: true},
	salesVolume: {type: Number, require: true}
})

//////////////////////// MODEL ////////////////////////
const Agent = mongoose.model('agent', agentSchema)

//////////////////////// EXPORT ////////////////////////
module.exports = Agent;