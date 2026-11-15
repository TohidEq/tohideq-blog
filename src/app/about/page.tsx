import Link from "next/link";


export function generateMetadata() {
  return {
    title: `About`,
    description: "About Tohid Eghdami"
  };
}

export default async function TagPostList() {
  return (
    <div className="blog">
      <div className="blog page">
        <article className="blog-post">
          <section className="post-section">
              <h2>I'm Tohid!</h2>
              <span>HELLO THERE :)</span>
            <p>
              A self-taught developer who loves building things, breaking things,
              and figuring out how they work. I'm mostly into front-end development,
              especially React and Next.js, but I also enjoy exploring Linux,
              customizing my desktop, creating little CLI tools, and experimenting
              with different technologies.
            </p>
            <p>
              I'm a big fan of minimalism, open source, and making things feel just
              right. Most of my projects start with a random idea, a little curiosity,
              and probably too much coffee.
            </p>
            <footer>
              <p>
              Find me on <a href="https://github.com/tohideq" target="_blank" rel="noopener noreferrer">
                <b>
                GitHub
                </b>
              </a> and <a href="https://t.me/tohid_eq" target="_blank" rel="noopener noreferrer">
                <b>
                Telegram
                </b>
              </a>
              </p>

              <p>
                And: <a href="https://github.com/tohideq" target="_blank" rel="noopener noreferrer">
                  this <b>"TohidEq's Blog"</b> repo on <b>GitHub</b>
                </a>
              </p>
            </footer>







          </section>
        </article>
      </div>
    </div>
  );
}
