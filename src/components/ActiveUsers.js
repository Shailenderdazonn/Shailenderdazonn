import styles from "./ActiveUsers.module.css";

const ActiveUsers = () => {
  return (
    <div className={styles.aCTIVEUSERSDiv}>
      <div className={styles.rectangleDiv} />
      <button className={styles.rectangleButton} />
      <div className={styles.moreInfoDiv}>More info</div>
      <img className={styles.iconUser} alt="" src="../iconuser@2x.png" />
      <b className={styles.b}>10</b>
      <div className={styles.activeUsersDiv}>Active Users</div>
    </div>
  );
};

export default ActiveUsers;
