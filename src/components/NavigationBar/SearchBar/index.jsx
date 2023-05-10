import React from 'react'
import { ImSearch as SearchIcon } from 'react-icons/im';
import { MdKeyboardVoice as VoiceIcon} from 'react-icons/md';
import useWindowSize from '../../../helpers/useWindowSize';

const SearchBar = () => {

  const { width } = useWindowSize();

  return (
    <div className={`SearchBar ${width <= 640 ? 'smallSearch' : ''}`}>
      {
        width > 640 ?
        (<form>
          <input type="text" name="search" placeholder='Search' />
          <button>
            <SearchIcon size={20} />
          </button>
        </form>) : 
        (
          <button className='icon-container searchIcon'
            
          >
            <SearchIcon size={20} data-tip='Search' data-for='navbar' />
          </button>
        )
      }
      <button className='icon-container voiceIcon'>
        <VoiceIcon size={25} 
          data-tip='Search with your voice'
          data-for='navbar'
        />
      </button>
    </div>
  )
}

export default SearchBar;