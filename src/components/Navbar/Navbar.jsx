import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container", "top-nav")}>
                <div>
                    <img
                        src="/images/besnik.png"
                        className={cx("logo-img")}
                        alt="Besnik"
                    />
                </div>
                <ul className={cx("menu-list")}>
                    <li className={cx("menu-item")}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={cx("menu-item")}>
                        <Link to="/features">Features</Link>
                    </li>
                    <li className={cx("menu-item")}>
                        <Link to="/services">Services</Link>
                    </li>
                    <li className={cx("menu-item")}>
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className={cx("menu-item")}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className={cx("actions")}>
                    <Link to="/login" className={cx("btn-text")}>
                        Sign in
                    </Link>
                    <Link to="/register" className={cx("btn-primary")}>
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
