import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UserList.module.css";

const UserList = () => {
  const navigate = useNavigate();

  const onLogoutButtonClick = useCallback(() => {
    navigate("/logindashboard");
  }, [navigate]);

  return (
    <div className={styles.userListDiv}>
      <div className={styles.rightSideDiv}>
        <div className={styles.dashboardDiv}>
          <div className={styles.tablesDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.rectangleDiv1} />
            <div className={styles.rectangleDiv2} />
            <div className={styles.rectangleDiv3} />
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
            <div className={styles.rectangleDiv6} />
            <b className={styles.pendingOfAds}>Pending of Ads</b>
            <b className={styles.publishAds}>Publish Ads</b>
            <b className={styles.totalOfAds}>Total of Ads</b>
            <b className={styles.locationB}>Location</b>
            <b className={styles.nameB}>Name</b>
            <b className={styles.userIDB}>User ID</b>
            <b className={styles.photosB}>Photos</b>
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
        <Link className={styles.adsList} to="/ads-list">
          <div className={styles.blackBackgroundDiv} />
          <b className={styles.adsListB}>Ads List</b>
          <img
            className={styles.iconCategory}
            alt=""
            src="../iconadslist@2x.png"
          />
        </Link>
        <a className={styles.userListA}>
          <div className={styles.pinkBackgroundDiv} />
          <b className={styles.categoryB}>User List</b>
          <img
            className={styles.iconCategory}
            alt=""
            src="../iconuser1@2x.png"
          />
        </a>
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
          <Link className={styles.homeA} to="/dashboard">
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

export default UserList;
