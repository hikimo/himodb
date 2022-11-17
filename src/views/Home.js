/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Banner, CardMovie, MovieSkeleton } from "../components";
import { HomeService } from "../services";

export function Home() {
  const [topBanner, setTopBanner] = useState({
    loading: true,
    data: {}
  });
  const [movies, setMovies] = useState({
    loading: true,
    data: []
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  window.onscroll = async () => {
    const st = parseInt(window.innerHeight + document.documentElement.scrollTop);
    const offet = parseInt(document.documentElement.offsetHeight - 126);

    if (st >= offet && !movies.loading && !loading) {
      setLoading(true);
      await getNewMovies();
    }
  };
  
  useEffect(() => {
    const getAll = async () => {
      const topData = await HomeService.getTopOne();
      setTopBanner({ loading: false, data: topData });
      
      const moviesData = await HomeService.getAll("star", page);
      setPage(i => i + 1);
      setMovies({ loading: false, data: moviesData.Search });
    };

    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNewMovies = async () => {
    const moviesData = await HomeService.getAll("star", page);
    const data = [...movies.data, ...moviesData.Search];

    setPage(page + 1);
    setMovies({ loading: false, data });
    setLoading(false);
  }
  
  return (
    <>
      <Banner
        loading={topBanner.data.loading}
        poster={topBanner.data.Poster}
        title={topBanner.data.Title}
        plot={topBanner.data.Plot}
      />
    
      <div css={css`
        padding: 0 1em 1em;
      `}>

        <h2>Popular Movies</h2>
        
        <div css={css`
          @media (min-width: 420px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 1em;
          }
        `}>
          <Movies loading={movies.loading} movies={movies.data} />

          {
            loading
            ? <>
                <MovieSkeleton />
                <MovieSkeleton />
              </>
            : <></> }
        </div>

      </div>
    </>
  );
}

function Movies({loading, movies, onClick}) {
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
  
  return (
    <>
      {
        movies.length && movies.map(item => (
          <CardMovie
            key={item.imdbID}
            poster={item.Poster}
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
