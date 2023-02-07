import React from "react";

const Card = ({ name, email, id }) => {
  //destructuring the props inside bracket {} so no need to pass props or
  // define variables in code as prop.name etc.
  return (
    <div className="tc bg-light-green br3 pa3 ma2 dib grow bw2 shadow-5">
      <h1>RoboFriends</h1>
      <img src={`https://robohash.org/${id}?200x200`} alt="robot profile" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
