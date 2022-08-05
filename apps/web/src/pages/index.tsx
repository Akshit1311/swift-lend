import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Swift Lend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold dark:text-gray-800">
          Flash Loans Made Easy
          <br />
          <span className="text-blue-600">Swift Lend</span>
        </h1>
        <div className="grid gap-4 my-4 grid-cols-2">
          <Button onClick={() => router.push("/quickstart")}>
            Get Started
          </Button>
          <Button isTransparent>Docs</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
