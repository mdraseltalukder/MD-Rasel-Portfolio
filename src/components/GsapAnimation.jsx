/* eslint-disable react/prop-types */
import SocialLinks from "./ui/SocialLinks";

export default function GsapAnimation({ showPage, setShowPage }) {
  return (
    <>
      {showPage && (
        <div
          className="gsap-animation mx-auto z-50"
          onClick={() => setShowPage(false)}
        >
          <div
            className="flex flex-col items-center justify-center gap-3"
            id="gsap"
          >
            <h2 className="text-4xl font-bold text-white mb-4 cinzel-decorative-regular">
              WELCOME TO MY
            </h2>

            <h1 className="text-5xl font-bold text-[#00e7f8] mb-4">
              PORTFOLIO WEBSITE
            </h1>
          </div>
          <SocialLinks />
        </div>
      )}
    </>
  );
}
