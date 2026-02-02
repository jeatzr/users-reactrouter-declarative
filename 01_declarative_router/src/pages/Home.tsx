import { Link } from "react-router";

function Home() {
  return (
    <div>
      <p>This is out Home page</p>
      <Link to="/about">About the creator</Link>
    </div>
  );
}

export default Home;
