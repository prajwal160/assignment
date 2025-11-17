import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/suit_image-removebg-preview.png';

const BlobHero = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] sm:min-h-[75vh] lg:min-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
            <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <svg
                    className="w-full h-full"
                    viewBox="0 0 479 467"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Define the mask */}
                    <defs>
                        <mask id="blobMask" maskType="alpha">
                            <motion.path
                                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                                fill="white"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </mask>

                        {/* Gradient for the blob */}
                        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>

                        {/* Animated gradient for hover effect */}
                        <linearGradient id="blobGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0891b2" />
                            <stop offset="50%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                    </defs>

                    {/* Blob background with mask */}
                    <g mask="url(#blobMask)">
                        <motion.path
                            d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                            fill="url(#blobGradient)"
                            className="cursor-pointer transition-all duration-300"
                            whileHover={{ fill: "url(#blobGradientHover)" }}
                            animate={{
                                d: [
                                    "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z",
                                    "M15.19024 150.964C38.0253 81.5814 118.865 59.7299 188.111 34.4823C249.804 11.98884 315.86 -9.9503 374.735 19.143C435.207 49.026 471.948 112.508 481.191 179.311C489.897 242.229 458.931 299.377 420.506 349.954C377.74 406.245 330.068 467.801 259.442 471.189C183.416 474.835 115.552 427.137 69.1576 366.805C21.4835 304.81 -13.1617 224.583 15.19024 150.964Z",
                                    "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                                ]
                            }}
                            transition={{
                                duration: 8,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />

                        {/* Profile Image */}
                        <motion.image
                            href={photo}
                            x="50"
                            y="50"
                            width="380"
                            height="430"
                            className="object-cover"
                            preserveAspectRatio="xMidYMid slice"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </g>

                    {/* Optional: Glowing border effect */}
                    <motion.path
                        d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                        fill="none"
                        stroke="rgba(6, 182, 212, 0.3)"
                        strokeWidth="2"
                        className="blur-sm"
                        animate={{
                            strokeOpacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                </svg>
            </motion.div>
        </div>
    );
};

export default BlobHero;