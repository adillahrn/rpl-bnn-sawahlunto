import { Router } from 'express';
import { ReportService } from '../services/report.service';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router = Router();

// Public route to submit report
router.post('/', async (req, res) => {
    try {
        const { name, phone, location, description } = req.body;
        
        // Validation for required fields
        if (!location || !description) {
            return res.status(400).json({ error: 'Location and description are required' });
        }

        // Handle file upload if any (using multer in the future)
        const evidenceUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

        const newReport = await ReportService.createReport({
            name, phone, location, description, evidenceUrl
        });

        res.status(201).json({ success: true, data: newReport });
    } catch (error) {
        console.error('Error creating report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin route to get all reports (Auth temporarily disabled for testing)
router.get('/', async (req, res) => {
    try {
        const allReports = await ReportService.getAllReports();
        res.json({ success: true, data: allReports });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin route to update report status
router.put('/:id/status', isAuthenticated, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        
        if (!['Pending', 'Investigating', 'Resolved'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }

        const updatedReport = await ReportService.updateReportStatus(id, status);
        res.json({ success: true, data: updatedReport });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
