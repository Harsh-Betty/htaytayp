import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default async function Icon() {
  const publicDir = join(process.cwd(), "public/albums");
  const imageData = await readFile(join(publicDir, "eras-tour.jpg"));
  const imageBase64 = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imageBase64}
          width={64}
          height={64}
          style={{ objectFit: "contain" }}
          alt="HTayTayP Icon"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
