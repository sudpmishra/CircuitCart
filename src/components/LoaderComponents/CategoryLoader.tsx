import IconLoader from "./PureComponents/IconLoader";
import TextLoader from "./PureComponents/TextLoader";

const CategoryLoader = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <IconLoader />
      <TextLoader />
    </div>
  );
};

export default CategoryLoader;
