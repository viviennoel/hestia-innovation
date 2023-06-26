const { Configuration, OpenAIApi } = require("openai");

const handler = async(event) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const history = [];

  console.log(event.body)
  const user_input = JSON.parse(event.body).question;
  console.log(event.body)
  console.log(user_input);
  const messages = [];

  messages.push({ role: "user", content: user_input });

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    }
    );

    const completion_text = completion.data.choices[0].message.content;
    history.push([user_input, completion_text]);

    return {
      statusCode: 200,
      body: JSON.stringify(completion_text),
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
