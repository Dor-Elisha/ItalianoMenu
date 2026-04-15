import { Link } from "react-router-dom";
import { mainCourse, starterCourse } from "@/data/menu";

function MenuPage() {
  return (
    <main className="page-shell menu-page">
      <section className="menu-header">
        <div>
          <p className="eyebrow" lang="en">
            Menu Degustazione
          </p>
          <h1 className="display-title menu-title">התפריט</h1>
          <p className="lead-text menu-lead">
            תפריט איטלקי קצר ומדויק</p>
        </div>

        <Link className="secondary-link" to="/">
          חזרה לעמוד הבית
        </Link>
      </section>

      <section className="menu-grid">
        <article className="menu-card">
          <div className="menu-copy">
            <p className="course-label">{starterCourse.title}</p>
            <h2>{starterCourse.name}</h2>
            <p>{starterCourse.description}</p>
            <p className="menu-note">{starterCourse.side}</p>
          </div>

          <div className="image-frame">
            <img
              alt={starterCourse.imageAlt}
              className="menu-image"
              loading="lazy"
              src={starterCourse.imageSrc}
            />
          </div>
        </article>

        <article className="menu-card">
          <div className="menu-copy">
            <p className="course-label">{mainCourse.title}</p>
            <h2>{mainCourse.name}</h2>
            <p>{mainCourse.description}</p>
          </div>

          <div className="image-frame">
            <img
              alt={mainCourse.imageAlt}
              className="menu-image"
              loading="lazy"
              src={mainCourse.imageSrc}
            />
          </div>
        </article>
      </section>
    </main>
  );
}

export default MenuPage;
