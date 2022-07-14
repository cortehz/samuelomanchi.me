import headerStyles from "./header.module.scss";
import { useState } from "react";
import Link from "next/link";

const Header = (home) => {
  const [navOpen, setnavOpen] = useState(false);

  const links = [
    {
      link: "/#latest",
      linkDescription: "Latest",
    },
    {
      link: "/blog",
      linkDescription: "Services",
    },
    {
      link: "/career",
      linkDescription: "Career",
    },
  ];

  return (
    <nav className={headerStyles.nav}>
      <Link href="/">
        <a className={headerStyles.brand}>
          <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.798 17.104V16.854V15.342V15.092H15.048H16.84C17.9298 15.092 18.6012 14.8832 18.9433 14.5412C19.2944 14.1901 19.506 13.5208 19.506 12.45C19.506 11.362 19.2899 10.6922 18.9346 10.3501L18.9312 10.3468L18.9313 10.3468C18.5801 9.99562 17.9109 9.78397 16.84 9.78397H15.048H14.798V9.53397V8.02197V7.77197H15.048H16.84C18.3861 7.77197 19.5788 8.1396 20.3643 8.92468C20.3645 8.92485 20.3646 8.92502 20.3648 8.9252L20.188 9.10197C20.908 9.81397 21.268 10.93 21.268 12.45C21.268 13.962 20.908 15.074 20.188 15.786L14.798 17.104ZM14.798 17.104H15.048H16.84C18.3927 17.104 19.5862 16.741 20.3643 15.9632L14.798 17.104ZM21.2291 4.65171C21.1295 3.3965 20.7248 2.43202 19.9775 1.80712C19.2426 1.17783 18.1786 0.883972 16.828 0.883972H15.048H14.798V1.13397V2.64597V2.89597H15.048H16.828C17.7073 2.89597 18.287 3.04734 18.6208 3.30101L18.6208 3.30103L18.6233 3.30293C18.9394 3.53682 19.1575 3.9861 19.2189 4.73052L19.2188 4.73053L19.2194 4.7357C19.2476 5.00842 19.3399 5.24834 19.514 5.43331L19.5139 5.43339L19.5193 5.43875C19.7064 5.62586 19.9573 5.70397 20.236 5.70397C20.5303 5.70397 20.7934 5.62213 20.9888 5.42675L20.9889 5.42682L20.9938 5.42163C21.1897 5.2142 21.2579 4.94569 21.2291 4.65171ZM21.2291 4.65171C21.2291 4.65257 21.2292 4.65343 21.2293 4.6543L20.98 4.67397M21.2291 4.65171C21.229 4.65084 21.2289 4.64997 21.2288 4.6491L20.98 4.67397M20.98 4.67397C21.004 4.91397 20.948 5.10597 20.812 5.24997L16.828 1.13397C18.148 1.13397 19.144 1.42197 19.816 1.99797C20.496 2.56597 20.884 3.45797 20.98 4.67397ZM6.93459 17.116H7.04801H7.29801V17.1098C8.92206 17.055 10.1683 16.635 10.9892 15.8064C11.8792 14.9161 12.298 13.5423 12.298 11.742V6.258C12.298 4.45067 11.8797 3.07605 10.9888 2.19322C10.1679 1.36487 8.92182 0.945032 7.29801 0.890199V0.883997H7.04801H6.124C6.12036 0.883997 6.11672 0.883999 6.11308 0.884002H6.00001H5.75001V0.890194C4.12591 0.945036 2.87966 1.36501 2.05878 2.19367C1.16878 3.08398 0.75 4.45773 0.75 6.258V11.742C0.75 13.5494 1.16837 14.924 2.05925 15.8068C2.88014 16.6351 4.12622 17.055 5.75001 17.1098V17.116H6.00001H6.92402C6.92755 17.116 6.93107 17.116 6.93459 17.116ZM4.08776 3.21123C4.56142 3.00741 5.23105 2.89691 6.11307 2.896H6.92402C7.81125 2.896 8.48354 3.01056 8.95816 3.22231L8.95814 3.22235L8.96239 3.22415C9.43071 3.42283 9.7592 3.75132 9.95788 4.21964L9.95786 4.21965L9.95914 4.22257C10.1717 4.70623 10.286 5.37946 10.286 6.258V11.742C10.286 12.6205 10.1717 13.2938 9.95914 13.7774L9.95912 13.7774L9.95788 13.7804C9.75903 14.2491 9.42984 14.5822 8.96025 14.7888C8.48661 14.9926 7.81702 15.1031 6.93507 15.104H6.124C5.23677 15.104 4.56448 14.9894 4.08986 14.7777L4.08988 14.7776L4.08564 14.7759C3.61732 14.5772 3.28883 14.2487 3.09015 13.7804L3.09016 13.7804L3.08888 13.7774C2.87636 13.2938 2.762 12.6205 2.762 11.742V6.258C2.762 5.37945 2.87636 4.70622 3.08888 4.22257L3.0889 4.22257L3.09015 4.21963C3.28899 3.75093 3.61817 3.41778 4.08776 3.21123Z"
              fill="#C08B8B"
              stroke="#C08B8B"
              strokeWidth="1"
            />
          </svg>
        </a>
      </Link>

      <ul
        className={`${headerStyles.nav_links}  ${
          navOpen ? headerStyles.nav_active : ""
        }`}
      >
        {links.map(({ link, linkDescription }) => {
          return (
            <li
              key={link}
              className={headerStyles.link_item}
              onClick={() => setnavOpen(false)}
            >
              <Link href={link}>
                <a>{linkDescription}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.293 13.293C15.8115 13.9631 14.161 14.1658 12.5614 13.8742C10.9617 13.5826 9.48895 12.8105 8.33919 11.6608C7.18944 10.511 6.41734 9.03824 6.12574 7.4386C5.83415 5.83897 6.03691 4.18846 6.70701 2.70697C5.52758 3.23998 4.49505 4.05117 3.69802 5.07093C2.90099 6.09069 2.36324 7.28859 2.13092 8.56186C1.8986 9.83512 1.97864 11.1457 2.36417 12.3813C2.7497 13.6168 3.42922 14.7404 4.34442 15.6556C5.25961 16.5708 6.38318 17.2503 7.61871 17.6358C8.85424 18.0213 10.1649 18.1014 11.4381 17.8691C12.7114 17.6367 13.9093 17.099 14.9291 16.302C15.9488 15.5049 16.76 14.4724 17.293 13.293Z"
          fill="#374164"
        />
      </svg>

      <a
        href="#menu"
        onClick={() => setnavOpen(!navOpen)}
        className={headerStyles.hamburger}
      >
        {!navOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 20 20"
            fill="#673ab7"
            className="menu-alt3 w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 20 20"
            fill="#673ab7"
            className="x w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </a>
    </nav>
  );
};

export default Header;
