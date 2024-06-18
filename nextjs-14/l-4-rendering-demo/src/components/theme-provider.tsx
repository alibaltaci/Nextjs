"use client"

import { ReactNode, createContext, useContext } from "react";

type Theme = {
    colors:{
        primary: string
        secondary: string
    }
}

const defaultTheme: Theme = {
    colors:{
        primary: "#007bff",
        secondary: "#6c757d"
    }
}

const ThemeContext = createContext<Theme>( defaultTheme )

export const ThemeProvider = ({children}:{children:ReactNode}) => {

    return(
        <ThemeContext.Provider value={ defaultTheme } >
            {children}
        </ThemeContext.Provider>
    )
}

// hook
export const useTheme = () => useContext( ThemeContext )