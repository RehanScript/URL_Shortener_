import express from "express";
import { connectToMongoDB } from "./connect.js";
import { router as urlRoute } from "./routes/url.js";
import { URL } from "./models/url.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = 8001;

app.use(express.json());
app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;  // get the parameter
    const entry = await URL.findOneAndUpdate(
        { shortID: shortId },  // Changed to match the schema field name
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                }
            },
        }
    );
    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    res.redirect(entry.redirectURL);
});

connectToMongoDB(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'));

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
