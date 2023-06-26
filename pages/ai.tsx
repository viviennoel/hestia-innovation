import AWS from 'aws-sdk';
import { useState } from 'react';

const AI = () => {
const [anwswer, setAnswer] = useState('Loading')
console.log(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY, process.env.AWS_REGION)
AWS.config.update({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const lambda = new AWS.Lambda();

// Example function to invoke the Lambda function
const invokeLambdaFunction = async () => {
  try {
    const params = {
      FunctionName: 'chatgpt',
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify({}),
    };

    const response = await lambda.invoke(params).promise();
    const data = JSON.parse(response.Payload as string);
    setAnswer('hello');
    console.log(data.body);
  } catch (error) {
    console.log(error);
  }
};

// Call the function to invoke the Lambda function
invokeLambdaFunction();
    
return <p style={{paddingTop: '30vh'}}>{anwswer}</p>
}

export default AI;