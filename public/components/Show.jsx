import React from 'react'

function Show(props) {
    return(
        <div className="show--card--container">
            <img className = "show--card--picture" src = {`../pictures/${props.show.coverImg}`}/>

            <div className="show--card--info--container">
                <h1 className = "show--card--title">{props.show.title}</h1>

                <p className = "show--card--seasons">{props.show.seasons} SEASON 
                <span className = "show--card--episodes"> {props.show.episodes} EPISODES</span></p>

                <div className = "rating--container">
                    <img className = "show--card--netflix" src = '../pictures/netflixLogo.png'/>
                    <p className = "show--card--rating">Rating:
                    <span className = "rating--span"> {props.show.rating}/10</span></p>
                </div>

                <p className = "show--card--description">
                    {props.show.description}
                </p>

                <a className = "anchor--link" href={`${props.show.link}`} target = "_blank">
                    <div className = "show--card--button">WATCH ON NETFLIX</div>
                </a> 

            </div>

        </div>

    )
}

export default Show