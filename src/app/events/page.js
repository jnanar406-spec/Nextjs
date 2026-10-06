const Events = () => {
    return (
        <div className="events-page">
            <h1>Welcome to my Events page</h1>
            <p className="events-intro">My participation in technology events.</p>

            <section className="events-list">
                <article className="event-card">
                    <span className="event-number">01</span>
                    <h2>SIH Hackathon</h2>
                    <p>Participated in SIH hackathon.</p>
                </article>
                <article className="event-card">
                    <span className="event-number">02</span>
                    <h2>Versathon</h2>
                    <p>Participated in Versathon.</p>
                </article>
            </section>
        </div>
    );
};

export default Events;