import { Link } from "react-router-dom";
import chefImage from "@/assests/Dor as a chef.png";

function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow" lang="en">
            Italian Fine Dining
          </p>
          <h1 className="display-title" lang="en">
            Italiano On The River
          </h1>
          <p className="lead-text">
            חווית אירוח איטלקית מבית השף המהולל אלישע, חומרי גלם מעולים ואווירה
            אלגנטית של ערב איטלקי.
          </p>
          <p className="support-text">
            תפריט מצומצם ומדויק, הגשה יוקרתית וטעמים נקיים שנותנים מקום לאיכות
            לדבר.
          </p>
          <div className="cta-row">
            <Link className="primary-button" to="/menu">
              לתפריט
            </Link>
          </div>
        </div>

        <aside className="hero-feature">
          <div className="chef-stage">
            <img
              alt="השף של Casa Bellissima"
              className="chef-image"
              loading="eager"
              src={chefImage}
            />

            <div className="feature-card chef-caption">
              <span className="feature-label" lang="en">
                Chef Selection
              </span>
              <p>
                פוקאצ'ה טרייה, קפרזה איטלקית ופסטה שמנת פטריות בקו הגשה אלגנטי
                ומדויק.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default HomePage;
