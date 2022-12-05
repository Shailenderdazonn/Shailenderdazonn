import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AdsList.module.css";

const AdsList = () => {
  const navigate = useNavigate();

  const onLogoutButtonClick = useCallback(() => {
    navigate("/logindashboard");
  }, [navigate]);

  return (
    <div className={styles.adsListDiv}>
      <div className={styles.rightSideDiv}>
        <div className={styles.dashboardDiv}>
          <div className={styles.tablesDiv}>
            <div className={styles.rectangleDiv} />
          </div>
          <b className={styles.userListB}>User List</b>
        </div>
      </div>
      <div className={styles.leftSideDiv}>
        <div className={styles.leftSideBackground} />
        <Link className={styles.classifiedList} to="/category">
          <div className={styles.blackBackgroundDiv} />
          <b className={styles.categoryB}>Category</b>
          <img
            className={styles.iconCategory}
            alt=""
            src="../iconcategory@2x.png"
          />
        </Link>
        <a className={styles.adsList}>
          <div className={styles.pinkBackgroundDiv} />
          <b className={styles.adsListB}>Ads List</b>
          <img
            className={styles.iconCategory}
            alt=""
            src="../iconadslist@2x.png"
          />
        </a>
        <Link className={styles.userListA} to="/user-list">
          <div className={styles.blackBackgroundDiv} />
          <b className={styles.categoryB}>User List</b>
          <img
            className={styles.iconCategory}
            alt=""
            src="../iconuser1@2x.png"
          />
        </Link>
        <Link className={styles.dashboard} to="/dashboard">
          <div className={styles.blackBackgroundDiv} />
          <b className={styles.categoryB}>Dashboard</b>
          <img
            className={styles.iconCategory}
            alt=""
            src="../icondashboard@2x.png"
          />
        </Link>
      </div>
      <div className={styles.headerTopDiv}>
        <div className={styles.topBackgroundDiv} />
        <div className={styles.navbarDiv}>
          <button className={styles.logoutButton} onClick={onLogoutButtonClick}>
            <b className={styles.logoutB}>Logout</b>
            <img
              className={styles.iconLogout}
              alt=""
              src="../iconlogout@2x.png"
            />
          </button>
          <button className={styles.adminButton}>
            <b className={styles.adminNameB}>Admin Name</b>
            <img
              className={styles.iconAdminUser}
              alt=""
              src="../icon--admin-user@2x.png"
            />
          </button>
          <button className={styles.helpButton}>
            <img
              className={styles.iconAdminUser}
              alt=""
              src="../icon-help@2x.png"
            />
            <b className={styles.adminNameB}>Help</b>
          </button>
          <div className={styles.searchDiv}>
            <div className={styles.whiteBgDiv} />
            <button className={styles.iconSearchButton} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
            />
          </div>
          <a className={styles.changePassword}>Change Password</a>
          <a className={styles.profileA}>Profile</a>
          <Link className={styles.homeA} to="/">
            Home
          </Link>
        </div>
        <Link className={styles.logoA} to="/dashboard">
          <b className={styles.companyNameB}>Company Name</b>
          <img
            className={styles.companyName51Icon}
            alt=""
            src="../companyname5-1@2x.png"
          />
        </Link>
      </div>
    </div>
  );
};

export default AdsList;
