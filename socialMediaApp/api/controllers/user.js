import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;

  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    // const { password, ...info } = data?.[0];
    return res.json(data[0]);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "UPDATE users SET `name`=?,`city`=? WHERE id=?";

    db.query(q, [req.body.name, req.body.city, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("update");
    });
  });
};
