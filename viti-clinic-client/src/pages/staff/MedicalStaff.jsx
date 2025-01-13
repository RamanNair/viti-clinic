import { createSignal } from "solid-js";

const MedicalStaff = () => {
  const [staffData] = createSignal([
    {
      name: "Dr. Alice Johnson",
      role: "Surgeon",
      department: "Orthopedics",
      shift: "8:00 AM - 4:00 PM",
      contact: "123-456-7890",
      email: "alice.johnson@hospital.com",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Nurse Bob Smith",
      role: "Nurse",
      department: "Emergency",
      shift: "12:00 PM - 8:00 PM",
      contact: "987-654-3210",
      email: "bob.smith@hospital.com",
      photo: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    // Add more staff as needed
  ]);

  return (
    <div class="container mx-auto p-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffData().map((staff) => (
          <div class="card bg-base-100/50 shadow-xl p-12">
            <figure>
              <img src={staff.photo} alt={staff.name} class="w-full h-48 object-cover" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{staff.name}</h2>
              <p class="font-semibold">Role: {staff.role}</p>
              <p>Department: {staff.department}</p>
              <p>Shift: {staff.shift}</p>
              <div class="mt-4">
                <button class="btn btn-primary btn-sm">Contact</button>
              </div>
            </div>
            <div class="card-footer">
              <p class="text-sm">Phone: {staff.contact}</p>
              <p class="text-sm">Email: {staff.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalStaff;
