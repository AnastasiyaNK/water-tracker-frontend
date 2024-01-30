export const registerUser = async (formData) => {
  try {
    const response = await fetch('your_backend_login_endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
