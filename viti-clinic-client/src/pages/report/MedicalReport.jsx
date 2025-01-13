import { createSignal } from "solid-js";

function MedicalReport() {
  const [patientInfo] = createSignal({
    name: "John Doe",
    age: 45,
    gender: "Male",
    bloodType: "O+",
    diagnosis: "Hypertension, Diabetes",
    treatment: "Medication A, Lifestyle changes",
    doctor: "Dr. Jane Smith",
    date: "2025-01-10",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "johndoe@example.com",
      address: "1234 Elm Street, Springfield, IL, 62701",
    },
    medicalHistory: [
      { year: "2018", condition: "Flu" },
      { year: "2020", condition: "Pneumonia" },
      { year: "2022", condition: "Back Injury" },
    ],
    labResults: [
      { test: "Blood Pressure", value: "140/90 mmHg", result: "High" },
      { test: "Blood Sugar", value: "160 mg/dL", result: "Elevated" },
      { test: "Cholesterol", value: "220 mg/dL", result: "Normal" },
    ],
    medications: [
      { name: "Medication A", dosage: "10 mg", frequency: "Once daily" },
      { name: "Medication B", dosage: "20 mg", frequency: "Twice daily" },
    ],
    allergies: ["Penicillin", "Shellfish"],
    lifestyleRecommendations: ["Increase physical activity, aim for at least 30 minutes of exercise daily.", "Follow a balanced diet with low salt and sugar intake.", "Avoid alcohol consumption and smoking."],
  });

  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100/50 p-6">
      <div class="card w-full max-w-3xl bg-white/50 shadow-xl rounded-lg overflow-hidden">
        <div class="card-body">
          <h2 class="text-4xl text-center font-semibold text-primary mb-6">Patient Medical Report</h2>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p class="font-semibold">Name:</p>
              <p>{patientInfo().name}</p>
            </div>
            <div>
              <p class="font-semibold">Age:</p>
              <p>{patientInfo().age}</p>
            </div>
            <div>
              <p class="font-semibold">Gender:</p>
              <p>{patientInfo().gender}</p>
            </div>
            <div>
              <p class="font-semibold">Blood Type:</p>
              <p>{patientInfo().bloodType}</p>
            </div>
            <div>
              <p class="font-semibold">Contact Information:</p>
              <p>Phone: {patientInfo().contact.phone}</p>
              <p>Email: {patientInfo().contact.email}</p>
              <p>Address: {patientInfo().contact.address}</p>
            </div>
            <div>
              <p class="font-semibold">Doctor:</p>
              <p>{patientInfo().doctor}</p>
            </div>
            <div>
              <p class="font-semibold">Date of Report:</p>
              <p>{patientInfo().date}</p>
            </div>
          </div>

          <h3 class="text-2xl font-semibold text-primary mb-4">Medical History</h3>
          <ul class="list-disc pl-6">
            {patientInfo().medicalHistory.map((history) => (
              <li key={history.year}>
                <strong>{history.year}</strong>: {history.condition}
              </li>
            ))}
          </ul>

          <h3 class="text-2xl font-semibold text-primary mt-6 mb-4">Lab Results</h3>
          <table class="table w-full table-zebra">
            <thead>
              <tr>
                <th>Test</th>
                <th>Value</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {patientInfo().labResults.map((result) => (
                <tr key={result.test}>
                  <td>{result.test}</td>
                  <td>{result.value}</td>
                  <td>{result.result}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 class="text-2xl font-semibold text-primary mt-6 mb-4">Current Medications</h3>
          <ul class="list-decimal pl-6">
            {patientInfo().medications.map((medication) => (
              <li key={medication.name}>
                <strong>{medication.name}</strong> - {medication.dosage}, {medication.frequency}
              </li>
            ))}
          </ul>

          <h3 class="text-2xl font-semibold text-primary mt-6 mb-4">Known Allergies</h3>
          <ul class="list-disc pl-6">
            {patientInfo().allergies.map((allergy) => (
              <li key={allergy}>{allergy}</li>
            ))}
          </ul>

          <h3 class="text-2xl font-semibold text-primary mt-6 mb-4">Lifestyle Recommendations</h3>
          <ul class="list-decimal pl-6">
            {patientInfo().lifestyleRecommendations.map((recommendation) => (
              <li key={recommendation}>{recommendation}</li>
            ))}
          </ul>

          <div class="card-actions justify-center mt-6">
            <button class="btn btn-primary">Download Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalReport;
