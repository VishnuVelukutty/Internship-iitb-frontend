package dev.vishnu.project.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "courseList")
public class CoursesModel {


    
    @Column(name = "courseCode")
    @Id
    private String courseCode;
    
    @Column(name = "courseTitle")
    private String courseTitle;

    @Column(name = "courseDesc")
    private String courseDesc;
    

    public String getCourseTitle() {
        return courseTitle;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public String getCourseDesc() {
        return courseDesc;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public void setCourseDesc(String courseDesc) {
        this.courseDesc = courseDesc;
    }

    @Override
    public String toString() {
        return "CoursesModel [courseTitle=" + courseTitle + ", courseCode=" + courseCode
                + ", desc=" + courseDesc + "]";
    }

}
