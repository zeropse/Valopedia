import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <section className="p-6">
      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="text-4xl font-bold text-[#e0aa3e] mb-2">
          Thanks for Visiting!!!
        </h1>
        <p className="text-lg mt-2">Follow Me!</p>
      </div>
      <div className="flex items-center justify-center gap-4 mb-5">
        <a
          href="https://www.instagram.com/zeropse/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="cursor-pointer hover:text-[#e0aa3e]" />
        </a>
        <a
          href="https://x.com/zer0pse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon className="cursor-pointer hover:text-[#e0aa3e]" />
        </a>
        <a
          href="https://www.youtube.com/@zeropse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon className="cursor-pointer hover:text-[#e0aa3e]" />
        </a>
        <a
          href="https://github.com/zeropse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="cursor-pointer hover:text-[#e0aa3e]" />
        </a>
      </div>
      <p className="text-center text-sm">
        © {new Date().getFullYear()} zeropse.
      </p>
    </section>
  );
};

export default Footer;
