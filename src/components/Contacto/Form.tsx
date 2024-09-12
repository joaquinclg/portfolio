import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";
import Textarea from "@/components/Form/Textarea";
import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const key_emailjs = import.meta.env.PUBLIC_KEY_EMAILJS;
const service_id_emailjs = import.meta.env.PUBLIC_SERVICE_ID_EMAILJS;
const template_id_emailjs = import.meta.env.PUBLIC_TEMPLATE_ID_EMAILJS;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = useCallback(
    async (e) => {
      try {
        setIsLoading(true);
        e.preventDefault();

        const templateParams = {
          from_name: name,
          message: message,
          email: email,
        };

        await emailjs.send(
          service_id_emailjs,
          template_id_emailjs,
          templateParams,
          key_emailjs,
        );

        toast.success("Email enviado");

        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        toast.error("Error al enviar el email");
      } finally {
        setIsLoading(false);
      }
    },
    [name, email, message],
  );

  return (
    <form onSubmit={sendEmail} className="flex flex-wrap gap-2">
      <Input
        disabled={isLoading}
        label="Nombre"
        placeholder="Escribe tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        wrapperClassName=" flex-[1_0_auto]"
      />
      <Input
        disabled={isLoading}
        label="Email"
        placeholder="Escribe tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        wrapperClassName="flex-[1_0_auto]"
      />
      <Textarea
        disabled={isLoading}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={"Escribe tu mensaje"}
        label="Mensaje"
        wrapperClassName="w-full"
      />
      <Button
        disabled={isLoading || !name || !email || !message}
        label="Enviar"
        fullWidth
        className="mt-4 cursor-pointer bg-slate-50 font-semibold text-black"
      />
    </form>
  );
};

export default Form;
