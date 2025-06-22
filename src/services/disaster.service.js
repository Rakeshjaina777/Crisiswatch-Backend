// src/services/disaster.service.js
import { prisma } from "../config/db.js";

export class DisasterService {
  static async createDisaster(data) {
    return await prisma.disaster.create({ data });
  }

  static async getAllDisasters() {
    return await prisma.disaster.findMany({ orderBy: { created_at: "desc" } });
  }

  static async getDisasterById(id) {
    return await prisma.disaster.findUnique({ where: { id } });
  }

  static async deleteDisaster(id) {
    return await prisma.disaster.delete({ where: { id } });
  }
}
