const express = require('express')
const app = express()

const port = process.env.PORT || 3030;

app.get('/', (req, res) => res.send('Hello World! B'))

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
    console.log(`App B listening on port ${port}`);
});
