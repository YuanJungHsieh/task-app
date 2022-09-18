const mongoose = require("mongoose");

// MONGODB_URL variable is stored in .env file
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});
