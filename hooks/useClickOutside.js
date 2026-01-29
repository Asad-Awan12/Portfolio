// import { useEffect } from "react";

// // Custom hook to detect click outside
// const useClickOutside = (ref, callback) => {
//   useEffect(() => {
//     // Define the event handler for clicks outside the element
//     const handleClickOutside = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback();
//       }
//     };

//     // Attach event listener on component mount
//     document.addEventListener("mousedown", handleClickOutside);

//     // Cleanup event listener on component unmount
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref, callback]);
// };

// export default useClickOutside;
