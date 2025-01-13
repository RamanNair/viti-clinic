import { createSignal } from "solid-js";
import { Motion } from "solid-motionone";

const PatientBilling = () => {
  const [patientData] = createSignal({
    name: "John Doe",
    dob: "1985-04-23",
    patientID: "123456",
    treatments: [
      { date: "2025-01-01", description: "Consultation", amount: 200, status: "Paid" },
      { date: "2025-01-05", description: "X-ray", amount: 150, status: "Unpaid" },
      { date: "2025-01-07", description: "Blood Test", amount: 120, status: "Paid" },
    ],
    totalAmount: 470,
    balanceDue: 150,
  });

  return (
    <Motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, easing: "ease-in-out" }} class="container mx-auto p-6">
      <div class="card bg-base-100/50 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Patient Billing Details</h2>

          {/* Patient Information Section */}
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="font-semibold">Patient Name:</p>
              <p>{patientData().name}</p>
            </div>
            <div>
              <p class="font-semibold">Date of Birth:</p>
              <p>{patientData().dob}</p>
            </div>
            <div>
              <p class="font-semibold">Patient ID:</p>
              <p>{patientData().patientID}</p>
            </div>
          </div>

          {/* Treatment History Section */}
          <div class="mt-6">
            <h3 class="font-semibold text-xl">Treatment History</h3>
            <table class="table w-full mt-4">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {patientData().treatments.map((treatment) => (
                  <tr>
                    <td>{treatment.date}</td>
                    <td>{treatment.description}</td>
                    <td>${treatment.amount}</td>
                    <td>
                      <span class={`badge ${treatment.status === "Paid" ? "badge-success" : "badge-error"}`}>{treatment.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Amount and Balance Section */}
          <div class="mt-6">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="font-semibold">Total Amount:</p>
                <p>${patientData().totalAmount}</p>
              </div>
              <div>
                <p class="font-semibold">Balance Due:</p>
                <p>${patientData().balanceDue}</p>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <div class="mt-6 flex justify-end">
            <button class="btn btn-primary">Make Payment</button>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default PatientBilling;
