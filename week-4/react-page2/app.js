const data = [
  {
    id: "001",
    link: "#",
    title: "雄保庇",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure orro expedita recusandae quidem provident quod laborum voluptas sapiente obcaecati ipsa aliquam veritatis, non optio deleniti distinctio quaerat. Necessitatibus, nam optio?",
    imgSrc: "./images/temple.jpg",
    imgAlt: "kaohsiung-temple",
  },
  {
    id: "002",
    link: "#",
    title: "雄賀呷",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure orro expedita recusandae quidem provident quod laborum voluptas sapiente obcaecati ipsa aliquam veritatis, non optio deleniti distinctio quaerat. Necessitatibus, nam optio?",
    imgSrc: "./images/food.jpg",
    imgAlt: "kaohsiung-food",
  },
  {
    id: "003",
    link: "#",
    title: "雄自然",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure orro expedita recusandae quidem provident quod laborum voluptas sapiente obcaecati ipsa aliquam veritatis, non optio deleniti distinctio quaerat. Necessitatibus, nam optio?",
    imgSrc: "./images/nature.jpg",
    imgAlt: "kaohsiung-nature",
  },
  {
    id: "004",
    link: "#",
    title: "雄好玩",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure orro expedita recusandae quidem provident quod laborum voluptas sapiente obcaecati ipsa aliquam veritatis, non optio deleniti distinctio quaerat. Necessitatibus, nam optio?",
    imgSrc: "./images/travel.jpg",
    imgAlt: "kaohsiung-travel",
  },
  {
    id: "005",
    link: "#",
    title: "2雄保庇2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure orro expedita recusandae quidem provident quod laborum voluptas sapiente obcaecati ipsa aliquam veritatis, non optio deleniti distinctio quaerat. Necessitatibus, nam optio?",
    imgSrc: "./images/temple.jpg",
    imgAlt: "kaohsiung-temple",
  },
  {
    id: "006",
    link: "#",
    title: "2雄賀呷2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure orro expedita recusandae quidem provident quod laborum voluptas sapiente obcaecati ipsa aliquam veritatis, non optio deleniti distinctio quaerat. Necessitatibus, nam optio?",
    imgSrc: "./images/food.jpg",
    imgAlt: "kaohsiung-food",
  },
  {
    id: "007",
    link: "#",
    title: "2雄自然2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure orro expedita recusandae quidem provident quod laborum voluptas sapiente obcaecati ipsa aliquam veritatis, non optio deleniti distinctio quaerat. Necessitatibus, nam optio?",
    imgSrc: "./images/nature.jpg",
    imgAlt: "kaohsiung-nature",
  },
  {
    id: "008",
    link: "#",
    title: "2雄好玩2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure orro expedita recusandae quidem provident quod laborum voluptas sapiente obcaecati ipsa aliquam veritatis, non optio deleniti distinctio quaerat. Necessitatibus, nam optio?",
    imgSrc: "./images/travel.jpg",
    imgAlt: "kaohsiung-travel",
  },
];

const listItem = [
  { listName: "雄保庇", listLink: "#", id: "ls001" },
  { listName: "雄賀呷", listLink: "#", id: "ls002" },
  { listName: "雄自然", listLink: "#", id: "ls003" },
  { listName: "雄好玩", listLink: "#", id: "ls004" },
];

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

const MenuList = ({ listData }) => {
  return (
    <li className="item">
      <a href={listData.listLink}>{listData.listName}</a>
    </li>
  );
};

const Header = ({ isBurgerOpen, listItem, trigerBurger }) => {
  const menuClasses = isBurgerOpen ? "menu menu-active" : "menu";
  const burgClasses = isBurgerOpen ? "burger toggle" : "burger";
  return (
    <header className="header">
      <a href="#" className="logo">
        雄賀誌
      </a>
      {/* menu list */}
      <ul className={menuClasses}>
        {listItem.map((listData) => (
          <MenuList listData={listData} key={listData.id} />
        ))}
      </ul>
      <div className={burgClasses} onClick={trigerBurger}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

const Topic = ({ topicData }) => {
  return (
    <div className="topic">
      <a href={topicData.link}>
        <img src={topicData.imgSrc} alt={topicData.imgAlt} />
      </a>
      <a href={topicData.link}>
        <h3>{topicData.title}</h3>
        <p>{topicData.content}</p>
      </a>
    </div>
  );
};

const MainContent = ({ isReadMore, contents }) => {
  return (
    <div className="main-content-root">
      <h2 className="main-title">雄賀ㄟ代誌</h2>

      <section className="main-content">
        <div className="boxes-items">
          {isReadMore
            ? contents.map((topic) => (
                <Topic topicData={topic} key={topic.id} />
              ))
            : contents
                .slice(0, 4)
                .map((topic) => <Topic topicData={topic} key={topic.id} />)}
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
    contents: data,
    listItem: listItem,
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
          listItem={this.state.listItem}
        />
        <div className="main-slide">
          <h1 className="welcome-title" onClick={this.changeTitle}>
            {this.state.isWelcomeTitle
              ? "Takao：Kaohsiung"
              : "Have a Good Time!"}
          </h1>
        </div>
        <MainContent
          isReadMore={this.state.isReadMore}
          contents={this.state.contents}
        />
        <button className="action-btn" onClick={this.isReadMoreHandle}>
          {this.state.isReadMore ? "Close" : "Read more"}
        </button>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
