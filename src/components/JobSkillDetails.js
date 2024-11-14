import React, { useEffect, useState } from 'react';
import apiInstance from '../api-helpers/api-helpers';
import { useDispatch, useSelector } from 'react-redux';

export default function JobSkillDetails() {
    const filters = useSelector(state => state.filters);
    const [jobData, setJobData] = useState([]);
    console.log(filters)
    useEffect(() => {
        const query = new URLSearchParams(filters).toString();
        console.log(query);
        // Correct string interpolation
        apiInstance.get(`/?${query}`)
            .then((response) => {
                console.log('Received data:', response.data);
                setJobData(response.data);
            })
            .catch((err) => {
                console.error('Error fetching job data:', err);
            });
    }, [filters]);

    return (
        <div className="mt-8">
            <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
                            Job Unique ID
                        </th>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
                            Career Areas
                        </th>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
                            Job Family
                        </th>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
                            Job Role Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Looping through jobData array */}
                    {jobData.map((job, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border-b border-gray-200 text-blue-500">
                                {job.JobUniqueID}
                            </td>
                            <td className="px-4 py-2 border-b border-gray-200">{job.CareerArea}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{job.JobFamily}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{job.JobRoleName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
