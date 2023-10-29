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

        // Depending on the selected option, show the relevant input field(s)
        if (selectedOption === 'Kyllä') {
            setShowCompletionDateInput(true);
            setShowGraduationDateInput(false);
        } else {
            setShowCompletionDateInput(false);
            setShowGraduationDateInput(true);
        }
    };

    const enrollUrl = process.env.REACT_APP_API_URL_EMAIL

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        if (!isEducationSelected) {
            setErrorMessage('Valitse tutkinto.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            setIsSubmitting(false); // Set isSubmitting to false when the submission is complete
            return;
        }

        if (!enrollData.hasCompletedEducation) {
            setMilloinDropdownErrorMessage('Valitse vaihtoehto "Kyllä" tai "En".');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            setIsSubmitting(false); // Set isSubmitting to false when the submission is complete
            return;
        }
                // Form submission logic here
        fetch(enrollUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(enrollData),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsSubmitting(false);
                if (data.message === 'Emails sent successfully') {
                    setSuccessMessage(true);
                } else {
                    // Handle error here, you can display an error message to the user
                }
            })
            .catch((error) => {
                setIsSubmitting(false);
                // Handle network or other errors here
            });
    };

    return (
        <div className="enrollment-overlay">
            <div className="enrollment-form">
            <FontAwesomeIcon
            icon={faTimes} // Use the FontAwesome icon you prefer
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
                                placeholder="Oletko suorittanut tutkinnon"
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
                            placeholder="Milloin suoritit?"
                            value={completionDateValue}
                            onChange={(e) => setCompletionDateValue(e.target.value)}
                            required
                        />
                    )}
                    {showGraduationDateInput && (
                        <input
                            type="text"
                            placeholder="Milloin valmistut?"
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
