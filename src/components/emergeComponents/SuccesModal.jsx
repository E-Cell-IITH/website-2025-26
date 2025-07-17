export default function SuccessModal({onClose}){
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500 mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Registered!</h3>
            <p className="text-lg text-gray-300 mb-8">Your registration has been submitted successfully.</p>
            <button
                onClick={onClose}
                className="w-full bg-fuchsia-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300 text-xl"
            >
                Close
            </button>
        </div>
    </div>

    )
}