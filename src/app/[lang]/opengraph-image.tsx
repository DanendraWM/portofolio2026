import { ImageResponse } from "next/og";
import { en } from "@/content/en";
import { personal } from "@/content/personal";

export const alt = `${personal.name}, ${en.hero.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0d1626",
        color: "#e9eef7",
      }}
    >
      <div style={{ fontSize: 88, fontWeight: 500, lineHeight: 1.1 }}>{personal.firstName}</div>
      <div style={{ fontSize: 56, color: "#a9b6cc", lineHeight: 1.2 }}>{personal.lastNames}</div>
      <div style={{ fontSize: 36, marginTop: 40 }}>{en.hero.role}</div>
      <div style={{ display: "flex", gap: 16, marginTop: 56, fontSize: 28, color: "#f2b14a" }}>
        request → api → database → response
      </div>
    </div>,
    size,
  );
}
