import React from "react";
import "../styles/CoverLetterHelp.css";
import backgroundImage from "../assets/images/background.avif";
import coverImage1 from "../assets/images/coverimage1.jpg";
import coverImage2 from "../assets/images/coverimage2.jpg";
import coverImage3 from "../assets/images/coverimage3.jpg";
import coverImage4 from "../assets/images/coverimage4.jpg"; // Renamed variable
import coverImage5 from "../assets/images/coverimage5.jpg"; // Renamed variable
import coverImage6 from "../assets/images/coverimage6.jpg"; // Renamed variable

function CoverLetterHelp() {
  return (
    <div className="cover-letter-help">
      <div
        className="background-image-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="title-section">
          <h1>Cover Letter</h1>
          <p className="description">
            Master the art of writing cover letters. Boost the chances of having
            your resume read with help from expert cover letter guides and
            actionable tips. Each guide comes with clear instructions and advice
            sure to make your cover letter work.
          </p>
        </div>
      </div>

      <div className="blog-categories">
        <h4>Blog Categories:</h4>
        <ul className="category-list">
          <li>All Articles</li>
          <li>Job Search</li>
          <li>Job Interviews</li>
          <li>Career Advice</li>
          <li>Resume Help</li>
          <li>CV Help</li>
          <li>Cover Letter Help</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="cover-letter-articles">
        <div className="article">
          <img src={coverImage1} alt="Cover Letter with ChatGPT" />
          <h3>How to Use ChatGPT to Write a Cover Letter in 2024</h3>
          <p>
            You'd like to save time and write your cover letter with ChatGPT.
            Work smarter, not harder, right? Let's see if ChatGPT can really
            save you some serious amounts of effort...
          </p>
        </div>
        <div className="article">
          <img src={coverImage2} alt="Proposal Cover Letter" />
          <h3>How to Write a Proposal Cover Letter (Examples + Templates)</h3>
          <p>
            Winning a business bid doesn’t have to be tricky. If there’s an RFP,
            there should be an answer. And writing a perfect proposal cover
            letter is the way to go!
          </p>
        </div>
        <div className="article">
          <img src={coverImage3} alt="Cover Letter Signature" />
          <h3>How to Sign a Cover Letter: Signature Examples for 2024</h3>
          <p>
            You want to come off as a professional on your application. So
            should you add a cover letter signature to an ideally crafted
            document, or would that be overkill? Let’s find out!
          </p>
        </div>
      </div>

      <div className="cover-letter-articles">
        <div className="article">
          <img src={coverImage4} alt="Maintenance Cover Letter" />
          <h3>Maintenance Cover Letter: Examples & Full Guide</h3>
          <p>
            You fix appliances at the touch of your quarter-inch ratchet driver
            like a magician. Do the same with your job application by writing an
            awesome maintenance cover letter.
          </p>
        </div>
        <div className="article">
          <img src={coverImage5} alt="Network Engineer Cover Letter" />
          <h3>Network Engineer Cover Letter: Sample & Guide</h3>
          <p>
            No network interruptions occur on your watch. Craft yourself a
            perfect network engineer cover letter and increase your connectivity
            to new job opportunities!
          </p>
        </div>
        <div className="article">
          <img src={coverImage6} alt="MBA Cover Letter" />
          <h3>MBA Cover Letter: Examples for MIT, Harvard & More</h3>
          <p>
            If you’re after that prestigious Master’s at an even more
            prestigious school, your MBA cover letter will need to be dripping
            with business world professionalism.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverLetterHelp;
