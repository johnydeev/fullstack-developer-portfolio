import React from "react";
import { ClipLoader } from "react-spinners";

interface LoadingProps {
    loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="flex flex-col items-center justify-center">
                <p className="text-white text-center mt-4 py-2 text-lg">Enviando...</p>
                <ClipLoader size={50} color="#ffffff" loading={loading} />
            </div>
        </div>
    );
};

export default Loading;

