const router = require('express').Router();
let Sports = require('../models/sports.model');


router.route('/sports').get((req, res) => {
  Sports.find()
    .then(sports => res.json(sports))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
  Sports.findById(req.params.id)  
    .then(sports => res.json(sports))  
    .catch(err => res.status(400).json('Error: ' + err));  
});  



module.exports = router;