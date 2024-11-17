import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
export default function CoolImageCard() {
  return (
    <Card className="max-w-md mx-auto mt-10 overflow-hidden group shadow-md">
      <CardContent className="relative">
        <img
          src="https://picsum.photos/400/200"
          alt="Demo Image"
          className="rounded-md w-full h-80 object-cover object-center transform group-hover:scale-105 transition ease-in-out duration-300"
        />
        <CardTitle className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 text-2xl font-bold">
          image title
        </CardTitle>
      </CardContent>
    </Card>
  );
}
