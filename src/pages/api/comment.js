import dbConnect from "@/db/connect";
import Comment from "@/db/model/Comment";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const comments = await Comment.find();
    return res.status(200).json(comments);
  }
  if (req.method === "POST") {
    try {
      const commentData = req.body;
      console.log("Works?", commentData);
      const comment = new Comment(commentData);
      await comment.save();
      res.status(201).json({ status: "Created Comment" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
}
