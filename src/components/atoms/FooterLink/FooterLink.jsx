
export default function FooterLink({ text, href }) {
  return (
    <a href={href} className="text-gray-700 hover:text-black transition">
      {text}
    </a>
  );
}
