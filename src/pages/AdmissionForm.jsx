import { useState } from "react";
import axios from "axios";
import InnerPageHeader from "../Components/InnerPageHeader";
import "../styles/admission-form.css";
function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    gender: "",
    dob: "",
    classApplying: "",
    fatherName: "",
    motherName: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.studentName || !formData.mobile || !formData.classApplying) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/api/admission/create",
        formData
      );

      alert(res.data.message || "Admission form submitted successfully!");

      // reset form
      setFormData({
        studentName: "",
        gender: "",
        dob: "",
        classApplying: "",
        fatherName: "",
        motherName: "",
        mobile: "",
        email: "",
        address: "",
      });
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <InnerPageHeader
        title="Admission Form"
        breadcrumb={[
          { label: "Admission", link: "/admission/procedure" },
          { label: "Admission Form" },
        ]}
      />

     <div className="container mx-auto px-4 py-16 admission-container">
  <div className="max-w-4xl mx-auto bg-white admission-card">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Student Admission Form
          </h2>
          <p className="text-gray-600 mb-8">
            Please fill out the admission form carefully.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Name *
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border-gray-300"
              />
            </div>

            {/* Gender & DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="rounded-md border-gray-300"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="rounded-md border-gray-300"
              />
            </div>

            {/* Class */}
            <input
              type="text"
              name="classApplying"
              value={formData.classApplying}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300"
              placeholder="Class Applying For *"
            />

            {/* Parents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="rounded-md border-gray-300"
                placeholder="Father's Name"
              />

              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="rounded-md border-gray-300"
                placeholder="Mother's Name"
              />
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="rounded-md border-gray-300"
                placeholder="Mobile Number *"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-md border-gray-300"
                placeholder="Email"
              />
            </div>

            {/* Address */}
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full rounded-md border-gray-300"
              placeholder="Address"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg"
            >
              {loading ? "Submitting..." : "Submit Admission Form"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdmissionForm;