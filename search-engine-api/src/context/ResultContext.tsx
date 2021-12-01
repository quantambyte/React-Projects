import React , { createContext , useContext , useState } from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

type Children = {
    children: any;
}

export const ResultContextProvider: React.FC<Children> = ({ children }) => {

    // state
    const [results, setResults] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [searchTerm , setSearchTerm] = useState('')

    // get results
    const getResults = async (type: string) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '12371298b3msh7dcb338ea3e2443p1f111fjsn3d0433b2423b'
            }  
        })

        const data = await response.json()

        setResults(data)
        setIsLoading(false)
    } 

    return (
        <ResultContext.Provider value={{ getResults, results , searchTerm, setSearchTerm , isLoading }}>
             { children }
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)