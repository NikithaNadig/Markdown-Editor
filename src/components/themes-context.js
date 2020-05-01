// import { white, black } from "color-name";
import React from 'react';

export const themes = {
    white: {
        color: 'black',
        background: 'white',
    },
    red: {
        color: 'black',
        background: 'red',
    },
    orange: {
        color: 'black',
        background: 'orange',
    },
    green: {
        color: 'black',
        background: 'green',
    }
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;

