import {FaSearch} from 'react-icons/fa'
import { useList } from './stateProvider'


export const Search = ({onSubmit}) => {

    const { searchTerm, setSearchTerm, setWeather, setLoading } = useList()

    const onSearchchange = (e) => setSearchTerm(e.target.value)

    return <div>
        <form onSubmit={onSubmit} className="w-1/2 h-[3rem] border">
            <input type="text" value={searchTerm} onChange={onSearchchange} className="w-[90%] h-[90%] focus:outline-none bg-transparent" />

            <button type="submit" className='h-full w-[10%] text-white'>
                <FaSearch className='mx-auto' />
            </button>
        </form>
    </div>
}