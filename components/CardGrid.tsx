"use client";

import { StatusCode } from '../types';
import Card from './Card';

interface StatusCodeGridProps {
  statusCodes: StatusCode[];
}

export default function StatusCodeGrid({ statusCodes }: Readonly<StatusCodeGridProps>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {statusCodes.map((statusCode) => (
        <Card key={statusCode.code} statusCode={statusCode} />
      ))}
    </div>
  );
}