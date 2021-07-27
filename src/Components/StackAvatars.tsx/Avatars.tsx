import { FC, memo } from "react";

interface Props {
  image: string;
}

const Avatars: FC<Props> = ({ image }) => {
  return (
    <div className=" overflow-hidden inline-block transform transition-duration-3000 ease-in-out hover:-translate-y-1 cursor-pointer">
      <img
        src={image}
        alt="avatar"
        className={" border-4 border-gray-100 rounded-full w-16 h-16"}
      />
    </div>
  );
};
Avatars.defaultProps = {};
export default memo(Avatars);
