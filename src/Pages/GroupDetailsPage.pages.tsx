import { useEffect } from "react";
import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { retrieveOneGroup } from "../actions/groups.actions";
import {
  selectedErrorSelector,
  selectedIdGroupSelector,
  selectedLoadingSelector,
} from "../selectors/groups.selectors";
import { useAppSelector } from "../store";
interface Props {}
const GroupDetailsPage: FC<Props> = (props) => {
  const groupId = +useParams<{ groupId: string }>().groupId;
  const group = useAppSelector(selectedIdGroupSelector);
  const error = useAppSelector(selectedErrorSelector);
  const loading = useAppSelector(selectedLoadingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveOneGroup(groupId)); // eslint-disable-next-line
  }, [groupId]);

  if (error) {
    return (
      <div className="bg-gray-200 px-4 pb-5 absolute top-26 left-56 right-0 h-full">
        <div className="text-red-500">{error}</div>
        <Link to={"/groups/" + (groupId + 1)}>Next Group</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 px-4 pb-5 absolute top-26 left-56 right-0 h-full">
      <div>
        <Link to="/">Dashboard</Link>
      </div>

      {loading && <div>Loading group...</div>}
      {group && (
        <p>
          this is detail page of {group.name} (id: {group.id})
        </p>
      )}
      <Link to={"/groups/" + (groupId + 1)}>Next Group</Link>
    </div>
  );
};

GroupDetailsPage.defaultProps = {};
export default memo(GroupDetailsPage);
