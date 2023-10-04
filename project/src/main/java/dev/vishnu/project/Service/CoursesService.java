package dev.vishnu.project.Service;

import java.util.List;
import java.util.Optional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.vishnu.project.Model.CoursesModel;
import dev.vishnu.project.Repository.CoursesRepository;

@Service
public class CoursesService {

    @Autowired
    private CoursesRepository coursesRepository;


    public JSONObject addCoursesSrv(JSONObject requestData){
        JSONObject responseJson = new JSONObject();

        String courseCode = requestData.getString("CourseCode");
        String courseTitle = requestData.getString("CourseTitle");
        String CourseDesc = requestData.getString("CourseDesc");

        CoursesModel courses = new CoursesModel();
        courses.setCourseCode(courseCode);
        courses.setCourseTitle(courseTitle);
        courses.setCourseDesc(CourseDesc);
        
        try {
            coursesRepository.saveCoursesDao(courses);
            responseJson.put("Status","Success");

        } catch (Exception e) {

            responseJson.putOpt("Error",e);

        }


        return responseJson;

    }
    
    public List<CoursesModel> getCoursesSrv(){
        return coursesRepository.getCoursesDao();
    }

    public CoursesModel getCoursesByIdSrv(String courseId){
        return coursesRepository.getCoursesByIdDao(courseId);

    }

    public String deleteCoursesById(String courseId){
     
    coursesRepository.deleteByIdDao(courseId);
   return "Working";
    }

}
