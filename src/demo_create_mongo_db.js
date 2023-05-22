// const { MongoClient, ServerApiVersion } = require("mongodb");
// const mongoose = require("mongoose");

// const { Schema, model } = mongoose;
// const uri =
//   "mongodb+srv://usman:Admin321@cluster0.s2iblwa.mongodb.net/exerciesTrack?retryWrites=true&w=majority";

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(uri);

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
//   const blogSchema = new Schema({
//     title: String,
//     slug: String,
//     published: Boolean,
//     author: String,
//     content: String,
//     tags: [String],
//     createdAt: Date,
//     updatedAt: Date,
//     comments: [
//       {
//         user: String,
//         content: String,
//         votes: Number,
//       },
//     ],
//   });
//   const Blog = model("usersUsman", blogSchema);
//   const article = new Blog({
//     title: "Awesome Post! yooooo",
//     slug: "awesome-postussususu",
//     published: true,
//     content: "This is the best post ever",
//     tags: ["featured", "announcement"],
//   });

//   // Insert the article in our MongoDB database
//   await article.save();

//   console.log("saved");
// }
// // //Create a MongoClient with a MongoClientOptions object to set the Stable API version
// // const client = new MongoClient(uri, {
// //   serverApi: {
// //     version: ServerApiVersion.v1,
// //     strict: true,
// //     deprecationErrors: true,
// //   },
// // });
// // async function run() {
// //   try {
// //     // Connect the client to the server	(optional starting in v4.7)
// //     await client.connect();
// //     // Send a ping to confirm a successful connection
// //     await client.db("admin").command({ ping: 1 });
// //     console.log(
// //       "Pinged your deployment. You successfully connected to MongoDB!"
// //     );
// //   } catch (error) {
// //     console.log(error);
// //   }
// //   // } finally {
// //   //   // Ensures that the client will close when you finish/error
// //   //   await client.close();
// //   // }
// // }
// // run().catch(console.dir);
