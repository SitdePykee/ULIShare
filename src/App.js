import Document_Sidebar from "./components/document_sidebar";
import Login from "./pages/login";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Sign_up from "./pages/sign_up";
import User from "./components/user";
// import Sidebar from "./sidebar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="block md:flex w-screen">
        <Document_Sidebar />
        <div className="max-w-full overflow-hidden">
          <Main />
          {/* <User /> */}
        </div>
      </div>
      {/* <Login />
      <Sign_up /> */}
    </>
  );
}
