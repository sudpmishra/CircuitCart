import CardLoader from "@/components/LoaderComponents/CardLoader";
import CategoryLoader from "@/components/LoaderComponents/CategoryLoader";
import ImageLoader from "@/components/LoaderComponents/PureComponents/ImageLoader";
import TextLoader from "@/components/LoaderComponents/PureComponents/TextLoader";
import TitleLoader from "@/components/LoaderComponents/PureComponents/TitleLoader";

export default function Loading() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-16 gap-10">
      <TitleLoader />
      <div className="w-full flex justify-center items-center gap-[10rem]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CategoryLoader key={index} />
        ))}
      </div>
      <TitleLoader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <CardLoader key={index} />
        ))}
      </div>
      <TitleLoader />
      <div className="w-full flex justify-center items-center gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-start justify-center"
          >
            <ImageLoader />
            <TextLoader />
          </div>
        ))}
      </div>
      <TitleLoader />

      <div className="w-full flex justify-center items-center gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-start justify-center"
          >
            <ImageLoader />
            <TextLoader />
          </div>
        ))}
      </div>
    </div>
  );
}
