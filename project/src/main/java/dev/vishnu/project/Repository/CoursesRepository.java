package dev.vishnu.project.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dev.vishnu.project.Model.CoursesModel;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

@Repository
public class CoursesRepository {

	@Autowired
	private EntityManager entityManager;

	@Transactional
	public void saveCoursesDao(CoursesModel courses) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.persist(courses);
	}

	public List<CoursesModel> getCoursesDao() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<CoursesModel> query = currentSession.createQuery("from CoursesModel", CoursesModel.class);
		List<CoursesModel> list = query.getResultList();
		return list;
	}

	public CoursesModel getCoursesByIdDao(String courseId) {
		Session currentSession = entityManager.unwrap(Session.class);
		CoursesModel course = currentSession.get(CoursesModel.class, courseId);
		return course;
	}

	public void deleteByIdDao(String courseId) {
		Session currentSession = entityManager.unwrap(Session.class);
		CoursesModel course = currentSession.get(CoursesModel.class, courseId);
		currentSession.remove(course);
	}

}

/*
 * POST /api/courses
 * Create a new course
 * 2.
 * GET /api/courses
 * a.
 * list of all courses available
 * 3.
 * GET /api/courses/23
 * a.
 * View detailed information about a course with ID = 23:
 * 4.
 * DELETE /api/courses/24
 * a.
 * delete a course with ID = 24
 */