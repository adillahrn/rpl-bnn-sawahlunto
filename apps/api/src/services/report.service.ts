import { db } from '../db';
import { reports } from '../db/schema';
import { eq } from 'drizzle-orm';

export class ReportService {
    static async getAllReports() {
        return await db.select().from(reports).orderBy(reports.createdAt);
    }

    static async getReportById(id: string) {
        const result = await db.select().from(reports).where(eq(reports.id, id)).limit(1);
        return result[0];
    }

    static async createReport(data: { name?: string, phone?: string, location: string, description: string, evidenceUrl?: string }) {
        const result = await db.insert(reports).values({
            name: data.name,
            phone: data.phone,
            location: data.location,
            description: data.description,
            evidenceUrl: data.evidenceUrl,
            status: 'Pending'
        }).returning();
        return result[0];
    }

    static async updateReportStatus(id: string, status: string) {
        const result = await db.update(reports)
            .set({ status, updatedAt: new Date() })
            .where(eq(reports.id, id))
            .returning();
        return result[0];
    }
}
