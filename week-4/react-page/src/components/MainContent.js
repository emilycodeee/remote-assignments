import temple from "../images/temple.jpg";
import food from "../images/food.jpg";
import nature from "../images/nature.jpg";
import travel from "../images/travel.jpg";

const MainContent = (props) => {
  return (
    <div className="main-content-root">
      <section className="main-content">
        <h2 className="main-title">雄賀ㄟ代誌</h2>
        <div className="boxes-items">
          <div className="topic">
            <a href="#">
              <img src={temple} alt="kaohsiung-temple" />
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
              <img src={food} alt="kaohsiung-food" />
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
              <img src={nature} alt="kaohsiung-nature" />
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
              <img src={travel} alt="kaohsiung-travel" />
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
              <img src={temple} alt="kaohsiung-temple" />
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
              <img src={food} alt="kaohsiung-food" />
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
              <img src={nature} alt="kaohsiung-nature" />
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
              <img src={travel} alt="kaohsiung-travel" />
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

export default MainContent;
