import { ImageResponse } from "next/og";
import { icon } from "./logo";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(icon, size);
}
