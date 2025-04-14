import StatusCodeGrid from "@/components/CardGrid";
import { statusCodes } from "@/content/codes";

export default function Home() {
  return (
    <div className="container-swift">
      <div className="text-center mb-12">
        <h1 className="text-4xl mb-4" style={{ color: "var(--text)" }}>
          HTayTayP<span style={{ color: "var(--secondary)" }}> Codes</span>
        </h1>
        <p
          className="text-xl max-w-2xl mx-auto"
          style={{ color: "var(--text)" }}
        >
          HTTP status codes explained through Taylor Swift GIFs & Images.
          Because debugging is less painful with a little Taylor magic.
        </p>
      </div>

      <StatusCodeGrid statusCodes={statusCodes} />
    </div>
  );
}
