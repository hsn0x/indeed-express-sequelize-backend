import { Job, Job_Benefit, User } from "../models/index.js"

Job_Benefit.belongsTo(User)
Job_Benefit.belongsTo(Job)

export default Job_Benefit
