import { useParams } from "react-router-dom";
import styles from "./characterDetails.module.scss";
import { useEffect, useState } from "react";
import { ICharacterDetails } from "common/models/characterDetails";
import { Loading } from "../../common/components/ui/loading/loading";

export const CharacterDetails = () => {
  const [characterDetails, setCharacterDetails] = useState<ICharacterDetails>(
    {} as ICharacterDetails
  );
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const hash = "034b160f276248069a7aa9db1c8cd9b9";
  const apiKey = "ff6bacea50c9a3736ffaa07a4d45e4d2";
  const query = `${process.env.REACT_APP_API_URL}/characters/${id}?ts=1&apikey=${apiKey}&hash=${hash}`;

  useEffect(() => {
    fetch(`${query}`)
      .then((response) => response.json())
      .then((data) => setCharacterDetails(data?.data?.results[0]))
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false));
  }, [id, query]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{characterDetails?.name}</h1>
      </div>
      <div className={styles.images}>
        <img
          src={`${characterDetails?.thumbnail?.path}.${characterDetails?.thumbnail?.extension}`}
          alt="Character Details"
        />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>
          <h2>Comics</h2>
          <p>{characterDetails?.comics?.available}</p>
          <h2>Series</h2>
          <p>{characterDetails?.series?.available}</p>
          <h2>Stories</h2>
          <p>{characterDetails?.stories?.available}</p>
          <h2>Events</h2>
          <p>{characterDetails?.events?.available}</p>
        </div>
        <div className={styles.description}>
          {characterDetails?.description !== ""
            ? characterDetails?.description
            : "No brief description available for this character. "}
        </div>
      </div>
    </div>
  );
};
