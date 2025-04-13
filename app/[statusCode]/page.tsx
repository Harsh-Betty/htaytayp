import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { statusCodes } from "@/content/codes";

// Define params as a Promise type
type Params = Promise<{ statusCode: string }>;

// Using SSR approach (no generateStaticParams)
export default async function StatusCodePage({
  params,
}: Readonly<{ params: Params }>) {
  // Need to await the params since it's a Promise
  if (!(await params)?.statusCode) {
    notFound();
  }

  try {
    // Make sure we're working with the actual string from the URL
    const codeString = (await params).statusCode;

    // Remove any file extension if present (e.g., ".gif")
    const cleanCodeString = codeString.replace(/\.\w+$/, "");
    const codeNumber = parseInt(cleanCodeString, 10);

    // Check if code is a valid number
    if (isNaN(codeNumber)) {
      notFound();
    }

    // Find the status code in our data
    const statusCode = statusCodes.find((item) => item.code === codeNumber);

    if (!statusCode) {
      notFound();
    }

    return (
      <div className="container-swift">
        <div className="max-w-2xl mx-auto bg-[var(--background)] rounded-lg shadow-lg overflow-hidden border">
          <div className="relative h-96">
            <Image
              src={statusCode.gifPath}
              alt={`Taylor Swift GIF representing HTTP status code ${statusCode.code}`}
              fill
              className="bg-pink-50 object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1
                className="text-3xl font-bold"
                style={{ color: "var(--text)" }}
              >
                {statusCode.code}
              </h1>
              <span
                className="text-lg px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--text)",
                }}
              >
                {statusCode.title}
              </span>
            </div>
            <p className="text-lg mb-6" style={{ color: "var(--text)" }}>
              {statusCode.description}
            </p>
            <div className="flex justify-between">
              <Link href="/" className="btn-swift">
                Back to All Codes
              </Link>
              <a
                href={statusCode.mdnLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-swift"
                style={{ backgroundColor: "var(--primary)", color: "white" }}
              >
                Learn More on MDN
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
