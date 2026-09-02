import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

import Dashboard from './pages/Dashboard';
import ScanProduct from './pages/ScanProduct';
import AnalysisWorkflow from './pages/AnalysisWorkflow';
import ComplianceResults from './pages/ComplianceResults';
import RaiseComplaint from './pages/RaiseComplaint';
import MyComplaints from './pages/MyComplaints';
import MyScans from './pages/MyScans';
import Reports from './pages/Reports';
import LegalInfo from './pages/LegalInfo';
import RulesGuidelines from './pages/RulesGuidelines';
import Help from './pages/Help';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scan" element={<ScanProduct />} />
          <Route path="analysis" element={<AnalysisWorkflow />} />
          <Route path="results" element={<ComplianceResults />} />
          <Route path="complaints" element={<RaiseComplaint />} />
          <Route path="my-complaints" element={<MyComplaints />} />
          <Route path="scans" element={<MyScans />} />
          <Route path="reports" element={<Reports />} />
          <Route path="legal-information" element={<LegalInfo />} />
          <Route path="rules" element={<RulesGuidelines />} />
          <Route path="help" element={<Help />} />
          <Route path="profile" element={<Profile />} />
          
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
