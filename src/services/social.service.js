// src/services/social.service.js
import { prisma } from "../config/db.js";

const MOCK_POSTS = {
  twitter: [
    { username: "user1", content: "Massive flood near Mumbai" },
    { username: "reliefBot", content: "Relief arriving soon!" },
  ],
  reddit: [
    { username: "disasterMod", content: "Earthquake in Delhi?" },
    { username: "eyeWitness", content: "Fire spotted in Himachal" },
  ],
};

export class SocialService {
  static async ingest(platform, keyword) {
    const filtered = MOCK_POSTS[platform].filter((p) =>
      p.content.toLowerCase().includes(keyword.toLowerCase())
    );

    const saved = await Promise.all(
      filtered.map((p) =>
        prisma.socialPost.create({
          data: {
            ...p,
            platform,
            keyword,
          },
        })
      )
    );

    return saved;
  }

  static async getAll() {
    return prisma.socialPost.findMany({
      orderBy: { timestamp: "desc" },
    });
  }
}
