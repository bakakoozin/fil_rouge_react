import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "./Components/Card";


function Home() {
  const [datas, setDatas] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20"
        );
        const data = await response.json();
        setDatas(data);
      } catch (err) {
        console.error(err);
        setError("Fetch failed. Try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <main id="home">
      <section>
        <h1>Les données récupérées de jsonplaceholder :</h1>

        {error && <p>{error}</p>}
        {!datas && !error ? (
          <p>Loading ...</p>
        ) : (
          datas.map((data) => (
            <div key={data.id} className="card">
              <Card data={data} />
              <Link to={"details/"+ data.id} className="buttonMore">Plus de détails</Link>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default Home;
