
import { validateUserName } from "./validateUserName.js";
import { validateLocation } from "./validateLocation.js";
import { validateComment } from "./validateComment.js";
import { validateTypeService } from "./validateTypeService.js";
import { validateImageUrl } from "./validateImageUrl.js";

const validateTestimonyFields = (testimonio) => {
    const result = {
        isValid: true,
        errors: []
    };

    const nameResult = validateUserName(testimonio.name);
    const locationResult = validateLocation(testimonio.location);
    const commentResult = validateComment(testimonio.comment);
    const typeResult = validateTypeService(testimonio.type_service);
    const imageResult = validateImageUrl(testimonio.img);

    [nameResult, locationResult, commentResult, typeResult, imageResult].forEach(res => {
        if (!res.isValid) {
            result.isValid = false;
            result.errors.push(...res.errors);
        }
    });

    return result;
};

export { validateTestimonyFields };
