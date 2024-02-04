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
            <h1 className={title()}>About WhisperWrite</h1>

            <section className="mt-6">
                <h2 className={subtitle()}>Inspiration</h2>
                <p>
                    WhisperWrite was inspired by the need for a seamless, intuitive platform to convert video or audio to text, enabling easier content creation, note-taking, and data analysis. Our goal was to create a user-friendly interface that leverages state-of-the-art machine learning models to deliver accurate transcriptions and provide an easy read summary.
                </p>
            </section>

            <section className="mt-6">
                <h2 className={subtitle()}>How to Use</h2>
                <ul>
                    <li>Upload your audio file: Simply click on the upload section, choose your file, and let our system take care of the rest.</li>
                    <li>Review and Note-taking: After transcription, review the text and make it a summarized note with detailed keypoints if necessary.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className={subtitle()}>Future Work</h2>
                <p>
                    We are constantly working to improve WhisperWrite. Future updates include support for more languages, real-time transcription, and integration with third-party applications to enhance your productivity and workflow.
                </p>
            </section>

			<section className="mt-6">
                <h2 className={subtitle()}>Authors</h2>
                <p>
					Richard Hu<br/>
					Shu Yang<br/>
					Allen Zhang<br/>

                </p>
            </section>
        </div>
    );
}

