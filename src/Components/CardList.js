import React from "react";
import Card from "./Card";
// import { robots } from "./robots";   needed if not passing filtered param

// Regular javascript way here can be implemented with react and no need to create a const variable
// const CardList = () => {
//   const cardArray = robots.map((user, i) => {
//     return (
//       <Card
//         key={i}
//         id={robots[i].id}
//         name={robots[i].name}
//         email={robots[i].email}
//       />
//     );
//   });
//   return <div>{cardArray}</div>;
// };

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
