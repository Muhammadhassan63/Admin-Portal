import React, { useState } from 'react';
import { Header } from '../components';

const Reports = () => {
  const [reports, setReports] = useState( [
    {
      _id: 1,
      officer_name: 'Hassan',
      email: 'hassan@example.com',
      phone: '555-1234',
      report: "On 16th April 2023, at around 8 PM, the police received a report of a burglary at a residential property located in the suburban area of the city. Upon arrival, officers found that the front door was forced open, and several valuable items such as jewelry, electronics, and cash were missing. The residents were not present at the time of the incident, and there were no eyewitnesses to the crime. The police have launched an investigation and are currently reviewing surveillance footage from nearby businesses and residences to identify any suspects."
    },
    {
      _id: 2,
      officer_name: 'Peters',
      email: 'peters@example.com',
      phone: '555-5678',
    },
    {
      _id: 3,
      officer_name: 'Sharjeel',
      email: 'sanaullah@example.com',
      phone: '555-9012',
    },
  ]);

  const [showFullReport, setShowFullReport] = useState(false);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="Page" title="All Report //Static data" />

      <div className="flex flex-col space-y-4 mt-10">
        {reports.map((report) => (
          <div key={report._id} className="bg-gray-100 p-4 rounded shadow-md">
            <div className="flex justify-between">
              <div className="font-bold text-lg"> Reported By: <span className='font-light'>{report.officer_name}</span></div>
            </div>
            <div>
              <span className="font-bold text-lg mt-2">Report:</span> 
              {showFullReport ? report.report : report.report?.slice(0, 150)}
              {report.report?.length > 150 && (
                <button className="text-blue-600 hover:text-blue-700 hover:underline focus:outline-none" onClick={() => setShowFullReport(!showFullReport)}>
                  {showFullReport ? ' Read Less' : ' Read More'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
