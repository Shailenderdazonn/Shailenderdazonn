import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();

  const onExitingUserButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSellButtonClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  return (
    <div className={styles.signupDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.yellowBackgroundColorDiv} />
        <div className={styles.followUsDiv}>
          <div className={styles.fBIconDiv}>
            <img className={styles.ellipseIcon} alt="" src="../ellipse-8.svg" />
            <img className={styles.fb1Icon} alt="" src="../fb-1@2x.png" />
          </div>
          <div className={styles.instgramIconDiv}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-92.svg"
            />
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
              src="../ellipse-102.svg"
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
          <Link className={styles.howToSellFast5} to="/">{`Home `}</Link>
          <b className={styles.howToSellFast6}>How to sell fast</b>
        </div>
        <div className={styles.quickLinksDiv}>
          <b className={styles.helpSupportB}>Help/Support</b>
          <b className={styles.aboutUs}>About us</b>
          <b className={styles.categoryB}>Category</b>
          <Link className={styles.homeA} to="/">{`Home `}</Link>
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
      <div className={styles.loginDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rightSideDiv}>
          <div className={styles.rectangleDiv1} />
          <button
            className={styles.exitingUserButton}
            onClick={onExitingUserButtonClick}
          >
            <div className={styles.rectangleDiv2} />
            <div className={styles.exitingUserLogin}>Exiting User ? Login</div>
          </button>
          <button className={styles.loginButton} onClick={onLoginButtonClick}>
            <div className={styles.rectangleDiv3} />
            <div className={styles.loginDiv1}>Login</div>
          </button>
          <div className={styles.byContinuingYouAgreeToCo}>
            <span>By continuing, you agree to company</span>
            <span
              className={styles.termsOfUse}
            >{` Terms of Use and Privacy Policy `}</span>
          </div>
          <div className={styles.nameMobileNoDiv}>
            <img className={styles.lineIcon} alt="" src="../line-31.svg" />
            <input
              className={styles.enterEmailMobileNumber}
              type="text"
              placeholder="Enter Email/Mobile Number "
            />
          </div>
        </div>
        <div className={styles.leftSideDiv}>
          <div className={styles.rectangleDiv4} />
          <img
            className={styles.plainShoppingBagPNGClipartIcon}
            alt=""
            src="../plainshoppingbagpngclipart-1@2x.png"
          />
          <div className={styles.signUpWithYourMobileNumbe}>
            <p className={styles.signUpWith}>Sign up with your mobile number</p>
            <p className={styles.signUpWith}>to get started</p>
          </div>
          <b className={styles.looksLikeYoureNewHere}>
            <p className={styles.signUpWith}>Looks like you're</p>
            <p className={styles.signUpWith}>new here!</p>
          </b>
        </div>
      </div>
      <div className={styles.headerNavbarAndLogo}>
        <div className={styles.bGColorDiv} />
        <div className={styles.navbarDiv}>
          <button className={styles.sellButton} onClick={onSellButtonClick}>
            <div className={styles.rectangleDiv5} />
            <b className={styles.sellB}>Sell</b>
          </button>
          <Link className={styles.registerSignIn} to="/login">
            Register / Sign In
          </Link>
          <img className={styles.userIcon} alt="" src="../user-icon@2x.png" />
          <a className={styles.helpSupport}>Help / Support</a>
          <a className={styles.aboutUs1}>About Us</a>
          <a className={styles.category}>Category</a>
          <Link className={styles.homeA1} to="/">
            Home
          </Link>
        </div>
        <Link className={styles.logoA} to="/" />
      </div>
    </div>
  );
};

export default Signup;
