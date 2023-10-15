import './navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Jerryadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="icon" className="icon" />
        <img src="/app.svg" alt="icon" className="icon" />
        <img src="/expand.svg" alt="icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg " alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/profileImg.jpeg" alt="" />
        </div>
        <img src="/settings.svg" alt="icon" />
      </div>
    </div>
  );
}

export default Navbar