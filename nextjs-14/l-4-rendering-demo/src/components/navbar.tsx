import { useState } from "react"
import { NavLinks } from "./nav-links"
import { NavSearch } from "./nav-search"

export const Navbar = () => {

    console.log(`Navbar renderer`)

    return(
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    )
}