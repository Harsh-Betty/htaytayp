"use client";

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { StatusCode } from "@/types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface StatusCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  statusCode: StatusCode | null;
}

export default function StatusCodeModal({
  isOpen,
  onClose,
  statusCode,
}: Readonly<StatusCodeModalProps>) {
  if (!statusCode) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-start gap-4 mb-4">
            <DialogTitle className="text-3xl font-bold">
              {statusCode.code}
            </DialogTitle>
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
        </DialogHeader>

        <div className="relative h-64 lg:h-96 w-full">
          <Image
            src={statusCode.gifPath}
            alt={`Taylor Swift GIF representing HTTP status code ${statusCode.code}`}
            fill
            className="bg-pink-50 object-cover rounded-md"
            priority
          />
        </div>

        <DialogDescription className="text-lg py-4">
          {statusCode.description}
        </DialogDescription>

        <div className="flex justify-end mt-2">
          <a
            href={statusCode.mdnLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            Learn More on MDN
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
