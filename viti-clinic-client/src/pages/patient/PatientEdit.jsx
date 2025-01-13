import { createSignal } from "solid-js";
import { useNavigate, useParams } from "@solidjs/router";

import toast from "solid-toast";
import { Motion } from "solid-motionone";

import saveIcon from "../../assets/icons/save.svg";
import cancelIcon from "../../assets/icons/cancel.svg";
import PatientCard from "./PatientCard";

const notify = () => toast("Here is your toast.");

const PatientEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // State for form data
  const [formData, setFormData] = createSignal({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    medicalHistory: "",
    emergencyContact: {
      name: "",
      relationship: "",
      phone: "",
    },
    insuranceDetails: {
      provider: "",
      policyNumber: "",
    },
    appointmentPreferences: {
      date: "",
      time: "",
      notes: "",
    },
  });

  // State for form submission status
  const [formStatus, setFormStatus] = createSignal("");

  // Handle input changes dynamically
  const handleChange = (e, section = null, field = null) => {
    const { name, value } = e.target;

    if (section) {
      setFormData({
        ...formData(),
        [section]: {
          ...formData()[section],
          [field]: value,
        },
      });
    } else {
      setFormData({ ...formData(), [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data Submitted:", formData());
    setFormStatus("Form submitted successfully!"); // Success feedback
    // Add API submission logic here

    toast.success("Form submitted successfully!");
    navigate("/patient", { replace: true });
  };

  return (
    <Motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, easing: "ease-in-out" }} class="mx-auto p-8 bg-base-100/70 rounded-lg shadow-lg">
      {/* Header */}
      {/* <h1 class="text-3xl font-bold text-center mb-6">Patient Entry Form - Edit</h1> */}

      <div className="flex w-full">
        <div class="flex-1  text-3xl font-bold text-center mb-6 ">Patient Entry Form - Edit</div>
        <div>
          <PatientCard data={{ id: id }} />
        </div>
      </div>

      <p class="text-center text-sm text-gray-500 mb-8">Please provide accurate information for a seamless experience.</p>

      <form onSubmit={handleSubmit} class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section: Personal Details */}
        <div class="lg:col-span-2">
          <h2 class="text-xl font-semibold mb-4">Personal Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label class="label">
                <span class="label-text">Full Name</span>
              </label>
              <input type="text" name="name" value={formData().name} onInput={handleChange} class="input input-bordered w-full" placeholder="Enter patient's full name" required />
            </div>

            {/* Age */}
            <div>
              <label class="label">
                <span class="label-text">Age</span>
              </label>
              <input type="number" name="age" value={formData().age} onInput={handleChange} class="input input-bordered w-full" placeholder="Enter patient's age" min="0" required />
            </div>

            {/* Gender */}
            <div>
              <label class="label">
                <span class="label-text">Gender</span>
              </label>
              <select name="gender" value={formData().gender} onInput={handleChange} class="select select-bordered w-full" required>
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label class="label">
                <span class="label-text">Email Address</span>
              </label>
              <input type="email" name="email" value={formData().email} onInput={handleChange} class="input input-bordered w-full" placeholder="Enter email address" required />
            </div>
          </div>
        </div>

        {/* Section: Contact Details */}
        <div class="lg:col-span-2">
          <h2 class="text-xl font-semibold mb-4">Contact Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Number */}
            <div>
              <label class="label">
                <span class="label-text">Contact Number</span>
              </label>
              <input type="tel" name="contact" value={formData().contact} onInput={handleChange} class="input input-bordered w-full" placeholder="Enter contact number" required />
            </div>

            {/* Address */}
            <div class="md:col-span-2">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <textarea name="address" value={formData().address} onInput={handleChange} class="textarea textarea-bordered w-full" placeholder="Enter full address" required />
            </div>
          </div>
        </div>

        {/* Section: Emergency Contact */}
        <div class="lg:col-span-2">
          <h2 class="text-xl font-semibold mb-4">Emergency Contact</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Emergency Contact Name */}
            <div>
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" name="emergencyName" value={formData().emergencyContact.name} onInput={(e) => handleChange(e, "emergencyContact", "name")} class="input input-bordered w-full" placeholder="Emergency contact name" required />
            </div>

            {/* Emergency Contact Relationship */}
            <div>
              <label class="label">
                <span class="label-text">Relationship</span>
              </label>
              <input
                type="text"
                name="emergencyRelationship"
                value={formData().emergencyContact.relationship}
                onInput={(e) => handleChange(e, "emergencyContact", "relationship")}
                class="input input-bordered w-full"
                placeholder="Relationship to patient"
                required
              />
            </div>

            {/* Emergency Contact Phone */}
            <div>
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input type="tel" name="emergencyPhone" value={formData().emergencyContact.phone} onInput={(e) => handleChange(e, "emergencyContact", "phone")} class="input input-bordered w-full" placeholder="Emergency contact phone" required />
            </div>
          </div>
        </div>

        {/* Section: Insurance Details */}
        <div class="lg:col-span-2">
          <h2 class="text-xl font-semibold mb-4">Insurance Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Provider */}
            <div>
              <label class="label">
                <span class="label-text">Insurance Provider</span>
              </label>
              <input type="text" name="insuranceProvider" value={formData().insuranceDetails.provider} onInput={(e) => handleChange(e, "insuranceDetails", "provider")} class="input input-bordered w-full" placeholder="Enter insurance provider" />
            </div>

            {/* Policy Number */}
            <div>
              <label class="label">
                <span class="label-text">Policy Number</span>
              </label>
              <input type="text" name="policyNumber" value={formData().insuranceDetails.policyNumber} onInput={(e) => handleChange(e, "insuranceDetails", "policyNumber")} class="input input-bordered w-full" placeholder="Enter policy number" />
            </div>
          </div>
        </div>

        {/* Section: Appointment Preferences */}
        <div class="lg:col-span-2">
          <h2 class="text-xl font-semibold mb-4">Appointment Preferences</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Appointment Date */}
            <div>
              <label class="label">
                <span class="label-text">Preferred Date</span>
              </label>
              <input type="date" name="appointmentDate" value={formData().appointmentPreferences.date} onInput={(e) => handleChange(e, "appointmentPreferences", "date")} class="input input-bordered w-full" />
            </div>

            {/* Appointment Time */}
            <div>
              <label class="label">
                <span class="label-text">Preferred Time</span>
              </label>
              <input type="time" name="appointmentTime" value={formData().appointmentPreferences.time} onInput={(e) => handleChange(e, "appointmentPreferences", "time")} class="input input-bordered w-full" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        {/* <div class="lg:col-span-2 text-center">
          <button type="submit" class="btn btn-primary w-full">
            Submit Patient Entry
          </button>
          {formStatus() && <p class="mt-4 text-green-500">{formStatus()}</p>}
        </div> */}

        <div class="flex gap-3">
          {/* Submit Button */}
          <div class="lg:col-span-2 text-center">
            <button type="submit" class="btn btn-primary w-full">
              <img src={saveIcon} alt="Home Icon" class="w-6 h-6" />
              Save
            </button>
            {formStatus() && <p class="mt-4 text-green-500">{formStatus()}</p>}
          </div>
          <button type="button" class="btn btn-secondary" onClick={() => navigate("/patient", { replace: true })}>
            <img src={cancelIcon} alt="Home Icon" class="w-6 h-6" />
            Cancel
          </button>
        </div>
      </form>
    </Motion.div>
  );
};

export default PatientEdit;
