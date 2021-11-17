import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../../styles/variants'

export default function Header() {
    return (
        <motion.div
            variants={fadeIn("down")}
            initial="initial"
            animate="animate">
            <h1>Crud</h1>
        </motion.div>
    )
}
