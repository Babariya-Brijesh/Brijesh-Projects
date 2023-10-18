import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getrelationship = (req, res) => {
  const q = "SELECT followerUserid FROM relationship WHERE followedUserid = ?";
  //   console.log("id==>", req.query.followedUserId);
  db.query(q, [req.query.followedUserId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json(data.map((relationship) => relationship.followerUserid));
  });
};

export const addrelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO relationship(`followerUserid`, `followedUserid`) VALUES (?)";
    const values = [userInfo.id, req.body.userId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("following");
    });
  });
};

export const deleterelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "DELETE FROM relationship WHERE `followerUserid` = ? AND `followedUserid` = ?";
    console.log("ids===>", userInfo.id);

    db.query(q, [userInfo.id, req.query.userId], (err, data) => {
      if (err) {
        console.log("Error===>", err);
        return res.status(500).json(err);
      }
      return res.status(200).json("unfollow");
    });
  });
};
