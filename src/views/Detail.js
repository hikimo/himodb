/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { colors } from "../assets";
import { SkeletonBlock } from "../components";
import { MylistContext } from "../context";
import { HomeService } from "../services";

export function Detail() {
  const { id } = useParams(); 
  const [ loading, setLoading ] = useState(true);
  const [ listed, setListed ] = useState(false);
  const [ data, setData ] = useState({});

  const { mylist, setMylist } = useContext(MylistContext);

  useEffect(() => {
    const getData = async () => {
      const movieData = await HomeService.getById(id);
      setLoading(false);
      setData(movieData);

      mylist.forEach(item => {
        if (item && item.imdbID === id) setListed(true);
      });
    };

    getData();
    // eslint-disable-next-line
  }, []);

  const toggleMylist = () => {
    if (!listed) {
      const temp = [...mylist, data];
      setListed(true);
      setMylist(temp);
    } else {
      const temp = mylist;
      for (let i = 0; i < mylist.length; i++) {
        if (mylist[i].imdbID === id) {
          temp.splice(i, 1);
          setListed(false);
          break;
        }
      }
    }
  };
  
  if (loading) return <DetailSkeleton />
  
  return (
    <>
      <div css={css`
        padding: 0 1em 1em;
      `}>

        <div css={css`
          padding: 1em;
          background-color: ${colors.white};
          border-radius: 5px;
        `}>
          <div css={css`
            display: flex;
            justify-content: center;
          `}>
            <img src={data.Poster} css={css`
              height: 100%;
              max-widht: 100%;
            `} alt={data.Title} />
          </div>

          <div>
            <h1 css={css`
              text-align: center;
              line-height: 1.1em;
            `}>{data.Title}</h1>

            <div css={css`margin-bottom: 1em`}>
              <button css={css`
                cursor: pointer;
                padding: 1em;
                background-color: ${listed ? colors.red : colors.green};
                color: ${colors.white};
                font-weight: 600;
                text-transform: uppercase;
                border: none;
                border-radius: 5px;
                box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
                transition: .25s transform ease;
                &:hover, &:active {
                  transform: scale(.95)
                }
              `} onClick={toggleMylist}>{ !listed ? 'Add to MyList' : 'Remove from MyList' }</button>
            </div>

            <table>
              <tbody>

                <tr>
                  <th css={css`
                    text-align: left;
                    vertical-align: top;
                  `}>Year</th>
                  <td css={css`vertical-align: top`}>:</td>
                  <td>{data.Year}</td>
                </tr>
                <tr>
                  <th css={css`
                    text-align: left;
                    vertical-align: top;
                  `}>Type</th>
                  <td css={css`vertical-align: top`}>:</td>
                  <td>{data.Type}</td>
                </tr>
                <tr>
                  <th css={css`
                    text-align: left;
                    vertical-align: top;
                  `}>Runtime</th>
                  <td css={css`vertical-align: top`}>:</td>
                  <td>{data.Runtime}</td>
                </tr>
                <tr>
                  <th css={css`
                    text-align: left;
                    vertical-align: top;
                  `}>Genre</th>
                  <td css={css`vertical-align: top`}>:</td>
                  <td>{data.Genre}</td>
                </tr>
                <tr>
                  <th css={css`
                    text-align: left;
                    vertical-align: top;
                  `}>Writer</th>
                  <td css={css`vertical-align: top`}>:</td>
                  <td>{data.Writer}</td>
                </tr>
                <tr>
                  <th css={css`
                    text-align: left;
                    vertical-align: top;
                  `}>Actors</th>
                  <td css={css`vertical-align: top`}>:</td>
                  <td>{data.Actors}</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <p>{data.Plot}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}

function DetailSkeleton() {
  return (
    <div css={css`
      padding: 0 1em 1em;
    `}>
      <div css={css`
        padding: 1em;
        background-color: ${colors.white};
        border-radius: 5px;
      `}>
        <SkeletonBlock margin="0 0 1em" height="450px" />
        <SkeletonBlock margin="0 0 10px" height="28px" />
        <SkeletonBlock margin="0 0 10px" height="18px" />
        <SkeletonBlock margin="0 0 10px" height="18px" />
        <SkeletonBlock margin="0 0 10px" height="70px" />
      </div>
    </div>
  );
}