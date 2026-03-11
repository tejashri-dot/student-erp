// import { Routes, Route } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// import PublicLayout from "./PublicLayout";
// import Layout from "./Layout";

// import Home from "./pages/Home/Home";
// import About from "./pages/About";
// import ChairmanMessage from "./pages/ChairmanMessage";
// import PrincipalMessage from "./pages/PrincipalMessage";
// import VisionMission from "./pages/VisionMission";

// import AcademicProgram from "./pages/AcademicProgram";
// import Curriculum from "./pages/Curriculum";
// import AcademicEvents from "./pages/AcademicEvents";
// import Announcements from "./pages/Announcements";
// import RulesRegulations from "./pages/RulesRegulations";

// import AdmissionProcedure from "./pages/AdmissionProcedure";
// import AdmissionForm from "./pages/AdmissionForm";
// import FeeStructure from "./pages/FeeStructure";

// import Transport from "./pages/Transport";
// import Library from "./pages/Library";
// import Sports from "./pages/Sports";

// import News from "./pages/News";
// import Gallery from "./pages/Gallery";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";

// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import StudentList from "./StudentList";
// import StaffList from "./StaffList";
// import FeePayment from "./pages/FeePayment";
// import OnlineRegistration from "./pages/OnlineRegistration";

// function App() {
//   const { user } = useAuth();

//   const PublicRoute = ({ children }) => <PublicLayout>{children}</PublicLayout>;

//   const AdminRoute = ({ children }) => <Layout>{children}</Layout>;

//   return (
//     <Routes>
//       {/* PUBLIC */}
//       <Route
//         path="/"
//         element={
//           <PublicRoute>
//             <Home />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/about"
//         element={
//           <PublicRoute>
//             <About />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/chairman-message"
//         element={
//           <PublicRoute>
//             <ChairmanMessage />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/principal-message"
//         element={
//           <PublicRoute>
//             <PrincipalMessage />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/vision-mission"
//         element={
//           <PublicRoute>
//             <VisionMission />
//           </PublicRoute>
//         }
//       />

//       <Route
//         path="/academic/program"
//         element={
//           <PublicRoute>
//             <AcademicProgram />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/academic/curriculum"
//         element={
//           <PublicRoute>
//             <Curriculum />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/academic/events"
//         element={
//           <PublicRoute>
//             <AcademicEvents />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/academic/announcements"
//         element={
//           <PublicRoute>
//             <Announcements />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/academic/rules-regulations"
//         element={
//           <PublicRoute>
//             <RulesRegulations />
//           </PublicRoute>
//         }
//       />

//       <Route
//         path="/admission/procedure"
//         element={
//           <PublicRoute>
//             <AdmissionProcedure />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/admission/form"
//         element={
//           <PublicRoute>
//             <AdmissionForm />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/admission/fee-structure"
//         element={
//           <PublicRoute>
//             <FeeStructure />
//           </PublicRoute>
//         }
//       />

//       <Route
//         path="/facilities/transport"
//         element={
//           <PublicRoute>
//             <Transport />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/facilities/library"
//         element={
//           <PublicRoute>
//             <Library />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/facilities/sports"
//         element={
//           <PublicRoute>
//             <Sports />
//           </PublicRoute>
//         }
//       />

//       <Route
//         path="/news"
//         element={
//           <PublicRoute>
//             <News />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/gallery"
//         element={
//           <PublicRoute>
//             <Gallery />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/blog"
//         element={
//           <PublicRoute>
//             <Blog />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/contact"
//         element={
//           <PublicRoute>
//             <Contact />
//           </PublicRoute>
//         }
//       />

//       {/* AUTH */}
//       <Route path="/login" element={<Login />} />
//       <Route
//         path="/fee-payment"
//         element={
//           <PublicRoute>
//             <FeePayment />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/online-registration"
//         element={
//           <PublicRoute>
//             <OnlineRegistration />
//           </PublicRoute>
//         }
//       />

//       {/* ADMIN */}
//       <Route
//         path="/dashboard"
//         element={
//           <AdminRoute>
//             <Dashboard />
//           </AdminRoute>
//         }
//       />
//       <Route
//         path="/students"
//         element={
//           <AdminRoute>
//             <StudentList />
//           </AdminRoute>
//         }
//       />
//       <Route
//         path="/staff"
//         element={
//           <AdminRoute>
//             <StaffList />
//           </AdminRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;




// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// import PublicLayout from "./PublicLayout";
// import Layout from "./Layout";

// /* PUBLIC PAGES */
// import Home from "./pages/Home/Home";
// import About from "./pages/About";
// import ChairmanMessage from "./pages/ChairmanMessage";
// import PrincipalMessage from "./pages/PrincipalMessage";
// import VisionMission from "./pages/VisionMission";

// import AcademicProgram from "./pages/AcademicProgram";
// import Curriculum from "./pages/Curriculum";
// import AcademicEvents from "./pages/AcademicEvents";
// import Announcements from "./pages/Announcements";
// import RulesRegulations from "./pages/RulesRegulations";

// import AdmissionProcedure from "./pages/AdmissionProcedure";
// import AdmissionForm from "./pages/AdmissionForm";
// import FeeStructure from "./pages/FeeStructure";

// import Transport from "./pages/Transport";
// import Library from "./pages/Library";
// import Sports from "./pages/Sports";

// import News from "./pages/News";
// import Gallery from "./pages/Gallery";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact.jsx";

// /* AUTH & ADMIN */
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import StudentList from "./StudentList";
// import StaffList from "./StaffList";
// import ParentList from "./pages/Home/ParentList.jsx";
// import FeePayment from "./pages/FeePayment";
// import OnlineRegistration from "./pages/OnlineRegistration";
// import AttendanceHome from "./pages/Attendance/AttendanceHome";
// import StudentAttendance from "./pages/Attendance/StudentAttendance";
// import StaffAttendance from "./pages/Attendance/StaffAttendance";
// import UnderGraduate from "./pages/undergraduate/UnderGraduate.jsx";
// import PostGraduate from "./pages/postgraduate/PostGraduate";
// import MTechnology from "./pages/master/MTechnology.jsx";
// import iti from "./pages/iti/ITICourses.jsx";
// import PGDiploma from "./pages/pgdiploma/PGDiploma.jsx";
// import DiplomaCourse from "./pages/diplomaCourse/DiplomaCourse.jsx";
// import DiplomaEngg from "./pages/diplomaEngg/DiplomaEngg.jsx";
// import Btechnology from "./pages/technology/BTechnology.jsx";


// /* PARENT PORTAL */
// import ParentDashboard from "./pages/ParentDashboard";
// import ParentAttendance from "./pages/ParentAttendance";
// // import ExamScores from "./pages/ExamScores";
// // import FeeHistory from "./pages/FeeHistory";

// function App() {
//   const { user } = useAuth();

//   const PublicRoute = ({ children }) => <PublicLayout>{children}</PublicLayout>;

//   const AdminRoute = ({ children }) => <Layout>{children}</Layout>;

//   return (
//     <Routes>
//       {/* PUBLIC */}
//       <Route
//         path="/"
//         element={
//           <PublicRoute>
//             <Home />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/about"
//         element={
//           <PublicRoute>
//             <About />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/chairman-message"
//         element={
//           <PublicRoute>
//             <ChairmanMessage />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/principal-message"
//         element={
//           <PublicRoute>
//             <PrincipalMessage />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/vision-mission"
//         element={
//           <PublicRoute>
//             <VisionMission />
//           </PublicRoute>
//         }
//       />

//       <Route
//         path="/academic/programs"
//         element={
//           <PublicRoute>
//             <AcademicProgram />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/academic/curriculum"
//         element={
//           <PublicRoute>
//             <Curriculum />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/academic/events"
//         element={
//           <PublicRoute>
//             <AcademicEvents />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/academic/announcements"
//         element={
//           <PublicRoute>
//             <Announcements />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/academic/rules-regulations"
//         element={
//           <PublicRoute>
//             <RulesRegulations />
//           </PublicRoute>
//         }
//       />

//       <Route
//         path="/admission/procedure"
//         element={
//           <PublicRoute>
//             <AdmissionProcedure />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/admission/form"
//         element={
//           <PublicRoute>
//             <AdmissionForm />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/admission/fee-structure"
//         element={
//           <PublicRoute>
//             <FeeStructure />
//           </PublicRoute>
//         }
//       />

//       <Route
//         path="/facilities/transport"
//         element={
//           <PublicRoute>
//             <Transport />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/facilities/library"
//         element={
//           <PublicRoute>
//             <Library />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/facilities/sports"
//         element={
//           <PublicRoute>
//             <Sports />
//           </PublicRoute>
//         }
//       />

//       <Route
//         path="/news"
//         element={
//           <PublicRoute>
//             <News />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/gallery"
//         element={
//           <PublicRoute>
//             <Gallery />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/blog"
//         element={
//           <PublicRoute>
//             <Blog />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/contact"
//         element={
//           <PublicRoute>
//             <Contact />
//           </PublicRoute>
//         }
//       />

//       {/* AUTH */}
//       <Route path="/login" element={<Login />} />
//       <Route
//         path="/fee-payment"
//         element={
//           <PublicRoute>
//             <FeePayment />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/online-registration"
//         element={
//           <PublicRoute>
//             <OnlineRegistration />
//           </PublicRoute>
//         }
//       />

//       {/* ADMIN */}
//       <Route
//         path="/dashboard"
//         element={
//           <AdminRoute>
//             <Dashboard />
//           </AdminRoute>
//         }
//       />
//       <Route
//         path="/students"
//         element={
//           <AdminRoute>
//             <StudentList />
//           </AdminRoute>
//         }
//       />
//       <Route
//         path="/staff"
//         element={
//           <AdminRoute>
//             <StaffList />
//           </AdminRoute>
//         }
//       />
//       <Route
//         path="/parents"
//         element={
//           <AdminRoute>
//             <ParentList />
//           </AdminRoute>
//         }
//       />
//       <Route
//         path="/attendance"
//         element={
//           <AdminRoute>
//             <AttendanceHome />
//           </AdminRoute>
//         }
//       />
//        <Route path="/programs/undergraduate" element={<UnderGraduate />} />
//           <Route path="/programs/postgraduate" element={<PostGraduate />} />
//           <Route path="/programs/diploma" element={<DiplomaEngg />} />
//           <Route path="/programs/technology" element={<BTechnology />} />
//           <Route path="/programs/master" element={<MTechnology />} />
//           <Route path="/programs/diplomacourse" element={<DiplomaCourse />} />
//           <Route path="/programs/certificate" element={<Certificates />} />
//           <Route path="/programs/pg-diploma" element={<PGDiploma />} />
//           {/* <Route path="/programs/school" element={<SchoolPrograms />} /> */}
//           <Route path="/programs/iti" element={<ITICourses />} />

//       <Route
//         path="/attendance/students"
//         element={
//           <AdminRoute>
//             <StudentAttendance />
//           </AdminRoute>
//         }
//       />

//       <Route
//         path="/attendance/staff"
//         element={
//           <AdminRoute>
//             <StaffAttendance />
//           </AdminRoute>
//         }
//       />

//       {/* PARENT PORTAL */}
//       <Route
//         path="/parent"
//         element={
//           <AdminRoute>
//             <ParentDashboard />
//           </AdminRoute>
//         }
//       />
//       <Route
//         path="/parent/attendance"
//         element={
//           <AdminRoute>
//             <ParentAttendance />
//           </AdminRoute>
//         }
//       />
      
//     </Routes>
//   );
// }

// export default App;







import { Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

import PublicLayout from "./PublicLayout";
import Layout from "./Layout";

/* PUBLIC PAGES */
import Home from "./pages/Home/Home";
import About from "./pages/About";
import ChairmanMessage from "./pages/ChairmanMessage";
import PrincipalMessage from "./pages/PrincipalMessage";
import VisionMission from "./pages/VisionMission";

import AcademicProgram from "./pages/AcademicProgram";
import Curriculum from "./pages/Curriculum";
import AcademicEvents from "./pages/AcademicEvents";
import Announcements from "./pages/Announcements";
import RulesRegulations from "./pages/RulesRegulations";

import AdmissionProcedure from "./pages/AdmissionProcedure";
import AdmissionForm from "./pages/AdmissionForm";
import FeeStructure from "./pages/FeeStructure";

import Transport from "./pages/Transport";
import Library from "./pages/Library";
import Sports from "./pages/Sports";

import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact.jsx";

/* AUTH */
import Login from "./Login";

/* ADMIN */
import Dashboard from "./Dashboard";
import StudentList from "./StudentList";
import StaffList from "./StaffList";
import ParentList from "./pages/Home/ParentList.jsx";

import FeePayment from "./pages/FeePayment";
import OnlineRegistration from "./pages/OnlineRegistration";

import AttendanceHome from "./pages/Attendance/AttendanceHome";
import StudentAttendance from "./pages/Attendance/StudentAttendance";
import StaffAttendance from "./pages/Attendance/StaffAttendance";

/* PROGRAMS */
import UnderGraduate from "./pages/undergraduate/UnderGraduate.jsx";
import PostGraduate from "./pages/postgraduate/PostGraduate.jsx";
import DiplomaEngg from "./pages/diplomaEngg/DiplomaEngg.jsx";
import DiplomaCourse from "./pages/diplomaCourse/DiplomaCourse.jsx";
import MTechnology from "./pages/master/MTechnology.jsx";
import BTechnology from "./pages/technology/BTechnology.jsx";
import PGDiploma from "./pages/pgdiploma/PGDiploma.jsx";
import ITICourses from "./pages/iti/ITICourses.jsx";
// import Certificates from "./pages/certificates/Certificates.jsx";

/* PARENT PORTAL */
import ParentDashboard from "./pages/ParentDashboard";
import ParentAttendance from "./pages/ParentAttendance";

import StudentProfile from "./pages/StudentProfile.jsx";
import StudentSearch from "./pages/StudentSearch.jsx";
// import ExamScores from "./pages/ExamScores";
// import FeeHistory from "./pages/FeeHistory";


function App() {
  const { user } = useAuth();

  const PublicRoute = ({ children }) => <PublicLayout>{children}</PublicLayout>;

  const AdminRoute = ({ children }) => <Layout>{children}</Layout>;

  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
      <Route path="/about" element={<PublicRoute><About /></PublicRoute>} />
      <Route path="/chairman-message" element={<PublicRoute><ChairmanMessage /></PublicRoute>} />
      <Route path="/principal-message" element={<PublicRoute><PrincipalMessage /></PublicRoute>} />
      <Route path="/vision-mission" element={<PublicRoute><VisionMission /></PublicRoute>} />

      <Route path="/academic/program" element={<PublicRoute><AcademicProgram /></PublicRoute>} />
      <Route path="/academic/curriculum" element={<PublicRoute><Curriculum /></PublicRoute>} />
      <Route path="/academic/events" element={<PublicRoute><AcademicEvents /></PublicRoute>} />
      <Route path="/academic/announcements" element={<PublicRoute><Announcements /></PublicRoute>} />
      <Route path="/academic/rules-regulations" element={<PublicRoute><RulesRegulations /></PublicRoute>} />

      <Route path="/admission/procedure" element={<PublicRoute><AdmissionProcedure /></PublicRoute>} />
      <Route path="/admission/form" element={<PublicRoute><AdmissionForm /></PublicRoute>} />
      <Route path="/admission/fee-structure" element={<PublicRoute><FeeStructure /></PublicRoute>} />

      <Route path="/facilities/transport" element={<PublicRoute><Transport /></PublicRoute>} />
      <Route path="/facilities/library" element={<PublicRoute><Library /></PublicRoute>} />
      <Route path="/facilities/sports" element={<PublicRoute><Sports /></PublicRoute>} />

      <Route path="/news" element={<PublicRoute><News /></PublicRoute>} />
      <Route path="/gallery" element={<PublicRoute><Gallery /></PublicRoute>} />
      <Route path="/blog" element={<PublicRoute><Blog /></PublicRoute>} />
      <Route path="/contact" element={<PublicRoute><Contact /></PublicRoute>} />

      {/* PROGRAMS */}
      <Route path="/programs/undergraduate" element={<PublicRoute><UnderGraduate /></PublicRoute>} />
      <Route path="/programs/postgraduate" element={<PublicRoute><PostGraduate /></PublicRoute>} />
      <Route path="/programs/diploma" element={<PublicRoute><DiplomaEngg /></PublicRoute>} />
      <Route path="/programs/technology" element={<PublicRoute><BTechnology /></PublicRoute>} />
      <Route path="/programs/master" element={<PublicRoute><MTechnology /></PublicRoute>} />
      <Route path="/programs/diplomacourse" element={<PublicRoute><DiplomaCourse /></PublicRoute>} />
      {/* <Route path="/programs/certificate" element={<PublicRoute><Certificates /></PublicRoute>} /> */}
      <Route path="/programs/pg-diploma" element={<PublicRoute><PGDiploma /></PublicRoute>} />
      <Route path="/programs/iti" element={<PublicRoute><ITICourses /></PublicRoute>} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/fee-payment" element={<PublicRoute><FeePayment /></PublicRoute>} />
      <Route path="/online-registration" element={<PublicRoute><OnlineRegistration /></PublicRoute>} />

      {/* ADMIN */}
      <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
      <Route path="/students" element={<AdminRoute><StudentList /></AdminRoute>} />
      <Route path="/staff" element={<AdminRoute><StaffList /></AdminRoute>} />
      <Route path="/parents" element={<AdminRoute><ParentList /></AdminRoute>} />
      <Route path="/attendance" element={<AdminRoute><AttendanceHome /></AdminRoute>} />
      <Route path="/attendance/students" element={<AdminRoute><StudentAttendance /></AdminRoute>} />
      <Route path="/attendance/staff" element={<AdminRoute><StaffAttendance /></AdminRoute>} />

      {/* PARENT PORTAL */}
      <Route
        path="/parent"
        element={
          <AdminRoute>
            <ParentDashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/parent/attendance"
        element={
          <AdminRoute>
            <ParentAttendance />
          </AdminRoute>
        }
      />

       <Route path="/students" element={<StudentSearch />} />
        <Route path="/student/:id" element={<StudentProfile />} />
    </Routes>
  );
}

export default App;