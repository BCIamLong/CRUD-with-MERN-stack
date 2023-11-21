import "dotenv/config";
import "./db.js";
import app from "./app.js";

const port = process.env.PORT || 3100;

app.listen(port, () => console.log(`Server is listening at port ${port}`));
