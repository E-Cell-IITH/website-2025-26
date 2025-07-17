import BulletPoint from "./BulletPoint"

export default function Introduction(){
    return (
        <div className="mb-8 p-6">
            <p className="text-gray-300 mb-4">Welcome to the official registration form for E-MERGE '25 — a national celebration of ideas, innovation, and student entrepreneurship. Choose between:</p>
            <div className="space-y-3 text-gray-200">
                <div className="flex">
                    <BulletPoint />
                    <p><strong>E-MERGE Full Access (₹750):</strong> Unlock the complete E-MERGE experience! Participate in The BoardRoom competition, attend high-impact speaker sessions, take part in immersive workshops, and more.</p>
                </div>
                <div className="flex">
                    <BulletPoint />
                    <p><strong>E-MERGE General Access (₹599):</strong> Join us for a day of enriching speaker sessions, exciting workshops, and the buzzing Networking Arena. Does not include competition access.</p>
                </div>
            </div>
        </div>
    )
}