import React from 'react';
import { Wind, Wrench, CheckCircle, Rocket, Filter } from 'lucide-react';
import workflow from '../../assets/workflow.avif';  // Import the image properly

const workflowSteps = [
  {
    icon: Wind,
    title: 'Plan',
    description: 'Strategic planning and requirement gathering phase. Define project scope, objectives, and create detailed roadmaps.',
    color: 'from-blue-500 to-blue-600',
    gradientText: 'from-blue-600 to-blue-800',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    icon: Wrench,
    title: 'Build',
    description: 'Development and implementation phase. Write code, create features, and implement solutions according to specifications.',
    color: 'from-emerald-500 to-emerald-600',
    gradientText: 'from-emerald-600 to-emerald-800',
    shadowColor: 'shadow-emerald-500/20',
  },
  {
    icon: CheckCircle,
    title: 'Test',
    description: 'Quality assurance and testing phase. Perform unit tests, integration tests, and ensure everything works as expected.',
    color: 'from-amber-500 to-amber-600',
    gradientText: 'from-amber-600 to-amber-800',
    shadowColor: 'shadow-amber-500/20',
  },
  {
    icon: Rocket,
    title: 'Release',
    description: 'Deployment and launch phase. Push to production, monitor performance, and ensure smooth rollout.',
    color: 'from-purple-500 to-purple-600',
    gradientText: 'from-purple-600 to-purple-800',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    icon: Filter,
    title: 'Operate',
    description: 'Maintenance and optimization phase. Monitor systems, gather feedback, and implement improvements.',
    color: 'from-indigo-500 to-indigo-600',
    gradientText: 'from-indigo-600 to-indigo-800',
    shadowColor: 'shadow-indigo-500/20',
  },
];

function WorkflowBox({ 
  icon: Icon, 
  title, 
  description, 
  color,
  gradientText,
  shadowColor 
}) {
  return (
    <div className="relative group w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
      <div className={`bg-white backdrop-blur-sm bg-opacity-90 rounded-3xl p-6
        transition-all duration-500 hover:shadow-2xl ${shadowColor}
        hover:scale-105 hover:-translate-y-1
        flex flex-col items-center justify-center gap-4
        border border-gray-100`}>
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${color}
          flex items-center justify-center transform transition-all duration-500
          group-hover:rotate-[360deg] group-hover:scale-110`}>
          <Icon className="text-white" size={28} strokeWidth={1.5} />
        </div>
        <h3 className={`text-lg font-bold bg-gradient-to-br ${gradientText} bg-clip-text text-transparent`}>
          {title}
        </h3>
        
        {/* Tooltip */}
        <div className={`absolute opacity-0 group-hover:opacity-100 transition-all duration-300
          bg-gradient-to-br ${color} text-white text-sm rounded-2xl py-3 px-4 
          w-52 md:w-72 bottom-full left-1/2 transform -translate-x-1/2 mb-4 
          pointer-events-none shadow-lg
          after:content-[''] after:absolute after:top-full after:left-1/2 
          after:-translate-x-1/2 after:border-8 after:border-x-transparent 
          after:border-b-transparent after:border-t-current z-10`}>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Connector Line */}
      {title !== 'Operate' && (
        <div className="hidden md:flex absolute top-1/2 -right-8 w-16 items-center">
          <div className={`w-full h-[2px] bg-gradient-to-r ${color} opacity-50`} />
          <div className={`absolute right-0 w-2 h-2 rounded-full bg-gradient-to-r ${color}`} />
        </div>
      )}
    </div>
  );
}

function Workflow() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 
      flex items-center justify-center bg-cover bg-fixed bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${workflow})` }}  // Correct way to reference the imported image
    >
      <div className="max-w-7xl w-full backdrop-blur-sm bg-white/30 rounded-3xl p-12 shadow-xl">
        <div className="flex flex-wrap items-center justify-start gap-8 md:flex-row lg:flex-nowrap">
          {workflowSteps.map((step, index) => (
            <WorkflowBox key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
