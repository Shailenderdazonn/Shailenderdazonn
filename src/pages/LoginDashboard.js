import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginDashboard.module.css";

const LoginDashboard = () => {
  const navigate = useNavigate();

  const onLogincreateAccountButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.loginDashboardDiv}>
      <div className={styles.rightSideDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-67@2x.png"
        />
      </div>
      <div className={styles.leftSideDiv}>
        <div className={styles.rectangleDiv} />
        <a className={styles.forgottenYourLoginDetails}>
          Forgotten Your Login Details? Get Help Signing In
        </a>
        <button
          className={styles.logincreateAccountButton}
          onClick={onLogincreateAccountButtonClick}
        >
          <div className={styles.rectangleDiv1} />
          <b className={styles.loginB}>Login</b>
        </button>
        <div className={styles.rememberMeDiv}>
          <input className={styles.rectangleInput} type="checkbox" />
          <b className={styles.rememberMe}>Remember Me</b>
        </div>
        <div className={styles.emailPassword}>
          <div className={styles.rectangleDiv2} />
          <input className={styles.passwordInput} type="password" />
          <b className={styles.passwordB}>Password</b>
          <div className={styles.rectangleDiv3} />
          <input className={styles.emailTextInput} type="text" />
          <b className={styles.emailB}>Email</b>
        </div>
        <img className={styles.logoIcon} alt="" src="../logo@3x.png" />
      </div>
    </div>
  );
};

export default LoginDashboard;
