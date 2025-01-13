import { Motion } from "solid-motionone";
function PatientCard(props) {
  return (
    // <Motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, easing: "ease-in-out" }} class="container mx-auto p-6">
    //   <div class="card bg-base-100/50 shadow-xl">
    //     <div class="card-body">
    //       <h2 class="card-title">Patient Identification</h2>
    //       {/* Patient Information Section */}
    //       <div class="grid grid-cols-2 gap-4">
    //         <div>
    //           <div>
    //             <p class="font-semibold">Patient Name:</p>
    //             <p>{props.data().name}</p>
    //           </div>
    //           <div>
    //             <p class="font-semibold">Date of Birth:</p>
    //             <p>{props.data().dob}</p>
    //           </div>
    //           <div>
    //             <p class="font-semibold">Patient ID:</p>
    //             <p>45684-5465465</p>
    //           </div>
    //         </div>
    //         <div>
    //           <figure>
    //             <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="img" class="w-full h-48 object-cover" />
    //           </figure>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Motion.div>
    // <div class="card card-side bg-base-100 shadow-sm w-full h-[150px]">
    //   <div class="card-body flex-1">
    //     <h2 class="card-title">New movie is released!</h2>
    //     <div>
    //       <div>
    //         <p class="font-semibold">Patient Name:</p>
    //         <p>{props.data().name}</p>
    //       </div>
    //       <div>
    //         <p class="font-semibold">Date of Birth:</p>
    //         <p>{props.data().dob}</p>
    //       </div>
    //       <div>
    //         <p class="font-semibold">Patient ID:</p>
    //         <p>45684-5465465</p>
    //       </div>
    //     </div>
    //   </div>
    //   <figure class="">
    //     <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie" />
    //   </figure>
    // </div>
    <div class="flex bg-primary/50 rounded p-4">
      <div class="w-full">
        <div>
          <p class="font-semibold">Patient Name:</p>
          <p>Alice Johnson</p>
        </div>
        <div>
          <p class="font-semibold">Date of Birth:</p>
          <p>{new Date().toLocaleDateString("en-AU")}</p>
        </div>
        <div>
          <p class="font-semibold">Patient ID:</p>
          <p>{props.data.id}</p>
        </div>
      </div>
      <figure class="h-full w-[100px]">
        <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Movie" />
      </figure>
    </div>
  );
}
export default PatientCard;
