import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export default function Home({
  formattedDate,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <Link href="/ssr">View a server-side rendered page.</Link>
      </p>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
};
