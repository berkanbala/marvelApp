import { useParams } from "react-router-dom";
import styles from "./characterDetails.module.scss";
import { useGetMarvelDetails } from "common/hooks/useGetMarvelDetails";

export const CharacterDetails = () => {
  const { id } = useParams();

  const { characterDetails, characterDetailsLoading, characterDetailsError } =
    useGetMarvelDetails(id ?? "");

  if (characterDetailsLoading) return <div>failed to load</div>;
  if (characterDetailsError) return <div>loading...</div>;

  console.log(characterDetails);
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img
          src={`${characterDetails?.thumbnail?.path}.${characterDetails?.thumbnail?.extension}`}
          alt="Character Details"
        />
      </div>
      <div className={styles.details}>
        <h2>{characterDetails?.name}</h2>
        <div className={styles.title}>
          <h2>Comics-{characterDetails?.comics?.available}</h2>
          <h2>Series-{characterDetails?.series?.available}</h2>
          <h2>Stories-{characterDetails?.stories?.available}</h2>
          <h2>Events-{characterDetails?.events?.available}</h2>
        </div>
        <p>{characterDetails?.description}</p>
      </div>
    </div>
  );
};
