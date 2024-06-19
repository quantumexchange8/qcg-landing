import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Swal from "sweetalert2";

export default function FormSubmission({ onClose }) {
    const { t, i18n } = useTranslation();
    const [, setLanguage] = useState(i18n.language);
    const form = useRef();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (i18n.language !== 'en') {
            i18n.changeLanguage('en');
        }
        const languageChangeListener = () => {
            setLanguage(i18n.language);
        };

        if (i18n.on) {
            i18n.on('languageChanged', languageChangeListener);
        }

        return () => {
            if (i18n.off) {
                i18n.off('languageChanged', languageChangeListener);
            }
        };
    }, [i18n]);

    // const sendEmail = () => {

    // }

    const sendEmail = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(form.current);
        const userName = formData.get('userName');
        const userEmail = formData.get('userEmail');
        const userMessage = formData.get('userMessage');
    
        const errors = {};
        if (!userName) errors.userName = "Name is required";
        if (!userEmail) errors.userEmail = "Email is required";
        if (!userMessage) errors.userMessage = "Message is required";
        setErrors(errors);
        if (Object.keys(errors).length > 0) return;
    
        const emailData = {
          sender: { email: userEmail },
          to: [{ email: "account@qcgexchange.com" }],
          subject: "New Contact Form Submission",
          htmlContent: `
            <h1>Contact Form Submission</h1>
            <p><strong>Name:</strong> ${userName}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Message:</strong> ${userMessage}</p>
          `
        };
    
        try {
          await axios.post('https://api.brevo.com/v3/smtp/email', emailData, {
            headers: {
              'Content-Type': 'application/json',
              'api-key': '', //api key
            },
          });
          Swal.fire({
            title: "Message sent",
            icon: "success"
          });
          onClose(false)
        } catch (error) {
          console.error("Error sending email:", error);
          Swal.fire({
            title: "Fail to sent message",
            icon: "error"
          });
        }
      };

    return (
        <form className="w-full" ref={form} onSubmit={sendEmail}>
            <div className="w-full flex flex-col items-center gap-5 md:gap-7">
                <div className="w-full flex flex-col items-center text-sm md:text-base font-semibold md:font-medium gap-[10px]">
                    <label>{t("MailForm.name")}</label>
                    <input 
                        type="text" 
                        name="userName" 
                        className="w-full h-[40px] md:h-[50px] bg-[#DDD] rounded-md px-3" 
                        required="" 
                    />
                    {errors.userName && <span className="text-red">{errors.userName}</span>}
                </div>
                <div className="w-full flex flex-col items-center text-sm md:text-base font-semibold md:font-medium gap-[10px]">
                    <label>{t("MailForm.email")}</label>
                    <input 
                        type="text" 
                        name="userEmail" 
                        className="w-full h-[40px] md:h-[43px] bg-[#DDD] rounded-md px-3" 
                        required="" 
                    />
                    {errors.userEmail && <span className="text-red">{errors.userEmail}</span>}
                </div>
                <div className="w-full flex flex-col items-center text-sm md:text-base font-semibold md:font-medium gap-[10px]">
                    <label>{t("MailForm.message")}</label>
                    <textarea 
                        type="text" 
                        name="userMessage" 
                        className="w-full h-[120px] md:h-[100px] bg-[#DDD] rounded-md px-3 pt-2" 
                        required="" 
                    />
                    {errors.userMessage && <span className="text-red">{errors.userMessage}</span>}
                </div>

                <button type="submit" className="bg-[#000] w-[200px] h-[50px] rounded-[5px]">
                    <span className="text-white text-xl font-bold">{t("MailForm.button")}</span>
                </button>
            </div>
        </form>
    );
}
