"use client";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Dashboard({
  courses,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col">
              <div className="card">
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {enrolling && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                        className={`btn ${
                          course.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                    {course.name}
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    {course.description}
                  </p>
                  <Link href={`/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}