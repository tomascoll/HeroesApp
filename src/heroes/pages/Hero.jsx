import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const Hero = () => {
  const { id } = useParams();
  const hero = useMemo(()=> getHeroeById(id), [id]);
  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const onNavigateBar = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        ></img>
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li>
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li>
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li>
            <b>First appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBar}>
          Regresar
        </button>
      </div>
    </div>
  );
};
