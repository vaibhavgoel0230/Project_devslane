import { FC, memo } from "react";
import { FiSearch } from "react-icons/fi";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import altImage from "../Components/Avatar/media/photo-1532074205216-d0e1f4b87368.jpg";
import { Img } from "react-image";
import { useAppSelector } from "../store";
import {
  groupLoadingSelector,
  groupQuerySelector,
  groupsSelector,
} from "../selectors/groups.selectors";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchQuery } from "../actions/groups.actions";

interface Props {}

const Dashboard: FC<Props> = () => {
  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupLoadingSelector);
  const groups = useAppSelector(groupsSelector);
  const dispatch = useDispatch();

  let a = 0;

  const submit = (e: any) => {
    dispatch(fetchQuery(e.target[0].value));
    e.preventDefault();
  };
  return (
    <div className="bg-gray-200 px-4 pb-5 absolute top-26 left-56 right-0 h-full">
      <div className="flex justify-between items-center py-3">
        <Input
          className="mr-2"
          id="Search"
          type="Search"
          autoComplete="Search"
          required
          placeholder="Search..."
          Icon={FiSearch}
          theme="dark"
          onChange={(e) => {
            dispatch(fetchQuery(e.target.value));
          }}
        ></Input>
        <form onSubmit={submit} className="flex items-center">
          <Input
            className="mr-2"
            id="Searching"
            type="text"
            name="search on submit"
            autoComplete="text"
            required
            placeholder="Search on submit..."
            Icon={FiSearch}
            theme="dark"
          ></Input>
          <Button theme="Dark">Submit</Button>
        </form>
      </div>
      <div className="flex justify-center my-4 h-3">
        {loading && <FaSpinner className="animate-spin"></FaSpinner>}
      </div>
      {!loading && groups.length > 0 && (
        <div className=" w-full bg-white rounded-lg px-4 py-5">
          {groups.map(function (i) {
            a += 1;
            return a % 2 === 1 ? (
              <div
                key={i.id}
                className={
                  "w-full rounded-lg bg-gray-500 text-white mt-4 flex p-2 "
                }
              >
                <div>
                  <Img
                    src={[i.group_image_url, altImage]}
                    alt="Not Found"
                    className="h-20 w-20 rounded-md"
                  />
                </div>
                <div className="ml-2">
                  <div className="capitalize">{`Name: ${i.name}`}</div>
                  <div className="capitalize">{`Description: ${i.description}`}</div>
                </div>
              </div>
            ) : (
              <div
                key={i.id}
                className={
                  "w-full rounded-lg bg-gray-100 text-gray-600 mt-4 flex justify-between p-2"
                }
              >
                <div className="ml-24">
                  <div className="capitalize">{`Name: ${i.name}`}</div>
                  <div className="capitalize">{`Description: ${i.description}`}</div>
                </div>
                <div>
                  <Img
                    src={[i.group_image_url, altImage]}
                    alt="Not Found"
                    className="h-20 w-20 rounded-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && query && groups.length === 0 && (
        <div
          className={
            "w-full rounded-lg bg-gray-100 text-gray-600 flex justify-center p-2"
          }
        >
          NO GROUPS FOUND
        </div>
      )}

      {!loading && !query && groups.length === 0 && (
        <div
          className={
            "w-full rounded-lg bg-gray-100 text-gray-600 flex justify-center p-2"
          }
        >
          SEARCH THE GROUPS
        </div>
      )}

      {/* <Link to="/recordings">
        <span className="text-blue-500">Go to Recordings.</span>
      </Link> */}
    </div>
  );
};

Dashboard.defaultProps = {};
export default memo(Dashboard);
