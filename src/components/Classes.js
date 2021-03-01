import React from 'react';
import Class from './Class';
import { useQuery, gql } from '@apollo/client';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Classes = (props) => {
    const classList = [
        {
            id: 1,
            name: "EECS 126"
        },
        {
            id: 2,
            name: "EECS 127"
        },
        {
            id: 3,
            name: "Stat 134"
        },
        {
            id: 4,
            name: "CS 70"
        }
    ]
    
    return (
        <ul class="list pl0 mt0 measure center">
            {classList.map((classInfo) => (
                <li
                    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                    <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-yavor.jpg" />
                    <div class="pl3 flex-auto">
                        <span class="f6 db black-70">{classInfo.name}</span>
                        <div>
                            <Link to={`/class/${classInfo.name}/${classInfo.id}`} 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                title="View Class"> View Class </Link>
                        </div>
                    </div>
                    <div>
                        <a href="tel:" class="f6 link blue hover-dark-gray">{classInfo.id}</a>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Classes;