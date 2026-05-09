import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub, FiCheck, FiCopy } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const contactData = [
    { 
      icon: <FiPhone />, 
      data: "+60 19-201 3520", 
      link: "tel:+60192013520", 
      color: "hover:text-green-500",
      copyable: true
    },
    { 
      icon: <FiMail />, 
      data: "fikrie8@gmail.com", 
      link: "mailto:fikrie8@gmail.com", 
      color: "hover:text-red-500",
      copyable: true
    },
    { 
      icon: <FiMapPin />, 
      data: "No 13, Jalan Mapel 7/3, Bandar Hillpark, Bandar Puncak Alam, Selangor, Malaysia", 
      // The most reliable Google Maps universal link
      link: "https://www.google.com/maps/search/?api=1&query=No+13%2C+Jalan+Mapel+7/3%2C+Bandar+Hillpark%2C+Bandar+Puncak+Alam%2C+Selangor",
      color: "hover:text-blue-500",
      copyable: false
    },
    { 
      icon: <FiLinkedin />, 
      data: "www.linkedin.com/in/mohd-fikrie-muthafa",
      link: "https://www.linkedin.com/in/mohd-fikrie-muthafa", 
      color: "hover:text-blue-700",
      copyable: false
    },
    { 
      icon: <FiGithub />, 
      data: "github.com/fikrie8", 
      link: "https://github.com/fikrie8",
      color: "hover:text-slate-900 dark:hover:text-white",
      copyable: false
    },
  ];

  const handleCopy = (e, text, index) => {
    e.preventDefault(); // Prevents the link from opening
    e.stopPropagation(); // Prevents the card click event
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {contactData.map((item, index) => (
        <div key={index} className="relative group overflow-visible">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 
            rounded-2xl border border-slate-100 dark:border-slate-800 transition-all
            duration-300 active:scale-[0.98] sm:active:scale-100 hover:border-blue-500/50 pr-16"
          >
            <div className="text-xl text-blue-600 dark:text-blue-400 shrink-0 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate break-all">
                {item.data}
              </p>
            </div>
          </a>

          {/* COPY BUTTON - Absolute positioned to stay on the right */}
          {item.copyable && (
            <button
              onClick={(e) => handleCopy(e, item.data, index)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 z-20 rounded-xl bg-white 
                      dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700
                      text-slate-400 hover:text-blue-600 active:scale-90 transition-all cursor-pointer"
              title="Copy to clipboard"
            >
              {copiedIndex === index ? <FiCheck className="text-emerald-500" /> : <FiCopy />}
            </button>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default Contact;
