package dev.vishnu.courses;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoursesService {

    @Autowired
    private CoursesRepository coursesRepository;


    public JSONObject addCourseSrv(JSONObject requestData){
        JSONObject responseJson = new JSONObject();

        String courseCode = requestData.getString("courseCode");
        String courseTitle = requestData.getString("courseTitle");
        String desc = requestData.getString("desc");

        CoursesModel courses = new CoursesModel();
        courses.setCourseCode(courseCode);
        courses.setCourseTitle(courseTitle);
        courses.setDesc(desc);
        
        int statusCode = coursesRepository.addCourseDao(courses);

        if(statusCode == 1){
            responseJson.put("Success",statusCode);
        }else{
            responseJson.put("Failed",statusCode);
        }

        return responseJson;

    }
    
    public List<CoursesModel> getCourses(){
        return coursesRepository.findAll();
    }

    public List<CoursesModel> getCoursesById(String courseId){
        return coursesRepository.findById(courseId);

    }

    public List<CoursesModel> deleteCoursesById(String courseId){
     return coursesRepository.deleteById(courseId);
   
    }

}
