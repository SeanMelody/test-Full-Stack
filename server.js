const express = require("express");
const app = express()
const PORT = process.env.PORT || 5005;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

//Because this says api ,don't need to write it on the apiRoutes.js for each request
app.use("/api", require("./routes/apiRoutes"))

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))
