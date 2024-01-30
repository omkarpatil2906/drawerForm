import React from 'react'
import { cardio } from 'ldrs'

function Loader() {
    cardio.register()
    return (
        <div>
            <l-cardio
                size="50"
                stroke="4"
                speed="2"
                color="black"
            ></l-cardio>
        </div>
    )
}

export default Loader
