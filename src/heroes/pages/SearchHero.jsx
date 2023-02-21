import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchHero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>SearchHero</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              value={searchText}
              onChange={onInputChange}
              name="searchText"
              autoComplete="off"
              className="form-control"
              type="text"
              placeholder="Search a heroe"
            />
            <button className="btn btn-primary mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-warning">
                The {`"${q}"`} is not finded
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              {...hero}
              className="animate__animated animate__fadeInUp"
            />
          ))}
        </div>
      </div>
    </>
  );
};
