"use client";
import React, { useState, useMemo, useEffect } from 'react';

// --- Enhanced Component Design ---
const InputField = ({ id, label, value, onChange, placeholder, type = "text", optional = false }) => (
    <div className="group">
        <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-white">
            {label} {optional && <span className="text-gray-600 text-xs font-normal">(optional)</span>}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 placeholder-gray-500 hover:bg-gray-750"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={!optional}
        />
    </div>
);

const CheckboxField = ({ id, label, checked, onChange }) => (
    <div className="flex items-start group">
        <input
            id={id}
            name={id}
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-white transition-all duration-200"
            checked={checked}
            onChange={onChange}
        />
        <label htmlFor={id} className="ml-3 text-gray-300 leading-relaxed group-hover:text-white transition-colors cursor-pointer text-sm">
            {label}
        </label>
    </div>
);

const RadioGroup = ({ name, legend, options, selectedValue, onChange }) => (
    <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-gray-400 mb-3">{legend}</legend>
        <div className="space-y-2">
            {options.map(opt => (
                <div key={opt.value} className="flex items-start group cursor-pointer">
                    <input
                        type="radio"
                        id={`${name}-${opt.value}`}
                        name={name}
                        value={opt.value}
                        checked={selectedValue === opt.value}
                        onChange={onChange}
                        className="mt-1 h-4 w-4 text-white bg-gray-800 border-gray-600 focus:ring-2 focus:ring-white transition-all duration-200"
                    />
                    <label
                        htmlFor={`${name}-${opt.value}`}
                        className="ml-3 text-gray-300 leading-relaxed group-hover:text-white transition-colors cursor-pointer text-sm"
                    >
                        {opt.label}
                    </label>
                </div>
            ))}
        </div>
    </fieldset>
);

const SectionHeader = ({ title }) => (
    <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <div className="h-px w-12 bg-white"></div>
    </div>
);

const SuccessModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg text-center shadow-xl max-w-md w-full">
            <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Registration Successful!</h3>
            <p className="text-gray-400 mb-6 text-sm">Your details have been recorded. See you at E-MERGE '25!</p>
            <button
                onClick={onClose}
                className="bg-white text-black font-medium py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
                Close
            </button>
        </div>
    </div>
);

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        // Set target date to 2 weeks from now
       const targetDate = new Date("2025-09-27T23:59:59+05:30");

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                setIsExpired(true);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    if (isExpired) {
        return (
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-700 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-red-300 mb-2">Early Bird Offer Expired</h3>
                    <p className="text-gray-300 text-sm">Full Access now available at regular price</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-700 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center mb-4">
                <div className="inline-flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">Early Bird Offer</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-center space-x-3 mb-3">
                    <span className="text-2xl font-bold text-yellow-400">₹1499</span>
                </div>
                <p className="text-gray-300 text-sm">Full Access with BoardRoom Competition</p>
            </div>

            <div className="grid grid-cols-4 gap-3 text-center">
                {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Min', value: timeLeft.minutes },
                    { label: 'Sec', value: timeLeft.seconds }
                ].map((item, index) => (
                    <div key={index} className="bg-black/50 rounded-lg p-3 border border-gray-700">
                        <div className="text-xl font-bold text-white">{item.value.toString().padStart(2, '0')}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ScrollReveal = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(ref);
        return () => observer.unobserve(ref);
    }, [ref]);

    return (
        <div
            ref={setRef}
            className={`transition-all duration-700 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default function RegistrationForm() {
    const [registrationType, setRegistrationType] = useState('individual');

    const getInitialFormData = () => ({
        registrationType: 'individual',
        collegeName: '',
        city: '',
        state: '',
        teamName: '',
        individualName: '',
        individualEmail: '',
        individualPhone: '',
        individualYearDept: '',
        teamSize: '0',
        competitionInterest: 'no',
        primaryPocName: '',
        primaryPocPhone: '',
        primaryPocEmail: '',
        secondaryPocName: '',
        secondaryPocPhone: '',
        secondaryPocEmail: '',
        utrNumber: '',
        confirmStudents: false,
        confirmPhysicalPresence: false,
        confirmTeamSize: false,
    });

    const [formData, setFormData] = useState(getInitialFormData());
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleRegistrationTypeChange = (e) => {
        const newType = e.target.value;
        setRegistrationType(newType);
        setFormData(prev => ({
            ...prev,
            registrationType: newType,
            teamSize: newType === 'team' ? '3' : '0'
        }));
    };

    const amountToPay = useMemo(() => {
        if (registrationType === 'individual') return 799;
        const pricePerPerson = formData.competitionInterest === 'yes' ? 1499 : 799;
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

        const EMERGE_DEPLOYMENT_LINK = process.env.NEXT_PUBLIC_EMERGE_DEPLOYMENT_LINK
        // console.log(EMERGE_DEPLOYMENT_LINK)

        try {
            const response = await fetch(EMERGE_DEPLOYMENT_LINK, {
                method: "POST",
                redirect: "follow",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
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

            setTimeout(() => {
                setShowSuccessModal(true);
                setSubmissionStatus('success');
                setFormData(getInitialFormData());
                setRegistrationType('individual');
            }, 1000);

        } catch (err) {
            console.error(err);
            setSubmissionStatus('error');
        }
    };

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
        setSubmissionStatus(null);
    };

    return (
        <>
            {showSuccessModal && <SuccessModal onClose={handleSuccessModalClose} />}

            <div className="bg-black text-white min-h-screen">
                {/* Hero Section - Full Screen */}
                <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
                        E-MERGE '25
                    </h1>
                    <div className="w-16 h-px bg-white mb-6"></div>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl">
                        12th October 2025 • Organized by E-Cell, IIT Hyderabad
                    </p>
                    <div className="mb-12 max-w-md w-full">
                        <CountdownTimer />
                    </div>
                    <div className="animate-bounce">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-6 pb-16">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Welcome Section */}
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                    Welcome to the official registration for E-MERGE '25 — a national celebration of ideas, innovation, and student entrepreneurship.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                        <h3 className="font-semibold text-white mb-2 flex items-center justify-between">
                                            E-MERGE Full Access
                                            <div className="flex items-center space-x-2">
                                                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium">₹1499</span>
                                            </div>
                                        </h3>
                                        <p className="text-gray-400 text-sm">Complete experience with BoardRoom competition, speaker sessions, workshops, and networking.</p>
                                    </div>
                                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                        <h3 className="font-semibold text-white mb-2 flex items-center justify-between">
                                            E-MERGE General Access
                                            <span className="bg-white text-black text-sm px-3 py-1 rounded-full font-medium">₹799</span>
                                        </h3>
                                        <p className="text-gray-400 text-sm">Speaker sessions, workshops, and networking arena. Perfect for learning and connecting.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Registration Form */}
                        <div className="space-y-12">

                            {/* College Details */}
                            <ScrollReveal>
                                <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                    <SectionHeader title="College Details" />
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <InputField
                                            id="collegeName"
                                            label="College Name"
                                            placeholder="e.g., Indian Institute of Technology Hyderabad"
                                            value={formData.collegeName}
                                            onChange={handleInputChange}
                                        />
                                        <div></div>
                                        <InputField
                                            id="city"
                                            label="City"
                                            placeholder="e.g., Kandi"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                        <InputField
                                            id="state"
                                            label="State"
                                            placeholder="e.g., Telangana"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Registration Type */}
                            <ScrollReveal>
                                <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                    <SectionHeader title="Registration Type" />
                                    <RadioGroup
                                        name="registrationType"
                                        legend="Are you registering as an individual or a team?"
                                        options={[
                                            { value: 'individual', label: 'Individual (I\'m attending alone)' },
                                            { value: 'team', label: 'Team (We\'re attending as a group)' }
                                        ]}
                                        selectedValue={registrationType}
                                        onChange={handleRegistrationTypeChange}
                                    />
                                </div>
                            </ScrollReveal>

                            {/* Individual Section */}
                            {registrationType === 'individual' && (
                                <ScrollReveal>
                                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                        <SectionHeader title="Personal Information" />

                                        <div className="space-y-6">
                                            <InputField
                                                id="individualName"
                                                label="Full Name"
                                                placeholder="Your full name"
                                                value={formData.individualName}
                                                onChange={handleInputChange}
                                            />
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                <InputField
                                                    id="individualEmail"
                                                    label="Email Address"
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    value={formData.individualEmail}
                                                    onChange={handleInputChange}
                                                />
                                                <InputField
                                                    id="individualPhone"
                                                    label="Phone Number"
                                                    type="tel"
                                                    placeholder="+91 12345 67890"
                                                    value={formData.individualPhone}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <InputField
                                                id="individualYearDept"
                                                label="Year & Department"
                                                placeholder="e.g., 2nd Year, Computer Science"
                                                value={formData.individualYearDept}
                                                onChange={handleInputChange}
                                                optional={true}
                                            />
                                        </div>

                                        <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-800 rounded-lg">
                                            <p className="text-yellow-200 text-sm">
                                                <span className="font-medium">Note:</span> As an individual, you will not be eligible for The BoardRoom or Founders Forum. Your registration fee is ₹799.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )}

                            {/* Team Section */}
                            {registrationType === 'team' && (
                                <ScrollReveal>
                                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                        <SectionHeader title="Team Details" />

                                        <div className="space-y-8">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                <InputField
                                                    id="teamName"
                                                    label="Team Name"
                                                    placeholder="Your awesome team name"
                                                    value={formData.teamName}
                                                    onChange={handleInputChange}
                                                />
                                                <div>
                                                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-400 mb-2">
                                                        Number of Team Members
                                                    </label>
                                                    <select
                                                        id="teamSize"
                                                        name="teamSize"
                                                        value={formData.teamSize}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                                                    >
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                    <p className="mt-2 text-xs text-gray-500">Minimum 3 members required for The BoardRoom.</p>
                                                </div>
                                            </div>

                                            <RadioGroup
                                                name="competitionInterest"
                                                legend="Is your team interested in participating in The BoardRoom?"
                                                options={[
                                                    { value: 'yes', label: 'Yes – BoardRoom + Full Access (₹1499 per person)' },
                                                    { value: 'no', label: 'No – General Access only (₹799 per person)' }
                                                ]}
                                                selectedValue={formData.competitionInterest}
                                                onChange={handleInputChange}
                                            />

                                            {/* POC Details */}
                                            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                                                <h4 className="text-sm font-medium text-gray-400 mb-4">Point of Contact Details</h4>

                                                <div className="space-y-6">
                                                    <div>
                                                        <h5 className="font-medium text-white mb-3 text-sm">Primary POC</h5>
                                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                                            <InputField
                                                                id="primaryPocName"
                                                                label="Name"
                                                                value={formData.primaryPocName}
                                                                onChange={handleInputChange}
                                                            />
                                                            <InputField
                                                                id="primaryPocPhone"
                                                                label="Phone"
                                                                type="tel"
                                                                value={formData.primaryPocPhone}
                                                                onChange={handleInputChange}
                                                            />
                                                            <InputField
                                                                id="primaryPocEmail"
                                                                label="Email"
                                                                type="email"
                                                                value={formData.primaryPocEmail}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="pt-4 border-t border-gray-700">
                                                        <h5 className="font-medium text-white mb-3 text-sm">Secondary POC</h5>
                                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                                            <InputField
                                                                id="secondaryPocName"
                                                                label="Name"
                                                                value={formData.secondaryPocName}
                                                                onChange={handleInputChange}
                                                            />
                                                            <InputField
                                                                id="secondaryPocPhone"
                                                                label="Phone"
                                                                type="tel"
                                                                value={formData.secondaryPocPhone}
                                                                onChange={handleInputChange}
                                                            />
                                                            <InputField
                                                                id="secondaryPocEmail"
                                                                label="Email"
                                                                type="email"
                                                                value={formData.secondaryPocEmail}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )}

                            {/* Payment Summary */}
                            <ScrollReveal>
                                <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                    <SectionHeader title="Payment Summary" />

                                    <div className="text-center mb-8">
                                        <p className="text-gray-400 mb-2 text-sm">Total Amount</p>
                                        <div className="text-4xl font-bold text-white">
                                            ₹{amountToPay.toLocaleString('en-IN')}
                                        </div>
                                    </div>

                                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
                                        <div className="flex justify-center mb-4">
                                            <div className="bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600">
                                                <img
                                                    src="/ecell-emerge.jpeg"
                                                    alt="QR Code for payment"
                                                    className="rounded"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <InputField
                                        id="utrNumber"
                                        label="UTR Transaction Number"
                                        placeholder="Enter 12-digit UTR number"
                                        value={formData.utrNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </ScrollReveal>

                            {/* Final Declarations */}
                            <ScrollReveal>
                                <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                    <SectionHeader title="Final Declarations" />
                                    <div className="space-y-4">
                                        <CheckboxField
                                            id="confirmStudents"
                                            label="I confirm all team members are currently enrolled students."
                                            checked={formData.confirmStudents}
                                            onChange={handleInputChange}
                                        />
                                        <CheckboxField
                                            id="confirmPhysicalPresence"
                                            label="I understand that participants must be physically present at IIT Hyderabad on 12th October 2025."
                                            checked={formData.confirmPhysicalPresence}
                                            onChange={handleInputChange}
                                        />
                                        {registrationType === 'team' && (
                                            <CheckboxField
                                                id="confirmTeamSize"
                                                label="I understand that competition eligibility requires a team of 3–5 members."
                                                checked={formData.confirmTeamSize}
                                                onChange={handleInputChange}
                                            />
                                        )}
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Submit Button */}
                            <ScrollReveal>
                                <div className="text-center pb-12">
                                    <button
                                        type="button"
                                        disabled={isSubmitDisabled || submissionStatus === 'submitting'}
                                        onClick={handleSubmit}
                                        className="bg-white text-black font-medium py-3 px-12 rounded-lg hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                    >
                                        {submissionStatus === 'submitting' ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            'Submit Registration'
                                        )}
                                    </button>

                                    {submissionStatus === 'error' && (
                                        <p className="mt-4 text-red-400 text-sm">
                                            Submission failed. Please check your connection and try again.
                                        </p>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
