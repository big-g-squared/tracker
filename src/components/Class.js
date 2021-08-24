import React, { useState } from 'react';
import Module from './Module'

const Class = (props) => {
    const { classInfo } = props;
    const [formState, setFormState] = useState({
        modules: [
            {
                name: "Syllabus",
                units: [
                    {
                        name: "Read syllabus",
                        type: "Passive - Reading",
                        label: "asdf32"
                    },
                    {
                        name: "Recall syllabus",
                        type: "Active - Recall",
                        label: "wiosfd"
                    }
                ]
            },
            {
                name: "Linearity of Expectation: Intro",
                units: [
                    {
                        name: "Read Ch. 5",
                        type: "Passive - Reading",
                        label: "asdf32"
                    },
                    {
                        name: "Recall Ch. 5 Theorems",
                        type: "Active - Recall",
                        label: "wiosfd"
                    }
                ]
            }
        ]
    })
    return (
        <div class="single-class">
            <div class="buttons ph3">
                <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" href="#0">Add Module</a>
            </div>
            <ul>
                {formState.modules.map((module) => (
                    <Module moduleInfo={module} />
                ))}
            </ul>
        </div>
    )
}

export default Class;