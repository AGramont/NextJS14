import SubTitle from "@/components/format/sub-title";

export const metadata = {
  title: "About",
  description: "The about page",
};

export default function AboutPage() {
  return (
    <>
      <SubTitle subTitle="About" />
      <div>
        <p>This is a static about page</p>
      </div>
    </>
  );
}
