import React, { useState, useEffect } from 'react'
import LeagueOfLegends from '../../services/LeagueOfLegends'

import './ChampionDetailsPage'

import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'

const ChampionDetailsPage = ({ match }) => {

    const id = match.params.id;
    const [championDetails, setChampionDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const loadChampion = async (id) => {
        const details = await LeagueOfLegends.getChampionDetails(id)
        setChampionDetails(details)
        setTimeout(() => { setIsLoading(false) }, 1000);
    }

    useEffect(() => {
        loadChampion(id)
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <p>{championDetails[0].id}</p>
                </>
            )}
        </>
    )
}

export default ChampionDetailsPage