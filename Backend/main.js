import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready')
}) 

app.get('/api/jokes', (req,res) =>{
     const jokes = [
        {
            id:1,
            title:'a Joke',
            content: 'this is a joke'
        },
        {
            id:2,
            title:'another Joke',
            content: 'this is a  another joke'
        },
        {
            id:3,
            title:'3rd Joke',
            content: 'this is a 3rd joke'
        },
        {
            id:4,
            title:'4th Joke',
            content: 'this is a 4th joke'
        },
        
     ];
     res.send(jokes);
});



//get the port from the .env file
const port = process.env.PORT || 3000;

app.listen(port, () => {
      console.log(`Serve at http://localhost:${port}`);
      
});
