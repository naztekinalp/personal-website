import Link from "next/link";
import Image from "next/image";
import style from "./hero.module.scss";
import GitHubIcon from "../../assets/icons/github.svg";
import DribbbleIcon from "../../assets/icons/dribbble.svg";
import MailIcon from "../../assets/icons/mail.svg";
import MediumIcon from "../../assets/icons/medium.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import ResumeIcon from "../../assets/icons/resume.svg";
import { useState } from "react";
import Unicorn from "../unicorn/unicorn";
import Tooltip from "../tooltip/tooltip";

const Hero = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const tooltipContent = (
    <div>
      {isCopied ? (
        <div>Successfully copied!</div>
      ) : (
        <>
          <div>Click to copy to clipboard</div>
          <div>tekinalpnaz@gmail.com</div>
        </>
      )}
    </div>
  );

  return (
    <div className={style.hero__container}>
      <Unicorn />
      <h1 className={style.hero__title}>Hey, I'm Naz 🎀 </h1>

      <p className={style.hero__subtitle}>
        I’m a Senior Software QA Engineer with a passion tech 👩🏼‍💻
        Let’s connect! ✨
      </p>

      <div className={style.hero__links}>
        <Link
          href="https://github.com/naztekinalp"
          target="_blank"
          rel="noreferrer noopener"
          title="GitHub"
        >
          <Image src={GitHubIcon} alt="GitHub" />
        </Link>
        <Tooltip content={tooltipContent}>
          <Image
            style={{ cursor: "pointer" }}
            src={MailIcon}
            alt="Mail"
            height={27}
            width={33}
            onClick={() => {
              navigator.clipboard.writeText("tekinalpnaz@gmail.com");
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 2000);
            }}
          />
        </Tooltip>
        <Link
          href="https://medium.com/@naztekinalp"
          target="_blank"
          rel="noreferrer noopener"
          title="Medium"
        >
          <Image src={MediumIcon} alt="Medium" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/naztekinalp"
          target="_blank"
          rel="noreferrer noopener"
          title="LinkedIn"
        >
          <Image src={LinkedInIcon} alt="LinkedIn" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
