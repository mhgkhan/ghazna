export const sendUserInfo = async () => {
    const res = await fetch(`http://localhost:3000/api`)

    const response = await res.json();
    return response;
};


export const validateRequestBody = (body, requiredFields) => {
    const missingFields = requiredFields.filter(field => !body[field]);
    if (missingFields.length > 0) {
        return {
            isValid: false,
            message: `Missing required fields: ${missingFields.join(', ')}`,
        };
    }
    return { isValid: true };
}

