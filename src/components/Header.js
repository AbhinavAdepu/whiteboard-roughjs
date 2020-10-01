/**
 * @description Header
 * @function Header
 * @param {object} props - Takes Props and render header section based on theme
 * @returns {object} Header
 * @author Abhinav Adepu
 */
import React from "react";
import "../App.scss";
import logo from "../svg/head-bg.png";

const Header = props => {
  React.useEffect(() => {
    document.querySelectorAll(".js-trigger").forEach(function(e) {
      e.addEventListener("click", function() {
        this.classList.toggle("menu__trigger--active");
        //ion-navicon-round
        let checkClass = document
          .querySelector(".js-trigger")
          .classList.contains("menu__trigger--active");
        if (checkClass) {
          document.querySelector(".js-menu").style.display = "block";
          document
            .getElementById("icon_menu")
            .setAttribute("class", "ion-close-round");
        } else {
          document
            .getElementById("icon_menu")
            .setAttribute("class", "ion-navicon-round");

          document.querySelector(".js-menu").style.display = "none";
        }
      });
    });
  });
  return (
    <>
      <div class="menu cf">
        <a href="#" class="menu__trigger js-trigger">
          <i id="icon_menu" class="ion-navicon-round"></i>
        </a>

        <div class="logoblock">
          <a class="logoblock__centerlogo" href="/" tabindex="-1">
            <img src={logo} alt="ABCD" />
          </a>
        </div>
        <div class="logoblock-right"></div>
      </div>
      <div class="menu__dropdown cf js-menu">
        <div class="menu__col">
          <ul class="menu__row">
            <li class="menu__list">
              <a href="#" class="menu__link">
                Menu 1
              </a>
            </li>

            <li class="menu__list">
              <a href="#" class="menu__link">
                Menu 2
              </a>
            </li>

            <li class="menu__list">
              <a href="#" class="menu__link">
                Menu 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default React.memo(Header);
