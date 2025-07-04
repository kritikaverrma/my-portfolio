"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function EducationTimeline() {
    const education = [
        {
            title: "B.Tech in Computer Science Engineering",
            institution: "JUIT, Waknaghat, Solan",
            points: ["Dean's Honours List – Fall 2024"],
            date: "2013 – 2017",
            logo: "/ontario-tech-logo.png",
        },
        {
            title: "Schooling",
            institution: "DAV Public School, Bilaspur",
            points: ["12th Grade: 90.6%"],
            date: "2012 – 2013",
            logo: "/richmond-hill-logo.png",
        },
    ];

    return (
        <section className="py-20 max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Education</h2>

            <div className="relative before:absolute before:left-[29px] md:before:left-1/2 before:top-0 before:h-full before:w-px before:bg-white/10">
                {education.map((item, index) => {
                    const isRight = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex flex-col md:grid md:grid-cols-9 md:items-center gap-6 mb-20"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[14px] md:left-1/2 transform -translate-x-1/2 top-1 z-10">
                                <Avatar className="w-12 h-12 border border-white/20">
                                    <AvatarImage src={item.logo} alt={item.title} />
                                </Avatar>
                            </div>

                            {/* Left Spacer */}
                            {isRight ? (
                                <div className="hidden md:block md:col-span-4"></div>
                            ) : (
                                <div className="hidden md:block md:col-span-4 md:col-start-6"></div>
                            )}

                            {/* Card */}
                            <div className={`md:col-span-4 ${isRight ? "md:col-start-6" : ""}`}>
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

                            {/* Date Label */}
                            <span
                                className={`absolute text-sm text-gray-400 top-2 hidden md:block ${isRight
                                        ? "left-[calc(50%+3.5rem)]"
                                        : "right-[calc(50%+3.5rem)]"
                                    }`}
                            >
                                {item.date}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

