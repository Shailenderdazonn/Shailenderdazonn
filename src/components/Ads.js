import styles from "./Ads.module.css";

const Ads = () => {
  return (
    <div className={styles.div}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-405.svg" />
      <div className={styles.priceAndAddressDate}>
        <div className={styles.nov22Div}>Nov 22</div>
        <div className={styles.mPNagarZone2Bhopal}>MP Nagar Zone 2, Bhopal</div>
        <div className={styles.dellLaptopsI54thGen}>
          Dell Laptops i5 4th Gen
        </div>
        <b className={styles.b}>₹ 15,000/-</b>
      </div>
      <img
        className={styles.rectangleIcon1}
        alt=""
        src="../rectangle-415@2x.png"
      />
      <img className={styles.heartIcon1} alt="" src="../hearticon-15@2x.png" />
      <div className={styles.featureDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.featuredDiv}>Featured</div>
      </div>
    </div>
  );
};

export default Ads;
