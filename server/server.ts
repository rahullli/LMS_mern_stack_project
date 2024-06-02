import { app } from "./app"; // Assuming you have a file named 'app.ts' exporting 'app'
import dotenv from "dotenv";

dotenv.config();

// Create server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
