import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActiveUsers from "../components/ActiveUsers";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const onLogoutButtonClick = useCallback(() => {
    navigate("/logindashboard");
  }, [navigate]);

  return (
    <div className={styles.dashboardDiv}>
      <div className={styles.rightSideDiv}>
        <div className={styles.latestRegisteredUser}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <div className={styles.rectangleDiv3} />
          <b className={styles.sinceB}>Since</b>
          <b className={styles.emailB}>Email</b>
          <b className={styles.userNameB}>UserName</b>
          <div className={styles.rectangleDiv4} />
          <b className={styles.latestAdsB}>Latest Ads</b>
          <img
            className={styles.iconLatestAds}
            alt=""
            src="../icon-latest-ads@2x.png"
          />
        </div>
        <div className={styles.latestAdsDiv}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.rectangleDiv6} />
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
          <b className={styles.completeB}>Complete</b>
          <b className={styles.classifiedB}>{`Classified `}</b>
          <b className={styles.titleB}>Title</b>
          <div className={styles.rectangleDiv9} />
          <b className={styles.latestAdsB1}>Latest Ads</b>
          <img
            className={styles.iconLatestAds1}
            alt=""
            src="../icon-latest-ads@2x.png"
          />
        </div>
        <div className={styles.dashboardDiv1}>
          <div className={styles.pendingAdsDiv}>
            <div className={styles.rectangleDiv10} />
            <button className={styles.rectangleButton} />
            <div className={styles.moreInfoDiv}>More info</div>
            <img className={styles.iconEdit} alt="" src="../iconedit@2x.png" />
            <b className={styles.b}>10</b>
            <div className={styles.pendingAdsDiv1}>Pending Ads</div>
          </div>
          <div className={styles.activeAdsDiv}>
            <div className={styles.rectangleDiv11} />
            <button className={styles.rectangleButton1} />
            <div className={styles.moreInfoDiv1}>More info</div>
            <img className={styles.iconBell} alt="" src="../iconbell@2x.png" />
            <b className={styles.b1}>30</b>
            <div className={styles.activeAdsDiv1}>Active Ads</div>
          </div>
          <div className={styles.inactiveUsersDiv}>
            <div className={styles.rectangleDiv12} />
            <button className={styles.rectangleButton2} />
            <b className={styles.moreInfoB}>More info</b>
            <img
              className={styles.iconFiles}
              alt=""
              src="../iconfiles@2x.png"
            />
            <b className={styles.b2}>5</b>
            <b className={styles.inactiveUsersB}>Inactive Users</b>
          </div>
          <ActiveUsers />
          <b className={styles.dashboard}>Dashboard</b>
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
        <Link className={styles.userListA} to="/user-list">
          <div className={styles.blackBackgroundDiv} />
          <b className={styles.categoryB}>User List</b>
          <img
            className={styles.iconCategory}
            alt=""
            src="../iconuser1@2x.png"
          />
        </Link>
        <a className={styles.dashboard1}>
          <div className={styles.pinkBackgroundDiv} />
          <b className={styles.categoryB}>Dashboard</b>
          <img
            className={styles.iconCategory}
            alt=""
            src="../icondashboard@2x.png"
          />
        </a>
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
          <a className={styles.admin}>
            <b className={styles.adminNameB}>Admin Name</b>
            <img
              className={styles.iconAdminUser}
              alt=""
              src="../icon--admin-user@2x.png"
            />
          </a>
          <a className={styles.helpA}>
            <img
              className={styles.iconAdminUser}
              alt=""
              src="../icon-help@2x.png"
            />
            <b className={styles.adminNameB}>Help</b>
          </a>
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
          <div className={styles.rectangleDiv13} />
          <a className={styles.homeA}>Home</a>
        </div>
        <a className={styles.logoA}>
          <b className={styles.companyNameB}>Company Name</b>
          <img
            className={styles.companyName51Icon}
            alt=""
            src="../companyname5-1@2x.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
