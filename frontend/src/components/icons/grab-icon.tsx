import { createIcon } from "@chakra-ui/icons";

export const Icon = createIcon({
  displayName: "GrabIcon",
  viewBox: "0 0 15 25",
  path: (
    <>
      <g filter="url(#filter0_d_34_448)">
        <circle cx="7.5" cy="3.5" r="1.5" fill="currentColor" />
        <circle cx="7.5" cy="8.5" r="1.5" fill="currentColor" />
        <circle cx="7.5" cy="13.5" r="1.5" fill="currentColor" />
      </g>
      <defs>
        <filter
          id="filter0_d_34_448"
          x="0"
          y="0"
          width="15"
          height="25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_34_448"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_34_448"
            result="shape"
          />
        </filter>
      </defs>
    </>
  ),
});
