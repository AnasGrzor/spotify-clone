"use client"

import { useEffect, useState } from "react"

import Modal from "@/components/Modal"
import AuthModal from "@/components/AuthModal"
import UploadModal from "@/components/uploadModal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false)
    },[])

    if (!isMounted) return null

    return (
        <>
            <AuthModal />
            <UploadModal />
        </>
    )
}

export default ModalProvider