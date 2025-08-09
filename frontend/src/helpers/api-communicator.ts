import axios from "axios";

export const loginUser = async (email: string, password: string) => {
    try {
        const res = await axios.post("/user/login", { email, password });
        return res.data; // no need to await this
    } catch (err: any) {
        // You can extract the backend error message if available
        const message =
            err.response?.data?.message || "Unable to login.";
        throw new Error(message);
    }
};

export const checkAuthStatus = async () => {
   
    const res = await axios.get("/user/auth-status");
    if(res.status!==200){
        throw new Error("unable to authenticate!");
    }
    const data = await res.data;
    return data;
   
};
