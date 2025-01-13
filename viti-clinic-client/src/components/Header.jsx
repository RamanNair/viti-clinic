import doctorIcon from "../assets/icons/doctor.svg";
const Header = () => {
  return (
    <header class="flex flex-col md:flex-row justify-between border-b-[1px] border-primary bg-white px-12 py-4 text-primary">
      <p class="anton-regular flex  justify-center  text-2xl">Clinic Management</p>
      <div class="flex justify-center gap-5 mt-3 md:mt-0">
        <img src={doctorIcon} alt="doctor" />
      </div>
    </header>
    // <header class="bg-blue-600 text-white p-4 flex justify-between items-center">
    //   <h1 class="text-2xl">Medical Clinic Management</h1>
    //   <button class="btn btn-accent">Logout</button>
    // </header>
  );
};

export default Header;
