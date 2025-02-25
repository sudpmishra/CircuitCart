import CardLoader from "@/components/LoaderComponents/CardLoader";
import TextLoader from "@/components/LoaderComponents/PureComponents/TextLoader";
import TitleLoader from "@/components/LoaderComponents/PureComponents/TitleLoader";

const Loading = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-10 gap-10">
      <TitleLoader />
      <div className="w-full flex justify-around items-center gap-[10rem]">
        <div className="flex items-center justify-start gap-2">
          <TitleLoader />
          <TextLoader />
        </div>
        <TitleLoader />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <CardLoader key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
