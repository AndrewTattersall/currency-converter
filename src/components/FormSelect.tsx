import React from "react";

interface IProps {
  header: string;
  selectValue: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  selectOptions: { code: string; name: string }[];
}

const FormSelect = ({
  header,
  selectValue,
  onChange,
  selectOptions,
}: IProps) => {
  return (
    <>
      <label>
        {header}
        <select value={selectValue} onChange={onChange}>
          {selectOptions.map((select) => (
            <option value={select.code} key={select.code}>
              {select.name}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default FormSelect;
