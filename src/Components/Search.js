import { MdSearch } from "react-icons/md"

const Search = ({handleSearchNote}) => {
    return(
        <div className='search'>
            <MdSearch className='search-icon' size='1.3em' />
            <input 
                type="text"
                placeholder='Search...' 
                onChange={(e) => handleSearchNote(e.target.value)}
            />
        </div>
    )
}
export default Search;