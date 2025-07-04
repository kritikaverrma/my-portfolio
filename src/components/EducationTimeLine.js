"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function EducationTimeline() {
    const education = [
        {
            title: "Honours Computer Science (H. BSc)",
            institution: "Ontario Tech University, Oshawa, ON",
            points: ["Dean's Honours List – Fall 2024"],
            date: "2022 – Present",
            logo: "/ontario-tech-logo.png",
        },
        {
            title: "High School",
            institution: "Richmond Hill High School, ON",
            points: ["Ontario Scholar", "12th Grade: 96%"],
            date: "2018 – 2022",
            logo: "/richmond-hill-logo.png",
        },
    ];

    return (
        <section className="py-20 max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Education</h2>

            <div className="relative border-l border-white/10 space-y-20 pl-8">
                {education.map((item, index) => {
                    const isRight = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-start ${isRight ? "" : "md:flex-row-reverse"}`}
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[30px] md:left-1/2 md:-translate-x-1/2 top-1 z-10`}>
                                <Avatar className="w-12 h-12 border border-white/20">
                                    <AvatarImage src={item.logo} alt={item.title} />
                                </Avatar>
                            </div>

                            {/* Date Label */}
                            <span
                                className={`absolute text-sm text-gray-400 top-2 ${isRight ? "left-full ml-6" : "right-full mr-6"} hidden md:block`}
                            >
                                {item.date}
                            </span>

                            {/* Spacer */}
                            <div className="hidden md:block w-1/2"></div>

                            {/* Card */}
                            <div className="w-full md:w-1/2">
                                <Card className="bg-zinc-800 text-white border border-white/10">
                                    <CardContent className="p-6 space-y-2">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.institution}</p>
                                        <ul className="list-disc list-inside mt-2 text-sm text-gray-300 space-y-1">
                                            {item.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

