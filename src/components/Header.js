import logo from "../assets/images/logo.svg";
const Header = ({ title, description, image }) => {
    return (
        <div className="header">
            <div className="topbar">
                <div>
                    <img className="logo" src={logo} alt="logo deliveroo" />
                </div>
            </div>

            <div className="header-title">
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <img src={image} alt={image.split("/").pop()} />
            </div>
        </div>
    );
};

export default Header;
