"use client";
import { Button } from "@/components/ui/button";

export default function RevalidateDBTimeButton({
  onRevalidate,
}: {
  onRevalidate: () => Promise<void>;
}) {
  return (
    <Button onClick={async () => await onRevalidate()} className="mt-4">
      Revalidate DB Time
    </Button>
  );
}
