import AWS from 'aws-sdk';
import { useContext, useEffect, useState } from 'react';
import LanguageContext from '../context/languageContext';
import { createClient } from 'pexels';

const AI = () => {
const [anwswer, setAnswer] = useState('');
const [image, setImage] = useState({
  src: undefined,
  alt: undefined,
});
const [formData, setFormData] = useState({question: ""});
const { language } = useContext(LanguageContext);

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

const handleSubmit = async (event) => {
    event.preventDefault();
    if(language !== 'en-SET'){
      const text = await getTextFromOpenAI();
      const articleImage = await getPictureFromPexel();
      console.log(text)
      console.log(articleImage);
      const result = await postOnLinkedIn(text, articleImage);
    }
}

AWS.config.update({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});

const lambda = new AWS.Lambda();

const getTextFromOpenAI = async () => {
  try {
    const params = {
      FunctionName: 'chatgpt',
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify({ question: formData.question }),
    };

    const response = await lambda.invoke(params).promise();
    const data = JSON.parse(response.Payload as string);
    setAnswer(data.body);

    return data.body;
  } catch (error) {
    console.log(error);
  }
};

const getPictureFromPexel = async () => {
  const client = createClient('fcSMShcb7yct8Q4fudxM2Pk3b94LC1j9oia2JBPBVQQe2B8Pgyxm0VX1');
  const query = formData.question;

  return client.photos.search({ query, per_page: 1 })
    .then(result => {
      const imagePexel = {
        src: result.photos[0].src.landscape,
        alt: result.photos[0].alt,
      }

      setImage(imagePexel);
      return imagePexel;
    });
}

const postOnLinkedIn = (text:string, articleImage:{src:string, alt: string}) => {
  const body= {
    text,
    articleImage,
}

fetch("https://vivien-thomas-noel.npkn.net/5c2b24/", {
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origins": "*",
      "Access-Control-Allow-Methods": "*",
    },
    method: 'POST',
    body: JSON.stringify(body),
})
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
    
return (
    <>
        <p style={{paddingTop: '30vh'}} className='text-center px-5'>{anwswer}</p>
        {image.src && <img src={image.src} alt={image.alt} className='w-100 pb-5'></img>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ask your question</label>
            <input type="text" id="question" name="question" value={formData.question}  onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    </>
)
}

export default AI;