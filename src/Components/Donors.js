import React, { useState, useEffect } from 'react';
import { getDonars } from '../Services/api';

function Donors() {
  const [donars, setDonars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDonars();
        setDonars(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []); 
  return (
    <>
      <table className='donaters'>
        <thead>
          <tr>
            <th>name</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {donars.map((donar) => (
            <tr key={donar.id}>
              <td>{donar.name}</td>
              <td>{donar.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Donors;
