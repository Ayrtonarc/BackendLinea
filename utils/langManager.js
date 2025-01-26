    const messages = {
        en: {
            AUTH_REQUIRED: "Authentication is required.",
            INVALID_TOKEN: "Invalid token.",
            NOT_FOUND: "Resource not found.",
            FAILED_FETCH: "Failed Fetch",
            
        },
        es: {
            AUTH_REQUIRED: "Se requiere autenticación.",
            INVALID_TOKEN: "Token inválido.",
            NOT_FOUND: "Recurso no encontrado.",
            FAILED_FETCH: "Failed Fetch",
        }
    };

    function langManager(key, language = "en") {
        return messages[language]?.[key] || `Missing translation for: ${key}`;
    }

    module.exports = langManager;