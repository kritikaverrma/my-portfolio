import Image from "next/image";
export const myWorks = [

    {
        title: "MoneyPay - Simulated UPI Wallet",
        status: "Live",
        description:
            "A digital wallet simulation that mimics UPI flow with double-entry accounting and a dashboard.",
        image: "/wallet.png",
        tech: ["Next.js", "Prisma", "Supabase", "Tailwind", "Webhooks"],
        sourceUrl: "https://github.com/kritikaverrma/MoneyPay",
    },
    {
        title: "ChitChat - a real-time messaging application",
        status: "Live",
        description:
            "Leverages Socket.IO for real-time messaging. It supports both individual and group chat functionalities with full user authentication and profile management.",
        image: "/chatt.png",
        tech: ["React", "Redux", "Node.js", "MongoDB", "JWT"],
        sourceUrl: "https://github.com/kritikaverrma/ChitChat",
    },
    {
        title: "MeetBot-A bot that will give you summary of your video call",
        status: "Live",
        description:
            "User can paste a meet link then the bot will automatically join the meeting. It'll record the session also generate the AI summary of the session",
        image: "https://www.irahul.xyz/_next/image?url=https%3A%2F%2Fi.imgur.com%2F4cwEYAU.png&w=640&q=75",
        tech: ["Nextjs", "Typescript", "authjs", "Prisma", "Puppeteer", "open-ai", "WisperAPI"],
        sourceUrl: "https://github.com/kritikaverrma/MeetBot",
    },
    {
        title: "Tweak - A social media application",
        status: "Live",
        description:
            "A digital wallet simulation that mimics UPI flow with double-entry accounting, QR payments, and a dashboard.",
        image: "/coder.jpeg",
        tech: ["Next.js", "Prisma", "Supabase", "Tailwind", "Webhooks"],
        sourceUrl: "https://github.com/kritikaverrma/MoneyPay",
    },
    {
        title: "Web Simulation of UbuntuOS",
        status: "Live",
        description:
            "A virtual simulation of Ubuntu 20.04 operating system on web made using NEXT.js and tailwind CSS",
        image: "/Ubuntu.jpeg",
        tech: ["Next.js", "Typescript", "tailwind CSS"],
        sourceUrl: "https://github.com/kritikaverrma/UbuntuSimulation",
    },
    {
        title: "Cinematic- A video streaming application",
        status: "Live",
        description:
            "A virtual simulation of Ubuntu 20.04 operating system on web made using NEXT.js and tailwind CSS",
        image: "/streaming.png",
        tech: ["Next.js", "Typescript", "tailwind CSS"],
        sourceUrl: "https://github.com/kritikaverrma/UbuntuSimulation",
    },
];

export const clientWorks = [
    {
        title: "Blog-er: A Browser Extension that lets you write, view and edit blogs",
        status: "Client Work",
        description:
            "Browser extension for writing and managing blogs, integrated with a headless CMS for structured content storage and publishing. Enabled rich text editing and seamless API-based content delivery.",
        image: "/coder.jpeg",
        tech: ["HTML", "CSS", "Javascript", "Chrome Extension API"],
        sourceUrl: "#",
    },
    {
        title: "SAAS tool for Penetration Testing",
        status: "Client Work",
        description:
            "a client-ready SaaS tool for penetration testing, allowing users to simulate XSS, SQLi and other attacks through an intuitive browser-based interface. Built a secure reverse proxy with iframe support and CORS bypass to safely render external pages in a controlled browser sandbox. Extracted and autofilled form actions, hidden inputs, cookies, and CSRF tokens for precise payload crafting",
        image: "/coder.jpeg",
        tech: ["Next.js", "PostgreSQL", "Chart.js", "Stripe"],
        sourceUrl: "#",
    },

];
