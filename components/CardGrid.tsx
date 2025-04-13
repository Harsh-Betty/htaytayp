"use client";

import { useState } from "react";
import { StatusCode } from "../types";
import Card from "./Card";
import StatusCodeModal from "./StatusCodeModal";

interface StatusCodeGridProps {
  statusCodes: StatusCode[];
}

export default function StatusCodeGrid({
  statusCodes,
}: Readonly<StatusCodeGridProps>) {
  const [selectedCode, setSelectedCode] = useState<StatusCode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (statusCode: StatusCode) => {
    setSelectedCode(statusCode);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {statusCodes.map((statusCode) => (
          <Card
            key={statusCode.code}
            statusCode={statusCode}
            onClick={handleCardClick}
          />
        ))}
      </div>

      <StatusCodeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        statusCode={selectedCode}
      />
    </>
  );
}
