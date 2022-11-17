/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../assets";

export function Header() {
  return (
    <header css={css`
      position: relative;
      padding: 1.5em 2em;
      background-color: ${colors.white};
      box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
      z-index: 3;
    `}>
      <div css={css`
        font-size: 22px;
        font-weight: 600;
        text-align: center;
      `}>
        <span css={css`color: ${colors.green}`}>HIMO</span>DB
      </div>
    </header>
  );
}