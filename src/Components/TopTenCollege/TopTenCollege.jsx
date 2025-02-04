import { useState } from 'react';

const TopCollegesTable = () => {
  const [darkMode, setDarkMode] = useState(true);

  const colleges = [
    {
      rank: 1,
      name: 'IIT Bombay - Indian Institute of Technology - [IITB]',
      location: 'Mumbai, Maharashtra | 5/5',
      ranking: '#1 out of 50 in India 2024',
      cutoff: 'JEE-Advanced 2024 Cut off 68',
      deadline: '14 Mar - 31 Mar 2024',
      fees: '₹66,700',
      feesDesc: '1st Year Fees'
    },
    {
      rank: 2,
      name: 'IIT Kharagpur - Indian Institute of Technology - [IITKGP]',
      location: 'Kharagpur, West Bengal | 4.9/5',
      ranking: '#6 out of 200 in India 2024',
      cutoff: 'CAT 2024 Cut off 90',
      deadline: '10 June - 18 Jun 2024',
      fees: '₹2,62,360',
      feesDesc: '1st Year Fees'
    },
    {
      rank: 3,
      name: 'IIT Delhi - Indian Institute of Technology [IITD]',
      location: 'New Delhi, Delhi NCR | 4.9/5',
      ranking: '#1 out of 27 in India 2024',
      cutoff: 'CAT 2024 Cut off 98',
      deadline: '14 Mar - 31 Mar 2024',
      fees: '₹2,28,650',
      feesDesc: '1st Year Fees'
    },
    {
      rank: 4,
      name: 'IIT Madras - Indian Institute of Technology - [IITM]',
      location: 'Chennai, Tamil Nadu | 4.9/5',
      ranking: '#1 out of 200 in India 2024',
      cutoff: 'CAT 2024 Cut off 85',
      deadline: '10 June - 18 Jun 2024',
      fees: '₹2,42,000',
      feesDesc: '1st Year Fees'
    },
    {
      rank: 5,
      name: 'IIMA - Indian Institute of Management',
      location: 'Ahmedabad, Gujarat | 4.9/5',
      ranking: '#2 out of 50 in India 2019',
      cutoff: 'CAT 2024 Cut off 99',
      deadline: '03 Dec 24',
      fees: '₹1,38,060',
      feesDesc: 'Total Fees'
    },
    {
      rank: 6,
      name: 'IIT Kanpur - Indian Institute of Technology - [IITK]',
      location: 'Kanpur, Uttar Pradesh | 4.9/5',
      ranking: '#4 out of 27 in India 2024',
      cutoff: 'CAT 2024 Cut off 85',
      deadline: '10 June - 18 Jun 2024',
      fees: '₹2,29,970',
      feesDesc: '1st Year Fees'
    },
    {
      rank: 7,
      name: 'IIT Roorkee - Indian Institute of Technology - [IITR]',
      location: 'Roorkee, Uttarakhand | 4.9/5',
      ranking: '#5 out of 27 in India 2024',
      cutoff: 'CAT 2024 Cut off 95',
      deadline: '10 June - 18 Jun 2024',
      fees: '₹2,30,100',
      feesDesc: '1st Year Fees'
    },
    {
      rank: 8,
      name: 'IIM Bangalore - Indian Institute of Management',
      location: 'Bangalore, Karnataka | 4.9/5',
      ranking: '#1 out of 50 in India 2019',
      cutoff: 'CAT 2024 Cut off 99',
      deadline: '21 June - 07 Aug 2024',
      fees: '₹1,25,000',
      feesDesc: '1st Year Fees'
    },
    {
      rank: 9,
      name: 'IIT Guwahati - Indian Institute of Technology - [IITG]',
      location: 'Guwahati, Assam | 4.9/5',
      ranking: '#6 out of 27 in India 2024',
      cutoff: 'JEE-Advanced 2024 Cut off 1021',
      deadline: '14 Mar - 31 Mar 2024',
      fees: '₹2,88,250',
      feesDesc: '1st Year Fees'
    },
    {
      rank: 10,
      name: 'BITS Pilani (Pilani Campus)',
      location: 'Pilani, Rajasthan | 4.9/5',
      ranking: '#19 out of 200 in India 2024',
      cutoff: 'CAT 2024 Cut off 80',
      deadline: '21 Jan - 18 Apr 2025',
      fees: '₹5,71,575',
      feesDesc: '1st Year Fees'
    }
  ];

  return (
    <div className="min-h-screen p-8 transition-colors duration-200 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          
          <h2 className="text-4xl md:text-5xl font-extrabold leading-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Top 10 Engineering & Management Institutes
          </h2>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {['Rank', 'College', 'Ranking', 'Cutoff', 'Application Deadline', 'Fees'].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {colleges.map((college) => (
                <tr
                  key={college.rank}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    #{college.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{college.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{college.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {college.ranking}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {college.cutoff}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {college.deadline}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{college.fees}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{college.feesDesc}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopCollegesTable;