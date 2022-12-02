import Styles from "./Login.module.css";
import logo from "./logo.svg";
import profile from "./images/user.png";
import email from "./images/mail.png";
import password from "./images/padlock.png";

import { BrowserRouter as Router,Route,Switch} from `react-router-dom`;

function Login() {
  return (
   <Router>
    <div className={App}>
      <Navbar />
      <div className={content}>
        <switch>
          <Route path = "/">
            <Home />
          </Route>
        </switch>
      </div>
      </div>
    <div className={Styles.main}>
      <div className={Styles.subMain}>
        <div>
          <div className={Styles.imgs}>
            <div className={Styles.containerImage}>
              <img src={profile} alt="profile" className={Styles.profile}/>
            </div>
          </div>

          <div>
            <h1>Login </h1>

            <div>
              <img src={email} alt="email" className={Styles.email}/>
              <input type="text" placeholder="User name" className={Styles.name} />
            </div>

                
            <div className={Styles.secondInput}>
              <img src={password} alt="password" className={Styles.email}/>
              <input type="password" placeholder="Password" className={Styles.name} />
            </div>

            <div className={Styles.loginButton}>
              <button>Login</button>
            </div>

            <p className={Styles.link}>
              <a href="#">Forgot Password ?</a> or <a href="#">Sign Up</a>
            </p>
          </div>
          </div>
        </div>
      
    </div>
    </Router>
  );
}

export default Login;
