import instagramLogo from "../assets/instagram.png";
import houseIcon from "../assets/house-chimney.svg";
import compassIcon from "../assets/compass.svg";
import heartIcon from "../assets/heart.svg";
import messageIcon from "../assets/message.svg";

const Nav = () => {
  return (
    <nav>
      <div className="container nav">
        <div className="logo">
          <img src={instagramLogo} alt="Instagram Logo" />
        </div>
        <input type="text" className="search" placeholder="search" />
        <span className="nav-links">
          <button>
            {/* <i className="fas fa-home"></i> */}
            <img src={houseIcon} alt="house icon" />
          </button>
          <button>
            {/* <i className="fas fa-comment-alt"></i> */}
            <img src={messageIcon} alt="Message icon" />
          </button>
          <button>
            {/* <i className="fas fa-compass"></i> */}
            <img src={compassIcon} alt="Compass icon" />
          </button>
          <button>
            {/* <i className="fas fa-heart"></i> */}
            <img src={heartIcon} alt="Heart icon" />
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
