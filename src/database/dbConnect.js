const mongoose = require("mongoose")

const DATABASE_URI = process.env.DATABASE_URI
const connect = async () => {
  try {
  mongoose.connect(DATABASE_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:"ReconnectForest"
      }
    )
    console.log("Database conectada")
  } catch (error) {
    console.log(error)
  }
}
module.exports = {connect}