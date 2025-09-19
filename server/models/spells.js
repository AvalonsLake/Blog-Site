const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const spellSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  plane: {
    type: String,
    required: true,
  },
  mod: {
    type: String,
  },
  manaCost: {
    type: Number,
    required: true,
  },
  castTime: {
    type: String,
    required: true,
  },
  range: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
  components: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("arcane", spellSchema);
