const express = require('express');
const {listApi,addApi} = require('../controllers/apiListController');
// const multer = require('multer');


const apiRouter = express.Router();

//Image Storage Engine


// const upload = multer({storage: storage});

// foodRouter.post('/add',upload.single("image"), addFood)
apiRouter.get('/apilist', listApi)
apiRouter.post('/add', addApi)
// foodRouter.post('/remove', removeFood)

module.exports = {apiRouter};