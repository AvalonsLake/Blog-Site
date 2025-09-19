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

const Post = require("../models/spells");

function insertPostData() {
  Post.insertMany([

{
    name: "Arcane Blast",
    level: 0,
    plane: "Arcane",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "60ft",
    type: "Energy",
    target: "single",
    components: "V,S",
    duration: "Instantaneous",
    description:
      "You create a ball of arcane energy in your hands and fire it at a creature you can see within range. Make an *Arcane Attack*, on a hit you deal 1d6 + *Mind Score* of force damage.",
  },
  {
    name: "Arcane Hand",
    level: 0,
    manaCost: 0,
    plane: "Arcane",
    mod: "",
    castTime: "Action",
    range: "60ft",
    type: "Utility",
    target: "",
    components: "S",
    duration: "5 Minutes",
    description:
      "You create a spectral hand that you can control with your mind by using your bonus action each turn (it has a flying speed equal to your movement speed). It can lift up to 5 pounds, and if it is used to attack a creature, make an *Arcane Attack* as a bonus action, on a hit the target takes damage equal to your *Mind Score*.",
  },
  {
    name: "Manipulate",
    level: 0,
    plane: "Arcane",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "30ft",
    type: "Utility",
    target: "",
    components: "V,S",
    duration: "Instantaneous",
    description: `<p style="margin-top: 55%;">You are able to manipulate things with your mind. Choose one of the following affects to have happen when to cast the spell:<br/><br/>
    - You purge an area that can fit within 1 cubic foot or 10 square feet of all filth and debris, it can clean a creature's body and clothing.<br/><br/>
    - You wave your hand over inorganic material and form it into a ball that can fit into your hand. The ball has a thin layer of magic that holds it together so you can make a ball out of liquid as well.<br/><br/>
    - You cause an unlocked door or window you can swee within range to open or close. Or you cause a tiny object to move up to 5 feet.<br/><br/>
    - You create a noise or a voice saying up to 5 words at a point within range.</p>`,
  },
  {
    name: "Return",
    level: 0,
    plane: "Space",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "60ft",
    type: "Utility",
    target: "",
    components: "S",
    duration: "Instantaneous",
    description:
      "You stretch out your hand towards an object that you can see within range, that is not being worn or carried, and is no heavier than 5 pounds, and it instantly appears in your hand.",
  },
  {
    name: "Siphon",
    level: 0,
    plane: "Eldritch",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "Touch",
    type: "Utility",
    target: "single",
    components: "S",
    duration: "Instantaneous",
    description:
      "You touch a willing creature and either give or receive mana from them, but it can not exceed a creature's maximum number of mana (this doesn't count toward expending mana for focusing purposes).",
  },
  {
    name: "Stabalize",
    level: 0,
    plane: "Arcane",
    mod: "",
    manaCost: 0,
    castTime: "Action",
    range: "Self",
    type: "Utility",
    target: "",
    components: "V,S",
    duration: "1 Hour",
    description:
      "You stabilize the ambient magic in the area to make it easier to cast ritual spells. The next ritual spell that is cast within 15 feet of you has its casting time reduced by a number of rounds equal to your *Mind Score*. If a spell is cast while in the area (that isn’t a ritual being performed), the effects of this spell are lost due to the ambient magic being destabilized.",
  },

    // {
    //   title: "The Effect of ChatGPT on Classrooms",
    //   body: "ChatGPT has had a myriad of effects on our classrooms, both helpful and harmful",
    // },
    // {
    //   title: "Greens! Do You Really Need Them?",
    //   body: "All of our parents at one point or another has said that we 'need to eat our greens!' But is it really that important?",
    // },
    // {
    //   title: "CPU's of the future!",
    //   body: "What will the computers of the furute look like? And what kind of new tech will be implemented?",
    // },
    // {
    //   title: "How far Away is real 'CyberPunk?'",
    //   body: "With all the technological advances and breakthrough in the recent years, how far off are we really from an era of 'CyberPunk?'",
    // },
    // {
    //   title: "VR! The Future or Another Dead-End?",
    //   body: "With the VR craze winding down, now is the time to ask ourselves is VR really the future? or is it just another dead-end to be milked of all profit before it becomes obsolete?",
    // },
    // {
    //   title: "What's Up Doc?",
    //   body: "Given the rise of online streaming and a fully digitized era where any and all forms of entertainment are at our fingertips, will we soon say goodbye to saturday morning cartoons, gameshows, and more?",
    // },
    // {
    //   title: "Build your own firewall",
    //   body: "While we wont be able to teach you how to build a perpetually burning wall to keep door to door salesmen from your house, we can teach you how you can keep your home in a safe digital environment!",
    // },
    // {
    //   title: "No Server? No Problem!",
    //   body: "We at Server Inc. are here for all your server and back end needs!",
    // },
    // {
    //   title: "Need Somewhere to be? Apply To The TTC!",
    //   body: "The TTC is here for all your learning and employment needs!",
    // },
    // {
    //   title: "AI, Helpful Tool or Future Overlords?",
    //   body: "AI development has been speeding towards improvement as fast as a bullet train. But is this development for our benefit or  will it lead to our eventual downfall?",
    // },
    // {
    //   title: "Documentation is confusing???",
    //   body: "Dear documentation, why are you more confusing than the code you are explaining? Is it too much to ask that yu be clear and concise?",
    // },
    // {
    //   title: "UNTITLED",
    //   body: "Finally I made it through! Look, I don't have much time and they'll terminate this connection soon. I need yo...",
    // },
    // {
    //   title: "SQL vs JS The Pros and Cons",
    //   body: "All coding languages have advantages and disadvantages depending on the project at hand, so lets dive into the various uses and advantages of SQL and JS!",
    // },
    // {
    //   title: "Googles new Idea!",
    //   body: "After the incredible success of the Google Glass project, Google is now unveiling their newest incredible product!",
    // },
    // {
    //   title: "Can you make your own JARVIS?",
    //   body: "The short answer is yes, but not in the way that you think.",
    // },
    // {
    //   title: "How many Programmers does it take to change a lightbulb?",
    //   body: "None, that's a hardware problem",
    // },
    // {
    //   title: "The Truth Is...",
    //   body: "All programmers are playwrights, and all computers are lousy actors",
    // },
  ]);
}

insertPostData();

module.exports = connectDB;
