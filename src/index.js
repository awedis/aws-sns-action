const core = require('@actions/core');
const AWS = require('aws-sdk');

function run() {
  try {
    const { getInput } = core;

    const accessKeyId = getInput('accessKeyId');
    const secretAccessKey = getInput('secretAccessKey');
    const region = getInput('region');

    AWS.config.update({
      accessKeyId,
      secretAccessKey,
      region,
    });
    
    console.log('Test SNS');
    
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
if (require.main === module) {
  run();
}