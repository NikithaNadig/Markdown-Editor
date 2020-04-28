import React, {useContext} from 'react';
import  './header.css';
import ThemeContext from './themes-context';

const Header = () => {
    const theme= useContext(ThemeContext)
    return(
        <div style={theme}>
            <p>{JSON.stringify(theme)}</p>
        </div>
    )
}

export default Header;