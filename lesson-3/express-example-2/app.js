import express from "express";

import movies from "./movies.js";

const app = express();

app.get("/movies", (req, res)=> {
    const dababaseResponse = null;
    res.json(movies);
    // res.send(dababaseResponse);
    // res.send(movies);
})

app.listen(3000, ()=> console.log("Server running at 3000 PORT"))