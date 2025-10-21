import React from "react";
import "./Page2CaseStudies.css";

// Import images
import page1image1 from "../../../assets/page1image1.png";
import page1image2 from "../../../assets/page1image2.png";
import page1image3 from "../../../assets/page1image3.png";
import page1image4 from "../../../assets/page1image4.png";
import MaskGroup from "../../../assets/Mask-image.png";
import strategies from "../../../assets/Strategies.png";
import results from "../../../assets/ResultPage2.png";

const CaseStudiesPage1 = () => {
  return (
    <div className="CaseStudiesPage1-comp">
      {/* Brand Overview */}
      <div className="page1casestudies-Page1-top-brand">
        <div className="page1casestudies-brand-overview-section">
         
          <h1 className="page1casestudies-main-title">
            Health & Personal Care Brand: A Strategic Expansion Case Study
          </h1>

          <div className="page1casestudies-overview-content">
            <div className="page1casestudies-left-content">
              <h2 className="page1casestudies-section-title">
                About the Brand
              </h2>
              <p className="page1casestudies-subtitle">
                Personal Care & Health
              </p>

              <p className="page1casestudies-description">
                Upon our engagement, this brand's Lozenges encountered several
                expansion obstacles.
              </p>

              <p className="page1casestudies-challenges">
                Obstacles: Stagnant sales performance, suboptimal product pages,
                elevated advertising costs, disorganized campaign structure,
                absent feedback mechanism, and insufficient market recognition.
              </p>
            </div>

            <div className="page1casestudies-right-content">
              <img
                src={MaskGroup}
                alt="Multivitamin candies"
                className="page1casestudies-candy-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* challenge compoent */}
      <div className="challenges-section">
        <div className="challenges-1">
          <div className="challenge-content">
            <h3>Obstacles Prior to Our Engagement</h3>
            <p>
              <span>
                {" "}
                <strong>Revenue Stagnation</strong> – Sales performance had
                flatlined despite steady order volume.
              </span>
            </p>
            <p>
              <span>
                {" "}
                <strong>Weak Listings</strong> – Inadequate search optimization,
                substandard imagery, and inferior Enhanced Content were
                restricting conversions.{" "}
              </span>
            </p>
            <p>
              <span>
                {" "}
                <strong>High ACoS & Inefficient PPC</strong> – ACoS reached
                51.2% resulting from disorganized campaigns and poor keyword
                selection.{" "}
              </span>
            </p>
            <p>
              <span>
                {" "}
                <strong>Lack of Review Management</strong> – No framework
                existed to collect or handle customer testimonials.{" "}
              </span>
            </p>
            <p>
              <span>
                {" "}
                <strong>Limited Brand Awareness</strong> – Negligible
                promotional initiatives beyond a rudimentary storefront.
              </span>
            </p>
          </div>
          <div className="image-section">
            <div className="image-section-left">
              <div className="image-section-left-1">
                <img src={page1image1} alt="Logo" />
                <h2>Revenue Stagnation</h2>
              </div>
              <div className="image-section-left-2">
                <img src={page1image3} alt="Logo" />
                <h2>Lack of Review Management</h2>
              </div>
            </div>
            <div className="image-section-right">
              <div className="image-section-right-1">
                <img src={page1image2} alt="Logo" />
                <h2>High ACoS & Inefficient PPC </h2>
              </div>
              <div className="image-section-right-2">
                <img src={page1image4} alt="Logo" />
                <h2>Limited Brand Awareness</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Strategies & Solutions  */}
      <div className="challenges-section2 ">
        <div className="challenges-2">
          <div className="image-section-strategies">
            <img src={strategies} alt="Logo" />
          </div>
          <div className="challenge-content-2">
            <h3>Solutions & Tactics We Deployed</h3>
            <p>
              To achieve lasting expansion, we implemented a
              performance-focused, phased approach:
            </p>
            <div>
              <strong>
                <p>1. Product Page Enhancement</p>
              </strong>
              <ul>
                <li>
                  <p>
                    <span>
                      Refined headlines, features, and descriptions with
                      buyer-centric messaging.
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      Improved visuals and Enhanced Brand Content for superior
                      engagement and sales performance.
                    </span>
                  </p>
                </li>
              </ul>

              <strong>
                <p>2. Advertising Campaign Overhaul</p>
              </strong>
              <ul>
                <li>
                  <p>
                    <span>
                      Established organized keyword selection and bidding
                      refinement.
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      Eliminated inefficient expenditure and decreased ACoS from
                      51.2% to 23.5%.
                    </span>
                  </p>
                </li>
              </ul>

              <strong>
                <p>3. Feedback Collection Framework</p>
              </strong>
              <ul>
                <li>
                  <p>
                    <span>
                      Established an automated outreach mechanism to boost
                      customer interaction.
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      Stimulated natural testimonial accumulation to enhance
                      credibility signals.
                    </span>
                  </p>
                </li>
              </ul>

              <strong>
                <p>4. Visibility Enhancement Initiative</p>
              </strong>
              <ul>
                <li>
                  <p>
                    <span>
                      Upgraded Brand Store for a more captivating brand
                      experience.
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      Initiated external platform promotions to generate
                      supplementary visitors.
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results and achievments */}
      <div className="challenges-section-3">
        <div className="challenges-3">
          <div className="challenge-content-3">
            <h3>Outcomes & Milestones</h3>
            <p>
              Our tactical implementations delivered quantifiable achievements:
            </p>
            <ul>
              <li>
                <p>
                  <span>
                    Sales Expansion – Revenue increased through enhanced product
                    pages and advertising refinements.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    Conversion Enhancement – Superior content quality and
                    refined audience selection resulted in improved CVR.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    Ad Performance – ACoS decreased from 51.2% to 23.5%,
                    substantially boosting campaign profitability.{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    {" "}
                    Enhanced Customer Confidence – Strategic feedback
                    initiatives preserved elevated ratings and reputation.{" "}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span>
                    Amplified Market Presence – Reinforced positioning both on
                    the platform and via off-site avenues.
                  </span>
                </p>
              </li>
            </ul>
            <strong>
              <p className="bottom-p">
                Via systematic refinement and performance-oriented tactics,
                Optivida Lozenges evolved from a plateaued listing to a
                thriving, expandable product on Amazon.
              </p>
            </strong>
          </div>
          <div className="image-section-results">
            <img src={results} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage1;
