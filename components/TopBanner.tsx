import Image from "next/image";

export default function TopBanner() {
  return (
    <div className="bg-[#633185] flex items-center justify-center">
      <Image width={1350} height={168} className="w-auto h-auto" src="/gif/kyaja.gif" alt="Kyaja gif" />
    </div>
  );
}
