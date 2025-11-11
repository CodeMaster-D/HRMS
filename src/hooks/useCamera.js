// src/hooks/useCamera.js
import { useState, useEffect, useRef } from 'react';

export const useCamera = (isOpen) => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [streamReady, setStreamReady] = useState(false);
    const streamRef = useRef(null);

    const startCamera = async () => {
        if (!isOpen) return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'user' }, 
                audio: false 
            });
            streamRef.current = stream;

            if (webcamRef.current && webcamRef.current.video) {
                webcamRef.current.video.srcObject = stream;
            }
            setStreamReady(true);
        } catch (error) {
            console.error("Error accessing camera:", error);
            setStreamReady(false);
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        setStreamReady(false);
    };

    useEffect(() => {
        if (!isOpen) stopCamera();

        return () => stopCamera();
    }, [isOpen]);

    return { webcamRef, canvasRef, streamReady, startCamera, stopCamera, setStreamReady };
};
