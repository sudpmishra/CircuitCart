import ImageLoader from "./PureComponents/ImageLoader";
import TextLoader from "./PureComponents/TextLoader";

export default function CardLoader() {
  return (
    <div className="bg-gray-300 dark:bg-gray-700 shadow-lg rounded-lg relative overflow-hidden p-4">
      <ImageLoader />
      <div className="flex flex-col gap-4 mt-4">
        <TextLoader />
        <TextLoader />
        <TextLoader />
        <div className="flex justify-between items-center mb-2">
          <TextLoader />
          <TextLoader />
        </div>
      </div>
    </div>
  );
}
