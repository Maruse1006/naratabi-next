router.get("/me", (req, res) => {
    const headers = req.headers; //追記
    console.log(headers); //追記
    const bearToken = req.headers["authorization"];
    const bearer = bearToken.split(" ");
    const token = bearer[1];
  
    jwt.verify(token, "secret", (error, user) => {
      if (error) {
        return res.sendStatus(403);
      } else {
        return res.json({
          user,
        });
      }
    });
  });