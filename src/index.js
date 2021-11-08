const core = require('@actions/core');
const AWS = require('aws-sdk');

function run() {
  try {
    const { getInput } = core;

    const accessKeyId = getInput('accessKeyId');
    const secretAccessKey = getInput('secretAccessKey');
    const region = getInput('region');
    const Message = getInput('message');
    const PhoneNumber = getInput('phoneNumber');

    AWS.config.update({
      accessKeyId,
      secretAccessKey,
      region,
    });

    const params = {
      Message,
      PhoneNumber,
    };

    const SNS = new AWS.SNS();
    const result = SNS.publish(params).promise();
    console.log('result =>', result);
    
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
if (require.main === module) {
  run();
}