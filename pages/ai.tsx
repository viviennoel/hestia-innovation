import AWS from 'aws-sdk';
import { useContext, useEffect, useState } from 'react';
import LanguageContext from '../context/languageContext';

const AI = () => {
const [anwswer, setAnswer] = useState('');
const [formData, setFormData] = useState({question: ""});
const { language } = useContext(LanguageContext);

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    language !== 'en-SET' && invokeLambdaFunction();
}

AWS.config.update({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});

const lambda = new AWS.Lambda();

// Example function to invoke the Lambda function
const invokeLambdaFunction = async () => {
  try {
    const params = {
      FunctionName: 'chatgpt',
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify({ question: formData.question }),
    };

    const response = await lambda.invoke(params).promise();
    const data = JSON.parse(response.Payload as string);
    setAnswer(data.body);
  } catch (error) {
    console.log(error);
  }
};
    
return (
    <>
        <h2 style={{paddingTop: '30vh'}} className='text-center px-5'>{anwswer}</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ask your question</label>
            <input type="text" id="question" name="question" value={formData.question}  onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    </>
)
}

export default AI;