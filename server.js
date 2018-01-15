const 	express = require('express'), 
			app = express(),
	 bodyParser = require('body-parser'),//you can read & requests objects in the body
 methodOverride = require('method-override'); /// for delete and put

require("./db/db.js")

//////////////////////// MIDDLEWARE ////////////////////////
app.use(bodyParser.urlencoded({ extended: true }));

/////////////// FOR DELETE ///////////////
app.use(methodOverride('_method'))


//////////////////////// MODELS ////////////////////////
const Agents = require('./models/agents.js')


//////////////////////// CONTROLER ////////////////////////
const agentController = require('./controllers/agentController.js')


//////////////////////// PATH DEFINITION ////////////////////////
app.use('/agents', agentController);


//////////////////////// SERVER LISTENER ////////////////////////
app.listen(3000, () => {
	console.log("server is listning: 3000")
});