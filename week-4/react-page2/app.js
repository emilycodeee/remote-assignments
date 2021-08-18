const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy;高雄人</p>
      <p className="photo-credit">
        Special thanks to Pixabay -<a href="#">aska-c</a>
        <a href="#">aiworldexplore</a>
        <a href="#">gilcricri</a>
      </p>
    </footer>
  );
};

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

const MainContent = (props) => {
  return (
    <div className="main-content-root">
      <section className="main-content">
        <h2 className="main-title">雄賀ㄟ代誌</h2>
        <div className="boxes-items">
          <div className="topic">
            <a href="#">
              <img src="./images/temple.jpg" alt="kaohsiung-temple" />
            </a>
            <a href="#">
              <h3>雄保庇</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro expedita recusandae quidem provident quod laborum voluptas
                sapiente obcaecati ipsa aliquam veritatis, non optio deleniti
                distinctio quaerat. Necessitatibus, nam optio?
              </p>
            </a>
          </div>
          <div className="topic">
            <a href="#">
              <img src="./images/temple.jpg" alt="kaohsiung-food" />
            </a>
            <a href="#">
              <h3>雄賀呷</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro expedita recusandae quidem provident quod laborum voluptas
                sapiente obcaecati ipsa aliquam veritatis, non optio deleniti
                distinctio quaerat. Necessitatibus, nam optio?
              </p>
            </a>
          </div>
          <div className="topic">
            <a href="#">
              <img src="./images/temple.jpg" alt="kaohsiung-nature" />
            </a>
            <a href="#">
              <h3>雄自然</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro expedita recusandae quidem provident quod laborum voluptas
                sapiente obcaecati ipsa aliquam veritatis, non optio deleniti
                distinctio quaerat. Necessitatibus, nam optio?
              </p>
            </a>
          </div>
          <div className="topic">
            <a href="#">
              <img src="./images/temple.jpg" alt="kaohsiung-travel" />
            </a>
            <a href="#">
              <h3>雄好玩</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro expedita recusandae quidem provident quod laborum voluptas
                sapiente obcaecati ipsa aliquam veritatis, non optio deleniti
                distinctio quaerat. Necessitatibus, nam optio?
              </p>
            </a>
          </div>
        </div>
      </section>
      {/* second page */}
      <section
        className="second-content"
        style={props.isReadMore ? { display: "block" } : { display: "none" }}
      >
        <div className="boxes-items">
          <div className="topic">
            <a href="#">
              <img src="./images/temple.jpg" alt="kaohsiung-temple" />
            </a>
            <a href="#">
              <h3>雄保庇2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro expedita recusandae quidem provident quod laborum voluptas
                sapiente obcaecati ipsa aliquam veritatis, non optio deleniti
                distinctio quaerat. Necessitatibus, nam optio?
              </p>
            </a>
          </div>
          <div className="topic">
            <a href="#">
              <img src="./images/temple.jpg" alt="kaohsiung-food" />
            </a>
            <a href="#">
              <h3>雄賀呷2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro expedita recusandae quidem provident quod laborum voluptas
                sapiente obcaecati ipsa aliquam veritatis, non optio deleniti
                distinctio quaerat. Necessitatibus, nam optio?
              </p>
            </a>
          </div>
          <div className="topic">
            <a href="#">
              <img src="./images/temple.jpg" alt="kaohsiung-nature" />
            </a>
            <a href="#">
              <h3>雄自然2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro expedita recusandae quidem provident quod laborum voluptas
                sapiente obcaecati ipsa aliquam veritatis, non optio deleniti
                distinctio quaerat. Necessitatibus, nam optio?
              </p>
            </a>
          </div>
          <div className="topic">
            <a href="#">
              <img src="./images/temple.jpg" alt="kaohsiung-travel" />
            </a>
            <a href="#">
              <h3>雄好玩2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                porro expedita recusandae quidem provident quod laborum voluptas
                sapiente obcaecati ipsa aliquam veritatis, non optio deleniti
                distinctio quaerat. Necessitatibus, nam optio?
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

//app
class App extends React.Component {
  state = {
    isWelcomeTitle: true,
    isReadMore: false,
    isBurgerOpen: false,
  };

  changeTitle = () => {
    this.setState({
      isWelcomeTitle: !this.state.isWelcomeTitle,
    });
  };

  isReadMoreHandle = () => {
    this.setState({
      isReadMore: !this.state.isReadMore,
    });
  };

  trigerBurger = () => {
    this.setState({
      isBurgerOpen: !this.state.isBurgerOpen,
    });
    document.querySelectorAll("li").forEach((item, i) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `menuLinkFade 0.5s ease forwards ${i / 7}s`;
      }
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header
          trigerBurger={this.trigerBurger}
          isBurgerOpen={this.state.isBurgerOpen}
        />
        <div className="main-slide">
          <h1 className="welcome-title" onClick={this.changeTitle}>
            {this.state.isWelcomeTitle
              ? "Takao：Kaohsiung"
              : "Have a Good Time!"}
          </h1>
        </div>
        <MainContent isReadMore={this.state.isReadMore} />
        <button className="action-btn" onClick={this.isReadMoreHandle}>
          {this.state.isReadMore ? "Close" : "Read more"}
        </button>
        <Footer />
      </div>
    );
  }
}
//
ReactDOM.render(<App />, document.querySelector("#root"));
