// import React from "react";
// import "./Login.css";
// import backgroundImage from "./background.png"; // Use an appropriate path or replace with your imported image

// function Login() {
//   return (
//     <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="login-form">
//         <h2>User Login</h2>
//         <form>
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" />
//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" />
//           <div className="reset-password">
//             <input type="checkbox" />
//             <span>Reset Password</span>
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import "./Login.css";
import backgroundImage from "./background.png"; // Replace with the correct image path
import Footer from "./Footer";

function Login() {
  return (
    <div className="login-container">
      <div
        className="demo-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="demo-form">
          <h2>User Login</h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="demo-reset-password">
              <input type="checkbox" />
              <span>Reset Password</span>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
