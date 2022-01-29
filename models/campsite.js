const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campsiteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // 2nd argument is for configs. timestamps = created at & updated at properties
  }
);

// Model - returns a constructor function = like classes
const Campsite = mongoose.model("Campsite", campsiteSchema);
//1st argument singular and upper of name of collection which will be 'campsites'. Mongoose will match them. This instantiates documents.

module.exports = Campsite;
