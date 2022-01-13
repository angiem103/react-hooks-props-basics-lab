import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.username} is a Web Developer from {props.city}
      </h1>
      <p>{props.bio}</p>
    </div>
  );
}

export default Home;
