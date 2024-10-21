import React,{useEffect} from "react";

const AIBrainLandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black rounded-lg shadow-lg mt-10 mb-10">
      <header className="text-center mb-6">
        <h1 className="text-5xl font-bold text-white">AI Software Brains</h1>
        <p className="text-lg text-gray-300 italic">
          Your Autonomous Development Assistant
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Service Description
        </h2>
        <p className="text-gray-300 leading-relaxed">
          AI Software Brains is an artificial intelligence-powered robot that,
          once installed on a PC (Mac or Windows), acts as a highly autonomous
          development assistant. This AI communicates via WhatsApp and can
          manage all aspects of a web, software, or marketing project with
          minimal human intervention.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-white mb-4">How It Works</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Installation on a Clean Environment:</strong> The bot is
            installed on a clean system (Mac or Windows), ensuring a safe and
            optimized work environment.
          </li>
          <li>
            <strong>Communication via WhatsApp:</strong> The bot communicates
            with a designated point of contact through WhatsApp, receiving
            project instructions, asking for clarifications, and updating
            progress.
          </li>
          <li>
            <strong>Credential Management:</strong> The bot detects when
            credentials are required for accessing services like hosting,
            databases, or APIs, requests them via WhatsApp, and uses them to
            continue the development process.
          </li>
          <li>
            <strong>Automatic Software Installation:</strong> The bot installs
            necessary development tools (e.g., code editors, runtime
            environments) to prepare the work environment.
          </li>
          <li>
            <strong>Code Development:</strong> It autonomously generates and
            writes code, focusing on React (frontend) and Node.js (backend),
            configuring APIs and integrating third-party services.
          </li>
          <li>
            <strong>Testing, Debugging, and Deployment:</strong> The bot tests
            the code, debugs errors, and deploys the project to hosting or cloud
            platforms as needed.
          </li>
          <li>
            <strong>Constant Updates via WhatsApp:</strong> Throughout the
            process, the bot provides real-time updates and requests further
            details or confirmations as needed.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-white mb-4">
          Available Package
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold text-white">Premium Package</h3>
          <p className="text-lg text-gray-300">
            Price:{" "}
            <span className="font-bold text-green-400">$5,000/month</span>
          </p>
          <p className="text-gray-300 mb-2">
            Includes all the features mentioned above. The bot handles the
            entire project lifecycle, from initial instructions to final
            delivery, with minimal human intervention.
          </p>
          <p className="text-gray-300">
            <strong>Demo:</strong> Available upon request (waiting list due to
            high demand).
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIBrainLandingPage;
