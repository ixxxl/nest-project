import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from 'openai';

const configuration = new Configuration({
  organization: process.env.REACT_APP_API_ORGANIZATION,
  apiKey: process.env.REACT_APP_API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];
const openai = new OpenAIApi(configuration);

export const generateResponse = async (newQuestion: any) => {
  const chatGptMessages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: !!newQuestion ? newQuestion : '',
    },
  ];

  const response = await openai.createChatCompletion({
    messages: chatGptMessages,
    model: 'gpt-4',
  });

  if (response.data.choices) {
    return {
      question: newQuestion,
      answer: response.data.choices[0].message?.content,
    };
  }
};
