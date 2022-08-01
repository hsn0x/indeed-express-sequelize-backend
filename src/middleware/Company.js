import { companiesQueries } from "../queries/index.js"

export default {
    isOwner: async (req, res, next) => {
        const id = parseInt(req.params.id)
        const { session, user } = req

        if (!user.Companys || !user.Companys.length > 0) {
            return res.status(401).json({
                message: `You dont have any records`,
            })
        }

        const company = companiesQueries.findByPkQuery(company.id)

        const isOwner = company.UserId === user.id

        if (isOwner) {
            return next()
        } else {
            return res.status(401).json({
                message: `You are not the owner of the record`,
            })
        }
    },
}
