import TopBaner from '../../../assets/Top-Banner.png';

export default function TopNav() {
  return (
    <div style={{backgroundImage : `url(${TopBaner})`}} className=" flex items-center justify-center bg-cover bg-center p-2 m-1.5 border-x rounded-sm">
        <span>
        Admission is Open, Grab your seat now
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
    </div>
  )
}
