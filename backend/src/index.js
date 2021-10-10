const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/team");
const PORT = process.env.PORT || 3006;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Service listening on port ${PORT}`);
});
