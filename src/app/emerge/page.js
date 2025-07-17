"use client";
import React, { useState, useMemo } from 'react';

// A stylish bullet point component
const BulletPoint = () => (
    <div className="w-3.5 h-3.5 bg-fuchsia-500 rounded-full mr-5 mt-3 flex-shrink-0"></div>
);

export default function App() {
    // State to manage the selected registration type ('individual' or 'team')
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
        confirmStudents: false,
        confirmPhysicalPresence: false,
        confirmTeamSize: false,
    });

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
        // If team is selected
        const pricePerPerson = formData.competitionInterest === 'yes' ? 750 : 599;
        const teamSize = parseInt(formData.teamSize, 10) || 0;
        return pricePerPerson * teamSize;
    }, [registrationType, formData.competitionInterest, formData.teamSize]);

    // --- Sub-components for better organization ---

    const SectionHeader = ({ title }) => (
        <div className="mb-12 mt-20 border-b border-gray-700 pb-6">
            <h2 className="text-5xl font-bold text-white">{title}</h2>
        </div>
    );

    const InputField = ({ id, label, placeholder, value, onChange, type = "text", required = true, optional = false }) => (
        <div>
            <label htmlFor={id} className="block text-xl font-medium text-gray-300 mb-3">
                {label} {optional && <span className="text-gray-400">(optional)</span>}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition text-xl"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );

    const RadioGroup = ({ name, legend, options, selectedValue, onChange }) => (
        <div>
            <legend className="block text-xl font-medium text-gray-300 mb-4">{legend}</legend>
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
                {options.map(option => (
                    <div key={option.value} className="flex items-center">
                        <input
                            id={`${name}-${option.value}`}
                            name={name}
                            type="radio"
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={onChange}
                            className="h-6 w-6 text-fuchsia-600 bg-gray-700 border-gray-600 focus:ring-fuchsia-500"
                        />
                        <label htmlFor={`${name}-${option.value}`} className="ml-4 block text-xl text-gray-200">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );

    const CheckboxField = ({ id, label, checked, onChange }) => (
       <div className="flex items-start">
            <div className="flex items-center h-7">
                <input
                    id={id}
                    name={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="focus:ring-fuchsia-500 h-6 w-6 text-fuchsia-600 bg-gray-800 border-gray-700 rounded"
                />
            </div>
            <div className="ml-4 text-xl">
                <label htmlFor={id} className="font-medium text-gray-200">{label}</label>
            </div>
        </div>
    );


    return (
        <div className="bg-black min-h-screen text-gray-200 font-sans">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto py-12 sm:py-16">
                    {/* --- Header --- */}
                    <div className="text-center border-b border-gray-700 pb-16 mb-20">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white">E-MERGE '25 | Student Registration</h1>
                        <p className="mt-6 text-2xl lg:text-3xl text-gray-400">
                            IIT Hyderabad | 12th October 2025 | Organized by E-Cell, IIT Hyderabad
                        </p>
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

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-20">
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
                                        <select id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition text-xl">
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
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">Please pay the total amount to the UPI ID: <strong className="text-gray-200">ecell@iithyderabad.upi</strong> or scan the QR code. After payment, upload the screenshot below.</p>
                                <div>
                                    <label htmlFor="paymentScreenshot" className="block text-xl font-medium text-gray-300 mb-3">Upload payment screenshot</label>
                                    <input type="file" id="paymentScreenshot" name="paymentScreenshot" className="block w-full text-xl text-gray-400 file:mr-5 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-fuchsia-500/10 file:text-fuchsia-300 hover:file:bg-fuchsia-500/20 cursor-pointer"/>
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
                            <button type="submit" className="w-full bg-fuchsia-600 text-white font-bold py-5 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500 text-3xl shadow-lg shadow-fuchsia-800/20">
                                Submit Registration
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
