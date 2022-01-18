const app = require('./src/app');

// Main function

async function main() {
    const port = app.get('port')
    await app.listen(port)
    console.log('Server listening on port: ', port )
}

main();