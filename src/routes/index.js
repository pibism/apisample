const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "SM node with route!"
        }
    );
})
 
module.exports = router;
