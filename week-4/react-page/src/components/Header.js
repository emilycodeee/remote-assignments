import React from "react";

const Header = (props) => {
  const menuClasses = props.isBurgerOpen ? "menu menu-active" : "menu";
  const burgClasses = props.isBurgerOpen ? "burger toggle" : "burger";
  return (
    <header className="header">
      <a href="#" className="logo">
        雄賀誌
      </a>

      <ul className={menuClasses}>
        <li className="item">
          <a href="#">雄保庇</a>
        </li>
        <li className="item">
          <a href="#">雄賀呷</a>
        </li>
        <li className="item">
          <a href="#">雄自然 </a>
        </li>
        <li className="item">
          <a href="#">雄好玩</a>
        </li>
      </ul>

      <div className={burgClasses} onClick={props.trigerBurger}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;
