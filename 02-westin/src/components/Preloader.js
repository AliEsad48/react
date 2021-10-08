import React from 'react'

const Preloader = () => {
    return (

        <div id="angela-preloader">
            <div clasName="preloader">
                <div clasName="spinner"></div>
                <div clasName="loader">
                    <span data-text="W" clasName="letter-animation">W</span>
                    <span data-text="E" clasName="letter-animation">E</span>
                    <span data-text="S" clasName="letter-animation">S</span>
                    <span data-text="T" clasName="letter-animation">T</span>
                    <span data-text="I" clasName="letter-animation">I</span>
                    <span data-text="N" clasName="letter-animation">N</span>
                </div>
            </div>
        </div>

    )
}

export default Preloader;
