import * as React from "react";
import { TFilters } from "../types/interface";

interface ILinkProps {
  handleClick: (filter: TFilters) => void;
  getIsActive: (filter: TFilters) => boolean;
  filter: TFilters;
}
const FilterLink: React.FC<ILinkProps> = ({
  children,
  handleClick,
  getIsActive,
  filter
}): JSX.Element => {
  return (
    <button onClick={() => handleClick(filter)} disabled={getIsActive(filter)}>
      {children}
    </button>
  );
};

export default FilterLink;