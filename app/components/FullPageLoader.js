import { Loader2 } from "lucide-react";

export function FullPageLoader() {
  return (
    <div className="fixed w-full h-full flex items-center justify-center bg-white bg-opacity-75">
      <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
    </div>
  );
}
