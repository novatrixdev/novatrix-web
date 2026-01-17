import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { REPO_NAME } from "../consts/repo-name";

export function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to a backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (submitted) {
      const { name, email, subject, message } = formData;
      const mailTo = "novatrix.it@gmail.com";

      const body = `
${name}
Email: ${email}

${message}
  `.trim();

      const mailtoUrl = `mailto:${encodeURIComponent(mailTo)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }
  }, [submitted]);

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: "novatrix.it@gmail.com",
      link: "mailto:novatrix.it@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: "+38 (093) 273-84-41",
      link: "tel:+380932738441",
    },
    // {
    //   icon: MapPin,
    //   label: t('contact.info.address'),
    //   value: 'San Francisco, CA',
    //   link: 'https://maps.google.com',
    // },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-[#0b8c99] text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(/${REPO_NAME}/images/lego-creation-20260115T102602.png)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{ fontWeight: 700 }}
            >
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl text-white/90 tracking-wider">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>
                {t("contact.info.title")}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-[#0b8c99]/10 rounded-full p-3 group-hover:bg-[#0b8c99]/20 transition-colors">
                      <info.icon className="text-[#0b8c99]" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray mb-1">{info.label}</div>
                      <div className="text-gray-900 group-hover:text-[#0b8c99] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 bg-[#0b8c99] rounded-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} />
                  <h3 className="text-xl" style={{ fontWeight: 600 }}>
                    {t("contact.info.hours")}
                  </h3>
                </div>
                <p className="text-sm text-white/90">
                  {t("contact.info.hoursValue")}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-light p-8">
                <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>
                  {t("contact.form.title")}
                </h2>

                {submitted ? (
                  <div className="bg-[#0b8c99]/10 border border-[#0b8c99] rounded-lg p-6 text-center">
                    <div
                      className="text-[#0b8c99] mb-2 text-xl"
                      style={{ fontWeight: 600 }}
                    >
                      Thank you for your message!
                    </div>
                    <p className="text-gray">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 text-gray-900">
                          {t("contact.form.name")} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b8c99] focus:border-transparent"
                          placeholder={t("contact.form.namePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-gray-900">
                          {t("contact.form.email")} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b8c99] focus:border-transparent"
                          placeholder={t("contact.form.emailPlaceholder")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-gray-900">
                        {t("contact.form.subject")}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b8c99] focus:border-transparent"
                        placeholder={t("contact.form.subjectPlaceholder")}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-gray-900">
                        {t("contact.form.message")} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b8c99] focus:border-transparent resize-none"
                        placeholder={t("contact.form.messagePlaceholder")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer w-full bg-[#0b8c99] text-white px-8 py-4 rounded-lg hover:bg-[#07565f] transition-colors flex items-center justify-center gap-2"
                      style={{ fontWeight: 600 }}
                    >
                      {t("contact.form.send")}
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
