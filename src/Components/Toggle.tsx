import { Switch } from "@headlessui/react";
import { useState } from "react";
import { memo, FC } from "react";

interface Props {}
const Toggle: FC<Props> = (props) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <Switch
      checked={enabled}
      onChange={() => {
        setEnabled(!enabled);
      }}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-100"
      } relative inline-flex items-center h-5 rounded-full w-9`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled
            ? "translate-x-5 transform ease-in-out duration-700"
            : "translate-x-1 transform ease-in-out duration-700"
        } inline-block w-4 h-4 transform ${
          !enabled ? "bg-blue-600" : "bg-gray-100"
        } rounded-full`}
      />
    </Switch>
  );
};

Toggle.defaultProps = {};
export default memo(Toggle);
