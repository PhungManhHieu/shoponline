import { memo } from "react";
import "./style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header_top_left">
            <ul>
              <li>
                <AiTwotoneMail />
                manhhieuphung@gmail.com
              </li>
              <li>Miễn phí ship đơn từ 20$</li>
            </ul>
          </div>
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  {" "}
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  {" "}
                  <AiFillGithub />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineUser />
                </Link>
                <span>Đăng nhập</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
