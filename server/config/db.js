const mongoose = require("mongoose");

const dbPathway = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbPathway);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// const Post = require("../models/post");

// function insertPostData() {
//   Post.insertMany([
//     {
//       title: "The Effect of ChatGPT on Classrooms",
//       body: "ChatGPT has had a myriad of effects on our classrooms, both helpful and harmful",
//     },
//     {
//       title: "Greens! Do You Really Need Them?",
//       body: "All of our parents at one point or another has said that we 'need to eat our greens!' But is it really that important?",
//     },
//     {
//       title: "CPU's of the future!",
//       body: "What will the computers of the furute look like? And what kind of new tech will be implemented?",
//     },
//     {
//       title: "How far Away is real 'CyberPunk?'",
//       body: "With all the technological advances and breakthrough in the recent years, how far off are we really from an era of 'CyberPunk?'",
//     },
//     {
//       title: "VR! The Future or Another Dead-End?",
//       body: "With the VR craze winding down, now is the time to ask ourselves is VR really the future? or is it just another dead-end to be milked of all profit before it becomes obsolete?",
//     },
//     {
//       title: "What's Up Doc?",
//       body: "Given the rise of online streaming and a fully digitized era where any and all forms of entertainment are at our fingertips, will we soon say goodbye to saturday morning cartoons, gameshows, and more?",
//     },
//     {
//       title: "Build your own firewall",
//       body: "While we wont be able to teach you how to build a perpetually burning wall to keep door to door salesmen from your house, we can teach you how you can keep your home in a safe digital environment!",
//     },
//     {
//       title: "No Server? No Problem!",
//       body: "We at Server Inc. are here for all your server and back end needs!",
//     },
//     {
//       title: "Need Somewhere to be? Apply To The TTC!",
//       body: "The TTC is here for all your learning and employment needs!",
//     },
//     {
//       title: "AI, Helpful Tool or Future Overlords?",
//       body: "AI development has been speeding towards improvement as fast as a bullet train. But is this development for our benefit or  will it lead to our eventual downfall?",
//     },
//     {
//       title: "Documentation is confusing???",
//       body: "Dear documentation, why are you more confusing than the code you are explaining? Is it too much to ask that yu be clear and concise?",
//     },
//     {
//       title: "UNTITLED",
//       body: "Finally I made it through! Look, I don't have much time and they'll terminate this connection soon. I need yo...",
//     },
//     {
//       title: "SQL vs JS The Pros and Cons",
//       body: "All coding languages have advantages and disadvantages depending on the project at hand, so lets dive into the various uses and advantages of SQL and JS!",
//     },
//     {
//       title: "Googles new Idea!",
//       body: "After the incredible success of the Google Glass project, Google is now unveiling their newest incredible product!",
//     },
//     {
//       title: "Can you make your own JARVIS?",
//       body: "The short answer is yes, but not in the way that you think.",
//     },
//     {
//       title: "How many Programmers does it take to change a lightbulb?",
//       body: "None, that's a hardware problem",
//     },
//     {
//       title: "The Truth Is...",
//       body: "All programmers are playwrights, and all computers are lousy actors",
//     },
//   ]);
// }

// insertPostData();

module.exports = connectDB;
