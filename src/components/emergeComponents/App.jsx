// src/components/RegistrationForm.jsx

"use client";
import React, { useState, useMemo } from 'react';

// --- Component Placeholders ---
// NOTE: Ensure you have these components created in your project.
const InputField = ({ id, label, value, onChange, placeholder, type = "text", optional = false }) => (
    <div>
        <label htmlFor={id} className="block text-xl font-medium text-gray-300 mb-3">{label} {optional && <span className="text-gray-400">(optional)</span>}</label>
        <input type={type} id={id} name={id} className="w-full px-6 py-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition text-xl" placeholder={placeholder} value={value} onChange={onChange} required={!optional} />
    </div>
);
const CheckboxField = ({ id, label, checked, onChange }) => (
    <div className="flex items-center"><input id={id} name={id} type="checkbox" className="h-6 w-6 rounded border-gray-600 bg-gray-800 text-fuchsia-600 focus:ring-fuchsia-500" checked={checked} onChange={onChange} /><label htmlFor={id} className="ml-4 text-xl text-gray-300">{label}</label></div>
);
const RadioGroup = ({ name, legend, options, selectedValue, onChange }) => (
    <fieldset><legend className="text-xl font-medium text-gray-300 mb-4">{legend}</legend><div className="space-y-4">{options.map(opt => <div key={opt.value} className="flex items-center"><input type="radio" id={`${name}-${opt.value}`} name={name} value={opt.value} checked={selectedValue === opt.value} onChange={onChange} className="h-5 w-5 text-fuchsia-600 bg-gray-800 border-gray-600 focus:ring-fuchsia-500" /><label htmlFor={`${name}-${opt.value}`} className="ml-4 text-xl text-gray-200">{opt.label}</label></div>)}</div></fieldset>
);
const SectionHeader = ({ title }) => <h2 className="text-4xl font-bold border-b-2 border-fuchsia-500 pb-4 mb-10 text-white">{title}</h2>;
const SuccessModal = ({ onClose }) => (<div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"><div className="bg-gray-800 p-10 rounded-lg text-center shadow-2xl border border-fuchsia-500"><h3 className="text-3xl font-bold text-green-400 mb-4">Registration Successful!</h3><p className="text-xl text-gray-300 mb-8">Your details have been recorded. See you at E-MERGE '25!</p><button onClick={onClose} className="bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-fuchsia-700 transition-colors">Close</button></div></div>);
const BulletPoint = () => <span className="text-fuchsia-400 text-3xl mr-4 mt-1">▪</span>;


export default function RegistrationForm() {
    const [registrationType, setRegistrationType] = useState('individual');

    const [formData, setFormData] = useState({
        collegeName: '', city: '', state: '', teamName: '',
        individualName: '', individualEmail: '', individualPhone: '', individualYearDept: '',
        teamSize: '3', competitionInterest: 'no',
        primaryPocName: '', primaryPocPhone: '', primaryPocEmail: '',
        secondaryPocName: '', secondaryPocPhone: '', secondaryPocEmail: '',
        utrNumber: '', confirmStudents: false, confirmPhysicalPresence: false, confirmTeamSize: false,
    });

    const [submissionStatus, setSubmissionStatus] = useState(null); // 'submitting', 'success', 'error'
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const amountToPay = useMemo(() => {
        if (registrationType === 'individual') return 599;
        const pricePerPerson = formData.competitionInterest === 'yes' ? 750 : 599;
        return pricePerPerson * (parseInt(formData.teamSize, 10) || 0);
    }, [registrationType, formData.competitionInterest, formData.teamSize]);

    const isSubmitDisabled = useMemo(() => {
        const baseConditions = !formData.confirmStudents || !formData.confirmPhysicalPresence;
        if (registrationType === 'team') return baseConditions || !formData.confirmTeamSize;
        return baseConditions;
    }, [formData.confirmStudents, formData.confirmPhysicalPresence, formData.confirmTeamSize, registrationType]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('submitting');

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbya7RoG7QJ3-qR2s6o1thMySAiwnFV54wbKnB6MIUWVkD508exu2wy126Khc1aT1Ac/exec", {
                method: "POST",
                redirect: "follow",
                headers: {
                    "Content-Type": "plain/text",
                },
                body: JSON.stringify({
                    ...formData,
                    registrationType,
                }),
            });

            const result = await response.json();

            if (result.status === 'success') {
                setShowSuccessModal(true);
                setSubmissionStatus('success');
            } else {
                throw new Error(result.message || 'Unknown error');
            }
        } catch (err) {
            console.error(err);
            setSubmissionStatus('error');
        }
    };


    return (
        <>
            {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
            <div className="min-h-screen text-gray-200">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="max-w-5xl mx-auto py-12 sm:py-16">
                        <div className="relative flex flex-col items-center justify-center min-h-[92vh] text-center p-4">
                            <h1 className="custom-heading text-glow text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold mb-6 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent transition-opacity duration-200">
                                E-MERGE '25
                            </h1>

                            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 animate-pulse"></div>
                            <p className="mt-6 text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-gray-400 via-gray-300 to-blue-300 bg-clip-text text-transparent">
                                12th October 2025 | Organized by E-Cell, IIT Hyderabad
                            </p>
                        </div>
                        <div className="mb-20 p-6 sm:p-8">
                            <p className="text-2xl lg:text-3xl text-gray-300 mb-10 leading-relaxed">Welcome to the official registration form for E-MERGE '25 — a national celebration of ideas, innovation, and student entrepreneurship. Choose between:</p>
                            <div className="space-y-8 text-2xl text-gray-200">
                                <div className="flex"><BulletPoint /><p><strong>E-MERGE Full Access (₹750):</strong> Unlock the complete E-MERGE experience! Participate in The BoardRoom competition, attend high-impact speaker sessions, take part in immersive workshops, and more.</p></div>
                                <div className="flex"><BulletPoint /><p><strong>E-MERGE General Access (₹599):</strong> Join us for a day of enriching speaker sessions, exciting workshops, and the buzzing Networking Arena. Does not include competition access.</p></div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-20">
                            {/* --- Section 1: College Details --- */}
                            <div>
                                <SectionHeader title="Section 1: College Details" />
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
                                    <InputField id="collegeName" label="College Name" placeholder="e.g., Indian Institute of Technology Hyderabad" value={formData.collegeName} onChange={handleInputChange} />
                                    <InputField id="city" label="City" placeholder="e.g., Kandi" value={formData.city} onChange={handleInputChange} />
                                    <InputField id="state" label="State" placeholder="e.g., Telangana" value={formData.state} onChange={handleInputChange} />
                                </div>
                            </div>

                            {/* --- Section 2: Registration Type --- */}
                            <div>
                                <SectionHeader title="Section 2: Registration Type" />
                                <RadioGroup name="registrationType" legend="Are you registering as an individual or a team?" options={[{ value: 'individual', label: 'Individual (I\'m attending alone)' }, { value: 'team', label: 'Team (We\'re attending as a group)' }]} selectedValue={registrationType} onChange={(e) => setRegistrationType(e.target.value)} />
                            </div>

                            {/* --- Conditional Sections --- */}
                            {registrationType === 'individual' && (
                                <div className="mt-16 p-8 sm:p-10 border-l-4 border-fuchsia-500 bg-fuchsia-900/20 rounded-r-lg">
                                    <h3 className="text-4xl font-bold text-white mb-8">Personal Information</h3>
                                    <div className="space-y-10">
                                        <InputField id="individualName" label="Full Name" placeholder="Your full name" value={formData.individualName} onChange={handleInputChange} />
                                        <InputField id="individualEmail" label="Email Address" type="email" placeholder="you@example.com" value={formData.individualEmail} onChange={handleInputChange} />
                                        <InputField id="individualPhone" label="Phone Number (WhatsApp preferred)" type="tel" placeholder="+91 12345 67890" value={formData.individualPhone} onChange={handleInputChange} />
                                        <InputField id="individualYearDept" label="Year & Department" placeholder="e.g., 2nd Year, Computer Science" value={formData.individualYearDept} onChange={handleInputChange} optional={true} />
                                    </div>
                                    <div className="mt-12 p-6 bg-yellow-400/10 border border-yellow-400/30 text-yellow-200 rounded-lg text-xl"><strong>Confirmation:</strong> As an individual, you will not be eligible for The BoardRoom or Founders Forum. Your fee to be paid is ₹599.</div>
                                </div>
                            )}

                            {registrationType === 'team' && (
                                <div className="mt-16 p-8 sm:p-10 border-l-4 border-fuchsia-500 bg-fuchsia-900/20 rounded-r-lg">
                                    <h3 className="text-4xl font-bold text-white mb-8">Team Details</h3>
                                    <div className="space-y-14">
                                        <InputField id="teamName" label="Team Name" placeholder="Your awesome team name" value={formData.teamName} onChange={handleInputChange} />
                                        <div>
                                            <label htmlFor="teamSize" className="block text-xl font-medium text-gray-300 mb-3">Number of Team Members</label>
                                            <select id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-800 border-gray-700 text-white rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition text-xl">
                                                <option>3</option><option>4</option><option>5</option>
                                            </select>
                                            <p className="mt-3 text-lg text-gray-400">*Minimum 3 members required to participate in The BoardRoom.</p>
                                        </div>
                                        <RadioGroup name="competitionInterest" legend="Is your team interested in participating in The BoardRoom?" options={[{ value: 'yes', label: 'Yes – BoardRoom + Full Access (₹750 per person)' }, { value: 'no', label: 'No – General Access only (₹599 per person)' }]} selectedValue={formData.competitionInterest} onChange={handleInputChange} />
                                        <div>
                                            <h4 className="text-3xl font-semibold text-white mb-6">Point of Contact Details</h4>
                                            <div className="space-y-10 p-8 border border-gray-700 rounded-lg bg-gray-900/40">
                                                <h5 className="font-semibold text-2xl text-gray-100">Primary POC</h5>
                                                <InputField id="primaryPocName" label="Primary POC Name" value={formData.primaryPocName} onChange={handleInputChange} />
                                                <InputField id="primaryPocPhone" label="Phone Number" type="tel" value={formData.primaryPocPhone} onChange={handleInputChange} />
                                                <InputField id="primaryPocEmail" label="Email Address" type="email" value={formData.primaryPocEmail} onChange={handleInputChange} />
                                                <h5 className="font-semibold pt-8 border-t border-gray-700 text-2xl text-gray-100">Secondary POC</h5>
                                                <InputField id="secondaryPocName" label="Secondary POC Name" value={formData.secondaryPocName} onChange={handleInputChange} />
                                                <InputField id="secondaryPocPhone" label="Phone Number" type="tel" value={formData.secondaryPocPhone} onChange={handleInputChange} />
                                                <InputField id="secondaryPocEmail" label="Email Address" type="email" value={formData.secondaryPocEmail} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* --- Payment Summary --- */}
                            <div>
                                <SectionHeader title="Total Payment Summary" />
                                <div className="p-8 sm:p-12 bg-gray-900/70 border border-gray-700 rounded-lg">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                                        <span className="text-3xl font-medium text-gray-300 mb-3 sm:mb-0">Amount to Pay:</span>
                                        <span className="text-6xl font-bold text-fuchsia-400">₹{amountToPay.toLocaleString('en-IN')}</span>
                                    </div>
                                    <p className="text-xl text-gray-400 mb-6 leading-relaxed text-center">Please pay the total amount to the UPI ID: <strong className="text-gray-200">ecell@iithyderabad.upi</strong> or scan the QR code below.</p>
                                    <img src="https://placehold.co/224x224/111827/ffffff?text=QR+Code" alt="QR Code for payment" className="w-56 h-56 mx-auto my-6 rounded-lg" />
                                    <div className="mt-8">
                                        <InputField id="utrNumber" label="Enter UTR Number" placeholder="e.g., TXN123456789" value={formData.utrNumber} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>

                            {/* --- Final Declarations & Submit --- */}
                            <div>
                                <SectionHeader title="Final Declarations" />
                                <div className="space-y-8">
                                    <CheckboxField id="confirmStudents" label="I confirm all team members are currently enrolled students." checked={formData.confirmStudents} onChange={handleInputChange} />
                                    <CheckboxField id="confirmPhysicalPresence" label="I understand that participants must be physically present at IIT Hyderabad on 12th October 2025." checked={formData.confirmPhysicalPresence} onChange={handleInputChange} />
                                    {registrationType === 'team' && <CheckboxField id="confirmTeamSize" label="I understand that competition eligibility requires a team of 3–5 members." checked={formData.confirmTeamSize} onChange={handleInputChange} />}
                                </div>
                            </div>

                            <div className="pt-16">
                                <button type="submit" disabled={isSubmitDisabled || submissionStatus === 'submitting'} className="w-full bg-fuchsia-600 text-white font-bold py-5 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500 text-3xl shadow-lg shadow-fuchsia-800/20 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Registration'}
                                </button>
                                {submissionStatus === 'error' && <p className="mt-4 text-center text-lg text-red-400">Submission failed. Please check your connection and try again.</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
