import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import Ads from "../components/Ads";
import styles from "./Search.module.css";

const Search = () => {
  const navigate = useNavigate();

  const onSellButtonClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const onRegisterSignClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.searchDiv}>
      <div className={styles.rightSIdeDiv}>
        <div className={styles.groupDiv}>
          <div className={styles.div}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-40.svg"
            />
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-41@2x.png"
            />
            <img
              className={styles.heartIcon1}
              alt=""
              src="../hearticon-1@2x.png"
            />
            <div className={styles.featureDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.featuredDiv}>Featured</div>
            </div>
          </div>
          <div className={styles.div1}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-401.svg"
            />
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-411@2x.png"
            />
            <img
              className={styles.heartIcon1}
              alt=""
              src="../hearticon-11@2x.png"
            />
            <div className={styles.featureDiv1}>
              <div className={styles.rectangleDiv} />
              <div className={styles.featuredDiv1}>Featured</div>
            </div>
          </div>
          <div className={styles.div2}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-402.svg"
            />
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-412@2x.png"
            />
            <img
              className={styles.heartIcon1}
              alt=""
              src="../hearticon-12@2x.png"
            />
            <div className={styles.featureDiv2}>
              <div className={styles.rectangleDiv} />
              <div className={styles.featuredDiv}>Featured</div>
            </div>
          </div>
          <div className={styles.div3}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-403.svg"
            />
            <div className={styles.priceAndAddressDate}>
              <div className={styles.nov22Div}>Nov 22</div>
              <div className={styles.mPNagarZone2Bhopal}>
                MP Nagar Zone 2, Bhopal
              </div>
              <div className={styles.volvoCarsDiv}>Volvo cars</div>
              <b className={styles.b}>₹ 5,15,000/-</b>
            </div>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-413@2x.png"
            />
            <img
              className={styles.heartIcon1}
              alt=""
              src="../hearticon-13@2x.png"
            />
            <div className={styles.featureDiv3}>
              <div className={styles.rectangleDiv} />
              <div className={styles.featuredDiv3}>Featured</div>
            </div>
          </div>
          <div className={styles.div4}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-404.svg"
            />
            <div className={styles.priceAndAddressDate1}>
              <div className={styles.nov22Div1}>Nov 22</div>
              <div className={styles.mPNagarZone2Bhopal1}>
                MP Nagar Zone 2, Bhopal
              </div>
              <div className={styles.hondaActiva6G}>Honda Activa 6G</div>
              <b className={styles.b1}>₹ 85,000/-</b>
            </div>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-414@2x.png"
            />
            <img
              className={styles.heartIcon1}
              alt=""
              src="../hearticon-14@2x.png"
            />
            <div className={styles.featureDiv4}>
              <div className={styles.rectangleDiv} />
              <div className={styles.featuredDiv4}>Featured</div>
            </div>
          </div>
          <Ads />
        </div>
        <div className={styles.groupDiv1}>
          <img
            className={styles.greyArrowUp2Icon}
            alt=""
            src="../greyarrowup-2@2x.png"
          />
          <div className={styles.sortByDatePublished}>
            <b>{`Sort By : `}</b>
            <span>Date Published</span>
          </div>
          <div className={styles.adsInIndia}>
            <span>{`2,0000 ads in `}</span>
            <b>India</b>
          </div>
        </div>
      </div>
      <div className={styles.leftSideDiv}>
        <div className={styles.rectangleDiv5} />
        <div className={styles.budgetDiv}>
          <button className={styles.applyButton}>
            <div className={styles.rectangleDiv6} />
            <b className={styles.applyB}>Apply</b>
          </button>
          <div className={styles.maxDiv}>
            <div className={styles.rectangleDiv7} />
            <input className={styles.maxInput} type="text" placeholder="Max" />
          </div>
          <b className={styles.toB}>To</b>
          <div className={styles.minDiv}>
            <div className={styles.rectangleDiv8} />
            <input className={styles.minInput} type="text" placeholder="Min" />
          </div>
          <b className={styles.chooseARangeBelow}>Choose a range below</b>
          <img className={styles.iconUp} alt="" src="../icon-up@2x.png" />
          <b className={styles.budget}>Budget</b>
          <b className={styles.filtersB}>Filters</b>
        </div>
        <div className={styles.locationsDiv}>
          <div className={styles.lineDiv} />
          <img className={styles.iconUp1} alt="" src="../icon-up1@2x.png" />
          <b className={styles.locationsB}>Locations</b>
        </div>
        <div className={styles.categoriesDiv}>
          <div className={styles.lineDiv1} />
          <b className={styles.allCategoriesB}>All Categories</b>
          <div className={styles.rectangleDiv9} />
          <img className={styles.iconUp2} alt="" src="../icon-up2@2x.png" />
          <b className={styles.categoriesB}>Categories</b>
        </div>
        <b className={styles.indiaFreeClassifieds}>India Free Classifieds</b>
        <b className={styles.homeB}>Home</b>
      </div>
      <div className={styles.headerNavbarAndLogo}>
        <div className={styles.bGColorDiv} />
        <div className={styles.navbarDiv}>
          <button className={styles.sellButton} onClick={onSellButtonClick}>
            <div className={styles.rectangleDiv10} />
            <b className={styles.sellB}>Sell</b>
          </button>
          <button
            className={styles.registerSignIn}
            onClick={onRegisterSignClick}
          >
            Register / Sign In
          </button>
          <img className={styles.userIcon} alt="" src="../user-icon@2x.png" />
          <div className={styles.findMobileetcDiv}>
            <div className={styles.rectangleDiv11} />
            <button className={styles.searchGroupButton}>
              <div className={styles.rectangleDiv12} />
              <img
                className={styles.iconSearch}
                alt=""
                src="../iconsearch4@2x.png"
              />
            </button>
            <input
              className={styles.findMobilesBikesCarsLap}
              type="text"
              placeholder="Find Mobiles, Bikes, Cars, Laptop and more..."
            />
          </div>
          <div className={styles.searchCountryDiv}>
            <div className={styles.rectangleDiv13} />
            <img className={styles.iconDown} alt="" src="../icon-down@2x.png" />
            <input
              className={styles.indiaInput}
              type="text"
              placeholder="India"
            />
            <img
              className={styles.searchWhitegrey1Icon}
              alt=""
              src="../searchwhitegrey-1@2x.png"
            />
          </div>
        </div>
        <Link className={styles.logoA} to="/" />
      </div>
    </div>
  );
};

export default Search;
