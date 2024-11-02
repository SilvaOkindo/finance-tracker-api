import { User } from "../models/user.js"

export const getAllUsers = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const startIndex = (page - 1) * limit

    const totalUsers = await User.countDocuments()


    const users = await User.find().skip(startIndex).limit(limit)

    res.status(200).send({
        page,
        limit,
        totalUsers,
        pages: Math.ceil(totalUsers / limit),
        data: users
    })
}