import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const swAlert = withReactContent(Swal);

const Alerts = {
  success: (mensagem: string, caption = "Sucesso") =>
    swAlert.fire({
      title: caption,
      text: mensagem,
      icon: "success",
    }),
  error: (mensagem: string, caption = "Erro") =>
    swAlert.fire({
      title: caption,
      text: mensagem,
      icon: "error",
    }),
  warning: (mensagem: string, caption = "Atenção") =>
    swAlert.fire({
      title: caption,
      text: mensagem,
      icon: "warning",
    }),
  info: (mensagem: string, caption = "Informação") =>
    swAlert.fire({
      title: caption,
      text: mensagem,
      icon: "info",
    }),
  confirm: (
    mensagem: string,
    caption = "Atenção",
    confirmText = "Sim",
    cancelText = "Não"
  ) =>
    swAlert
      .fire({
        title: caption,
        text: mensagem,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
      })
      .then((result) => result.isConfirmed),
  questionWithInput: (
    mensagem: string,
    caption = "Atenção",
    confirmText = "Sim",
    cancelText = "Não",
    invalidMessageValidation = "Campo inválido",
    inputPlaceholder = "Digite aqui"
  ) =>
    swAlert
      .fire({
        title: caption,
        text: mensagem,
        input: "text",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        inputPlaceholder: inputPlaceholder,
        inputValidator: (value): any => {
          if (!value) {
            return invalidMessageValidation;
          }
        },
      })
      .then((result) => result.value ?? ""),

  httpError: async (
    error: any,
    mensagem: string,
    caption = "Erro",
    show_message = true
  ) => {
    console.error(error);

    if (error.response) {
      if (error.response.status >= 500) {
        await Alerts.error("Um erro aconteceu no processamento pelo servidor");
      } else if (error.response.status >= 400) {
        if (error.response.data.message) {
          if (show_message) {
            let mensagem = error.response.data.message;

            if (typeof error.response.data.message !== "string") {
              mensagem = JSON.stringify(error.response.data.message);
            }

            await Alerts.error(mensagem, caption);
          }
        } else if (show_message) {
          await Alerts.error(mensagem, caption);
        }
      }
    } else {
      if (show_message) {
        await Alerts.error(mensagem, caption);
      }
    }
  },

  toast: (mensagem: string) => {
    swAlert.fire({
      icon: "success",
      toast: true,
      position: "top-end",
      timerProgressBar: true,
      showConfirmButton: false,
      timer: 2000,
      title: mensagem,
    });
  },
};

export default Alerts;
