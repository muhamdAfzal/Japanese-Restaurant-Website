import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { FidgetSpinner } from "react-loader-spinner";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://chef-recipe-hunter-server-xrtaseed-gmailcom.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .then(setLoading(false));
  }, []);

  if (loading) {
    return <FidgetSpinner></FidgetSpinner>;
  }

  return (
    <div className="mt-5 text-center">
      <h2 className="pt-5">OUR TOP CHEFS</h2>
      <Row className="mt-4">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </Row>
    </div>
  );
};

export default Chefs;
