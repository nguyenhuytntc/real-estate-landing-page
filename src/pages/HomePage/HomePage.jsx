import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HomePage() {
    return (
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
                        get the best real estate deals first, before they hit
                        the mass market! HOT FORECLOSURE DEALS with one simple
                        search.
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
    );
}
export default HomePage;
