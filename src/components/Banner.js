/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SkeletonBlock } from "./SkeletonBlock";

export function Banner({ loading, poster, title, plot }) {
  if (loading) return (
    <SkeletonBlock margin="0 0 2em" height="200px" />
  );

  return (
    <div css={css`
      position: relative;
      margin-bottom: 2em;
      height: 200px;
    `}>
      <div css={css`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        background: #666;
        -webkit-filter: blur(20px);
        filter: blur(5px);
        overflow: hidden;
      `}>
        <img src={poster} css={css`
          display: block;
          width: 100%
        `} alt="Main Banner" />
      </div>

      {/* Shadow Box */}
      <div css={css`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        box-shadow: inset -300px 40px 200px 0px rgb(0 0 0 / 75%), 0px 0px 15px 5px rgb(0 0 0 / 80%);
        z-index: 2;
      `}>
      </div>
      
      <div css={css`
        position: relative;
        padding: 2em 1em;
        z-index: 2;
        display: flex;
        flex-direction: row;
        color: #fff;
      `}>
        <div css={css`
          flex: 1;
          margin-right: 1em;
        `}>
          <h4 css={css`
            margin: 1em 0 0.5em;
            font-size: 22px;
            text-shadow: 1px 1px 2px #000000ee;`}>
              {title}
          </h4>
          <p css={css`
            margin: 0;
            font-size: 12px;
            text-shadow: 1px 1px 2px #000000ee;
          `}>
            {plot}
          </p>
        </div>

        <div css={css`width: 90px`}>
          <img src={poster} css={css`
            max-width: 100%;
            border-radius: 5px
          `} alt={title} />
        </div>
      </div>
    </div>
  );
}