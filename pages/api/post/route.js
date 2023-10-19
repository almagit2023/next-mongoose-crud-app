import connectMongoDB from "../../../libs/mongodb";
import Post from "../../../models/Post";
import { NextResponse, NextRequest } from "next/server";

export default async function postAPI(req, res) {
  try {
    console.log("Trying connecting to MongoDB.....")
    await connectMongoDB()
    console.log("Finally connected to MongoDB !!!")

    if (req.method === 'POST') {
      try {
        const postCreated = await Post.create(req.body)
        console.log("post creation successful")
        res.json({ postCreated })
      }
      catch (error) {
        console.log("Error creating Post...")
        console.log(error)
      }
      console.log("Post created")
    }
    else if (req.method === 'GET') {
      console.log("Fetching all the documents...")
      // console.log("Request", req)
      try {
        const fetchedPosts = await Post.find({})
        console.log("Posts finally fetched...")
        res.json({ fetchedPosts })
      }
      catch (error) {
        console.log("Error fetching posts")
        console.log(error)
      }
    }
    else if ((req.method === 'GET') && (req.query.id !== "undefined")) {
      console.log("Fetching specific post...")
      // console.log("Request", req)
      try {
        const specificPost = await Post.findById(req.query.id)
        console.log("Specific Post fetched successfully")
        res.json({ specificPost })
      }
      catch (error) {
        console.log("Error fetching posts")
        console.log(error)
      }
    }
    else if (req.method === 'DELETE') {
      const id = req.query.id;
      try {
        await Post.findByIdAndDelete(id)
        res.json({ 'Deleted Item Id': id })
      }
      catch (error) {
        console.log("Error Deleting records...")
        console.log(error);
      }
    }
    else if (req.method === 'PUT') {
      try {
        const id = req.query.id
        console.log(id)
        await Post.findByIdAndUpdate(id, { title, description }, function (err, docs) {
          if (err) {
            console.log(err)
          }
          else {
            console.log("Updated Post : ", docs)
          }
        })
      }
      catch (error) {
        console.log("Error updating posts...")
        console.log(error)
      }
    }
  }
  catch (error) {
    console.log("Some problem connecting to MongoDB...")
    console.log(error)
    res.json({ error })
  }
}




