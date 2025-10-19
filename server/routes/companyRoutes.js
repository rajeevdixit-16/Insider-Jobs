import express from 'express'
import { changeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/compnayController.js'
import upload from '../config/multer.js'

const router = express.Router()

// Register a company
router.post('/register',upload.single('image') ,registerCompany)

// Company login
router.post('/login',loginCompany)

// Get company data
router.get('/company',getCompanyData)

// post a job
router.post('/post-job',postJob)

// Get Applicants data of company
router.get('/applicants',getCompanyJobApplicants)

// Get company job lists
router.get('/list-jobs',getCompanyPostedJobs)

// Change Applications Status
router.post('/change-status',changeJobApplicationsStatus)

// Change vivibilty
router.post('/change-visibilty',changeVisibility)

export default router;