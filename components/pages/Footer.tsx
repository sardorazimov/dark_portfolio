import {
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="py-5  border-t border-white/30">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-xl">
            {" "}
            2024 Copy Right Sardor Azimov{" "}
          </h1>
          <div className="flex">
            <ul className="flex justify-center gap-3 md:flex-row md:justify-between">
              <li className="cursor-pointer hover:bg-muted transition">
                <BsInstagram />
              </li>
              <li className="cursor-pointer hover:bg-muted transition">
                <BsTwitter />
              </li>
              <li className="cursor-pointer hover:bg-muted transition">
                <BsYoutube />
              </li>
              <li className="cursor-pointer hover:bg-muted transition">
                <BsGithub />
              </li>
              <li className="cursor-pointer hover:bg-muted transition">
                <BsDiscord />
              </li>
              <li className="cursor-pointer hover:bg-muted transition">
                <BsTelegram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
