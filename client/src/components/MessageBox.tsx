import React from 'react'
import CSS from 'csstype'

const messageBoxStyle: CSS.Properties = {height: '200px', width: '200px'}

type MessageBoxProps = { 
    message: string[]
}
const MessageBox = ({message}: MessageBoxProps) => {
return <textarea style={messageBoxStyle} readOnly value={message.join(' ')}/>
}

export default MessageBox