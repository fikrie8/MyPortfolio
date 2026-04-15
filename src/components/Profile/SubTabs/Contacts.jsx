import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub, FiCopy } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactData = [
    { 
      icon: <FiPhone />, 
      data: "+60 19-201 3520", 
      link: "tel:+60192013520", 
      color: "hover:text-green-500",
      canCopy: true
    },
    { 
      icon: <FiMail />, 
      data: "fikrie8@gmail.com", 
      link: "mailto:fikrie8@gmail.com", 
      color: "hover:text-red-500",
      canCopy: true
    },
    { 
      icon: <FiMapPin />, 
      data: "No 13, Jalan Mapel 7/3, Bandar Hillpark, Bandar Puncak Alam, Selangor, Malaysia", 
      // The most reliable Google Maps universal link
      link: "https://www.google.com/maps/search/?api=1&query=No+13%2C+Jalan+Mapel+7/3%2C+Bandar+Hillpark%2C+Bandar+Puncak+Alam%2C+Selangor",
      color: "hover:text-blue-500",
      canCopy: false
    },
    { 
      icon: <FiLinkedin />, 
      data: "www.linkedin.com/in/mohd-fikrie-muthafa",
      link: "https://www.linkedin.com/in/mohd-fikrie-muthafa", 
      color: "hover:text-blue-700",
      canCopy: false
    },
    { 
      icon: <FiGithub />, 
      data: "github.com/fikrie8", 
      link: "https://github.com/fikrie8",
      color: "hover:text-slate-900 dark:hover:text-white",
      canCopy: false
    },
  ];

  const handleCopy = (e, text) => {
    e.preventDefault(); // Prevents the link from opening
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {contactData.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 
                     bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700
                     group cursor-pointer ${item.color}`}
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="text-2xl text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>

            {/* Data Text */}
            <span className="text-slate-700 dark:text-slate-300 font-medium tracking-wide text-sm md:text-base">
              {item.data}
            </span>
          </div>

          {/* Optional Copy Button (Only for phone/email) */}
          {item.canCopy && (
            <button 
              onClick={(e) => handleCopy(e, item.data)}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 dark:text-slate-500 transition-colors"
              title="Copy to clipboard"
            >
              <FiCopy />
            </button>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default Contact;
