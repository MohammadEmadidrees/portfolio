// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Toast=()=>{
//     toast.success("Message Sent Successfully",{position:"top-center"});
//     return (
//       <div>
//         <ToastContainer />
//       </div>
//     );
//   }
//  export default Toast
import { Alert } from 'antd';
const Ant = () => <Alert message="Success Text" type="success" />;
export default Ant;