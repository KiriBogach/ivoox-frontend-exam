import { extend } from "vee-validate";
import { required, regex, email } from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "Este campo es obligatorio"
});

extend("username", {
    ...regex,
    message: "Sólo caracteres alfabéticos y guión medio (-)"
});

extend("email", {
    ...email,
    message: "Email inválido"
});

extend("phone", {
    ...regex,
    message: "Sólo números y espacios"
});