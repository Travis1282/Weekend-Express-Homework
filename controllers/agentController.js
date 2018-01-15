const 	express = require('express'),
		router = express.Router(),
		Agent = require('../models/agents.js');


//////////////////////// INDEX (MEMBER LIST) ////////////////////////
router.get('/', (req, res) => {
	Agent.find({},(err, allAgents) => {
		if(err) console.log(err);
		// console.log(allAgents)// agents in terminal
		res.render('index.ejs', { agents: allAgents })
	})

})


//////////////////////// CREATE NEW PROFILE ////////////////////////

//----------------> GET EJS PAGE
router.get('/register', (req, res) => {
	res.render('register.ejs');
});


//----------------> CREATE ROUTE
// npm install body-parser for this
router.post('/', (req, res) => {
		//add to the db 
	Agent.create(req.body,(err, createdAgent)=>{
		res.send(createdAgent)
		res.redirect('/agents'); //got back to the list
	})
	// console.log(req.body)
	// res.send(req.body)//send the data (will print in the brouser)
	// res.send('you posted')// test to see if linked up 
});



//////////////////////// PROFILE PAGE VIEW ////////////////////////
router.get('/:id', (req, res) =>{
	// get agent from database 
	Agent.findById(req.params.id, (error, agent) => {
		res.render('view.ejs', {agent: agent})
	})
})



//////////////////////// EDIT PAGE VIEW ////////////////////////

//----------------> GET DATA FOR DISPLAY
router.get('/:id/edit', (req, res) => {
	Agent.findById(req.params.id, (err, agent) =>{
		res.render('edit.ejs', {agent: agent})
	})
})

//----------------> SEND NEW DATA TO THE DB

router.put('/:id', (req, res) => {
  Agent.findById(req.params.id, req.body, (err, updatedModel) => {
  	res.redirect('/agents')
  })

})


//////////////////////// EXPORT ////////////////////////
module.exports = router;









