const Footer = () => {
  const quickLinks = [
    {
      id: 1,
      name: "Features",
      link: "#",
    },
    {
      id: 2,
      name: "Food Menu",
      link: "#",
    },
    {
      id: 3,
      name: "Offer",
      link: "#",
    },
    {
      id: 4,
      name: "Review",
      link: "#",
    },
    {
      id: 5,
      name: "Rider",
      link: "#",
    },
  ];
  const knowUs = [
    {
      id: 1,
      name: "Gift cards",
      link: "#",
    },
    {
      id: 2,
      name: "DoorDash Stories",
      link: "#",
    },
    {
      id: 3,
      name: "LinkedIn",
      link: "#",
    },
    {
      id: 4,
      name: "Glassdoor",
      link: "#",
    },
    {
      id: 5,
      name: "Accessibility",
      link: "#",
    },
  ];

  const news = [
    {
      id: 1,
      name: "Blog",
      link: "#",
    },
    {
      id: 2,
      name: "FAQ",
      link: "#",
    },
    {
      id: 3,
      name: "Lift Media",
      link: "#",
    },
    {
      id: 4,
      name: "Press",
      link: "#",
    },
    {
      id: 5,
      name: "Presse Kit",
      link: "#",
    },
  ];
  const contact = [
    {
      id: 1,
      name: "Whatsapp",
      link: "#",
    },
    {
      id: 2,
      name: "Support 24",
      link: "#",
    },
  ];
  const rules = [
    {
      id: 1,
      name: "Privacy",
      link: "#",
    },
    {
      id: 2,
      name: "Policy",
      link: "#",
    },
    {
      id: 3,
      name: "Terms",
      link: "#",
    },
    {
      id: 4,
      name: "Services",
      link: "#",
    },
  ];
  return (
    <section className="bg-[#000000] -mt-10 h-auto py-10 text-white md:px-20 px-5  space-y-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="space-y-10">
          <img src="/assets/image/pizza.png" alt="logo" />
          <div className="grid grid-cols-2">
            <img
              src="/assets/image/apple.svg"
              alt="apple-store-icon"
              className="w-[10rem] "
            />
            <img
              src="/assets/image/google.svg"
              alt="google-store-icon"
              className="w-[10rem] sm:ml-[-7rem] md:ml-[0rem] lg:ml-[-2rem]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 md:grid-cols-2 lg:grid-cols-4 ">
          <ul>
            <h3 className="font[600] text-[17.76px] text-[#FFFFFF] mb-5">
              Quick links
            </h3>
            {quickLinks.map((link) => (
              <li
                key={link.id}
                className="mb-2 text-footerText hover:text-[#FFFFFF]"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h3 className="font[600] text-[17.76px] text-[#FFFFFF] mb-5">
              Get to know us{" "}
            </h3>
            {knowUs.map((link) => (
              <li
                key={link.id}
                className="mb-2 text-footerText hover:text-[#FFFFFF]"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h3 className="font[600] text-[17.76px] text-[#FFFFFF] mb-5">
              News
            </h3>
            {news.map((link) => (
              <li
                key={link.id}
                className="mb-2 text-footerText hover:text-[#FFFFFF]"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h3 className="font[600] text-[17.76px] text-[#FFFFFF] mb-5">
              Contact
            </h3>
            {contact.map((link) => (
              <li
                key={link.id}
                className="mb-2 text-footerText hover:text-[#FFFFFF]"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 justify-between">
        <div>&copy; 2023 pizza. All right reserved</div>
        <ul className="flex gap-10">
          {rules.map((link) => (
            <li
              key={link.id}
              className="mb-2 text-footerText hover:text-[#FFFFFF]"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
