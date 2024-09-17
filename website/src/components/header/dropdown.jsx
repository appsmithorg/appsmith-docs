import { useState } from "react";
import { ArrowDown } from "../icons";
import { cn } from "@site/src/utils/cn";

const values = [
  { label: "More", url: "https://community.appsmith.com/" },
  { label: "Support", url: "https://community.appsmith.com/" }, 
  { label: "FAQs", url: "https://docs.appsmith.com/getting-started/faq" },
];

export const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(values[0].label);
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleDropDownClick = (val) => {
    setSelectedValue(val.label);
    setOpenDropDown(false);
    if (val.url !== "#") {
      window.open(val.url, "_blank");
    }
  };

  return (
    <div
      className="dropDown"
      onMouseOver={() => setOpenDropDown(true)}
      onMouseOut={() => setOpenDropDown(false)}
    >
      <div className="selectedDropDown">
        {selectedValue} <ArrowDown />
      </div>
      {openDropDown && (
        <div className="dropDownListContainer">
          <div className="dropDownValuesContainer">
            {values.map((val) => (
              <div
                key={val.label}
                style={{ cursor: "pointer" }}
                onClick={() => handleDropDownClick(val)}
                className={cn("dropDownValue", {
                  selectedOption: val.label === selectedValue,
                  pointer: val.label !== selectedValue,
                })}
              >
                {val.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

