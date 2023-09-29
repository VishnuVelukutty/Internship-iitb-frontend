package dev.vishnu.courses;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Table;

@Table(name = "CourseList")
public class CoursesModel {
    @Id
    private String courseCode;
    private String courseTitle;
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
