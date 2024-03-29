// CompanySearchJob.js
import React, { useState } from 'react';
import { saveCompanyJob } from "../Services/CompanyJobServices";
import { useParams } from 'react-router-dom';
function CompanySearchJob() {
    //id get method
    const{id}=useParams();
    const [companySearchJob, setCompanySearchJob] = useState({
        jobTitle: '',
        jobSkill: '',
        jobExperience: '',
        salary: ''
    });
     //javascript for submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Create a Job Id=",id);
        saveCompanyJob(companySearchJob).then(responce => {
            console.log("Create a Job Id="+responce.data.id);
            setCompanySearchJob("Create a job Sucessfully="+responce.data.id);
        })
        .catch(error => {
            console.log(error);
            setCompanySearchJob("Create a job Failed");
        })
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setCompanySearchJob({ ...companySearchJob, [name]: value });
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
            <form onSubmit={handleSubmit}>
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
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                                <button type="reset" onClick={handleReset}>Reset</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div>
        </div>
    );
}

export default CompanySearchJob;
