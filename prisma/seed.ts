import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import bcrypt from "bcryptjs";

const adapter = new PrismaLibSql({
    url: process.env.DATABASE_URL || "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Starting seed...");

    // Create admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await prisma.user.upsert({
        where: { email: "admin@axontick.com" },
        update: {},
        create: {
            email: "admin@axontick.com",
            password: hashedPassword,
        },
    });

    // Seed Stats
    const stats = [
        { number: "50", suffix: "+", label: "Projects Completed", order: 0 },
        { number: "20", suffix: "+", label: "Clients Served", order: 1 },
        { number: "98", suffix: "%", label: "Success Rate", order: 2 },
        { number: "10", suffix: "+", label: "Countries", order: 3 },
    ];

    for (const stat of stats) {
        // Find if any stat with this label exists
        const existing = await prisma.stat.findMany({ where: { label: stat.label } });

        if (existing.length > 0) {
            // Update the first one and delete any others (cleanup duplicates)
            await prisma.stat.update({ where: { id: existing[0].id }, data: stat });
            if (existing.length > 1) {
                for (let i = 1; i < existing.length; i++) {
                    await prisma.stat.delete({ where: { id: existing[i].id } });
                }
            }
        } else {
            // Create new
            await prisma.stat.create({ data: stat });
        }
    }

    // Seed TrustLogos
    const trustLogos = [
        "BBPP", "Fachova", "Photon Minds", "Youth Revisited", "Insetik",
        "Photon Brains", "Unitflix", "HighendCare", "TradingProzess", "Experion Enterprises"
    ];

    for (let i = 0; i < trustLogos.length; i++) {
        const name = trustLogos[i];
        const existing = await prisma.trustLogo.findFirst({ where: { name } });
        if (existing) {
            await prisma.trustLogo.update({ where: { id: existing.id }, data: { order: i } });
        } else {
            await prisma.trustLogo.create({ data: { name, order: i } });
        }
    }

    // Seed Services
    const services = [
        {
            icon: "🔗",
            title: "Seamless Software Connectivity",
            desc: "Deep integrations across your entire tech stack — CRMs, ERPs, messaging platforms, and custom APIs without friction.",
            order: 0,
        },
        {
            icon: "⚡",
            title: "High-Volume Execution",
            desc: "Our workflows process millions of operations at scale with zero downtime — built for businesses that don't stop.",
            order: 1,
        },
        {
            icon: "⭐",
            title: "Exceptional Client Feedback",
            desc: "98% success rate backed by real client stories. We don't just deliver — we over-deliver, every single project.",
            order: 2,
        },
        {
            icon: "📈",
            title: "Proven Business Growth",
            desc: "Every automation is engineered to generate measurable ROI. Real value for clients across 10+ countries worldwide.",
            order: 3,
        },
    ];

    for (const service of services) {
        const existing = await prisma.service.findFirst({ where: { title: service.title } });
        if (existing) {
            await prisma.service.update({ where: { id: existing.id }, data: service });
        } else {
            await prisma.service.create({ data: service });
        }
    }

    // Seed Steps
    const steps = [
        {
            number: "01",
            title: "Define Your Agent's Mission",
            desc: "Tell us what you need automated — from customer support to lead qualification, data entry to outreach. We map every workflow and edge case.",
            pill: "🔍 Discovery Call — 30 min",
            order: 0,
        },
        {
            number: "02",
            title: "We Build & Train Your Agent",
            desc: "Our team configures, trains, and tests your AI agent against real scenarios. You review, request changes, and approve — we handle all the complexity.",
            pill: "⚙️ Build Sprint — 3–5 days",
            order: 1,
        },
        {
            number: "03",
            title: "Deploy, Monitor & Scale",
            desc: "Go live with a fully monitored agent. Real-time dashboards, performance reports, and our team on standby to optimize as your business grows.",
            pill: "🚀 Go Live — within 48hrs",
            order: 2,
        },
    ];

    for (const step of steps) {
        const existing = await prisma.step.findFirst({ where: { title: step.title } });
        if (existing) {
            await prisma.step.update({ where: { id: existing.id }, data: step });
        } else {
            await prisma.step.create({ data: step });
        }
    }

    // Seed Solutions
    const solutions = [
        {
            slug: "chatbot",
            icon: "💬",
            title: "Omnichannel Chatbots",
            desc: "Intelligent chatbots for Email, Website, WhatsApp, SMS, Slack, Discord, and any other platform you operate on.",
            features: "Multi-platform Support, Instant Responses & 24/7 Availability, Lead Qualification",
            link: "/services/chatbot",
            order: 0,
        },
        {
            slug: "voice",
            icon: "🎙️",
            title: "AI Voice Agents",
            desc: "Human-like voice agents utilizing Twilio, Vapi, Retell, and other platforms for seamless inbound and outbound communication.",
            features: "Natural Conversations, Inbound / Outbound Calls, Real-time Transcription & Sentiment Analysis",
            link: "/services/voice-agent",
            order: 1,
        },
        {
            slug: "marketing",
            icon: "🚀",
            title: "Marketing & Sales Automation",
            desc: "Automate your marketing funnels and sales pipelines to drive growth and efficiency at every stage of the customer journey.",
            features: "Lead Nurturing & Campaign Management, CRM Integration, Performance Tracking",
            link: "/services/marketing-automation",
            order: 2,
        },
        {
            slug: "workflow",
            icon: "🔁",
            title: "Workflow Automation",
            desc: "Optimize business operations by automating repetitive tasks across all your apps — saving time and eliminating human error.",
            features: "Process Optimization, Error Reduction & Time Saving, Scalable Solutions",
            link: "/services/workflow-automation",
            order: 3,
        },
        {
            slug: "hr",
            icon: "👥",
            title: "HR & Support Automation",
            desc: "Streamline internal HR processes and automate customer support tickets to free your team for high-value work.",
            features: "Onboarding Automation, Ticket Resolution, Employee Self-service & Knowledge Base",
            link: "/services/hr-support",
            order: 4,
        },
        {
            slug: "data",
            icon: "📊",
            title: "Data Analytics & AI Systems",
            desc: "Unlock actionable insights from your data with advanced analytics, custom AI models, and real-time dashboards.",
            features: "Predictive Modeling, Real-time Dashboards, Custom AI Models & Neural Networks",
            link: "/services/data-analytics",
            order: 5,
        },
    ];

    for (const solution of solutions) {
        await prisma.solution.upsert({
            where: { slug: solution.slug },
            update: solution,
            create: solution,
        });
    }

    // Seed Projects
    const projects = [
        {
            cat: "chatbot",
            emoji: "🤖",
            tag: "Chatbot",
            name: "Youth Revisited Chatbot",
            desc: "AI-powered chatbot built with n8n, custom WordPress front-end, and a PHP REST API. Leverages Pinecone vector database for semantic search.",
            order: 0,
        },
        {
            cat: "voice",
            emoji: "📞",
            tag: "Voice Automation",
            name: "Youth Revisited Receptionist",
            desc: "Intelligent voice agent that fields incoming calls, captures customer details for seamless followups, and resolves inquiries.",
            order: 1,
        },
        {
            cat: "automation",
            emoji: "📋",
            tag: "Customer Follow-Up",
            name: "BBPP Customer FollowUp Automation",
            desc: "Retrieves customer follow-up schedules from Google Sheets, checks conditions, fetches cover images, and sends MMS via Twilio.",
            order: 2,
        },
    ];

    for (const project of projects) {
        const existing = await prisma.project.findFirst({ where: { name: project.name } });
        if (existing) {
            await prisma.project.update({ where: { id: existing.id }, data: project });
        } else {
            await prisma.project.create({ data: project });
        }
    }

    // Seed Testimonials
    const testimonials = [
        {
            quote: "Outstanding Service from Mohammed! His expertise in AI helped us navigate challenges and seize new opportunities, leading to significant improvements in our operations.",
            author: "Youth Revisited",
            role: "AI Automation Client",
            avatar: "YR",
            order: 0,
        }
    ];

    for (const testimonial of testimonials) {
        const existing = await prisma.testimonial.findFirst({ where: { author: testimonial.author } });
        if (existing) {
            await prisma.testimonial.update({ where: { id: existing.id }, data: testimonial });
        } else {
            await prisma.testimonial.create({ data: testimonial });
        }
    }

    // Seed Faqs
    const faqs = [
        {
            question: "How fast can we go live?",
            answer: "Our streamlined deployment process means your first autonomous agent can be live within 48 to 72 hours, depending on complexity.",
            order: 0,
        },
        {
            question: "Do I need to be tech-savvy?",
            answer: "Not at all. We handle all the engineering, training, and integration. You just tell us your mission, and we build the system to execute it.",
            order: 1,
        }
    ];

    for (const faq of faqs) {
        const existing = await prisma.faq.findFirst({ where: { question: faq.question } });
        if (existing) {
            await prisma.faq.update({ where: { id: existing.id }, data: faq });
        } else {
            await prisma.faq.create({ data: faq });
        }
    }

    console.log("Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
