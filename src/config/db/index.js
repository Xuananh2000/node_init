const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/edu_dev');
    console.log("OK!")
  }
  catch (error) {
    console.log("Nope!")
  }
}

module.exports = { connect }
