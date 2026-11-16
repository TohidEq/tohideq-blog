"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";

function Navigation() {
  const handleMenu = () => {
    document
      .getElementById("menu__list")!
      .classList.toggle("menu__list--animate");
    document.getElementById("menu__btn")!.classList.toggle("menu-open");
  };

  // passed X% view height or not
  const [passedXVH, setPassedXVH] = useState(false);
  const XPercent = 20;

  useEffect(() => {
    const onScroll = () => {
      setPassedXVH(window.scrollY > window.innerHeight * (XPercent/100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navigation ${passedXVH && "navigation--hidden"} `}>
      <div className="nav-controller mx-auto">
        <div className={"container"}>
          <Link href={"/"} className="title ">
            <span>T</span>ohidEq's <span>B</span>log
          </Link>

          <div className="links-desktop">
            <Link href={"/"} className="link1">
              Home
            </Link>
            <Link href={"/posts"} className="link1">
              Posts
            </Link>
            <Link href={"/about"} className="link1">
              About
            </Link>
          </div>
          <div className="links-mobile">
            <div className="btn" id="menu__btn" onClick={handleMenu}>
              <AiFillCaretDown />
            </div>
            <div className="wrapper">
              <div className="menu" id="menu__list">
                <ul className="menu__list">
                  <li className="menu__list__item">
                    <a href="/" className="link1">
                      Home
                    </a>
                  </li>
                  <li className="menu__list__item">
                    <a href="/posts" className="link1">
                      Posts
                    </a>
                  </li>
                  <li className="menu__list__item">
                    <a href="#" className="link1">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
