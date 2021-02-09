import logo from "../assets/images/logo.svg";
const Header = ({ data }) => {
    return (
        <div className="header">
            <div className="topbar">
                <div>
                    <img className="logo" src={logo} alt="logo deliveroo" />
                </div>
            </div>

            <div className="header-title">
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                </div>
                <img src={data.picture} alt={data.picture.split("/").pop()} />
            </div>
        </div>
    );
};

export default Header;
