const app = require("express")();

app.get("/", (req, res) => {
  res.json({ message: "It works!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}/`)
})
