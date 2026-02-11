import { Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

import PublicLayout from "./PublicLayout";
import Layout from "./Layout";

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
import Contact from "./pages/Contact";

import Login from "./Login";
import Dashboard from "./Dashboard";
import StudentList from "./StudentList";
import StaffList from "./StaffList";
import FeePayment from "./pages/FeePayment";
import OnlineRegistration from "./pages/OnlineRegistration";


function App() {
  const { user } = useAuth();

  const PublicRoute = ({ children }) => <PublicLayout>{children}</PublicLayout>;

  const AdminRoute = ({ children }) => <Layout>{children}</Layout>;

  return (
    <Routes>
      {/* PUBLIC */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PublicRoute>
            <About />
          </PublicRoute>
        }
      />
      <Route
        path="/chairman-message"
        element={
          <PublicRoute>
            <ChairmanMessage />
          </PublicRoute>
        }
      />
      <Route
        path="/principal-message"
        element={
          <PublicRoute>
            <PrincipalMessage />
          </PublicRoute>
        }
      />
      <Route
        path="/vision-mission"
        element={
          <PublicRoute>
            <VisionMission />
          </PublicRoute>
        }
      />

      <Route
        path="/academic/program"
        element={
          <PublicRoute>
            <AcademicProgram />
          </PublicRoute>
        }
      />
      <Route
        path="/academic/curriculum"
        element={
          <PublicRoute>
            <Curriculum />
          </PublicRoute>
        }
      />
      <Route
        path="/academic/events"
        element={
          <PublicRoute>
            <AcademicEvents />
          </PublicRoute>
        }
      />
      <Route
        path="/academic/announcements"
        element={
          <PublicRoute>
            <Announcements />
          </PublicRoute>
        }
      />
      <Route
        path="/academic/rules-regulations"
        element={
          <PublicRoute>
            <RulesRegulations />
          </PublicRoute>
        }
      />

      <Route
        path="/admission/procedure"
        element={
          <PublicRoute>
            <AdmissionProcedure />
          </PublicRoute>
        }
      />
      <Route
        path="/admission/form"
        element={
          <PublicRoute>
            <AdmissionForm />
          </PublicRoute>
        }
      />
      <Route
        path="/admission/fee-structure"
        element={
          <PublicRoute>
            <FeeStructure />
          </PublicRoute>
        }
      />

      <Route
        path="/facilities/transport"
        element={
          <PublicRoute>
            <Transport />
          </PublicRoute>
        }
      />
      <Route
        path="/facilities/library"
        element={
          <PublicRoute>
            <Library />
          </PublicRoute>
        }
      />
      <Route
        path="/facilities/sports"
        element={
          <PublicRoute>
            <Sports />
          </PublicRoute>
        }
      />

      <Route
        path="/news"
        element={
          <PublicRoute>
            <News />
          </PublicRoute>
        }
      />
      <Route
        path="/gallery"
        element={
          <PublicRoute>
            <Gallery />
          </PublicRoute>
        }
      />
      <Route
        path="/blog"
        element={
          <PublicRoute>
            <Blog />
          </PublicRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PublicRoute>
            <Contact />
          </PublicRoute>
        }
      />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route
        path="/fee-payment"
        element={
          <PublicRoute>
            <FeePayment />
          </PublicRoute>
        }
      />
      <Route
        path="/online-registration"
        element={
          <PublicRoute>
            <OnlineRegistration />
          </PublicRoute>
        }
      />

      {/* ADMIN */}
      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/students"
        element={
          <AdminRoute>
            <StudentList />
          </AdminRoute>
        }
      />
      <Route
        path="/staff"
        element={
          <AdminRoute>
            <StaffList />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default App;
