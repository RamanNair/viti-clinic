import { Motion } from "solid-motionone";

function Dashboard() {
  return (
    <Motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, easing: "ease-in-out" }} class="p-4 rounded glass">
      <h2 class="text-xl font-bold mb-4">Dashboard</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card bg-blue-500 text-white shadow-md p-4 glass">
          <h3>Total Patients</h3>
          <p class="text-3xl">120</p>
        </div>
        <div class="card bg-green-500 text-white shadow-md p-4 glass">
          <h3>Appointments Today</h3>
          <p class="text-3xl">15</p>
        </div>
        <div class="card bg-red-500 text-white shadow-md p-4 glass">
          <h3>Pending Bills</h3>
          <p class="text-3xl">8</p>
        </div>
      </div>
    </Motion.div>
  );
}
export default Dashboard;
