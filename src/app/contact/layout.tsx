import Image from "next/image";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-80 bg-green-300">
        <h2>Wellness is life</h2>
        {/* <Image src="/cover.jpg" alt="cover photo" width={2000} height={200} /> */}
      </div>
      {children}
    </>
  );
}
