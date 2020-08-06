import React from 'react';


function Team(props) {
    let shotPercentageDiv
    if (props.stats.shots) {
        const shotPercentage = Math.round((props.stats.score / props.stats.shots) * 100)
        shotPercentageDiv = (
            <div>
                <h2>Shot %: {shotPercentage}%</h2>
            </div>
        )

    }

    return (
        <div className="Team" >

            <h1>{props.name}</h1>

            <div className="symbol">
                <img width={350} src={props.logo} alt={props.name} />
            </div>

            <div>
                <h1>Shots taken by {props.name}: {props.stats.shots}</h1>

            </div>

            <div>
                <h1>Scored {props.stats.score} by {props.name}</h1>
            </div>

            {shotPercentageDiv}


            <button onClick={props.shotHandler}>Shoot</button>
        </div>
    )
}



export default Team;