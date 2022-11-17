/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../assets";

export function CardMovie({ poster, title, type, year, onClick }) {
  return (
    <div css={css`
      cursor: pointer;
      margin-bottom: 1em;
      display: flex;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
    `} onClick={onClick}>
      <div css={css`
        height: 125px;
        max-width: 90px;
        overflow: hidden;
      `}>
        <img src={poster} css={css`
          width: 90px;
          height: 100%;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        `} alt={ title } />
      </div>
      <div css={css`
        flex: 1;
        padding: 0.75em;
      `}>
        <div css={css`
          font-size: 16px;
          font-weight: 700;
        `}>{ title }</div>
        <p css={css`
          margin: 5px 0 0;
          font-weight: 600;
          font-size: 14px;
          color: ${colors.gray}`
        }>{year}</p>
        <SmText>{ type }</SmText>
      </div>
    </div>
  );
}

function SmText({ children }) {
  return (
    <p css={css`
      margin: 5px 0 0;
      font-size: 12px;`
    }>{children}</p>
  );
}