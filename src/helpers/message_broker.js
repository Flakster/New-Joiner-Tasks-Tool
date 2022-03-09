const {
  SQSClient,
  SendMessageCommand,
  ReceiveMessageCommand
} = require("@aws-sdk/client-sqs")

const sqsClient = new SQSClient();

const sendMsg = (msg) =>{
  const params = {
    MessageBody: msg,
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/660828509387/Profiles'
  };
  return sqsClient.send(new SendMessageCommand(params))
};

const receiveMsg = () =>{
  const params = {
    MaxNumberOfMessages: 1,
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/660828509387/Profiles'
  };
    return sqsClient.send(new ReceiveMessageCommand(params))
};

module.exports= {
    sendMsg,
    receiveMsg
};
