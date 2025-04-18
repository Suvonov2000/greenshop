import { Select } from "antd";

const Header = () => {
  return (
    <div>
      <div className="w-full flex items-center">
        <h3>All Plants</h3>
      </div>
      <div>
        <Select
          labelInValue
          defaultValue={{ value: "lucy", label: "Lucy (101)" }}
          style={{ width: 120 }}
          options={[
            {
              value: "jack",
              label: "Jack (100)",
            },
            {
              value: "lucy",
              label: "Lucy (101)",
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Header;
