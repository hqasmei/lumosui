import Image from 'next/image';

type ImageCardProps = {
  imageSrc: string;
  topText: string;
  bottomSubText: string;
  bottomMainText: string;
};

export default function ImageCard({
  imageSrc,
  topText,
  bottomSubText,
  bottomMainText,
}: ImageCardProps) {
  return (
    <div className="relative w-72 h-[420px] p-2 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden">
      <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden">
        <Image
          src={imageSrc}
          alt={bottomMainText}
          className="z-0"
          width={720}
          height={420}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white text-black text-sm font-medium py-1 px-2 rounded-full">
            {topText}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <p className="text-white text-sm mb-1">{bottomSubText}</p>
          <h3 className="text-white text-xl font-bold flex items-center">
            {bottomMainText}
          </h3>
        </div>
      </div>
    </div>
  );
}
