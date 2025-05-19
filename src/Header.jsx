import './styles/Header.css';
 
 
const Header = () => {
    return (
<header className="header">
<div className="logo-sec">
<h1 className="logo">HR App</h1>
</div>
 
            <nav className="nav">
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Persons</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>
</header>
    );
};
 
export default Header;