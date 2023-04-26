import { Router } from "express";
import { addNewCourse, getAllCourses, getOneCourse, updateCourse, deleteCourse } from "../controllers/courseControllers.js";
const router = Router();


router.route("/")
    .get(getAllCourses)
    .post(addNewCourse);

router.route("/:id")
    .get(getOneCourse)
    .put(updateCourse)
    .delete(deleteCourse);

export default router;