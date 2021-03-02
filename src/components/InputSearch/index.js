import {useState} from 'react';
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

  return(
      <Input
        placeholder="Search"
        size="large"
        allowClear
        value={value}
        onChange={(e) => setValue(e.target.value)}
        prefix={prefix}
        onPressEnter={() => onSearch(value)}
      />
  )
};

export default InputSearch;