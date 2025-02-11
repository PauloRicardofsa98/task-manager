const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-[#35383E]";
    }
    if (variant === "selected") {
      return "text-[#00ADB5] bg-[#E6F7F8]";
    }
  };

  return (
    <a href="#" className={`rounded-lg px-6 py-3 ${getVariantClasses()}`}>
      {children}
    </a>
  );
};

export default SidebarButton;
