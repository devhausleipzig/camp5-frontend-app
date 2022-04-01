import { createIcon } from "@chakra-ui/icons";

export const Icon = createIcon({
  displayName: "HeartIcon",
  viewBox: "0 0 20 20",
  path: (
    <>
      <path
        fill="currentColor"
        d="M3.333 5H1.667v11.667c0 .916.75 1.666 1.666 1.666H15v-1.666H3.333V5zm13.334-3.333h-10C5.75 1.667 5 2.417 5 3.333v10C5 14.25 5.75 15 6.667 15h10c.916 0 1.666-.75 1.666-1.667v-10c0-.916-.75-1.666-1.666-1.666zm0 11.666h-10v-10h10v10zM8.333 7.5H15v1.667H8.333V7.5zm0 2.5h3.334v1.667H8.333V10zm0-5H15v1.667H8.333V5z"
      />
    </>
  ),
});
