import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeAds from "../components/HomeAds";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onExploreListingsButtonClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onViewMoreButtonClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onSearchGroupButtonClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onSellButtonClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const onAboutUsButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourTrustedPartners']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCategoryButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navbarListName']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.homeDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.yellowBackgroundColorDiv} />
        <div className={styles.followUsDiv}>
          <div className={styles.fBIconDiv}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-8.svg" />
            <img className={styles.fb1Icon} alt="" src="../fb-1@2x.png" />
          </div>
          <div className={styles.instgramIconDiv}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-9.svg" />
            <img
              className={styles.instgram1Icon}
              alt=""
              src="../instgram-1@2x.png"
            />
          </div>
          <div className={styles.linkednIconDiv}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-10.svg"
            />
            <img className={styles.fb1Icon} alt="" src="../linkedin-1@2x.png" />
          </div>
          <div className={styles.twitterIconDiv}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-8.svg" />
            <img
              className={styles.twitter1Icon}
              alt=""
              src="../twitter-1@2x.png"
            />
          </div>
          <b className={styles.howToSellFast}>Follow Us</b>
        </div>
        <div className={styles.howToSellFast2}>
          <b className={styles.howToSellFast1}>
            We have over 15 years of experience Our suppoer available to help
            you 24 hours a day, seven days week
          </b>
          <b className={styles.howToSellFast3}>How to sell fast</b>
        </div>
        <div className={styles.howToSellFast4}>
          <b className={styles.contactUsB}>Contact Us</b>
          <b className={styles.fAQB}>FAQ</b>
          <b className={styles.membership}>Membership</b>
          <b className={styles.howToSellFast5}>{`Home `}</b>
          <b className={styles.howToSellFast6}>How to sell fast</b>
        </div>
        <div className={styles.quickLinksDiv}>
          <b className={styles.helpSupportB}>Help/Support</b>
          <b className={styles.aboutUs}>About us</b>
          <Link className={styles.category} to="/category">
            Category
          </Link>
          <a className={styles.homeA}>{`Home `}</a>
          <b className={styles.quickLinksB}>Quick Links</b>
        </div>
        <div className={styles.tipsHelpLists}>
          <b className={styles.contactUsB1}>Contact Us</b>
          <b className={styles.fAQB}>Help</b>
          <b className={styles.classifiedBlog}>Classified Blog</b>
          <b className={styles.aboutClassified}>About Classified</b>
          <b className={styles.tipsAndHelp}>Tips And help</b>
        </div>
        <img
          className={styles.footerLogoIcon}
          alt=""
          src="../footerlogo@2x.png"
        />
      </div>
      <div className={styles.subcribeDiv}>
        <div className={styles.backgroundBackDiv} />
        <div className={styles.backgroundColorDiv} />
        <button className={styles.subcribeButton}>
          <div className={styles.rectangleDiv} />
          <div className={styles.subcribeDiv1}>Subcribe</div>
        </button>
        <div className={styles.emailDiv}>
          <div className={styles.rectangleDiv1} />
          <input
            className={styles.enterYourEmail}
            type="text"
            placeholder="Enter Your Email"
          />
        </div>
        <b className={styles.subcribeToOurNews}>Subcribe To Our News</b>
      </div>
      <div className={styles.buyOrSellAnytimeFromAnywh}>
        <div className={styles.backgroundDiv} />
        <img
          className={styles.homeCreateAppSlider1Icon}
          alt=""
          src="../homecreateappslider-1@2x.png"
        />
        <div className={styles.leftSideDiv}>
          <button className={styles.googlePlayButton} />
          <button className={styles.appleStoreButton} />
          <b className={styles.buySellAndFindJustAbout}>
            <p className={styles.buySellAnd}>
              Buy, sell and find just about anything using the
            </p>
            <p className={styles.appOnYour}>app on your mobile.</p>
          </b>
          <b className={styles.buyOrSellAnytimeFromAnywh1}>
            <p className={styles.buySellAnd}>Buy Or Sell Anytime</p>
            <p className={styles.appOnYour}>From Anywhere</p>
          </b>
        </div>
      </div>
      <div className={styles.testimonialsDiv}>
        <img
          className={styles.backgoundImageIcon}
          alt=""
          src="../backgoundimage@2x.png"
        />
        <img className={styles.cicleIcon} alt="" src="../cicle.svg" />
        <div className={styles.smallSlidersDiv}>
          <div className={styles.arrowRightAndLeft}>
            <img
              className={styles.iconRight}
              alt=""
              src="../icon-right@2x.png"
            />
            <img className={styles.iconLeft} alt="" src="../icon-left@2x.png" />
          </div>
          <div className={styles.customer3}>
            <div className={styles.rectangleDiv2} />
            <img
              className={styles.rateStar1Icon}
              alt=""
              src="../ratestar-1@2x.png"
            />
            <div className={styles.titleTextDiv}>
              <div className={styles.rectangleDiv3} />
              <b className={styles.loremIpsumIsSimplyDummyTe}>
                <p className={styles.buySellAnd}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                </p>
                <p className={styles.buySellAnd}>
                  industry's standard dummy text ever since the 1500s,
                </p>
                <p className={styles.appOnYour}>
                  {" "}
                  when an unknown printer took a galley.
                </p>
              </b>
            </div>
            <b className={styles.customerNameB}>Customer Name</b>
            <div className={styles.iconUserGroupDiv}>
              <img
                className={styles.ellipseIcon4}
                alt=""
                src="../ellipse-4.svg"
              />
              <img
                className={styles.userIcon1}
                alt=""
                src="../usericon-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.customer2}>
            <div className={styles.rectangleDiv2} />
            <img
              className={styles.rateStar1Icon}
              alt=""
              src="../ratestar-1@2x.png"
            />
            <div className={styles.titleTextDiv}>
              <div className={styles.rectangleDiv3} />
              <b className={styles.loremIpsumIsSimplyDummyTe}>
                <p className={styles.buySellAnd}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                </p>
                <p className={styles.buySellAnd}>
                  industry's standard dummy text ever since the 1500s,
                </p>
                <p className={styles.appOnYour}>
                  {" "}
                  when an unknown printer took a galley.
                </p>
              </b>
            </div>
            <b className={styles.customerNameB}>Customer Name</b>
            <div className={styles.iconUserGroupDiv}>
              <img
                className={styles.ellipseIcon4}
                alt=""
                src="../ellipse-41.svg"
              />
              <img
                className={styles.userIcon1}
                alt=""
                src="../usericon-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.customer1}>
            <div className={styles.rectangleDiv2} />
            <img
              className={styles.rateStar1Icon}
              alt=""
              src="../ratestar-1@2x.png"
            />
            <div className={styles.titleTextDiv}>
              <div className={styles.rectangleDiv3} />
              <b className={styles.loremIpsumIsSimplyDummyTe}>
                <p className={styles.buySellAnd}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                </p>
                <p className={styles.buySellAnd}>
                  industry's standard dummy text ever since the 1500s,
                </p>
                <p className={styles.appOnYour}>
                  {" "}
                  when an unknown printer took a galley.
                </p>
              </b>
            </div>
            <b className={styles.customerNameB}>Customer Name</b>
            <div className={styles.iconUserGroupDiv}>
              <img
                className={styles.ellipseIcon4}
                alt=""
                src="../ellipse-41.svg"
              />
              <img
                className={styles.userIcon1}
                alt=""
                src="../usericon-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.headerTitlesTextDiv}>
          <b className={styles.whatOurClientsSay}>What our clients say</b>
          <b className={styles.testimonialsB}>Testimonials</b>
        </div>
      </div>
      <div
        className={styles.ourTrustedPartners}
        data-scroll-to="ourTrustedPartners"
      >
        <div className={styles.backgroundDiv1} />
        <div className={styles.rectangleDiv8} />
        <div className={styles.getTheBestClassified}>
          <div className={styles.rectangleDiv9} />
          <button
            className={styles.exploreListingsButton}
            onClick={onExploreListingsButtonClick}
          >
            <div className={styles.rectangleDiv10} />
            <img
              className={styles.iconRightBlack}
              alt=""
              src="../icon-right-black@2x.png"
            />
            <b className={styles.exploreListingsB}>Explore Listings</b>
          </button>
          <div className={styles.newAdsDaily}>
            <div className={styles.newAdsDaily1}>
              <p className={styles.buySellAnd}>New Ads</p>
              <p className={styles.appOnYour}>Daily</p>
            </div>
            <div className={styles.rectangleDiv11} />
            <b className={styles.kB}>170 +K</b>
          </div>
          <div className={styles.regularUserDiv}>
            <div className={styles.regularUsersDiv}>
              <p className={styles.buySellAnd}>Regular</p>
              <p className={styles.appOnYour}>Users</p>
            </div>
            <div className={styles.rectangleDiv12} />
            <b className={styles.kB}>900 +K</b>
          </div>
          <div className={styles.activeListingsDiv}>
            <div className={styles.activeListingsDiv1}>
              <p className={styles.buySellAnd}>Active</p>
              <p className={styles.appOnYour}>Listings</p>
            </div>
            <div className={styles.rectangleDiv13} />
            <b className={styles.mB}>12.5 M+</b>
          </div>
          <div className={styles.headerTitlesDiv}>
            <b className={styles.loremIpsumDolorSitAmetCo}>
              <p className={styles.buySellAnd}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
              </p>
              <p className={styles.appOnYour}>
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </b>
            <div className={styles.getTheBestClassifiedAdsEx}>
              <p className={styles.buySellAnd}>Get The Best Classified</p>
              <p className={styles.appOnYour}>Ads Experience With Company</p>
            </div>
          </div>
        </div>
        <div className={styles.companyLogo5}>
          <div className={styles.companyNameDiv}>Company Name</div>
          <img className={styles.logo5Icon} alt="" src="../logo5@2x.png" />
        </div>
        <div className={styles.companyLogo4}>
          <div className={styles.companyNameDiv1}>Company Name</div>
          <img className={styles.logo4Icon} alt="" src="../logo4@2x.png" />
        </div>
        <div className={styles.companyLogo3}>
          <div className={styles.companyNameDiv}>Company Name</div>
          <img className={styles.logo3Icon} alt="" src="../logo3@2x.png" />
        </div>
        <div className={styles.companyLogo2}>
          <div className={styles.companyNameDiv1}>Company Name</div>
          <img className={styles.logo2Icon} alt="" src="../logo2@2x.png" />
        </div>
        <div className={styles.companyLogo1}>
          <div className={styles.companyNameDiv}>Company Name</div>
          <img className={styles.logo1Icon} alt="" src="../logo1@2x.png" />
        </div>
        <b className={styles.loremIpsumIsSimplyDummyTe3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </b>
        <div className={styles.ourTrustedPartners1}>Our Trusted Partners</div>
      </div>
      <div className={styles.featuredAdsDiv}>
        <div className={styles.whiteBlueColorBackground} />
        <button
          className={styles.viewMoreButton}
          onClick={onViewMoreButtonClick}
        >
          <div className={styles.rectangleDiv14} />
          <b className={styles.viewMore}>View More ...</b>
        </button>
        <div className={styles.laptopsDiv}>
          <div className={styles.rectangleDiv15} />
          <b className={styles.b}>₹ 80,000/-</b>
          <b className={styles.assamIndiaB}>Assam, India</b>
          <img
            className={styles.locationIcon}
            alt=""
            src="../location@2x.png"
          />
          <b className={styles.laptopsB}>Laptops</b>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-21@2x.png"
          />
        </div>
        <div className={styles.carsHyundaiElite120}>
          <div className={styles.rectangleDiv15} />
          <b className={styles.b1}>₹ 1,55,000/-</b>
          <b className={styles.newDelhiIndia}>New Delhi, India</b>
          <img
            className={styles.locationIcon1}
            alt=""
            src="../location1@2x.png"
          />
          <b className={styles.hyundaiEliteI20}>Hyundai Elite i20</b>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-19@2x.png"
          />
        </div>
        <div className={styles.activa5GDiv}>
          <div className={styles.rectangleDiv15} />
          <b className={styles.b2}>₹ 75,000/-</b>
          <b className={styles.shimalaIndiaB}>Shimala, India</b>
          <img
            className={styles.locationIcon2}
            alt=""
            src="../location2@2x.png"
          />
          <b className={styles.activa5GB}>Activa 5G</b>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-17@2x.png"
          />
        </div>
        <HomeAds />
        <div className={styles.navbarListName} data-scroll-to="navbarListName">
          <button className={styles.arrowRightButton}>
            <div className={styles.rectangleDiv18} />
            <img
              className={styles.iconRight1}
              alt=""
              src="../icon-right1@2x.png"
            />
          </button>
          <button className={styles.carsButton}>
            <div className={styles.rectangleDiv19} />
            <b className={styles.carsB}>Cars</b>
          </button>
          <button className={styles.bikesButton}>
            <div className={styles.rectangleDiv19} />
            <b className={styles.bikes}>Bikes</b>
          </button>
          <button className={styles.laptopsButton}>
            <div className={styles.rectangleDiv19} />
            <b className={styles.laptopsB1}>Laptops</b>
          </button>
          <button className={styles.mobilesButton}>
            <div className={styles.rectangleDiv22} />
            <b className={styles.mobiles}>Mobiles</b>
          </button>
          <div className={styles.allDiv}>
            <div className={styles.rectangleDiv23} />
            <b className={styles.aLLB}>ALL</b>
          </div>
          <button className={styles.arrowLeftButton}>
            <div className={styles.rectangleDiv18} />
            <img
              className={styles.iconLeft1}
              alt=""
              src="../icon-left1@2x.png"
            />
          </button>
        </div>
        <div className={styles.featuredAdsDiv1}>Featured Ads</div>
      </div>
      <div className={styles.bannerCoverDiv}>
        <div className={styles.backgroundDiv2}>
          <img className={styles.imageIcon} alt="" src="../image@2x.png" />
          <div className={styles.backgroundColorOpacityDiv} />
        </div>
        <div className={styles.findMobileetcDiv}>
          <div className={styles.rectangleDiv25} />
          <button
            className={styles.searchGroupButton}
            onClick={onSearchGroupButtonClick}
          >
            <div className={styles.rectangleDiv26} />
            <img
              className={styles.iconSearch}
              alt=""
              src="../icon-search@2x.png"
            />
          </button>
          <input
            className={styles.findMobilesBikesCarsLap}
            type="text"
            placeholder="Find Mobiles, Bikes, Cars, Laptop and more..."
          />
        </div>
        <div className={styles.headerTitleDiv}>
          <b
            className={styles.searchFromOver100000Clas}
          >{`Search from over 1,00,000 classifieds & Post unlimited classifieds free!`}</b>
          <b className={styles.getYourNextMobile} data-animate-on-scroll>
            <span>{`Get Your Next `}</span>
            <span className={styles.mobileSpan}>Mobile!</span>
          </b>
          <b className={styles.letsUsHelpYou} data-animate-on-scroll>
            Lets Us Help You
          </b>
        </div>
      </div>
      <div className={styles.headerNavbarAndLogo}>
        <div className={styles.bGColorDiv} />
        <div className={styles.navbarDiv}>
          <button className={styles.sellButton} onClick={onSellButtonClick}>
            <div className={styles.rectangleDiv27} />
            <b className={styles.sellB}>Sell</b>
          </button>
          <Link className={styles.registerSignIn} to="/login">
            Register / Sign In
          </Link>
          <img className={styles.userIcon} alt="" src="../user-icon@2x.png" />
          <a className={styles.helpSupport}>Help / Support</a>
          <button
            className={styles.aboutUsButton}
            onClick={onAboutUsButtonClick}
          >
            About Us
          </button>
          <button
            className={styles.categoryButton}
            onClick={onCategoryButtonClick}
          >
            Category
          </button>
          <a className={styles.homeA1}>Home</a>
        </div>
        <a className={styles.logoA} />
      </div>
    </div>
  );
};

export default Home;
