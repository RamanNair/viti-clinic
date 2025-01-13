import { A } from "@solidjs/router";

function Sidebar() {
  return (
    <aside class="bg-gray-800 text-white w-64 p-4">
      <nav>
        <ul class="space-y-2">
          <li>
            <A href="/dashboard" class="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </A>
          </li>
          <li>
            <A href="/appointment" class="block py-2 px-4 hover:bg-gray-700 rounded">
              Appointments
            </A>
          </li>
          <li>
            <A href="/patient" class="block py-2 px-4 hover:bg-gray-700 rounded">
              Patients
            </A>
          </li>
          <li>
            <A href="/medical-staff" class="block py-2 px-4 hover:bg-gray-700 rounded">
              Staff
            </A>
          </li>
          <li>
            <A href="/billing" class="block py-2 px-4 hover:bg-gray-700 rounded">
              Billing
            </A>
          </li>
          <li>
            <A href="medical-report" class="block py-2 px-4 hover:bg-gray-700 rounded">
              Reports
            </A>
          </li>
          <li>
            <A href="/setting" class="block py-2 px-4 hover:bg-gray-700 rounded">
              Settings
            </A>
          </li>
          {/* <li>
            <A href="patient-form" class="block py-2 px-4 hover:bg-gray-700 rounded">
              Patient Form
            </A>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;
