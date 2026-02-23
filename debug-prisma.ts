import "dotenv/config";
import { PrismaClient } from "@prisma/client";

console.log("DATABASE_URL:", process.env.DATABASE_URL);

try {
    const prisma = new PrismaClient();
    console.log("PrismaClient initialized successfully with no args");
} catch (e) {
    if (e instanceof Error) {
        console.error("Failed to initialize with no args:", e.message);
    } else {
        console.error("Failed to initialize with no args:", e);
    }
}

try {
    const prisma = new PrismaClient({ log: ["query"] });
    console.log("PrismaClient initialized successfully with log option");
} catch (e) {
    if (e instanceof Error) {
        console.error("Failed to initialize with log option:", e.message);
    } else {
        console.error("Failed to initialize with log option:", e);
    }
}
