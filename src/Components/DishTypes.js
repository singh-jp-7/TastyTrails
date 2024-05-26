import { IMG_URL } from "../utils/constants";

const DishTypes = ({ dishTypes }) => {
  return (
    <div className="flex mt-2 overflow-x-scroll scroll-m-0 hide-scrollbar scroll-smooth">
      {dishTypes?.map((dishType) => {
        return (
          <div key={dishType?.imageId}>
            <img
              className="w-40 max-w-max"
              src={IMG_URL + dishType?.imageId}
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default DishTypes;
