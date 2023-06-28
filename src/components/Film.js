import React from "react";

const Film = ({title, url}) => {

    return (
        <>
        <ul>
            <li>
            <a href={url}>{title}</a>
            </li>
        </ul>
        </>
    )
  
}

export default Film;