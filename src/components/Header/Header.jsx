// import a css file containig header styles
import './Header.css'
// Create a Header function returning the HTML of header block
const Header = () =>{
    return(
        <div className='header'>
            <h1 className='header__title'>Site Name</h1>
            <a className='navigation__link' href='#about'>About</a>
            <a className='navigation__link' href='#services'>Services</a>
            <a className='navigation__link' href='#contact'>Contact</a>
        </div>
    );
}

// Add a default export statement for Header component to use it in the other files
export default Header;