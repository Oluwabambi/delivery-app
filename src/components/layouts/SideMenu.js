import { NavLink } from "react-router-dom";
import LogoImg from "../../assets/images/logo.png";
import ProductImg from "../../assets/images/products.png";
import ProfileImg from "../../assets/images/profile.png";
import CalendarImg from "../../assets/images/calendar.png";
import FilterImg from "../../assets/images/filter.png";
import CustomersImg from "../../assets/images/customers.png";
import AnalyticsImg from "../../assets/images/analytics.png";
import OrdersImg from "../../assets/images/orders.png";
import DashboardImg from "../../assets/images/dashboard.png";
import AvatarImg from "../../assets/images/avatar.png";

const SideMenu = () => {
  return (
    <div id="deliverySidebar" tabIndex="-1" className={`sidebar d-flex flex-column px-3`}>
        <div className="sidebar-logo d-flex justify-content-center">
            <img src={LogoImg} alt="" />
        </div>
        <div className="sidebar-menu d-flex flex-column mt-5">
            <div className="item d-flex justify-content-center">
                <NavLink>
                    <img src={DashboardImg} alt="" />
                </NavLink>
            </div>
            <div className="item d-flex justify-content-center orders">
                <NavLink>
                    <img src={OrdersImg} alt="" />
                </NavLink>
            </div>
            <div className="item d-flex justify-content-center">
                <NavLink>
                    <img src={ProductImg} alt="" />
                </NavLink>
            </div>
            <div className="item d-flex justify-content-center">
                <NavLink>
                    <img src={AnalyticsImg} alt="" />
                </NavLink>
            </div>
            <div className="item d-flex justify-content-center">
                <NavLink>
                    <img src={CustomersImg} alt="" />
                </NavLink>
            </div>
            <div className="item d-flex justify-content-center">
                <NavLink>
                    <img src={CalendarImg} alt="" />
                </NavLink>
            </div>
            <div className="item d-flex justify-content-center">
                <NavLink>
                    <img src={ProfileImg} alt="" />
                </NavLink>
            </div>
            <div className="item d-flex justify-content-center">
                <NavLink>
                    <img src={FilterImg} alt="" />
                </NavLink>
            </div>
            <div className="item d-flex justify-content-center">
                <NavLink>
                    <img src={AvatarImg} alt="" />
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default SideMenu