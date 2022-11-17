/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SkeletonBlock } from "./SkeletonBlock";

export function MovieSkeleton() {
  return (
    <div css={css`
      margin-bottom: 1em;
      height: 125px;
      display: flex;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
    `}>
      <SkeletonBlock margin="0 0 10px" width="90px" height="100%" />

      <div css={css`
        flex: 1;
        padding: 0.75em;
      `}>
        <SkeletonBlock margin="0 0 10px" height="22px" />
        <SkeletonBlock margin="0 0 5px" width="40%" height="16px" />
        <SkeletonBlock margin="0 0 5px" width="40%" height="16px" />
      </div>
    </div>
  );
}