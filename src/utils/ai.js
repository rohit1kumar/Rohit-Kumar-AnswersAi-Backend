import { OpenAI } from "@langchain/openai";

class AI {
  constructor() {
    this.llm = new OpenAI({
      temperature: 0,
      maxTokens: 50,
      timeout: undefined,
      maxRetries: 2,
      model: process.env.OPENAI_MODEL,
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateAnswer(question) {
    try {
      const prompt = `Answer the following question (keep it very short): ${question}`;
      return await this.llm.invoke(prompt);
    } catch (err) {
      console.log(err);
      return "Trouble generating answer. Please try again later.";
    }
  }
}

export default AI;
