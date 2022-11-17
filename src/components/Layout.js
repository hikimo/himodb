/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { NavMenu } from "./NavMenu";

export function Layout() {
  return (
    <>
      <div css={css`
        position: relative;
        width: 100vw;
        @media (min-width: 420px) {
          margin: auto;
          max-width: 750px
        }
      `}>
        <div css={
          css`
            margin-top: 1.5em;
            margin-bottom: 4em;
          `
        }>
          <Outlet />
        </div>

        <NavMenu />
      </div>
    </>
  );
}