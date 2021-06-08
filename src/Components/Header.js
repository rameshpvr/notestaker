const Header = ({handleDarkMode}) => {
    return(
        <div className='header'>
            <h1>Notes</h1>
            <button className='save' onClick={() => handleDarkMode((prevMode) => !prevMode)}>Toggle Mode</button>
        </div>
    )
}

export default Header;