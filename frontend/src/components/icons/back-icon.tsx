import { createIcon } from "@chakra-ui/icons";

export const Icon = createIcon({
  displayName: "MaximizeIcon",
  viewBox: "0 0 20 20",
  path: (
    <>
      <path
        fill="white"
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
      ></path>
      <path
        fill="white"
        d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
      ></path>
    </>
  ),
});
