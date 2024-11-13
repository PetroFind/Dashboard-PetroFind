// import React, { useState, useEffect } from "react";
// import { Container } from "./styles";

// const Mode = () => {
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem("theme") || "light";
//   });
  
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <Container
//       onClick={() => {
//         setTheme((prev) => {
//           return prev === "light" ? "dark" : "light";
//         });
//       }}
//     >
//       {theme}
//     </Container>
//   );
// };

// export default Mode;


import React from "react";
import { Container } from "./styles";

const Mode = ({ toggleTheme }) => {
  return (
    <Container onClick={toggleTheme}>
      ss
    </Container>
  );
};

export default Mode;
