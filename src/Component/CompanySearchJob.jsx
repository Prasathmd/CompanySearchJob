// CompanySearchJob.js
import React, { useState } from 'react';

function CompanySearchJob() {
    const [companySearchJob, setCompanySearchJob] = useState({
        jobTitle: '',
        jobSkill: '',
        jobExperience: '',
        salary: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setCompanySearchJob({ ...companySearchJob, [name]: value });
    }

    function handleSubmit(e) {
        // Handle form submission here
    }

    function handleReset() {
        setCompanySearchJob({
            jobTitle: '',
            jobSkill: '',
            jobExperience: '',
            salary: ''
        });
    }

    return (
        <div className="container">
            <div className="form-wrapper">
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td colSpan="2" className="header-cell">Company Search Job</td>
                        </tr>
                        <tr>
                            <td className="label-cell">Job Title</td>
                            <td><input type="text" name="jobTitle" value={companySearchJob.jobTitle} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className="label-cell">Job Skill</td>
                            <td><input type="text" name="jobSkill" value={companySearchJob.jobSkill} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className="label-cell">Job Experience</td>
                            <td><input type="text" name="jobExperience" value={companySearchJob.jobExperience} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td className="label-cell">Salary</td>
                            <td><input type="number" name="salary" value={companySearchJob.salary} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="button-cell">
                                <button onClick={handleSubmit}>Submit</button>
                                <button type="reset" onClick={handleReset}>Reset</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CompanySearchJob;
