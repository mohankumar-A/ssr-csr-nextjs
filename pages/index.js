import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

import { useState } from "react";


const Home = ({robots}) => {
  const [robot, setRobot] = useState([]);
  const searchFields = "";
  const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFields.toLowerCase())
  });

  return (!robots.length)
      ?
      (<h1>Loading...</h1>)
      :
      (
          <div className="tc">
              <h1 className="f1">Robot Friends</h1>
              <SearchBox searchChange={null}/>
              <CardList robots={filterRobots} />
          </div>
      )
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const robots = await res.json();
  // setRobots({robots: data});

  // setRobots({robots});

  return {
    props: { robots }
  }
}

export default Home;
