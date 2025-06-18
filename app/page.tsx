import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-2xl text-red-500 font-bold">
        Hello, This is Home Page!
      </h1>
      <Link
        href={"/login"}
        className="border rounded-md px-3 py-1 cursor-pointer bg-gray-500 
          text-white text-center font-bold"
      >
        Click here to login!
      </Link>
    </div>
  );
}
