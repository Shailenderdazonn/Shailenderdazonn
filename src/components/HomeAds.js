import styles from "./HomeAds.module.css";

const HomeAds = () => {
  return (
    <div className={styles.iphone13Pro}>
      <div className={styles.rectangleDiv} />
      <b className={styles.b}>₹ 25,000/-</b>
      <b className={styles.newDelhiIndia}>New Delhi, India</b>
      <img className={styles.locationIcon} alt="" src="../location3@2x.png" />
      <b className={styles.iPhone13Pro}>iPhone 13 Pro</b>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-15@2x.png"
      />
    </div>
  );
};

export default HomeAds;
