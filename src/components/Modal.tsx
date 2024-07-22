import React from 'react'
import './Modal.css'

interface ModalProps {
    title: string
    children: React.ReactNode
    onClose: () => void
}

export function Modal({ children, title, onClose }: ModalProps) {
    return (
        <>
            <div className="bg-modal" onClick={onClose}/>
            <div className='conteiner-modal'>
                <h1 className='title-modal'>{title}</h1>
                {children}
            </div>
        </>
    )
}