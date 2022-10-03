import * as Yup from "yup";
import { ptShort } from "yup-locale-pt";

Yup.setLocale(ptShort);

export default Yup.object().shape({
  name: Yup.string().required("Nome obrigatório").min(2, "Nome muito curto"),
  phone: Yup.string().required("Telefone obrigatório"),
  email: Yup.string().email("E-mail inválido"),
});
