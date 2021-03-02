import React from 'react';
import { compareValues } from '../../shared/constains';
import { calculateAge, calculateDateRange } from '../../shared/helpers';
import cn from 'classnames';
import './style.scss';

const VerticalTable = ({data}) => {

  const setValues = (key, user) => {
    switch (key) {
      case 'name':
        return (
          <div className='big-column' key={key}>
            <div className="user-img"/>
            {user.name}
          </div>
        );
      case 'age':
        return <div key={key}>{calculateAge(new Date(user.date_of_birth))}</div>;
      case 'tenure' :
        return <div key={key}>{calculateDateRange(new Date(user.employment_date))}</div>
      default:
        return <div key={key}>{user[key] || 'Unknown'}</div>;
    }
  };

  return (
    <div className='vertical-table-container'>
      <div className='vertical-table-title-column'>
        {compareValues.map((i) => <div key={i.key} className={cn(i.key === 'name' && 'big-column')}>{i.name}</div>)}
      </div>
      <div className='vertical-table-data-column'>
        {data.map((user) =>
          <div className='vertical-table-column' key={user.key}>
            {compareValues.map((i) => setValues(i.key, user))}
          </div>)}
      </div>
    </div>
  );
};

export default VerticalTable;