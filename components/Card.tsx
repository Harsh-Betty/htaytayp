import Image from "next/image";
import { StatusCode } from "../types";
import { cn } from "@/lib/utils";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface CardProps {
  statusCode: StatusCode;
  onClick: (statusCode: StatusCode) => void;
}

export default function Card({ statusCode, onClick }: Readonly<CardProps>) {
  return (
    <div className="block w-full relative">
      {/* Card container */}
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-72 rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800"
        )}
        onClick={() => onClick(statusCode)}
      >
        {/* Image for gif that covers the card */}
        <div className="absolute inset-0 z-0">
          <Image
            src={statusCode.gifPath}
            alt={`Taylor Swift GIF representing HTTP status code ${statusCode.code}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Content overlay */}
        <div className="text relative z-20 mt-auto">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-2xl text-white">{statusCode.code}</h3>
            <span className="text-sm px-2 py-1 bg-pink-100 text-pink-800 rounded-full">
              {statusCode.title}
            </span>
          </div>
          <p className="font-normal text-base text-white my-2 line-clamp-2">
            {statusCode.description}
          </p>

          {/* MDN documentation link */}
          <div className="relative z-30">
            <a
              href={statusCode.mdnLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 bg-pink-200 hover:bg-pink-300 text-pink-800 text-sm rounded-md mt-2"
              onClick={(e) => e.stopPropagation()}
            >
              MDN Docs
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
