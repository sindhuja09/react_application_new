import React from 'react';
import { USER, COMMENT } from './const';

function formatName(user) {
  console.log(COMMENT);
  return `${user.firstName} ${user.lastName}`;
}

const imgurl = 'https://picsum.photos/200/300/?random';
const name = '&';

const Element = () => (
  <div>
  <h1>
    Hello, {formatName(USER)}!
  </h1>
    <div className="heello" tabIndex="0">hello</div>
    <img src={imgurl} />
    <p>{name}</p>
    time now :: {new Date().toLocaleTimeString()}
  </div>
);

//const Element = ()=> <h1>Hello, world</h1>;


export default Element;
