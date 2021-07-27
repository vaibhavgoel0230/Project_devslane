import { FC, memo, useState } from "react";
import Avatars from "./Avatars";
interface Props {
  imageArray: string[];
}

const AvatarArray: FC<Props> = ({ imageArray }) => {
  const [displayImg, setDisplayImg] = useState(false);
  const len = imageArray.length;
  return (
    <div className="-space-x-6 flex items-center">
      {len <= 4 && imageArray.map((image) => <Avatars image={image}></Avatars>)}
      {len > 4 &&
        imageArray
          .slice(0, 4)
          .map((image) => <Avatars image={image}></Avatars>)}
      {len > 4 && !displayImg && (
        <button
          className="overflow-hidden relative inline-block cursor-pointer h-7 px-2 rounded-full bg-gray-100 text-indigo-600 hover:text-gray-100 hover:bg-indigo-600"
          onClick={() => setDisplayImg(true)}
        >
          {len - 4}+ more
        </button>
      )}
      {len > 4 &&
        displayImg &&
        imageArray.slice(4).map((image) => <Avatars image={image}></Avatars>)}
      {len > 4 && displayImg && (
        <button
          className="overflow-hidden relative inline-block cursor-pointer h-7 px-1 rounded-full bg-indigo-600 text-gray-100 pb-1 hover:bg-gray-100 hover:text-indigo-600 border border-black"
          onClick={() => setDisplayImg(false)}
        >
          -X-
        </button>
      )}
    </div>
  );
};
AvatarArray.defaultProps = {
  imageArray: [
    "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1614283233184-63130776e6f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1567303314286-6735a4ad9d42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1611178206064-2ae27f72b9ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  ],
};
export default memo(AvatarArray);
