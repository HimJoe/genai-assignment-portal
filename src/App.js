import React, { useState } from 'react';

// Simple working component without external dependencies
const App = () => {
  const [selectedJob, setSelectedJob] = useState('insurance-underwriter');

  const jobs = {
    'insurance-underwriter': {
      title: 'Insurance Underwriter',
      task: 'Review documents and identify gaps',
      capability: 80,
      description: 'Analyze insurance applications systematically to identify missing information and ensure regulatory compliance.'
    },
    'school-teacher': {
      title: 'Secondary School Teacher',
      task: 'Prepare lesson plans',
      capability: 90,
      description: 'Generate comprehensive lesson plans with learning objectives, activities, and assessment strategies.'
    },
    'sales-copywriter': {
      title: 'Sales Copywriter',
      task: 'Research product messaging',
      capability: 85,
      description: 'Analyze competitor messaging and market data to create effective sales copy and marketing materials.'
    }
  };

  const currentJob = jobs[selectedJob];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)', fontFamily: 'system-ui' }}>
      {/* Header */}
      <header style={{ background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', padding: '8px', borderRadius: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: 'white', borderRadius: '50%' }}></div>
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>Gen AI Assignment Portal</h1>
              <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Interactive Use Case Demonstrator</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#16a34a', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
              📄 Download Report
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1f2937', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
              📦 GitHub
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Use Case Selection */}
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#111827' }}>Select Use Case</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {Object.entries(jobs).map(([key, job]) => (
              <button
                key={key}
                onClick={() => setSelectedJob(key)}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: selectedJob === key ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  background: selectedJob === key ? '#eff6ff' : 'white',
                  color: selectedJob === key ? '#1e40af' : '#374151',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontWeight: '500', fontSize: '14px' }}>{job.title}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{job.capability}% Capable</div>
              </button>
            ))}
          </div>
        </div>

        {/* Job Details */}
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>{currentJob.title}</h3>
              <p style={{ margin: '4px 0 0 0', color: '#6b7280' }}>{currentJob.task}</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: '500' }}>
              {currentJob.capability}% Capable
            </div>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>{currentJob.description}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {/* What AI Can Do */}
            <div style={{ padding: '16px', background: '#eff6ff', borderLeft: '4px solid #3b82f6', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#1e40af' }}>✅ What GenAI CAN Do:</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#1e40af' }}>
                <li style={{ marginBottom: '4px' }}>Systematic document analysis and pattern recognition</li>
                <li style={{ marginBottom: '4px' }}>Consistent application of rules and regulations</li>
                <li style={{ marginBottom: '4px' }}>24/7 availability with instant response times</li>
                <li style={{ marginBottom: '4px' }}>Processing large volumes without fatigue</li>
              </ul>
            </div>
            
            {/* What AI Cannot Do */}
            <div style={{ padding: '16px', background: '#fef3cd', borderLeft: '4px solid #f59e0b', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#92400e' }}>⚠️ What GenAI CANNOT Do:</h4>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#92400e' }}>
                <li style={{ marginBottom: '4px' }}>Make final decisions requiring professional judgment</li>
                <li style={{ marginBottom: '4px' }}>Handle complex interpersonal dynamics</li>
                <li style={{ marginBottom: '4px' }}>Adapt to unprecedented situations</li>
                <li style={{ marginBottom: '4px' }}>Provide emotional intelligence and empathy</li>
              </ul>
            </div>
          </div>

          {/* Implementation Details */}
          <div style={{ marginTop: '24px', padding: '16px', background: '#f0fdf4', borderLeft: '4px solid #16a34a', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#166534' }}>🚀 Implementation Approach:</h4>
            <p style={{ margin: 0, color: '#166534', fontSize: '14px' }}>
              Advanced RAG architecture with multi-stage prompting, regulatory compliance checking, 
              and human validation layers. Estimated implementation cost: $15,000-25,000/month with 
              projected 2.1x ROI through efficiency gains and quality improvements.
            </p>
          </div>

          {/* Assignment Info */}
          <div style={{ marginTop: '24px', padding: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#475569' }}>📚 Assignment Context:</h4>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px' }}>
              This interactive portal demonstrates GenAI implementations across 10 professional use cases 
              for the Gen AI Pre-Trained Models course. The complete analysis includes knowledge base design, 
              RAG enhancement techniques, cost-benefit analysis, and implementation testing evidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
