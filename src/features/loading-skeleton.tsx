import Image from "next/image";
export const LoadingSkeleton = () => {
  return (
    <div className="h-full flex items-center justify-center bg-card flex-1">
      <Image
        width={80}
        height={80}
        alt=""
        src="/Haier_Icon.png"
        quality={100}
        className="animate-bounce"
      />
    </div>
  );
};
