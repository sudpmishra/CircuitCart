import TextLoader from "@/components/LoaderComponents/PureComponents/TextLoader";
import TitleLoader from "@/components/LoaderComponents/PureComponents/TitleLoader";

const Loading = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col gap-5">
      <div className="skeleton h-[20rem] w-full"></div>
      <TitleLoader />
      <TextLoader />
      <TextLoader />
      <TextLoader />
      <TextLoader />
      <TextLoader />
      <TextLoader />
      <TextLoader />
      <TextLoader />
      <TitleLoader />
    </div>
  );
};

export default Loading;
