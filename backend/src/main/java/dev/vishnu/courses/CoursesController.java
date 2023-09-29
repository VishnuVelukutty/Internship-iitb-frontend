package dev.vishnu.courses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.json.JSONObject;


/*
 * 1. POST /api/courses
a. Create a new course
2. GET /api/courses
a. list of all courses available
3. GET /api/courses/23
a. View detailed information about a course with ID = 23:
4. DELETE /api/courses/24
a. delete a course with ID = 24
5. POST /api/instances
a. Create a new instance of a course delivery
6. GET /api/instances/2020/1
a. list of courses delivered in year YYYY=2020, and semester=1
7. GET /api/instances/2023/1/19
a. View detailed information about an instance of a course ID = 19, delivered
in YYYY=2023, and semester = 1
8. DELETE /api/instances/2022/2/8
a. Delete an insta
 */

@RestController
@RequestMapping("/api")
public class CoursesController {
    
    @Autowired
    private CoursesService coursesService;

    @PostMapping({"/courses"})
    public ResponseEntity<?> addCourseCntrl(@RequestBody String requestData) {
        JSONObject requestJson = new JSONObject(requestData);
        JSONObject responseJson = coursesService.addCourseSrv(requestJson);
        return new ResponseEntity<>(responseJson.toString(),HttpStatus.OK);
    }

    @GetMapping({"/courses"})
    public ResponseEntity<?> getCourses() {
        return new ResponseEntity<>(coursesService.getCourses(),HttpStatus.OK);
    }


    @GetMapping({"/course/{id}"})
    public ResponseEntity<String> getCoursesById() {
        return new ResponseEntity<String>(coursesService.getCoursesById(), HttpStatus.OK);
    }

    @DeleteMapping({"/course/{id}"})
    public ResponseEntity<String> deleteCoursesById(){
        return new ResponseEntity<String>(coursesService.deleteCoursesById(), HttpStatus.OK);

    }

}


https://www.pornhub.org/view_video.php?viewkey=64ee741fc8c9c