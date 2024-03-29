import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const EnrollmentForm = ({ courseInfo, onEnrollmentSuccess }) => {
    const [enrollData, setEnrollData] = useState({
        firstName: '',
        surname: '',
        birthday: '',
        email: '',
        phone: '',
        education: '',
        hasCompletedEducation: '',
        completionDate: '', 
        graduationDate: '',
    });
    const [showEducationOptions, setShowEducationOptions] = useState(false);
    const [showDegreeOptions, setShowDegreeOptions] = useState(false);
    const [showCompletionDateInput, setShowCompletionDateInput] = useState(false);
    const [showGraduationDateInput, setShowGraduationDateInput] = useState(false);
    const [completionDateValue, setCompletionDateValue] = useState('');
    const [graduationDateValue, setGraduationDateValue] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const [isEducationSelected, setIsEducationSelected] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [milloinDropdownErrorMessage, setMilloinDropdownErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleCloseForm = () => {
        onEnrollmentSuccess();
    };

    const handleEducationClick = () => {
        setShowEducationOptions(!showEducationOptions);
    };

    const handleSelectEducation = (selectedOption) => {
        setEnrollData({ ...enrollData, education: selectedOption });
        setShowEducationOptions(false);
        setIsEducationSelected(true);
        setErrorMessage('');
    };

    const handleDegreeClick = () => {
        setShowDegreeOptions(!showDegreeOptions);
    };

    const handleSelectDegree = (selectedOption) => {
        setEnrollData({ ...enrollData, hasCompletedEducation: selectedOption });
        setShowDegreeOptions(false);
        setMilloinDropdownErrorMessage('');

        if (selectedOption === 'Kyllä') {
            setShowCompletionDateInput(true);
            setShowGraduationDateInput(false);
        } else {
            setShowCompletionDateInput(false);
            setShowGraduationDateInput(true);
        }
    };

    const enrollUrl = process.env.REACT_APP_API_URL_ENROLL

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setIsSubmitting(true);
    
        if (!isEducationSelected) {
            setErrorMessage('Valitse tutkinto.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            setIsSubmitting(false);
            return;
        }
    
        if (!enrollData.hasCompletedEducation) {
            setMilloinDropdownErrorMessage('Valitse vaihtoehto "Kyllä" tai "En".');
            setTimeout(() => {
                setMilloinDropdownErrorMessage('');
            }, 3000);
            setIsSubmitting(false);
            return;
        }
    
        const data = {
            name: enrollData.firstName,
            surname: enrollData.surname,
            birthday: enrollData.birthday,
            email: enrollData.email,
            phone: enrollData.phone,
            tutkinto: enrollData.education,
            milloin: showCompletionDateInput ? completionDateValue : graduationDateValue,
            courseTitle: courseInfo.title
        };
    
        try {
            const response = await fetch(enrollUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.status === 200) {
                setSuccessMessage(true);
                
                // Clear user's information and reset form fields
                setEnrollData({
                    firstName: '',
                    surname: '',
                    birthday: '',
                    email: '',
                    phone: '',
                    education: '',
                    hasCompletedEducation: '',
                });
    
                setShowCompletionDateInput(false);
                setShowGraduationDateInput(false);
                setCompletionDateValue('');
                setGraduationDateValue('');
                setTimeout(() => {
                    setSuccessMessage(false);
                }, 3000);
            } else {
            }
        } catch (error) {
        }
    
        setIsSubmitting(false);
    };
    
    

    return (
        <div className="enrollment-overlay">
            <div className="enrollment-form">
            <FontAwesomeIcon
            icon={faTimes}
            className="close-button"
            onClick={handleCloseForm}
            />
                <h1>Ilmoittautuminen</h1>
                <h2>{courseInfo.title}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Etunimi"
                        value={enrollData.firstName}
                        onChange={(e) =>
                            setEnrollData({ ...enrollData, firstName: e.target.value })
                        }
                        required
                    />
                    <input
                        type="text"
                        placeholder="Sukunimi"
                        value={enrollData.surname}
                        onChange={(e) =>
                            setEnrollData({ ...enrollData, surname: e.target.value })
                        }
                        required
                    />
                    <input
                        type="text"
                        placeholder="Syntymäpäivä (10.06.1999)"
                        value={enrollData.birthday}
                        onChange={(e) =>
                            setEnrollData({ ...enrollData, birthday: e.target.value })
                        }
                        required
                    />
                    <input
                        type="email"
                        placeholder="Sähköposti"
                        value={enrollData.email}
                        onChange={(e) =>
                            setEnrollData({ ...enrollData, email: e.target.value })
                        }
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Puhelin"
                        value={enrollData.phone}
                        onChange={(e) =>
                            setEnrollData({ ...enrollData, phone: e.target.value })
                        }
                        required
                    />
                    <div className="tutkinto-dropdown">
                        <input
                            type="text"
                            placeholder={isEducationSelected ? "Tutkinnot" : "Tutkinnot*"}
                            value={enrollData.education}
                            onClick={handleEducationClick}
                            readOnly
                        />
                        {showEducationOptions && (
                            <div className="options-list">
                                <div className="option" onClick={() => handleSelectEducation('Ammattikoulu')}>Ammattikoulu</div>
                                <div className="option" onClick={() => handleSelectEducation('Lukio')}>Lukio</div>
                                <div className="option" onClick={() => handleSelectEducation('Ylioppilas')}>Ylioppilas</div>
                            </div>
                        )}
                    </div>
                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}
                    {enrollData.education && (
                        <div className="milloin-dropdown">
                            <input
                                type="text"
                                placeholder="Oletko suorittanut tutkinnon?"
                                value={enrollData.hasCompletedEducation}
                                onClick={handleDegreeClick}
                                readOnly
                            />
                            {showDegreeOptions && (
                                <div className="options-list">
                                    <div className="option" onClick={() => handleSelectDegree('Kyllä')}>Kyllä</div>
                                    <div className="option" onClick={() => handleSelectDegree('En')}>En</div>
                                </div>
                            )}
                        </div>
                    )}
                    {milloinDropdownErrorMessage && (
                    <div className="error-message">
                        {milloinDropdownErrorMessage}
                    </div>
                    )}
                    {showCompletionDateInput && (
                        <input
                            type="text"
                            placeholder="Milloin suoritit? (20.09.2022)"
                            value={completionDateValue}
                            onChange={(e) => setCompletionDateValue(e.target.value)}
                            required
                        />
                    )}
                    {showGraduationDateInput && (
                        <input
                            type="text"
                            placeholder="Milloin valmistut? (20.09.2024)"
                            value={graduationDateValue}
                            onChange={(e) => setGraduationDateValue(e.target.value)}
                            required
                        />
                    )}
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? "Lähetetään..." : "Lähetä"}
                    </button>
                </form>
                {successMessage && (
                    <div className="success-message">
                        Ilmoittautuminen hyväksytty
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnrollmentForm;
