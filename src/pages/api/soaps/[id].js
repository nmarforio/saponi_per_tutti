import dbConnect from "@/db/connect";
import Soap from "@/db/model/Soap";
import Profile from "@/db/model/User";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const soaps = await Soap.findById(id);
    return res.status(200).json(soaps);
  }
  if (request.method === "PUT") {
    // If our request method is PUT ...
    const profiles = await Profile.findByIdAndUpdate(id, {
      $set: request.body,
    });
    // ... find our joke by its ID and update the content that is part of the request body!
    return response.status(200).json(jokeToUpdate);
    // If successful, we'll receive an OK status code.
  }
}
