import * as Yup from "yup";
import { ptShort } from "yup-locale-pt";

Yup.setLocale(ptShort);

export default Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().email(),
});
