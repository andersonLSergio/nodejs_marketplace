const Purchase = require('../models/Purchase')

class PurchaseApproveController {
  async approve (req, res) {
    const { id } = req.params

    const { ad } = await Purchase.findById(id).populate({
      path: 'ad',
      populate: {
        path: 'author'
      }
    })

    if (!ad.author._id.equals(req.userId)) {
      return res
        .status(401)
        .json({ error: 'You are not the author of this Ad' })
    }

    if (ad.purchasedBy) {
      return res.status(400).json({ error: 'Ad already purchased' })
    }

    ad.purchasedBy = id

    await ad.save()

    return res.json(ad)
  }
}

module.exports = new PurchaseApproveController()
