import React from 'react'
import { MdAssignmentReturn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { motion } from "framer-motion";
import { fadeIn } from '../../styles/variants'

export default function ButtonReturn() {
    return (
        <Container>
            <Link to="/">
                <motion.button
                    variants={fadeIn("down")}
                    initial="initial"
                    animate="animate">
                    <MdAssignmentReturn className="icon-return" /></motion.button>
            </Link>
        </Container>

    )
}
