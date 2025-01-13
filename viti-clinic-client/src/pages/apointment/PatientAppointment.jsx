import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { Motion } from "solid-motionone";

import cancelIcon from "../../assets/icons/cancel.svg";
import saveIcon from "../../assets/icons/save.svg";

const PatientAppointment = () => {
  const navigate = useNavigate();
  const [patientName, setPatientName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [appointmentDate, setAppointmentDate] = createSignal("");
  const [appointmentTime, setAppointmentTime] = createSignal("");
  const [notes, setNotes] = createSignal("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      patientName: patientName(),
      email: email(),
      phone: phone(),
      appointmentDate: appointmentDate(),
      appointmentTime: appointmentTime(),
      notes: notes(),
    });
    toast.success("Appointment successfully booked!");
  };

  return (
    <Motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, easing: "ease-in-out" }} class="max-w-2xl mx-auto p-6 bg-base-100 shadow-xl rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} class="space-y-4">
        {/* Patient Name */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Patient Name</span>
          </label>
          <input type="text" placeholder="Enter full name" class="input input-bordered" value={patientName()} onInput={(e) => setPatientName(e.target.value)} required />
        </div>

        {/* Email Address */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email Address</span>
          </label>
          <input type="email" placeholder="Enter email address" class="input input-bordered" value={email()} onInput={(e) => setEmail(e.target.value)} required />
        </div>

        {/* Phone Number */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input type="tel" placeholder="Enter phone number" class="input input-bordered" value={phone()} onInput={(e) => setPhone(e.target.value)} required />
        </div>

        {/* Appointment Date */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Appointment Date</span>
          </label>
          <input type="date" class="input input-bordered" value={appointmentDate()} onInput={(e) => setAppointmentDate(e.target.value)} required />
        </div>

        {/* Appointment Time */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Appointment Time</span>
          </label>
          <input type="time" class="input input-bordered" value={appointmentTime()} onInput={(e) => setAppointmentTime(e.target.value)} required />
        </div>

        {/* Notes */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Notes (Optional)</span>
          </label>
          <textarea class="textarea textarea-bordered" placeholder="Additional notes or concerns" value={notes()} onInput={(e) => setNotes(e.target.value)}></textarea>
        </div>

        {/* Submit Button */}
        <div class="mt-6 flex gap-3">
          <button type="submit" class="btn btn-primary">
            <img src={saveIcon} alt="Home Icon" class="w-6 h-6" />
            Book Appointment
          </button>

          <button type="button" class="btn btn-secondary" onClick={() => navigate("/dashboard", { replace: true })}>
            <img src={cancelIcon} alt="Home Icon" class="w-6 h-6" />
            Cancel
          </button>
        </div>
      </form>
    </Motion.div>
  );
};

export default PatientAppointment;
