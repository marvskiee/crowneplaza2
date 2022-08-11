import dbConnect from '../../../../utils/dbConnect'
import Accomodation from '../../../../models/Accomodation'

dbConnect()

export default async (req, res) => {
  const {
    method,
    query: { floor },
  } = req

  switch (method) {
    case 'GET':
      try {
        const accomodation = await Accomodation.find().distinct('roomName')
        res.status(200).json({
          success: true,
          data: accomodation,
        })
      } catch (error) {
        res.status(400).json({ success: false, errors: error.message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
