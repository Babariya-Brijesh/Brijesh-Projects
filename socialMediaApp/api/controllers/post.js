import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = (req, res) => {
  const userId = req.query?.userId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = userId
      ? `SELECT p.*, u.id AS userid, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userid) WHERE userid = ?
       ORDER BY p.createdAt DESC`
      : `SELECT p.*, u.id AS userid, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userid)
        LEFT JOIN relationship AS r ON (p.userid = r.followedUserid) WHERE r.followerUserid= ? OR p.userid =?
    ORDER BY p.createdAt DESC`;

    const values = userId ? [userId] : [userInfo?.id, userInfo?.id];
    db.query(q, values, (err, data) => {
      if (err) {
        console.log("err --> ", err);
        return res.status(500).json(err);
      }
      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  console.log("imgurl====>", req.body.img);
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`des`, `img`, `createdAt`, `userid`) VALUES (?)";
    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM posts WHERE `id` = ? AND `userid` = ?";
    // console.log("data===>", req.params);
    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) {
        console.log("Error===>", err);
        return res.status(500).json(err);
      }
      return res.status(200).json("post has been deleted.");
    });
  });
};
