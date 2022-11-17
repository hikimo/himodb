/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../assets";

const dummyImg = {
  profile: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F205%2F309%2F1d3.jpg",
};

export function Profile() {
  return (
    <>
      <div css={css`
        padding: 2em 1em 1em;
      `}>

        <div css={css`
          padding: 1em;
          background-color: ${colors.white};
          border-radius: 5px;
        `}>
          <div css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}>
            <img src={dummyImg.profile} css={css`
              widht: 250px;
              height: 250px;
              border-radius: 50%;
              box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
              object-fit: cover;
            `} alt="Hehe Cat" />
          </div>

          <div css={css`
            text-align: center
          `}>
            <h2 css={css`
              margin-bottom: 0;
            `}>HALO KAK ( KOCHENG )</h2>
            <p>Not gonna say something cool, but never gonna lie</p>
          </div>
        </div>
      </div>
    </>
  );
}