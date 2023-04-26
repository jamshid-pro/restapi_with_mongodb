import { model, Schema } from "mongoose";

const CourseSchema = new Schema({
    title : {
        type: String,
        required: true, 
        min: 5
    },
    author: {
        type: String,
        required: true,
        min: 4
    }
}, {timestamps: true});

const Course = model("Course", CourseSchema);
export default Course;