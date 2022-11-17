/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardMovie, MovieSkeleton } from "../components";
import { MylistContext } from "../context";

export function Mylist() {
  const [movies, setMovies] = useState({
    loading: true,
    data: []
  });

  const { mylist } = useContext(MylistContext);

  useEffect(() => {
    const getStoredList = () => {
      setMovies({ loading: false, data: mylist });
    }

    getStoredList();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <div css={css`
        padding: 0 1em 1em;
      `}>

        <h2>My List Movie</h2>
        
        <div css={css`
          @media (min-width: 420px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 1em;
          }
        `}>
          <Movies loading={movies.loading} movies={movies.data} />
        </div>

      </div>
    </>
  );
}

function Movies({loading, movies}) {
  const navigate = useNavigate();

  const gotoDetail = (id) => {
    navigate(`/detail/${id}`);
  }
  
  if (loading) return (
    <>
      <MovieSkeleton />
      <MovieSkeleton />
    </>
  );
  
  if (movies.length > 0) {
    return (
      <>
        {
          movies.map(item => (
            <CardMovie
              key={item.imdbID}
              // poster={item.Poster}
              title={item.Title}
              year={item.Year}
              type={item.Type}
              onClick={() => { gotoDetail(item.imdbID) }}
            />
          ))
        }
      </>
    )
  }
  return (
    <div>
      Mylist is empty
    </div>
  )
}