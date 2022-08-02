import { jobsQueries } from "../queries/index.js"
import { JobValidation } from "../validation/index.js"

export default {
    404: async (req, res) => {
        res.status(404).json({ message: "Not found" })
    },
}
