import Course from "../models/courseModel.js";


// GET All courses
const getAllCourses = async (req, res) => {
    const courses = await Course.find().lean();
    res.json(courses);
}


// GET one course
const getOneCourse = async (req, res) => {
    const course = await Course.findOne({ _id: req.params.id }).lean();
    if (!course) return res.status(404).json({"message": "Course can not find from DB"}); //Inglizchada 0 man

    res.json(course);
}



// Add new Course
const addNewCourse = async (req, res) => {
    if(!req?.body?.title || !req?.body?.author) return res.status(400).json({'message': "title and author are required"})

    const result = await Course.create({
        title: req.body.title,
        author: req.body.author
    });
    res.status(201).json(result);

}



// Update Course
const updateCourse = async (req, res) => {
    if(!req?.params?.id) {
        return res.status(400).json({"message": "ID params is required"});
    }
    
    const course = await Course.findOne({ _id: req.params.id}).exec();
    if(!course) {
        return res.status(404).json({"message": `No course this ID ${req.body.id}`}); //Inglizchada 0 man
    }
    
    if(req.body?.title) course.title = req.body.title;
    if(req.body?.author) course.author = req.body.author;
    const result = await course.save();
    res.json(result);
    
}

// delete course
const deleteCourse = async (req, res) => {
    if(!req?.params?.id) return res.status(400).json({"message": "Course ID is required"});

    const course = await Course.findOne({ _id: req.params.id}).exec();
    if(!course) {
        return res.status(404).json({"message": `No course this ID ${req.body.id}`}); //Inglizchada 0 man
    }

    const result = await course.deleteOne({ _id: req.body.id});
    res.json(course);
}

export {
    getAllCourses,
    addNewCourse,
    getOneCourse,
    updateCourse,
    deleteCourse
}