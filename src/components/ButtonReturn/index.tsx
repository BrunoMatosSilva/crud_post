import React from 'react'
import { MdAssignmentReturn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export default function ButtonReturn() {
    return (
        <Container>
            <Link to="/">
                <button><MdAssignmentReturn className="icon-return" /></button>
            </Link>
        </Container>

    )
}
