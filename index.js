import express from "express";
import spacesRoutes from "./routes/spacesRoutes.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import logMiddleware from "./middlewares/logMiddleware.js";

const app = express();

app.use(express.json());
app.use(cors())

app.use(logMiddleware);

app.use("/", (req, res) => {
    res.send("Received");
})

app.use("/spaces", spacesRoutes);
app.use("/auth", authRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})