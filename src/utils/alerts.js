
import Swal from "sweetalert2";

// =========================================
// ALERTA DE ADVERTENCIA
// =========================================

export const showWarning = (title, text) => {
    return Swal.fire({
        icon: "warning",
        title,
        text,
        confirmButtonText: "Entendido",
        confirmButtonColor: "#ed8eaa"
    });
};


// =========================================
// ALERTA DE ÉXITO
// =========================================

export const showSuccess = (title, text) => {
    return Swal.fire({
        icon: "success",
        title,
        text,
        confirmButtonText: "¡Genial!",
        confirmButtonColor: "#ed8eaa"
    });
};


// =========================================
// ALERTA DE CARGA
// =========================================

export const showLoading = (title, text) => {
    Swal.fire({
        title,
        text,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
};
