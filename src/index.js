const express = require('express');
const app = express();
const morgan=require('morgan');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//server config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Routes
app.use(require('./routes/index'));

//Server listen
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
