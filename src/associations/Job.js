import { Review, User, Company } from "../models/index.js"

Review.belongsTo(User)
Review.belongsTo(Company)

export default Review
