// code away!
const server = require('./server');

const PORT = '5000';

server.listen(PORT, () => {
    console.log(`*** Server listening on port:${PORT}`)
});

