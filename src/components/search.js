import {FaSearch} from 'react-icons/fa'
import { useList } from './stateProvider'


export const Search = ({onSubmit}) => {

    const { searchTerm, setSearchTerm } = useList()

    const onSearchchange = (e) => setSearchTerm(e.target.value)

    return <div>
        <form onSubmit={onSubmit} className="w-1/2 h-[3rem] border pl-3">
            <input type="text" value={searchTerm} placeholder='search for a city' onChange={onSearchchange} className="w-[90%] h-[90%] focus:outline-none bg-transparent" />

            <button type="submit" className='h-full w-[10%] text-white'>
                <FaSearch className='mx-auto' />
            </button>
        </form>
    </div>
}