import { Configuration, OpenAIApi } from "openai";

/**
* @param {NapkinRequest} req
* @param {NapkinResponse} res
*/

export default async (req, res) => {
  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);

  const history = [];

    const user_input = 'write an aricle about test driven development'
    const messages = [];

    messages.push({ role: "user", content: user_input });

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
      }
      );

      const completion_text = completion.data.choices[0].message.content;
      console.log(completion_text);
      res.json({'message': completion_text})

      history.push([user_input, completion_text]);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
