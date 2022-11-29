import logo from "./logo.svg";
import "./App.css";
import Work from "./components/Work";
import data from "./components/Data";
import { useEffect, useState } from "react";
import FetchUSers from "./components/FetchUSers";

// function App() {
//   const [people, setPeople] = useState({
//     name: "arnold",
//     age: "25",
//     job: "Software Developer",
//     hobbies: "Reading , playing Soccer, watching Movies",
//   });

//   const removeOne = () => {
//     // const itemRemoved = people.filter((data) => data.id !== id);

//     setPeople({...people, job:"Programmer", });
//   };

//   return (
//     <div className="container">
//       <h1>
    
//           <div
//             // key={item.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               color: "#fff",
//               backgroundColor: "green",
//               width: "50vw",
//               height: "50px",
//               margin: "0 auto",
//             }}
//           >
          
//             <p> {people.job}</p>
//             <p> {people.name}</p>
//             <p> {people.age}</p>

//             <button style={{ color: "red" }} onClick={() => removeOne()}>
//               Update Job
//             </button>
//           </div>
        
//         <button
//           onClick={() => setPeople([])}
//           style={{
//             display: "block",
//             margin: "0 auto",
//             color: "#fff",
//             backgroundColor: "green",
//             marginTop: "40px",
//           }}
//         >
//           {" "}
//           Clear Items
//         </button>
//       </h1>
//     </div>
//   );
// }
// export default App;

// component2 for fetching Users
function App() {
  

  return (
    <>
    <h1 style={{textAlign:"center", textDecoration:"underline"}}>Github Users</h1>
    <FetchUSers/>
    </>
    

  )
}

export default App;
