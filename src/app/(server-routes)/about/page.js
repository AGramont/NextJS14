import SubTitle from "@/components/format/sub-title";
// import { headers } from "next/headers";

export const metadata = {
  title: "About",
  description: "The about page",
};

// revalidated every n seconds
//export const revalidate = 5;

// force dynamic rendering
//export const dynamic = "force-dynamic"

export default function AboutPage() {
  // accessing headers or cookies will also convert this to dynamic
  // const myHeaders = headers();

  return (
    <>
      <SubTitle subTitle="About" />
      <div>
        <p>This is a static about page</p>
        <p>My favorite number is: {Math.floor(Math.random() * 1000)}</p>
      </div>
    </>
  );
}
