const ContactItem = ({ icon, label, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-4
        px-5 py-3
        transition-all duration-300
        hover:translate-x-2
        group
      "
    >
      {/* Logo */}
      <div className="w-10 h-8 flex items-center justify-center ">
        <img
          src={icon}
          alt=""
          className="
            w-8 h-8 object-contain
            opacity-80
            group-hover:opacity-100
            transition
          "
        />
      </div>

      {/* Text */}
      <span className="text-sm text-white/70 group-hover:text-white">
        {label}
      </span>
    </a>
  );
};

export default ContactItem;
