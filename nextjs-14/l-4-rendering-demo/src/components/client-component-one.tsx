"use client"

import { ReactNode, useState } from "react"
import { ClientComponetTwo } from "./client-component-two"
import { ServerComponentOne } from "./server-component-one"

export const ClientComponetOne = ({ children }:{ children: ReactNode }) => {

    const [ name, setName ] = useState("Batman")

    return <>
        <h1>Client Component One</h1>
        {/* <ClientComponetTwo /> */}
        {/* <ServerComponentOne />  //children */}
        { children }
    </>
}