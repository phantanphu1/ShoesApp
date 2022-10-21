import React from "react";
import "./Footer.scss";

const Footer = () => {

  return (
    <div>
      <div className="container_footer">
        <div className="footer_Top">
          <h2>SHOES<span>APP</span></h2>
          <h4> SHOP GIÀY CAO CẤP </h4>
        </div>
        <div className="footer_Main">
          <div className="footer_Main_left">
            <span>Contact</span>
            <ul>
              <li>Address : <span>137 Nguyễn Chí Thanh TP ĐN</span></li>
              <li>Email : <span>maflineclothing@gmail.com</span> </li>
              <li>Phone : <span>0386762927</span> </li>
            </ul>
          </div>
          <div className="footer_Main_container">
            <span>Useful Links</span>
            <ul>
              <li>
                <i class="fa-solid fa-reply"></i>
                <span
                >Home</span>
              </li>
              <li>
                <i class="fa-solid fa-reply"></i>
                <span
                >About</span>
              </li>
              <li>
                <i class="fa-solid fa-reply"></i>
                <span
                >Product</span>
              </li>
              <li>
                <i class="fa-solid fa-reply"></i>
                <span
                >Contact</span>
              </li>
            </ul>
          </div>
          <div className="footer_Main_right">
            <div className="icon1">
              <span>Our Social NetWorks</span>
              <ul>
                <li>
                  <p>SHOESAPP tự hào là local đầu tiên đưa sản
                    phẩm về mức giá <br /> #SALE 99k</p>
                </li>
              </ul>

            </div>
            <div className="icon">
              <span>
                <i class="bx bxl-twitter"></i>
              </span>
              <span>
                <i class="bx bxl-facebook"></i>
              </span>
              <span>
                <i class="bx bxl-instagram"></i>
              </span>
              <span>
                <i class="bx bxl-skype"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="deSign">
          <p>Copyright © 2022 SHOESAPP</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
