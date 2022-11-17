/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { colors } from "../assets";

export function NavMenu() {
  return (
    <nav css={css`
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
      background-color: ${colors.white};
      box-shadow: 0px -10px 15px -3px rgb(0 0 0 / 10%);
    `}>
      <div css={css`
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 2em;
        @media (min-width: 420px) {
          margin: auto;
          max-width: 750px
        }
      `}>
        <MenuItem label="HOME" />
        <MenuItem to="mylist" label="MY LIST" />
        <MenuItem to="profile" label="PROFILE" />
      </div>
    </nav>
  );
}

function MenuItem({ to = "/", label = "HOME" }) {
  return (
    <Link to={to} css={css`
      padding: 1.5em 1em;
      font-weight: 600;
      text-decoration: none;
    `}>
      <span css={css`
        color: ${colors.text};
        fonts-size: 16px;
      `}>{ label }</span>
    </Link>
  );
}