/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function SkeletonBlock({ margin, width = "100%", height = "18px" }) {
  return(
    <div css={css`
      margin: ${margin};
      width: ${width};
      height: ${height};
    
      background: #eee;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      animation: 1.5s shine linear infinite;
    `}></div>
  )
}