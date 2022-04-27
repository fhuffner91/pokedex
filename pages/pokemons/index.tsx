import { NextPage } from "next"
import Sidebar from "../../src/components/Sidebar";
import React from "react";
import MainPage from "../../src/components/MainPage";


const Pokemons: NextPage = () => {
    return(
        <>
        <Sidebar />
        <MainPage />
        </>
    )
}

export default Pokemons;