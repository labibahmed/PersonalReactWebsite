import React from 'react';

const ThemeContext = React.createContext({
    theme: 'Dark',
    setTheme: () => { }
});

export default ThemeContext;