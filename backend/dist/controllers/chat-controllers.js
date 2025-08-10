import User from "../models/User.js";
import { configureOpenAi } from "../config/openai-config.js";
import { OpenAIApi } from "openai";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User not registered or token malfunctioned." });
        }
        //get the user chats if they were already registered
        const chats = user.chats.map(({ role, content }) => ({ role, content }));
        chats.push(({ content: message, role: "user" }));
        user.chats.push(({ content: message, role: "user" }));
        //send new chat with all of them to API 
        const config = configureOpenAi();
        const openai = new OpenAIApi(config);
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        //get back the response
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
//# sourceMappingURL=chat-controllers.js.map