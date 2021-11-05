import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Content } from "./SearchBar.styles";
import iconSearch from "../../images/search-icon.svg";

function SearchBar({ setSearch }) {
    const [searchValue, setSearchValue] = useState("")
    const initial = useRef(true)
    useEffect(() => {
        if (initial.current) {
            initial.current = false
            return
        }
        const timeer = setTimeout(() => {
            setSearch(searchValue.trim())
        }, 500)
        return () => clearTimeout(timeer)
    }, [setSearch, searchValue])
    return (
        <Wrapper>
            <Content>
                <img src={iconSearch} alt="Search" />
                <input type="text" placeholder="Tìm kiếm phim" onChange={e => setSearchValue(e.currentTarget.value)} value={searchValue} />
            </Content>
        </Wrapper>
    );
}

export default SearchBar;