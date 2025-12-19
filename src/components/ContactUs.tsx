import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Send } from "lucide-react";
import { useState } from "react";

export function ContactUs() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.5 });
  const { ref: formRef, isInView: formInView } = useInView({ threshold: 0.2 });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      {/* Decorative Wave Patterns - Rotated 102.41deg */}
      <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
        <div className="absolute left-[-821px] top-[202px] w-[1122px] h-[1978px]" style={{ transform: 'rotate(102.41deg)' }}>
          {[...Array(100)].map((_, i) => (
            <svg
              key={`wave-${i}`}
              className="absolute"
              style={{
                left: `${-672 - i * 1.2}px`,
                top: `${234 + i * 0.97}px`,
                width: `${1122 - i * 5.2}px`,
                height: `${1520 + i * 4.5}px`,
              }}
              viewBox="0 0 1122 1520"
              fill="none"
            >
              <path
                d="M1 1C200 400 400 700 700 500C900 350 1121 1519 1121 1519"
                stroke="rgba(14, 52, 61, 0.25)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Gradient Background Overlay */}
      <div 
        className="absolute bg-gradient-to-b from-[rgba(1,50,62,0.125)] to-[rgba(255,255,255,0.5)] transform rotate-180 pointer-events-none" 
        style={{ 
          top: '235px', 
          left: '50%',
          transform: 'translateX(-50%) rotate(180deg)',
          width: '1289px',
          height: '1173px'
        }} 
      />

      <div className="relative z-10">
        {/* Title Section */}
        <section ref={titleRef} className="pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl text-[#00262f]">Contact Us</h1>
              <div className="mt-2 border border-[#0e343d]" />
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section ref={formRef} className="pb-20">
          <div className="max-w-[1079px] mx-auto px-4">
            <motion.div
              className="bg-white rounded-3xl p-12 border-[0.2px] border-[#0e343d]"
              style={{
                boxShadow: '26px 30px 16px rgba(0, 0, 0, 0.01), 15px 17px 13px rgba(0, 0, 0, 0.05), 7px 7px 10px rgba(0, 0, 0, 0.09), 2px 2px 5px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First Row - First Name & Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full h-14 px-6 bg-[rgba(199,199,199,0.1)] border-[0.5px] border-[#c7c7c7] rounded-2xl text-xl text-[#00262f] placeholder-[#00262f]/25 focus:outline-none focus:ring-2 focus:ring-[#4baf47] transition-all"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full h-14 px-6 bg-[rgba(199,199,199,0.1)] border-[0.5px] border-[#c7c7c7] rounded-2xl text-xl text-[#00262f] placeholder-[#00262f]/25 focus:outline-none focus:ring-2 focus:ring-[#4baf47] transition-all"
                    />
                  </motion.div>
                </div>

                {/* Second Row - Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full h-14 px-6 bg-[rgba(199,199,199,0.1)] border-[0.5px] border-[#c7c7c7] rounded-2xl text-xl text-[#00262f] placeholder-[#00262f]/25 focus:outline-none focus:ring-2 focus:ring-[#4baf47] transition-all"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full h-14 px-6 bg-[rgba(199,199,199,0.1)] border-[0.5px] border-[#c7c7c7] rounded-2xl text-xl text-[#00262f] placeholder-[#00262f]/25 focus:outline-none focus:ring-2 focus:ring-[#4baf47] transition-all"
                    />
                  </motion.div>
                </div>

                {/* Subject Field - Full Width Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <textarea
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    rows={6}
                    className="w-full px-6 py-4 bg-[rgba(199,199,199,0.1)] border-[0.5px] border-[#c7c7c7] rounded-2xl text-xl text-[#00262f] placeholder-[#00262f]/25 focus:outline-none focus:ring-2 focus:ring-[#4baf47] transition-all resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    className="flex items-center gap-3 px-10 py-4 bg-[#0e343d] text-white rounded-2xl hover:bg-[#4baf47] transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl">Send Now</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
