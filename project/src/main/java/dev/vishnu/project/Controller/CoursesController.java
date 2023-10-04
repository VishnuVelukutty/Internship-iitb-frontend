package dev.vishnu.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.vishnu.project.Model.CoursesModel;
import dev.vishnu.project.Service.CoursesService;

import org.json.JSONObject;


@RestController
@RequestMapping("/api")
public class CoursesController {
    
    @Autowired
    private CoursesService coursesService;

    @PostMapping({"/courses"})
    public ResponseEntity<?> addCourseCntrl(@RequestBody String requestData) {
        JSONObject requestJson = new JSONObject(requestData);
        JSONObject responseJson = coursesService.addCoursesSrv(requestJson);
        return new ResponseEntity<>(responseJson.toString(),HttpStatus.OK);
    }

    @GetMapping({"/courses"})
    public ResponseEntity<?> getCourses() {
        return new ResponseEntity<>(coursesService.getCoursesSrv(),HttpStatus.OK);
    }


    @GetMapping({"/course/{id}"})
    public ResponseEntity<?> getCoursesById(@PathVariable String id) {
        return new ResponseEntity<>(coursesService.getCoursesByIdSrv(id), HttpStatus.OK);
    }

    @DeleteMapping({"/course/{id}"})
    public ResponseEntity<String> deleteCoursesById(@PathVariable String id){
        return new ResponseEntity<String>(coursesService.deleteCoursesById(id), HttpStatus.OK);

    }

}