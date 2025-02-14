import FooterLink from "../../atoms/FooterLink/FooterLink";

export default function FooterColumn ({ title, links }) {
    return (
      <div className="space-y-3">
        <h4 className="font-bold text-lg">{title}</h4>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <FooterLink text={link.text} href={link.href} />
            </li>
          ))}
        </ul>
      </div>
    );
  };