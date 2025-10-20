import express from 'express'
import { changeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/compnayController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

// Register a company
router.post('/register',upload.single('image') ,registerCompany)

// Company login
router.post('/login',loginCompany)

// Get company data
router.get('/company', protectCompany ,getCompanyData)

// post a job
router.post('/post-job',protectCompany ,postJob)

// Get Applicants data of company
router.get('/applicants',protectCompany ,getCompanyJobApplicants)

// Get company job lists
router.get('/list-jobs',protectCompany ,getCompanyPostedJobs)

// Change Applications Status
router.post('/change-status',protectCompany ,changeJobApplicationsStatus)

// Change vivibilty
router.post('/change-visibilty',protectCompany ,changeVisibility)

export default router;