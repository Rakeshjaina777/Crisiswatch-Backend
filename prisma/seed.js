// prisma/seed.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Create users
  const admin = await prisma.user.create({
    data: {
      username: "admin_user",
      role: "ADMIN",
    },
  });

  const contributor = await prisma.user.create({
    data: {
      username: "reporter01",
      role: "CONTRIBUTOR",
    },
  });

  // Create a disaster
  const disaster = await prisma.disaster.create({
    data: {
      title: "2025 Mumbai Flood",
      locationName: "Mumbai, India",
      location: {
        lat: 19.076,
        lng: 72.8777,
      },
      description: "Massive flooding due to heavy rainfall in Mumbai suburbs.",
      tags: ["flood", "india", "rainfall"],
      ownerId: admin.id,
      auditTrail: {
        createdBy: admin.username,
        approvedBy: null,
      },
    },
  });

  // Create reports
  await prisma.report.createMany({
    data: [
      {
        disasterId: disaster.id,
        userId: contributor.id,
        content: "Water level rising in Andheri East",
        imageUrl: "https://example.com/andheri-flood.jpg",
        verificationStatus: "VERIFIED",
      },
      {
        disasterId: disaster.id,
        userId: contributor.id,
        content: "Blocked roads near Dadar station",
        imageUrl: "https://example.com/dadar-block.jpg",
        verificationStatus: "PENDING",
      },
    ],
  });

  // Create resources
  await prisma.resource.createMany({
    data: [
      {
        disasterId: disaster.id,
        name: "Shelter Camp A",
        locationName: "Wadala Gymkhana",
        location: {
          lat: 19.0176,
          lng: 72.8562,
        },
        type: "shelter",
      },
      {
        disasterId: disaster.id,
        name: "Relief Food Point",
        locationName: "Churchgate Station",
        location: {
          lat: 18.935,
          lng: 72.8277,
        },
        type: "food",
      },
    ],
  });

  console.log("✅ Database seed completed.");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
