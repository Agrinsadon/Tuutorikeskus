import React, { useState } from 'react';

const EnrollmentForm = ({ courseInfo, onEnrollmentSuccess }) => {
    const [enrollData, setEnrollData] = useState({
        firstName: '',
        surname: '',
        birthday: '',
        email: '',
        phone: '',
        education: '', // New input for "Tutkinnot"
        hasCompletedEducation: '', // New input for "Oletko suorittanut tutkinnon"
        completionDate: '', // New input for "Milloin suoritit"
        graduationDate: '', // New input for "Milloin valmistut"
    });
    const [showEducationOptions, setShowEducationOptions] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [isEducationSelected, setIsEducationSelected] = useState(false); // Added state to track education selection

    const handleCloseForm = () => {
        onEnrollmentSuccess();
    };

    const handleEducationClick = () => {
        setShowEducationOptions(!showEducationOptions);
    };

    const handleSelectEducation = (selectedOption) => {
        setEnrollData({ ...enrollData, education: selectedOption });
        setShowEducationOptions(false);
        setIsEducationSelected(true); // Mark education as selected
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEducationSelected) {
            return;
        }
        // Form submission logic here
        setSuccessMessage(true);
    };

    return (
        <div className="enrollment-overlay">
            <div className="enrollment-form">
                <button className="close-button" onClick={handleCloseForm}>
                    X
                </button>
                <h1>Ilmottautuminen</h1>
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
                    <div className="custom-dropdown">
                        <input
                            type="text"
                            placeholder={isEducationSelected ? "Tutkinnot" : "Tutkinnot*"}
                            value={enrollData.education}
                            onClick={handleEducationClick}
                            readOnly
                        />
                        {showEducationOptions && (
                            <div className="options-list">
                                <div onClick={() => handleSelectEducation('Ammattikoulu')}>Ammattikoulu</div>
                                <div onClick={() => handleSelectEducation('Lukio')}>Lukio</div>
                                <div onClick={() => handleSelectEducation('Ylioppilas')}>Ylioppilas</div>
                            </div>
                        )}
                    </div>
                    {enrollData.education && (
                        <div>
                            {/* ... Additional input fields based on education */}
                        </div>
                    )}
                    <button type="submit" className="submit-button">
                        Lähetä
                    </button>
                </form>
                {successMessage && (
                    <div className="success-message">
                        Ilmottautuminen hyväksytty
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnrollmentForm;
