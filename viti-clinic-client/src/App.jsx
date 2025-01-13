// import logo from './logo.svg';
// import styles from './App.module.css';

// function App() {
//   return (
//     <div class={styles.App}>
//       <header class={styles.header}>
//         <img src={logo} class={styles.logo} alt="logo" />
//         <p>
//           Edit <code>src/App.jsx</code> and save to reload.
//         </p>
//         <a
//           class={styles.link}
//           href="https://github.com/solidjs/solid"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Solid
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import { Toaster } from "solid-toast";
function App(props) {
  return (
    // <div class="h-screen w-screen bg-[url('bg3.jpg')] bg-no-repeat bg-center bg-cover">
    //   <div class="flex flex-col h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    //     <Header />
    //     <div class="flex-1 flex gap-3">
    //       <Sidebar />
    //       <div class="p-3 w-full">{props.children}</div>
    //     </div>
    //     <Footer />
    //   </div>
    //   <Toaster />
    // </div>

    <div class="flex h-screen w-screen flex-col bg-base-100  bg-[url('/bg3.jpg')] bg-no-repeat bg-center bg-cover">
      <Header />
      <div class="flex flex-1 overflow-auto">
        <Sidebar />
        <div class="flex-1 overflow-auto px-12 py-3">{props.children}</div>
      </div>
      <Footer />
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
