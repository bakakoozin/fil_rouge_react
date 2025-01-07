import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  console.log("ID récupéré :", id);
  const [data, setDatas] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        const data = await response.json();
        setDatas(data);
      } catch (err) {
        console.error(err);
        setError("Fetch failed. Try again.");
      }
    };

    fetchData();
  }, [id]);

  return (
    <main id="details">
      <section>
        <h1>Les données récupérées de jsonplaceholder :</h1>

        {error && <p>{error}</p>}
        {!data && !error ? (
          <p>Loading ...</p>
        ) : (
            <article>
              <h2>{data.title}</h2>
              <img src={data.url} alt={data.title} />
            </article>
        )}
      </section>
    </main>
  );
}

export default Details;
