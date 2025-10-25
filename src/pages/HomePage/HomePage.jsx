import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div>
            <div className={cx("hero")}>
                <div className="container">
                    <div className={cx("hero-content", "d-flex")}>
                        <p className={cx("hero-welcome")}>
                            Welcome to Besnik Agency
                        </p>
                        <h2 className={cx("hero-heading")}>
                            Discover a place you'll love to live.
                        </h2>
                        <p className={cx("hero-description")}>
                            get the best real estate deals first, before they
                            hit the mass market! hot foreclosure deals with one
                            simple search.
                        </p>
                        <Link to="/about" className="btn-primary">
                            More About Us
                        </Link>
                    </div>
                    <img
                        src="/images/house.png"
                        alt=""
                        className={cx("hero-img")}
                    />
                </div>{" "}
            </div>
            <div className={cx("container", "client-review")}>
                <div className={cx("client-row", "rate-star")}>
                    <img
                        src="/images/besnik-home.png"
                        className={cx("logo-besnik")}
                        alt=""
                    />
                    <p className={cx("stars")}>
                        <img
                            className={cx("star-icon")}
                            src="/images/star.png"
                            alt=""
                        />
                        <img
                            className={cx("star-icon")}
                            src="/images/star.png"
                            alt=""
                        />
                        <img
                            className={cx("star-icon")}
                            src="/images/star.png"
                            alt=""
                        />
                        <img
                            className={cx("star-icon")}
                            src="/images/star.png"
                            alt=""
                        />
                        <img
                            className={cx("star-icon")}
                            src="/images/star.png"
                            alt=""
                        />
                    </p>
                </div>
                <div className={cx("client-row", "rate-desc")}>
                    <p className={cx("rating-desc")}>
                        More than 45,000+ companies trust besnik
                    </p>
                    <p className={cx("rating-stars")}>
                        5 Star Ratings (2k+ Review)
                    </p>
                </div>
                <div className={cx("client-row")}>
                    <a href="#" className={cx("client-link")}>
                        <img
                            className={cx("client-logo")}
                            src="/images/me-undies.png"
                            alt=""
                        />
                    </a>
                    <a href="#" className={cx("client-link")}>
                        <img
                            className={cx("client-logo")}
                            src="/images/slack.png"
                            alt=""
                        />
                    </a>
                    <a href="#" className={cx("client-link")}>
                        <img
                            className={cx("client-logo")}
                            src="/images/amazon.png"
                            alt=""
                        />
                    </a>
                    <a href="#" className={cx("client-link")}>
                        <img
                            className={cx("client-logo")}
                            src="/images/woocommerce.png"
                            alt=""
                        />
                    </a>
                    <a href="#" className={cx("client-link")}>
                        <img
                            className={cx("client-logo")}
                            src="/images/sitepoint.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default HomePage;
