import { Job, Job_Qualification, User } from "../models/index.js"

Job_Qualification.belongsTo(User)
Job_Qualification.belongsTo(Job)

export default Job_Qualification
