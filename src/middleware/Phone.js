import { phonesQueries } from "../queries/index.js"

export default {
    isOwner: async (req, res, next) => {
        const id = parseInt(req.params.id)
        const { session, user } = req

        if (!user.Phones || !user.Phones.length > 0) {
            return res.status(401).json({
                message: `You dont have any records`,
            })
        }

        const record = phonesQueries.findByPk(id)

        const isOwner = record.UserId === user.id

        if (isOwner) {
            return next()
        } else {
            return res.status(401).json({
                message: `You are not the owner of the record`,
            })
        }
    },
}
