'use client';

import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  const message = "Hello I want to join The CrossFit Gym";
  const whatsappUrl = `https://wa.me/919234431773?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-16 h-16 bg-gradient-to-tr from-[#20bd5a] to-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] outline-none group"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse-scale pointer-events-none" style={{ animationDuration: '3s' }} />
      <div className="absolute inset-0 rounded-full border border-white/20" />
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="34" 
        height="34" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="relative z-10 drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
      >
        <path d="M17.498 14.381c-.3-.151-1.767-.872-2.039-.972-.271-.099-.47-.151-.669.151-.199.301-.769.972-.94 1.171-.171.199-.342.224-.64.074-.3-.151-1.261-.465-2.403-1.485-.888-.794-1.487-1.774-1.66-2.074-.171-.3-.018-.464.133-.614.136-.135.3-.301.451-.453.15-.152.201-.259.3-.43.1-.171.05-.325-.025-.476-.075-.151-.67-1.616-.917-2.211-.24-.582-.486-.503-.668-.512-.171-.008-.37-.008-.57-.008s-.524.075-.798.375c-.274.301-1.048 1.022-1.048 2.493s1.072 2.894 1.222 3.094c.15.2 2.11 3.222 5.111 4.516.715.308 1.272.492 1.706.63.717.227 1.369.194 1.884.118.577-.085 1.767-.722 2.016-1.422.25-.7.25-1.3.175-1.422-.073-.122-.271-.197-.571-.347zM11.996 22c-1.656 0-3.28-.432-4.708-1.25L7 20.6l-3.328.874.887-3.245-.164-.26C3.513 16.541 3 14.305 3 11.996 3 7.03 7.03 3 11.996 3 16.963 3 21 7.03 21 11.996S16.963 22 11.996 22zm0-20.5C6.208 1.5 1.5 6.208 1.5 11.996c0 1.954.512 3.864 1.484 5.545L1.5 22.5l5.086-1.332C8.196 22.13 10.054 22.5 11.996 22.5 17.788 22.5 22.5 17.791 22.5 11.996 22.5 6.208 17.788 1.5 11.996 1.5z" />
      </motion.svg>
    </motion.a>
  );
}
