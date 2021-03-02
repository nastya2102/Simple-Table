import { Select } from 'antd';
const { Option } = Select;

const CustomSelect = ({options, defaultValue}) => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select defaultValue={defaultValue} onChange={handleChange} >
      {options.map(i => <Option value={i.value} key={i.id}>{i.name}</Option>)}
    </Select>
  );
};

export default CustomSelect;