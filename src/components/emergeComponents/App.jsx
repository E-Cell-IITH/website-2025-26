"use client";
import { useState, useMemo } from "react";
import BulletPoint from "./BulletPoint";
import CheckboxField from "./CheckBoxField";
import InputField from "./InputField";
import SuccessModal from "./SuccesModal";
import RadioGroup from "./RadioGroup";
import SectionHeader from "./SectionHeader";

export default function App() {
    const [registrationType, setRegistrationType] = useState('individual');

    // State for all form inputs
    const [formData, setFormData] = useState({
        collegeName: '',
        city: '',
        state: '',
        teamName: '',
        // Individual fields
        individualName: '',
        individualEmail: '',
        individualPhone: '',
        individualYearDept: '',
        // Team fields
        teamSize: '3',
        competitionInterest: 'no', // 'yes' or 'no'
        primaryPocName: '',
        primaryPocPhone: '',
        primaryPocEmail: '',
        secondaryPocName: '',
        secondaryPocPhone: '',
        secondaryPocEmail: '',
        // Declarations
        utrNumber: '',
        confirmStudents: false,
        confirmPhysicalPresence: false,
        confirmTeamSize: false,
    });

    const [submissionStatus, setSubmissionStatus] = useState(null); // 'submitting', 'success', 'error'
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Handle input changes and update state
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Calculate the total amount to pay based on selections
    const amountToPay = useMemo(() => {
        if (registrationType === 'individual') {
            return 599;
        }
        const pricePerPerson = formData.competitionInterest === 'yes' ? 750 : 599;
        const teamSize = parseInt(formData.teamSize, 10) || 0;
        return pricePerPerson * teamSize;
    }, [registrationType, formData.competitionInterest, formData.teamSize]);

    const isSubmitDisabled = useMemo(() => {
        const baseConditions = !formData.confirmStudents || !formData.confirmPhysicalPresence;
        if (registrationType === 'team') {
            return baseConditions || !formData.confirmTeamSize;
        }
        return baseConditions;
    }, [formData.confirmStudents, formData.confirmPhysicalPresence, formData.confirmTeamSize, registrationType]);

    /**
     * Handles form submission by sending data to a Google Apps Script endpoint.
     * @param {React.FormEvent} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const submissionData1 = Object.fromEntries(formData.entries());

        console.log(submissionData1);

        if (isSubmitDisabled) return;

        setSubmissionStatus('submitting');
        const submissionData = {
            RegistrationType: registrationType,
            SubmissionTimestamp: new Date().toISOString(),
            CollegeName: formData.collegeName,
            City: formData.city,
            State: formData.state,
            AmountToPay: amountToPay,
            IndividualName: formData.individualName,
            IndividualEmail: formData.individualEmail,
            IndividualPhone: formData.individualPhone,
            IndividualYearDept: formData.individualYearDept,
            TeamName: formData.teamName,
            TeamSize: formData.teamSize,
            CompetitionInterest: formData.competitionInterest,
            utrNumber: formData.utrNumber,
            PrimaryPocName: formData.primaryPocName,
            PrimaryPocPhone: formData.primaryPocPhone,
            PrimaryPocEmail: formData.primaryPocEmail,
            SecondaryPocName: formData.secondaryPocName,
            SecondaryPocPhone: formData.secondaryPocPhone,
            SecondaryPocEmail: formData.secondaryPocEmail,
        };

        console.log(submissionData)

    };

    return (
        <>
            {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
            <div className="bg-black min-h-screen text-gray-200 ">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="max-w-5xl mx-auto py-12 sm:py-16">
                        <div className="relative flex items-center justify-center min-h-[85vh] bg-black text-center p-4">
                        {/* It's good practice to have a slightly darker background like bg-gray-900 or black when using text-white for a hero section. */}
                        <div className="max-w-5xl">

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight">
                                E-MERGE '25 <span className="mx-2 text-white">|</span> Student Registration
                            </h1>

                            <p className="mt-6 text-xl md:text-2xl lg:text-3xl text-gray-400">
                                IIT Hyderabad | 12th October 2025 | Organized by E-Cell, IIT Hyderabad
                            </p>
                        </div>
                    </div>

                        {/* --- Introduction & Pass Types --- */}
                        <div className="mb-20 p-6 sm:p-8">
                            <p className="text-2xl lg:text-3xl text-gray-300 mb-10 leading-relaxed">Welcome to the official registration form for E-MERGE '25 — a national celebration of ideas, innovation, and student entrepreneurship. Choose between:</p>
                            <div className="space-y-8 text-2xl text-gray-200">
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
                                <RadioGroup
                                    name="registrationType"
                                    legend="Are you registering as an individual or a team?"
                                    options={[
                                        { value: 'individual', label: 'Individual (I\'m attending alone)' },
                                        { value: 'team', label: 'Team (We\'re attending as a group)' }
                                    ]}
                                    selectedValue={registrationType}
                                    onChange={(e) => setRegistrationType(e.target.value)}
                                />
                            </div>

                            {/* --- Conditional: Individual Registration --- */}
                            {registrationType === 'individual' && (
                                <div className="mt-16 p-8 sm:p-10 border-l-4 border-fuchsia-500 bg-fuchsia-900/20 rounded-r-lg">
                                    <h3 className="text-4xl font-bold text-white mb-8">Personal Information</h3>
                                    <div className="space-y-10">
                                        <InputField id="individualName" label="Full Name" placeholder="Your full name" value={formData.individualName} onChange={handleInputChange} />
                                        <InputField id="individualEmail" label="Email Address" type="email" placeholder="you@example.com" value={formData.individualEmail} onChange={handleInputChange} />
                                        <InputField id="individualPhone" label="Phone Number (WhatsApp preferred)" type="tel" placeholder="+91 12345 67890" value={formData.individualPhone} onChange={handleInputChange} />
                                        <InputField id="individualYearDept" label="Year & Department" placeholder="e.g., 2nd Year, Computer Science" value={formData.individualYearDept} onChange={handleInputChange} optional={true} />
                                    </div>
                                    <div className="mt-12 p-6 bg-yellow-400/10 border border-yellow-400/30 text-yellow-200 rounded-lg text-xl">
                                        <strong>Confirmation:</strong> As an individual, you will not be eligible for The BoardRoom or Founders Forum. Your fee to be paid is ₹599.
                                    </div>
                                </div>
                            )}

                            {/* --- Conditional: Team Registration --- */}
                            {registrationType === 'team' && (
                                <div className="mt-16 p-8 sm:p-10 border-l-4 border-fuchsia-500 bg-fuchsia-900/20 rounded-r-lg">
                                    <h3 className="text-4xl font-bold text-white mb-8">Team Details</h3>
                                    <div className="space-y-14">
                                        <InputField id="teamName" label="Team Name" placeholder="Your awesome team name" value={formData.teamName} onChange={handleInputChange} />
                                        <div>
                                            <label htmlFor="teamSize" className="block text-xl font-medium text-gray-300 mb-3">Number of Team Members</label>
                                            <select id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-800 border-gray-700 text-white rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition text-xl">
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <p className="mt-3 text-lg text-gray-400">*Minimum 3 members required to participate in The BoardRoom.</p>
                                        </div>
                                        <RadioGroup
                                            name="competitionInterest"
                                            legend="Is your team interested in participating in The BoardRoom?"
                                            options={[
                                                { value: 'yes', label: 'Yes – BoardRoom + Full Access (₹750 per person)' },
                                                { value: 'no', label: 'No – General Access only (₹599 per person)' }
                                            ]}
                                            selectedValue={formData.competitionInterest}
                                            onChange={handleInputChange}
                                        />
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
                                    <img
                                        src="http://googleusercontent.com/file_content/1"
                                        alt="QR Code for payment"
                                        className="w-56 h-56 mx-auto my-6 rounded-lg"
                                    />
                                    <div className="mt-8">
                                        <label htmlFor="paymentScreenshot" className="block text-xl font-medium text-gray-300 mb-3">Enter UTR Number</label>
                                        <InputField
                                            id="utrNumber"
                                            placeholder="e.g., TXN123456789"
                                            value={formData.utrNumber}
                                            onChange={handleInputChange}
                                        />

                                    </div>
                                </div>
                            </div>

                            {/* --- Final Declarations --- */}
                            <div>
                                <SectionHeader title="Final Declarations" />
                                <div className="space-y-8">
                                    <CheckboxField id="confirmStudents" label="I confirm all team members are currently enrolled students." checked={formData.confirmStudents} onChange={handleInputChange} />
                                    <CheckboxField id="confirmPhysicalPresence" label="I understand that participants must be physically present at IIT Hyderabad on 12th October 2025." checked={formData.confirmPhysicalPresence} onChange={handleInputChange} />
                                    {registrationType === 'team' && (
                                        <CheckboxField id="confirmTeamSize" label="I understand that competition eligibility requires a team of 3–5 members." checked={formData.confirmTeamSize} onChange={handleInputChange} />
                                    )}
                                </div>
                            </div>

                            {/* --- Submit Button --- */}
                            <div className="pt-16">
                                <button
                                    type="submit"
                                    disabled={isSubmitDisabled || submissionStatus === 'submitting'}
                                    className="w-full bg-fuchsia-600 text-white font-bold py-5 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500 text-3xl shadow-lg shadow-fuchsia-800/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Registration'}
                                </button>
                                {submissionStatus === 'error' && (
                                    <p className="mt-4 text-center text-lg text-red-400">Submission failed. Please check your connection and try again.</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
