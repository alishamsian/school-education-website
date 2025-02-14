
export default function IconLink({ icon, link }) {
  return (
    <a href={link} className="p-2 bg-orange-200 rounded-lg hover:bg-orange-300 transition">
      {icon}
    </a>
  )
}
