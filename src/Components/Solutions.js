import React from "react";

const Solutions = () => {
  return (
    <section className="bg-gray-100 py-16" id="solutions">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Solutions</h3>
      </div>

      <div className="text-center mt-10">
        <h5 className="text-2xl font-bold p-4">
          Plan with Precision for Seamless DevOps
        </h5>
        <p className="text-lg">
          Ensure your projects start on the right foot by aligning goals,
          resources, and expectations from the outset. Copado’s planning
          solutions place strategy at the core of your DevOps pipeline,
          integrating advanced AI-driven tools to streamline planning processes
          and ensure comprehensive coverage.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Box */}
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/150"
            alt="Left Box"
            className="w-full h-32 object-cover mb-4"
          />
          <h5 className="text-2xl font-bold mb-2">Rapid Iteration</h5>
          <p className="text-lg">
            This is the description for the left box. It explains the details
            relevant to this solution.
          </p>
        </div>

        {/* Right Box */}
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/150"
            alt="Right Box"
            className="w-full h-32 object-cover mb-4"
          />
          <h5 className="text-2xl font-bold mb-2">Easy Resource Allocation</h5>
          <p className="text-lg">
            This is the description for the right box. It provides additional
            context and information.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Box */}
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/150"
            alt="Left Box"
            className="w-full h-32 object-cover mb-4"
          />
          <h5 className="text-2xl font-bold mb-2">Rapid Iteration</h5>
          <p className="text-lg">
            This is the description for the left box. It explains the details
            relevant to this solution.
          </p>
        </div>

        {/* Right Box */}
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/150"
            alt="Right Box"
            className="w-full h-32 object-cover mb-4"
          />
          <h5 className="text-2xl font-bold mb-2">Easy Resource Allocation</h5>
          <p className="text-lg">
            This is the description for the right box. It provides additional
            context and information.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        {/* Left Image */}
        <div className="bg-white w-full md:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Left Side Image"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full md:w-1/2">
          <h5 className="text-2xl font-bold mb-2">
            AI in Planning: Strategic, Predictive, and Insightful
          </h5>
          <p className="text-lg">
            Copado PlanAgent empowers your teams to accelerate user story
            creation, automate planning, and reduce risks through intelligent
            insights.
          </p>
          <div>
            <ul>
              <li>
                Accelerate User Story Creation: Enhance specification quality
                and feature breakdown with AI-driven suggestions.
              </li>
              <li>
                Streamline Development: Utilize intelligent automation to reduce
                rework and delays, ensuring projects stay on track.
              </li>
              <li>
                Identify Risks: Use predictive analytics to identify potential
                risks and adjust plans accordingly.
              </li>
              <li>
                Align with Modern Planning Practices: Benefit from AI-enhanced
                tools that ensure best practices in planning and execution.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
