import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => {
        if (dots.length === 3) {
          return "";
        }
        return dots + ".";
      });
    }, 500);

    // If the user is on page for more than 5 seconds, show a popup
    setTimeout(() => {
      Swal.fire({
        title: "Are you still there?",
        text: "You've been on this page for a while, there's nothing more here for now",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok, I'll leave",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Please come back later", "We're working on something great", "success");
        } 
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [dots, setDots] = useState(".");

  return (
    <div className="App">
    <h1>DFS in the making</h1>
    <h2>Something great in the process{dots}</h2>
    </div>
  );
}

export default App;
