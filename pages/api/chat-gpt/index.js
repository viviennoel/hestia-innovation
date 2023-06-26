const { Configuration, OpenAIApi } = require("openai");

const handler = async(event) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const history = [];

    const user_input = 'which color is the sky?'
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
      history.push([user_input, completion_text]);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: completion_text }),
      };
    } catch (error) {
      if (error.response) {
        return {
          statusCode: error.response.statusCode,
          body: JSON.stringify({ message: error.response.body }),
        };
      } else {
        return {
          statusCode: 500,
          body: JSON.stringify({ message: error.message }),
        };
      }
    }
  }

  module.exports = { handler };
