import { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 18,
    }}
  />
);

const InputSearch = ({onSearch}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (e.type === 'click') onSearch('');

    setValue(e.target.value)
  };

  return(
      <Input
        placeholder="Search"
        size="large"
        allowClear
        value={value}
        onChange={handleChange}
        prefix={prefix}
        onPressEnter={() => onSearch(value)}
      />
  )
};

export default InputSearch;