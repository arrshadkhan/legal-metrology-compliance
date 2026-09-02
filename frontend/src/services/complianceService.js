import { mockScans, mockComplaints, mockRules, dashboardStats } from '../data/mockData';

// Simulated delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const complianceService = {
  getDashboardStats: async () => {
    await delay(300);
    return dashboardStats;
  },

  getRecentScans: async () => {
    await delay(500);
    return mockScans;
  },

  getScanResult: async (scanId) => {
    await delay(500);
    return mockScans.find(s => s.id === scanId) || mockScans[0];
  },

  submitComplaint: async (complaintData) => {
    await delay(1000);
    const newComplaint = {
      id: `LM-2026-${String(Math.floor(Math.random() * 1000)).padStart(4, '0')}`,
      ...complaintData,
      date: new Date().toISOString().split('T')[0],
      status: 'Submitted'
    };
    return newComplaint;
  },

  getMyComplaints: async () => {
    await delay(600);
    return mockComplaints;
  },
  
  getRules: async () => {
    await delay(300);
    return mockRules;
  }
};
