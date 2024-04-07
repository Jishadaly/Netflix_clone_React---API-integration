import React from 'react';
import './singUp.css'; // Make sure to adjust the CSS file path accordingly

function Netflix() {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  // Function to handle input focus
  const handleInputFocus = (e) => {
    // Add your input focus logic here
  };

  // Function to handle input blur
  const handleInputBlur = (e) => {
    // Add your input blur logic here
  };

  return (
    <div className="netflix-background">
    <div className="upper">
      <div className="login-div">
        <form className="login" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          
          <div className="input-text">
            <input type="text" id="inputEmail" name="email" placeholder="Email or phone number" onFocus={handleInputFocus} onBlur={handleInputBlur} />
            <div className="warning-input" id="warningEmail">
              Please enter a valid email or phone number.
            </div>
          </div>
          <div className="input-text">
            <input type="password" id="inputPassword" name="password" placeholder="Password" onFocus={handleInputFocus} onBlur={handleInputBlur} />
            <div className="warning-input" id="warningPassword">
              Your password must contain between 4 and 60 characters.
            </div>
          </div>
          <div>
            <button className="signin-button">Sign In</button>
          </div>
          <div className="remember-flex">
            <div>
              <input type="checkbox" />
              <label className="color_text">Remember me</label>
            </div>
            <div className="help">
              <a className="color_text" href="#">Need help?</a>
            </div>
          </div>
          <div className="login-face">
            <img src="img/fb-icon.png" height="20" alt="Facebook Icon" /><a href="#" className="color_link log_face">Login with Facebook</a>
          </div>
          <div className="new-members">
            New to Netflix? <a href="#" className="signup-link">Sign up now</a>.
          </div>
          <div className="protection color_link help">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
          </div>
        </form>
      </div>
      <div className="bottom">
        <div className="bottom-width">
          Questions? Call <a href="tel:1-844-542-4813" className="tel-link">1-844-542-4813</a>
          <div>
            <ul className="bottom-flex">
              <li className="list-bottom">
                <a href="#" className="link-bottom">FAQ</a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">Help Center</a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">Terms of Use</a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">Privacy</a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">Cookie Preferences</a>
              </li>
              <li className="list-bottom">
                <a href="#" className="link-bottom">Corporate information</a>
              </li>
            </ul>
          </div>
          <div>
            <select className="fa select-language">
              <option>&#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
              <option>&#xf0ac; &nbsp;&nbsp;&nbsp;Fran&ccedil;ais</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Netflix;
