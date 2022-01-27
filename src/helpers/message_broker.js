const conf = require('../utils/config');
const amqp = require('amqplib/callback_api');

module.exports = {
    send: (msg) =>{
        amqp.connect(`amqps://${conf.MB_USER}:${conf.MB_PASS}@${conf.MB_URL}`, (error0, connection) => {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function(error1, channel) {
                if (error1) {
                    throw error1;
                }
                var queue = 'Profiles';
                channel.assertQueue(queue, {durable: false});
                channel.sendToQueue(queue, Buffer.from(msg));
                console.log(" [x] Message sent: %s ", msg);
            });
        });
    },
    receive: (msg) =>{
        amqp.connect(`amqps://${conf.MB_USER}:${conf.MB_PASS}@${conf.MB_URL}`, (error0, connection) => {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function(error1, channel) {
                if (error1) {
                    throw error1;
                }
                var queue = 'Profiles';
                channel.assertQueue(queue, {durable: false});
                console.log('[x] Waiting  for messages in %s', queue)
                channel.consume(queue, function(msg) {
                    console.log('[x] Received %s', msg.content.toString())
                },
                {
                    noAck: true
                });
            });
        });
    }
}