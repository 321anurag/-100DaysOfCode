import React from 'react';

const Search = ({ searchType }) => {
    const placeholder = "Search " + searchType + "...";
    return (
        <>
            <div className="search-title">
                <span>{searchType}</span>
            </div>
            <div className="search-input">
                <input type="text" placeholder={placeholder}></input>
                {/* <div className="suggestions">
                    <div>USA</div>
                    <div>India</div>
                    <div>Nepal</div>
                </div> */}
            </div>
            <div className="search-default">
                <span>Select a {searchType.toLowerCase()}</span>
            </div>
        </>
    )
}

export default Search
