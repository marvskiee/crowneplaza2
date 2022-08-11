import dbConnect from '../../../utils/dbConnect'
import Guest from '../../../models/Guest'

dbConnect()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const guest = await Guest.find()
        res.status(200).json({
          success: true,
          data: guest,
        })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const guest = await Guest.create(req.body)
        res.status(201).json({ success: true, data: guest })
      } catch (error) {
        res.status(400).json({
          success: false,
          errors: {
            descriptionError: error.errors?.description.message,
            statusError: error.errors?.status?.message,
            emailError:
              error.code === 11000
                ? 'Guest already exist!'
                : error.errors?.email?.message,
            discountError: error.errors?.discount.message,
            discountTypeError: error.errors?.discount_type?.message,
          },
        })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
