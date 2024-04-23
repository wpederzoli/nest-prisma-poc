import { LoadIcon } from "./LoadIcon";
import { GenericIcon } from "./types";

export const WarningIcon = ({ width, height, styles }: GenericIcon) => (
  <LoadIcon
    src="/alert-triangle.svg"
    width={width}
    height={height}
    styles={styles}
  />
);
