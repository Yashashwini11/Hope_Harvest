// Donors.js
import React, { useState, useEffect } from 'react';
import { getDonars } from '../Services/api';

function Donors() {
  const [donars, setDonars] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getDonars();
      setDonars(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <table className='donaters'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
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
