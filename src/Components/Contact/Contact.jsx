import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import ContactIcon from "../../assets/images/undraw_personal_text_re_vqj3.svg";
import { Element } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const { register, handleSubmit, reset } = useForm();
  const sendEmail = (data) => {
    console.log(data);
    emailjs
      .send(
        "service_bfpeubg",
        "template_fxidd0d",
        {
          from_name: data.name,
          to_name: "enx_dev",
          message: data.message,
        },
        "MGW2_-ESxsvjUDnkB"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("message sent");
          reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("an error has occured");
        }
      );
  };

  return (
    <Element name="Contact">
      {" "}
      <section id="ContactSection" className="ContactSection">
        <h1 className="ContactSection__title">Let's have a chat😁😁</h1>
        <div className="ContactSection__main">
          <div className="ContactSection__top">
            <img src={ContactIcon} alt="Contact" />
          </div>
          <div className="ContactSection__bottom">
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="ContactSection__form">
              <fieldset>
                <legend htmlFor="Fullname">Fullname</legend>
                <input
                  {...register("name", { required: true })}
                  id="Fullname"
                  type="text"
                  aria-label="Fullname"
                />
              </fieldset>
              <fieldset>
                <legend htmlFor="Message">Message</legend>
                <textarea
                  className="ContactSection__textarea"
                  {...register("message", { required: true })}
                  id="Message"></textarea>
              </fieldset>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </Element>
  );
};

export default Contact;
