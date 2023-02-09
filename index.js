import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/route.js";
import Connection from "./database/db.js";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use("/", userRoutes);
const PORT = 6010;
Connection();
app.listen(PORT, () => {
  console.log(`PORT WAS LISTENING ON ${PORT}`);
});
