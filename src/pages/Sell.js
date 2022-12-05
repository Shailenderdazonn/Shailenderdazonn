import { Link } from "react-router-dom";
import styles from "./Sell.module.css";

const Sell = () => {
  return (
    <div className={styles.sellDiv}>
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
      <div className={styles.rectangleDiv} />
      <div className={styles.postYourAdButton}>
        <button className={styles.postYourAds}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.postYourAd}>Post Your Ad</b>
        </button>
        <div className={styles.termsCondition}>
          <b className={styles.byClickYouMustAgreeWithO}>
            <span>By click you must agree with our</span>
            <span
              className={styles.span}
            >{` Terms & Condition and Rules.`}</span>
          </b>
          <input className={styles.rectangleInput} type="checkbox" required />
        </div>
      </div>
      <div className={styles.makeYourAdFeatured}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.rightSideDiv}>
          <div className={styles.creditCardDiv}>Credit Card</div>
          <input className={styles.ellipseInput} type="radio" />
          <div className={styles.chequePaymentDiv}>Cheque Payment</div>
          <input className={styles.ellipseInput1} type="radio" />
          <div className={styles.directBankTransfer}>Direct Bank Transfer</div>
          <input className={styles.ellipseInput2} type="radio" />
          <div className={styles.pleaseSelectThePreferredPa}>
            Please select the preferred payment method:
          </div>
        </div>
        <div className={styles.leftSideDiv}>
          <div className={styles.urgentAds7900}>
            <span>Urgent Ads</span>
            <span className={styles.span}> $79.00</span>
          </div>
          <input className={styles.ellipseInput} type="radio" />
          <div className={styles.topFeaturedAds5900}>
            <span>Top Featured Ads</span>
            <span className={styles.span}> $59.00</span>
          </div>
          <input className={styles.ellipseInput1} type="radio" />
          <div className={styles.regularAd0000}>
            <span>Regular Ad</span>
            <span className={styles.span}> $00.00</span>
          </div>
          <input className={styles.ellipseInput2} type="radio" />
          <div className={styles.premiumAdOptions}>Premium Ad Options:</div>
        </div>
        <b className={styles.whatIsFeaturedAd}>What is featured ad?</b>
        <b className={styles.makeYourAdFeatured1}>Make Your Ad Featured</b>
      </div>
      <div className={styles.sellerInformationDiv}>
        <div className={styles.rectangleDiv3} />
        <div className={styles.section2Div}>
          <div className={styles.addressDiv}>
            <div className={styles.addressDiv1}>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv4} />
                <input
                  className={styles.yourAddressInput}
                  type="text"
                  placeholder="Your Address"
                />
              </div>
              <div className={styles.yourAddressDiv}>Your Address:</div>
            </div>
          </div>
          <div className={styles.contactNoDiv}>
            <div className={styles.cOntactNameDiv}>
              <div className={styles.rectangleDiv5} />
              <input
                className={styles.contactNumberInput}
                type="text"
                placeholder="Contact Number"
              />
            </div>
            <div className={styles.contactNUmber}>Contact Number :</div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.eMailDiv}>
            <div className={styles.selectCategoreyDiv}>
              <div className={styles.rectangleDiv6} />
              <input
                className={styles.yourEmailInput}
                type="text"
                placeholder="Your Email"
              />
              <div className={styles.yourEmailDiv}>Your Email</div>
            </div>
          </div>
          <div className={styles.nameDiv}>
            <div className={styles.cOntactNameDiv}>
              <div className={styles.rectangleDiv5} />
              <input
                className={styles.yourNameInput}
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className={styles.yourName}>Your Name :</div>
          </div>
        </div>
        <b className={styles.sellerInformationB}>Seller Information</b>
      </div>
      <div className={styles.postYourAd1}>
        <div className={styles.rectangleDiv8} />
        <div className={styles.section3Div}>
          <div className={styles.selectFilesDiv}>
            <div className={styles.rectangleDiv9} />
            <div className={styles.maximumUploadFileSize500K}>
              Maximum upload file size 500 KB
            </div>
            <input className={styles.selectFilesButton} type="file" />
            <div className={styles.orDiv}>or</div>
            <div className={styles.dropFilesAnywhereToUpload}>
              Drop files anywhere to upload
            </div>
          </div>
          <div className={styles.descriptionDiv}>
            <div className={styles.writeDiv}>
              <div className={styles.rectangleDiv9} />
              <input
                className={styles.writeDetailsAboutYourProdu}
                type="text"
                placeholder="Write details about your product"
              />
            </div>
            <div className={styles.descriptionDiv1}>Description:</div>
          </div>
        </div>
        <div className={styles.section2Div1}>
          <div className={styles.itemPriceDiv}>
            <div className={styles.negotiableDiv}>
              <div className={styles.rectangleDiv11} />
              <input
                className={styles.negotiableInput}
                type="text"
                placeholder="Negotiable"
              />
            </div>
            <div className={styles.priceDiv}>
              <div className={styles.rectangleDiv11} />
              <input
                className={styles.priceInput}
                type="text"
                placeholder="Price"
              />
            </div>
            <div className={styles.itemPriceUSD}>Item Price ($ USD):</div>
          </div>
          <div className={styles.adTypeDiv}>
            <div className={styles.businessDiv}>
              <div className={styles.rectangleDiv13} />
              <div className={styles.businessDiv1}>Business</div>
              <input className={styles.ellipseInput6} type="radio" />
            </div>
            <div className={styles.personalDiv}>
              <div className={styles.rectangleDiv13} />
              <div className={styles.personalDiv1}>Personal</div>
              <input className={styles.ellipseInput6} type="radio" />
            </div>
            <div className={styles.adTypeDiv1}>Ad Type:</div>
          </div>
        </div>
        <div className={styles.section11}>
          <div className={styles.selectAdCategory}>
            <div className={styles.selectCategoreyDiv1}>
              <div className={styles.rectangleDiv4} />
              <img
                className={styles.iconDown}
                alt=""
                src="../icon-down1@2x.png"
              />
              <input
                className={styles.selectCategoryInput}
                type="text"
                placeholder="Select Category"
              />
            </div>
            <div className={styles.selectAdCategory1}>Select Ad Category:</div>
          </div>
          <div className={styles.titleOfAd}>
            <div className={styles.adTitleGoThere}>
              <div className={styles.rectangleDiv5} />
              <input
                className={styles.adTitleGoThere1}
                type="text"
                placeholder="Ad Title go There "
              />
            </div>
            <div className={styles.titleOfAd1}>Title Of Ad:</div>
          </div>
        </div>
        <b className={styles.postYourAd2}>Post Your Ad</b>
      </div>
      <div className={styles.headerNavbarAndLogo}>
        <div className={styles.bGColorDiv} />
        <div className={styles.navbarDiv}>
          <button className={styles.sellButton}>
            <div className={styles.rectangleDiv17} />
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

export default Sell;
