import { Company } from "../models/Company.js";
import bcrypt from 'bcrypt'

// Register a new Company

export const registerCompany = async(req,res) => {
    const {name, email, password} = req.body

    const imageFile = req.file;

    if(!name || !email || !password || !imageFile){
        return res.json({success:false,message:'Missing Details'})
    }

    try {
        const companyExists = await Company.findOne({email})
        if(companyExists){
            return res.json({success:false,message:'Company already registered'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        

    } catch (error) {
        
    }
}

// Compnay login

export const loginCompany = async(req,res) => {

}

// Get company data

export const getCompanyData = async(req,res) => {

}

// Post a new job

export const postJob = async(req,res) => {

}

// Get company job applicants

export const getCompanyJobApplicants = async(req,res) => {

}

// Get company posted jobs

export const getCompanyPostedJobs = async(req,res) =>{

}

// Change Job application status

export const changeJobApplicationsStatus = async(req,res) => {

}

// change job visibilty

export const changeVisibility = async(req,res) => {

}