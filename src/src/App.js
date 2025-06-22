import React, { useState } from 'react';
import { Brain, Download, Github } from 'lucide-react';

const jobs = {
  'insurance-underwriter': {
    title: 'Insurance Underwriter',
    task: 'Review documents and identify gaps',
    capability: 80
  },
  'school-teacher': {
    title: 'Secondary School Teacher',
    task: 'Prepare lesson plans',
    capability: 90
  },
  'sales-copywriter': {
    title: 'Sales Copywriter', 
    task: 'Research product messaging',
    capability: 85
  }
};

function App() {
  const [selectedJob, setSelectedJob] = useState('insurance-underwriter');
  const currentJob = jobs[selectedJob];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Gen AI Assignment Portal</h1>
              <p className="text-sm text-gray-500">Interactive Use Case Demonstrator</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg">
              <Download className="h-4 w-4" />
              <span>Download Report</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Select Use Case</h2>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(jobs).map(([key, job]) => (
              <button
                key={key}
                onClick={() => setSelectedJob(key)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  selectedJob === key
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium text-sm">{job.title}</div>
                <div className="text-xs text-gray-500 mt-1">{job.capability}% Capable</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{currentJob.title}</h3>
              <p className="text-gray-600">{currentJob.task}</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {currentJob.capability}% Capable
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">What GenAI CAN Do:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Systematic document analysis and pattern recognition</li>
                <li>• Consistent application of rules and regulations</li>
                <li>• 24/7 availability with instant response times</li>
                <li>• Processing large volumes without fatigue</li>
              </ul>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">What GenAI CANNOT Do:</h4>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>• Make final decisions requiring professional judgment</li>
                <li>• Handle complex interpersonal dynamics</li>
                <li>• Adapt to unprecedented situations outside training</li>
                <li>• Provide emotional intelligence and empathy</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Implementation:</h4>
              <p className="text-green-800 text-sm">
                Advanced RAG architecture with multi-stage prompting, regulatory compliance checking, 
                and human validation layers. Estimated cost: $15,000-25,000/month with 2.1x ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
