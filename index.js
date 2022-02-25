const app = require('./src/app');

// Main function

async function main() {
    const port = app.get('port')
    await app.listen(port, () => {
        console.log('Profiles service is now listening on port: ', port )
    })
}

main();