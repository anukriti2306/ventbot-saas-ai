import axios from "axios";

// Optional: set a base URL so all endpoints are relative to it
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const loginUser = async (email: string, password: string) => {
    try {
        const res = await axios.post("/user/login", { email, password });
        return res.data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Unable to login.");
    }
};

export const signupUser = async (name:string,email: string, password: string) => {
    try {
        const res = await axios.post("/user/signup", {name, email, password });
        return res.data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Unable to signup.");
    }
};

export const checkAuthStatus = async () => {
    try {
        const res = await axios.get("/user/auth-status");
        return res.data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Unable to authenticate.");
    }
};

export const sendChatRequest = async (message: string) => {
    try {
        const res = await axios.post("/user/chat/new", { message });
        return res.data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Unable to send chat request.");
    }
};
export const getUserChats = async () => {
    try {
        const res = await axios.get("/user/chat/all-chats");
        return res.data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Unable to send chat request.");
    }
};
export const deleteUserChats = async () => {
    try {
        const res = await axios.delete("/user/chat/delete");
        return res.data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Unable to delete chat request.");
    }
};
export const logoutUser = async () => {
    try {
        const res = await axios.get("/user/logout");
        return res.data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message || "Unable to delete chat request.");
    }
};