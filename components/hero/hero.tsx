import Link from "next/link";
import Image from "next/image";
import style from "./hero.module.scss";
import GitHubIcon from "../../assets/icons/github.svg";
import DribbbleIcon from "../../assets/icons/dribbble.svg";
import MailIcon from "../../assets/icons/mail.svg";
import MediumIcon from "../../assets/icons/medium.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import ResumeIcon from "../../assets/icons/resume.svg";
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";
import Unicorn from "../unicorn/unicorn";

const Hero = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const tooltipContent = (
    <div className={style.hero__tooltip_content}>
      {isCopied ? (
        <div>Successfully copied!</div>
      ) : (
        <div>Click to copy to clipboard</div>
      )}
      {!isCopied && <div>tekinalpnaz@gmail.com</div>}
    </div>
  );

  return (
    <div className={style.hero__container}>
      <Unicorn />
      <h1 className={style.hero__title}>
        Hi, I’m Naz Tekinalp
      </h1>

      <p className={style.hero__subtitle}>
        Currently I’m working at EPAM Systems as Software Quality Engineer.
      </p>
             
      {/*<p className={style.hero__subtitle}>*/}
      {/*  I&apos;m also a MSc Engineering Management student at IU International University of Applied Sciences.*/}
      {/*</p>*/}

      <div className={style.hero__links}>
        <Link href="https://github.com/naztekinalpp" passHref>
          <a target="_blank" rel="noreferrer noopener" title="GitHub">
            <Image src={GitHubIcon} alt="GitHub" />
          </a>
        </Link>
        <Tooltip content={tooltipContent} title="Personal Mail">
          <Image
            style={{ cursor: "pointer" }}
            src={MailIcon}
            alt="Mail"
            height={27}
            width={33}
            onClick={() => {
              navigator.clipboard.writeText("tekinalpnaz@gmail.com");
              setIsCopied(true);
            }}
            onMouseLeave={() => setTimeout(() => setIsCopied(false), 150)}
          />
        </Tooltip>
        <Link href="https://medium.com/@naztekinalp" passHref>
          <a target="_blank" rel="noreferrer noopener" title="Medium">
            <Image src={MediumIcon} alt="Medium" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/naztekinalp" passHref>
          <a target="_blank" rel="noreferrer noopener" title="LinkedIn">
            <Image src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </Link>
        <Link href="/naz-tekinalp.pdf" passHref>
          <a target="_blank" rel="noreferrer noopener" title="Resume">
            <Image src={ResumeIcon} alt="Resume" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
