import React, { useMemo } from 'react';
import { Table } from 'antd';
import { users } from '../../shared/constains';
import { calculateAge, calculateDateRange } from '../../shared/helpers';
import './style.scss';

const CustomTable = ({selectedRow, handleChangeRow, searchValue}) => {
  const columnName = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <div>{text.split(' ')[0]}</div>,
      width: '10%',
    },
    {
      title: 'Last Name',
      dataIndex: 'name',
      render: (text) => <div>{text.split(' ')[1]}</div>,
      width: '10%',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      width: '25%',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: '20%',
    },
    {
      title: 'Age',
      dataIndex: 'date_of_birth',
      render: (item) => <div>{calculateAge(new Date(item))}</div>,
      width: '45px',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      render: (item) => <div>{Number(item).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</div>,
      width: '10%',
    },
    {
      title: 'Employment time',
      dataIndex: 'employment_date',
      render: (item) => <div>{calculateDateRange(new Date(item))}</div>,
    },
  ];

  const filterUsers = useMemo(() => {
    if (!searchValue.trim()) return users;

    return users.filter((item) => {
      const currentItem = {...item};

      const specialCh = ['.', ',', '+', '*', '?', '^', '$', '( ', ')', '[', ']', '{', '}', '|', '\\'];
      const searchValueRe = searchValue.split('').map((ch) => specialCh.indexOf(ch) === -1 ? ch : '\\' + ch).join('');
      const re = new RegExp(`\\b${searchValueRe}(.+)?\\b`, 'gi');

      currentItem.salary = Number(item.salary).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
      currentItem.age = calculateAge(new Date(item.date_of_birth));
      currentItem.range = calculateDateRange(new Date(item.employment_date));


      const matchColumns = ['position', 'department', 'salary', 'age', 'range', 'name'].filter((key) => re.test(currentItem[key]));

      return !!matchColumns.length;
    });

  }, [searchValue]);

  return (
    <Table
      rowSelection={{
        selectedRowKeys: selectedRow,
        onChange: handleChangeRow,
        type: 'checkbox',
      }}
      columns={columnName}
      dataSource={filterUsers}
    />
  );
};

export default CustomTable;