// import { title } from "@/components/primitives";

// export default function AboutPage() {
// 	return (
// 		<div>
// 			<h1 className={title()}>About</h1>
// 		</div>
// 	);
// }
import { title, subtitle } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="px-4 py-8">
      <h1>About WhispWrite</h1>

      <section className="mt-6">
        <h2>Inspiration</h2>
        <p>
          This project emerged from the daily challenges we face as students.
          Balancing attention between listening to lectures and taking notes is
          a common struggle. Recognizing this, we envisioned a tool that could
          autonomously attend lectures and compile notes, offering a solution
          where existing alternatives fall short, mainly due to their cost. Our
          objective is to deliver a free, locally, operated LLM that prioritizes
          data security and privacy with no cost. We believe in the importance
          of consent when it comes to using recorded educational content, and we
          should not be uploading other's voices and videos to AI-hosing
          services without others knowing it. Yeah, OpenAI's APIs and ChatGPT
          keep your data for 30 days. We don't, and everything disappear from
          memory after closing it.
        </p>
      </section>

      <section className="mt-6">
        <h2>How to Use</h2>
        <ul>
          <li>
            Upload your audio file: Simply click on the upload section, choose
            your file, and let our system take care of the rest.
          </li>
          <li>
            Review and Note-taking: After transcription, review the text and
            make it a summarized note with detailed keypoints by clicking GET
            NOTE.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2>Future Work</h2>
        <p>
          We are constantly working to improve WhispWrite. Future updates
          include support for more languages, real-time transcription, and
          integration with third-party applications to enhance your productivity
          and workflow.
        </p>
      </section>

      <section className="mt-6">
        <h2>Authors</h2>
        <p>
          Richard Hu
          <br />
          Shu Yang
          <br />
          Allen Zhang
          <br />
        </p>
      </section>
    </div>
  );
}
