import React from 'react'

const profile = ( props ) => {
    return (
        <div className="person-card">
            <div className="person-bg">
                <div className="person-content"></div>
                <div className="person-avatar">
                    <img>{props.avatar}</img>
                </div>
                <h3>{props.name}</h3>
                <h6>{props.location}</h6>

                <div className="person-stat">
                    <div>
                        {props.shot}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default profile
