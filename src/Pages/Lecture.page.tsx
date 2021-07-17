import { FC, memo } from "react";
import { useParams } from "react-router-dom";

interface Props {}

interface RouteParams {
  lectureNumber: string;
  batchNumber: string;
}
const Lecture: FC<Props> = (props) => {
  const { lectureNumber, batchNumber } = useParams<RouteParams>();
  return (
    <div>
      This is Batch Number #{batchNumber} and The Lecture Number is #
      {lectureNumber}.
    </div>
  );
};

Lecture.defaultProps = {};
export default memo(Lecture);
