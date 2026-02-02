import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <p>This is out Home page</p>
      <Link to="/about">About the creator</Link>
    </div>
  );
}

export default HomePage;
