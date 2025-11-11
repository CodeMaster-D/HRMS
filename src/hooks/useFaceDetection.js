// src/hooks/useFaceDetection.js
import { useState, useCallback } from 'react';
import { loadFaceDetectionModel, detectFace } from '../ml/models';

export const useFaceDetection = (webcamRef) => {
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const [faceDetected, setFaceDetected] = useState(false);
    const [modelLoading, setModelLoading] = useState(false);
    const [detector, setDetector] = useState(null);

    const loadModel = useCallback(async (setGlobalLoading) => {
        if (detector || modelLoading) return;

        setModelLoading(true);
        const d = await loadFaceDetectionModel(setGlobalLoading);
        setDetector(d);
        setIsModelLoaded(!!d);
        setModelLoading(false);
    }, [detector, modelLoading]);

    const detectFaces = useCallback(async () => {
        const videoElement = webcamRef.current?.video;
        if (!detector || !videoElement || videoElement.readyState !== 4) {
            setFaceDetected(false);
            return;
        }

        const face = await detectFace(detector, videoElement);
        setFaceDetected(!!face);
    }, [detector, webcamRef]);

    return { isModelLoaded, faceDetected, modelLoading, loadModel, detectFaces, setIsModelLoaded };
};
