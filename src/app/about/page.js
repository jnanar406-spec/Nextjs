const About = () => {
    return (
        <div className="about-page">
            <h1>Welcome to my About page</h1>
            <p className="about-intro">
                Hi, I'm Jnana R, an engineering student passionate about technology and learning new skills.
            </p>
            <section className="about-details">
                <article className="profile-card">
                    <h2>Education</h2>
                    <p>Currently studying in the 3rd semester.</p>
                    <p>Bachelor of Engineering in Computer Science.</p>
                    <p>Sahyadri College of Engineering and Management.</p>
                </article>
                <article className="profile-card">
                    <h2>Technical Skills</h2>
                    <ul className="skill-list">
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                    </ul>
                </article>
            </section>
        </div>
    );
};

export default About;