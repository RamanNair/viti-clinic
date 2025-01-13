import { createSignal } from "solid-js";
import TabulatorTable from "../../components/TabulatorTable";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { Motion } from "solid-motionone";

const Patient = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = createSignal([
    { id: "1454-8989", name: "John Doe", age: 30, gender: "Male", contact: "123-456-7890" },
    { id: "2565-5665", name: "Jane Smith", age: 25, gender: "Female", contact: "987-654-3210" },
    { id: "3656-5632", name: "Alice Johnson", age: 40, gender: "Female", contact: "555-123-4567" },
  ]);

  const addPatient = () => {
    navigate("/patient-create", { replace: true });
    const newPatient = { id: Date.now(), name: "New Patient", age: 0, gender: "Unknown", contact: "" };
    setPatients([...patients(), newPatient]);
  };

  const updatePatient = (id, updatedData) => {
    setPatients(patients().map((patient) => (patient.id === id ? { ...patient, ...updatedData } : patient)));
    navigate(`/patient-edit/${id}`, { replace: true });
  };

  const deletePatient = (id) => {
    setPatients(patients().filter((patient) => patient.id !== id));
    toast.error("Item deleted!");
  };

  const columns = [
    { title: "Name", field: "name" },
    { title: "Age", field: "age" },
    { title: "Gender", field: "gender" },
    { title: "Contact", field: "contact" },
    {
      title: "Actions",
      field: "actions",
      formatter: () => "<button class='btn btn-sm btn-error'>Delete</button>",
      cellClick: (e, cell) => deletePatient(cell.getData().id),
    },
    {
      title: "Actions",
      field: "actions",
      formatter: () => "<button class='btn btn-sm btn-primary'>Edit</button>",
      cellClick: (e, cell) => updatePatient(cell.getData().id),
    },
  ];

  return (
    <Motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, easing: "ease-in-out" }} class="p-4">
      <h2 class="text-xl font-bold mb-4">Patients</h2>
      <button class="btn btn-primary text-primary-content mb-4" onClick={addPatient}>
        Add Patient
      </button>
      <TabulatorTable data={patients} columns={columns} />
    </Motion.div>
  );
};
export default Patient;
