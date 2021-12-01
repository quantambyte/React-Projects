import React , { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

// component
import Loading from './Loading'

// context
import { useResultContext } from '../context/ResultContext'

const Results = () => {

    const { results, isLoading , getResults, searchTerm } = useResultContext()
    const location = useLocation()

    if (isLoading) return <Loading />

    switch (location.pathname) {
        case '/search':
            return 'SEARCh'
            break;
    
        default:
            return 'Error';
    }

    return (
        <div>
            <h1>Results</h1>
        </div>
    )
}

export default Results
