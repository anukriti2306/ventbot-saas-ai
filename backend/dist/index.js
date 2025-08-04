// index.ts ✅ (ONLY ONE listen here)
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
connectToDatabase().then(() => {
    app.listen(5000, () => console.log("Server is Open and Connected successfully."));
}).catch((err) => console.log(err));
//# sourceMappingURL=index.js.map