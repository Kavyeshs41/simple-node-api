const express = require('express');
const app = express();
const router = express.Router();
const url = require('url');
const port = 9876;

app.get('/',(Request,Response) => Response.send("Hello Welcome to the Grand Line.....!!"));

app.use('/api',router);

router.get('/',(Request,Response) =>{
    Response.json({message : "Hello Welcome to the MARI-GEOISE"});
});

router.get('/data',(Request,Response) => {
    var urlParts = url.parse(Request.url,true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;

    //Response.json({message: `${myParam}`});

    var myResponse = `${myParam} multiply by 5 ${myParam*5}`;
    Response.json({message: myResponse});
});

app.listen(port , ()=> console.log(`Listening on port ${port}`));