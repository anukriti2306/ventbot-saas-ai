import { Configuration } from "openai";

export const configureOpenAi = () => {
    return new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPEN_AI_ORGANIZATION_ID,
    });
};
