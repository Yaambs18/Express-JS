const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" placeholder="title"><input type="number" name="size" placeholder="size"><button type="submit">Add Product</button></formt>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
