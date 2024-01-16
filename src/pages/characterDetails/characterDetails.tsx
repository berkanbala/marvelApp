import { useParams } from "react-router-dom";
import styles from "./characterDetails.module.scss";
import { Loading } from "common/components/ui/loading/loading";
import { useGetMarvelDetails } from "../../common/hooks/useGetMarvelDetails";

export const CharacterDetails = () => {
  const { id } = useParams();

  const { characterDetails, characterDetailsLoading, characterDetailsError } =
    useGetMarvelDetails(id!);

  if (characterDetailsLoading) return <Loading />;
  if (characterDetailsError)
    return <div>hata meydana geldi. tekrar deneyiniz</div>;

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
