import Image from "next/image";
import Link from "next/link";
import photo from "../assets/photo.jpg";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-copy">
        <p className="home-eyebrow">PORTFOLIO · COMPUTER SCIENCE</p>
        <h1>Hi, I&apos;m <span>Jnana R</span></h1>
        <p className="home-role">Computer Science Engineering Student</p>
        <p className="home-intro">
          I enjoy exploring technology, building my programming skills, and learning through new challenges.
        </p>
        <div className="home-skills" aria-label="Technical skills">
          <span>C</span>
          <span>C++</span>
          <span>Python</span>
        </div>
        <div className="home-actions">
          <Link href="/about">Explore my profile</Link>
          <Link href="/contact">Get in touch</Link>
        </div>
      </div>
      <Image
        src={photo}
        alt="My Profile"
        width={200}
        height={200}
        className="home-profile-image"
      />
      <span className="home-orbit home-orbit-one" aria-hidden="true" />
      <span className="home-orbit home-orbit-two" aria-hidden="true" />
    </div>
  );
}