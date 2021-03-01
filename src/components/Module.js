import React, { useState } from 'react'
import Unit from './Unit'

const Module = (props) => {
    const { moduleInfo } = props;
    return (
        <div class="flex flex-column ma1 pa1">
            <span class="f4 lh-copy">{moduleInfo.name}</span>
            <div class="flex flex-wrap">
                {moduleInfo.units.map((unit) => (
                    <Unit unitInfo={unit} />
                ))}
            </div>
        </div>
    )
}

export default Module;