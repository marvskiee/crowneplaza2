const mongoose = require('mongoose')

const AccomodationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill up this field'],
  },
  details: {
    type: String,
    required: [true, 'Please fill up this field'],
  },
  price: {
    type: Number,
    required: [true, 'Please fill up this field'],
  },
  status: {
    type: Boolean,
    required: [true, 'Please fill up this field'],
    default: true,
  },
})

module.exports =
  mongoose.models.Accomodation ||
  mongoose.model('Accomodation', AccomodationSchema)
