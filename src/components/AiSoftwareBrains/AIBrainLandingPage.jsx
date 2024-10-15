import React from 'react';

const AIBrainLandingPage = () => {
  return (
 <div className='section' >  
      <header>
        <h1>AI Software Brains</h1>
        <p>Your Autonomous Development Assistant</p>
      </header>

      <section>
        <h2>Service Description</h2>
        <p>
          AI Software Brains is an artificial intelligence-powered robot that, once installed on a PC (Mac or Windows), acts as a highly autonomous development assistant. This AI communicates via WhatsApp and can manage all aspects of a web, software, or marketing project with minimal human intervention.
        </p>
      </section>

      <section>
        <h2>How It Works</h2>
        <ul>
          <li><strong>Installation on a Clean Environment:</strong> The bot is installed on a clean system (Mac or Windows), ensuring a safe and optimized work environment.</li>
          <li><strong>Communication via WhatsApp:</strong> The bot communicates with a designated point of contact through WhatsApp, receiving project instructions, asking for clarifications, and updating progress.</li>
          <li><strong>Credential Management:</strong> The bot detects when credentials are required for accessing services like hosting, databases, or APIs, requests them via WhatsApp, and uses them to continue the development process.</li>
          <li><strong>Automatic Software Installation:</strong> The bot installs necessary development tools (e.g., code editors, runtime environments) to prepare the work environment.</li>
          <li><strong>Code Development:</strong> It autonomously generates and writes code, focusing on React (frontend) and Node.js (backend), configuring APIs and integrating third-party services.</li>
          <li><strong>Testing, Debugging, and Deployment:</strong> The bot tests the code, debugs errors, and deploys the project to hosting or cloud platforms as needed.</li>
          <li><strong>Constant Updates via WhatsApp:</strong> Throughout the process, the bot provides real-time updates and requests further details or confirmations as needed.</li>
        </ul>
      </section>

      <section>
        <h2>Available Package</h2>
        <div>
          <h3>Premium Package</h3>
          <p>Price: $5,000/month</p>
          <p>Includes all the features mentioned above. The bot handles the entire project lifecycle, from initial instructions to final delivery, with minimal human intervention.</p>
          <p><strong>Demo:</strong> Available upon request (waiting list due to high demand).</p>
        </div>
      </section>
    </div>
  );
};

export default AIBrainLandingPage;
