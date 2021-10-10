import React from 'react'

const Info = ({weather}) => {

    const { location, temp, temp_min, temp_max, description } =  weather
    

    return (
        <div id="body_container">
            <div className="curr_info">
                <h2>{location}</h2>
                <img src="" alt="" />
                <p id="curr_description">{description}</p>
                <p id="curr_temp">{temp}</p>
                <p id="curr_temp_min">{temp_min}</p>
                <p id="curr_temp_max">{temp_max}</p>
            </div>
        </div>
    )
}

export default Info
