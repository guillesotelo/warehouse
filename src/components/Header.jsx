import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
 
export default function Header() {

    const history = useHistory()
    // const dispatch = useDispatch()
    const psrch = history.location.pathname === '/' ? true : false
    const [name, setName] = useState()

    const handleKey = (e) => {
        if(e.keyCode !== 13) return
        history.push(`/pokemon/${name.target.value.toLowerCase()}`)
        console.log(name)
    }

    const handleSearch = () => {
        history.push(`/pokemon/${name.target.value.toLowerCase()}`)
        console.log(name)
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='logo-header' src='https://i.postimg.cc/Ss6Gjhp8/f70f1547173320dce7d9fe0c6b30efc69d46eaa0da39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png'/>
            </Link>
                { psrch && 
                    <div className='search-div'>
                            <input
                            type="text"
                            id="search"
                            className="search"
                            placeholder="Search for a pokemon..."
                            onKeyUp={handleKey}
                            onChange={pk => setName(pk)}
                        />
                        <button className='search-btn' onClick={handleSearch}>Search</button>
                    </div>
                }
            <div>
                &nbsp;
            </div>
        </div>
    )
}
