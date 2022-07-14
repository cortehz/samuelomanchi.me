import Image from "next/image";
import Link from "next/link";
import Layout from "../layout";
import heroStyles from "./hero.module.scss";

const Hero = () => {
  const { hero_section, hero_copy, imageContainer, my_name, duties } =
    heroStyles;
  return (
    <div className={hero_copy}>
      <div className={imageContainer}>
        <img src="/images/self.jpg" alt="Samuel Omanchi portrait" />
      </div>
      <div>
        <h1 className={my_name}>Hi, My name is Samuel Omanchi</h1>

        <ul className={duties}>
          {["Frontend Engineer", "User Interface Designer"].map(
            (title, index) => (
              <li key={title}>
                <span>{title}</span>

                {index === 0 ? (
                  <svg
                    width="4"
                    height="5"
                    viewBox="0 0 4 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2.35712" r="2" fill="#D9D9D9" />
                  </svg>
                ) : null}
              </li>
            )
          )}
        </ul>

        <div className={heroStyles.social_icons_top}>
          <a href="https://twitter.com/cortehzz" target="_blanck">
            <img src="/images/twitter.svg" alt="twitter icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-omanchi-aa49708a/"
            target="_blanck"
          >
            <img src="/images/linkedin.svg" alt="linkedin icon" />
          </a>

          <a href="https://github.com/cortehz" target="_blanck">
            <img src="/images/github.svg" alt="github icon" />
          </a>

          <a className="link-item-button" href="#about">
            What I can Do
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
