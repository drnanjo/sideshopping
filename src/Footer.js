import React from "react";


const Practice5 = () => {
  const user = {
    id: 1,
    username: "drnanjo",
    firstName: "Nancy",
    lastName: "Melucci",
    preferredName: "Nancy",
    url: "https://www.linkedin.com/in/nancy-melucci-8733066/",
    twitter: "drnanjo"
  };
  return (
    <div className="practice">
      {}
      <User {...user} />
    </div>
  );
};


const User = ({ firstName, lastName, username, url, twitter, react }) => {
  return (
    <div className="user">
      <FullName firstName={firstName} lastName={lastName} />
	  <h2>&copy; 2021 WEBD171 SDCCD</h2>	  
      <Username username={username} />
      <Social url={url} twitter={twitter} react={react} />
    </div>
  );
};


const FullName = ({ firstName, lastName }) => (
  <h1>
    {firstName} {lastName}
  </h1>
);


const Username = ({ username }) => <p>Handle: {username}</p>;


const Social = ({ url, twitter }) => {
  return (
    <ul className="social">
      <li>
        <a href={url}>Website</a>
      </li>
      <li>
        <a href={`https://twitter.com/${twitter}`}>Twitter</a>
      </li>
	   <li>
        <a href={`https://www.w3schools.com/react/default.asp`}>Learn React</a>
      </li>
    </ul>
  );
};

export default Practice5;
