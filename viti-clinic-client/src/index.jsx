// /* @refresh reload */
// import { render } from 'solid-js/web';

// import './index.css';
// import App from './App';

// const root = document.getElementById('root');

// if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
//   throw new Error(
//     'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
//   );
// }

// render(() => <App />, root);

/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}

import NotFound from "./pages/404";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Patient = lazy(() => import("./pages/patient/Patient"));
const PatientCreate = lazy(() => import("./pages/patient/PatientCreate"));
const PatientEdit = lazy(() => import("./pages/patient/PatientEdit"));
const PatientAppointment = lazy(() => import("./pages/apointment/PatientAppointment"));
const PatientBilling = lazy(() => import("./pages/billing/PatientBilling"));
const MedicalStaff = lazy(() => import("./pages/staff/MedicalStaff"));
const MedicalReport = lazy(() => import("./pages/report/MedicalReport"));
const Setting = lazy(() => import("./pages/setting/Setting"));

render(
  () => (
    <Router root={App}>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/patient" component={Patient} />
      <Route path="/patient-create" component={PatientCreate} />
      <Route path="/patient-edit/:id" component={PatientEdit} />
      <Route path="/appointment" component={PatientAppointment} />
      <Route path="/billing" component={PatientBilling} />
      <Route path="medical-staff" component={MedicalStaff} />
      <Route path="medical-report" component={MedicalReport} />
      <Route path="setting" component={Setting} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  root
);
