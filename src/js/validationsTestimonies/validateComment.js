
const validateComment = (comment) => {
    const result = { isValid: true, errors: [] };
    if (!comment.trim()) {
        result.isValid = false;
        result.errors.push("El comentario es obligatorio.");
    } else if (comment.length < 15 ) {
        result.isValid = false;
        result.errors.push("El comentario debe de tener al menos 15 caracteres");
    } 

    return result;
};

export { validateComment };
