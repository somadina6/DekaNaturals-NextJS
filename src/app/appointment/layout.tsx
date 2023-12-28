import Image from "next/image";
import Banner_01 from "@/components/Banners/Banner_01";
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Banner_01 children={<></>}></Banner_01>
      {children}
    </>
  );
}
