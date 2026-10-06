const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Welcome to my Contact page</h1>
            <p className="contact-intro">Feel free to reach out or connect with me.</p>

            <section className="contact-card">
                <h2>Let&apos;s Connect</h2>
                <div className="contact-details">
                    <p><span>Name</span>Jnana R</p>
                    <p><span>Phone</span><a href="tel:7019269644">7019269644</a></p>
                    <p><span>College</span>Sahyadri College of Engineering and Management</p>
                    <p><span>Email</span><a href="mailto:jnanar406@gmail.com">jnanar406@gmail.com</a></p>
                    <p>
                        <span>LinkedIn</span>
                        <a
                            href="https://www.linkedin.com/in/jnanar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-link"
                        >
                            Visit my LinkedIn profile
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Contact;