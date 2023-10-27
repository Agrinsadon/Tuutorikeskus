import React, { useState } from 'react';

const EnrollmentForm = ({ courseInfo, onEnrollmentSuccess }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        birthday: '',
        email: '',
        phone: '',
    });
    const [successMessage, setSuccessMessage] = useState(false);

    const handleCloseForm = () => {
        onEnrollmentSuccess();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can add form validation and submission logic here.
        // On successful enrollment, show the success message.
        // You can also make an API call to submit the form data.

        // For the sake of this example, we'll just display the success message.
        setSuccessMessage(true);
    };

    return (
        <div className="enrollment-overlay">
            <div className="enrollment-form">
                <button className="close-button" onClick={handleCloseForm}>
                    X
                </button>
                <h2>{courseInfo.title}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                        }
                        required
                    />
                    <input
                        type="text"
                        placeholder="Surname"
                        value={formData.surname}
                        onChange={(e) =>
                            setFormData({ ...formData, surname: e.target.value })
                        }
                        required
                    />
                    <input
                        type="text"
                        placeholder="Birthday"
                        value={formData.birthday}
                        onChange={(e) =>
                            setFormData({ ...formData, birthday: e.target.value })
                        }
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                    />
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
