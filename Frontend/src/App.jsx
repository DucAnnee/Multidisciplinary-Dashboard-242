import Appbar from "./components/Appbar";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Appbar sx={{ width: "12%" }} />
      <div
        style={{
          alignSelf: "center",
          flex: 1,
          backgroundColor: "#E3F0E5",
          minHeight: "100vh",
          width: "86%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
