"use client";
import ProtectedRoute from "../../../Account/ProtectedRoute";
import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <ProtectedRoute>
      <div id="wd-home">
        <div className="d-flex">
          <div className="flex-fill me-3">
            <Modules />
          </div>
          <div className="d-none d-xl-block">
            <CourseStatus />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}