import { Email, Phone, ContentCopy } from '@mui/icons-material'
import { Chip } from '@mui/material'
import React, { useState } from 'react'

export default function ClickableChip({type, lead}) {
    const [copyTimeoutID, setCopyTimeoutID] = useState(0)
    const [copiedState, setCopiedState] = useState(false)
    const [hovering, setHovering] = useState(false)
    const content = type === "email" ? lead.email : lead.phone
    const icon = type === "email" ? <Email /> : <Phone /> 
    
    function handleClick() {
        navigator.clipboard.writeText(content)
        setCopiedState(true)
        clearTimeout(copyTimeoutID)
        setCopyTimeoutID(setTimeout(() => setCopiedState(false), 800))
    }

  return (
    <Chip
        icon={hovering ? <ContentCopy /> : icon}
        label={copiedState ? "Copied!" : content}
        onClick={handleClick}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
    />
  )
}
