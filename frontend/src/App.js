import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/earn-credits">Earn Credits</Link></li>
        <li><Link to="/campaigns">Campaigns</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/referrals">Referrals</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </nav>
  </aside>
);

const Page = ({ title, children }) => (
  <div className="main-content">
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);

const Dashboard = () => <Page title="Dashboard">Dashboard page content goes here.</Page>;
const EarnCredits = () => <Page title="Earn Credits">Earn Credits page content goes here.</Page>;
const Campaigns = () => <Page title="Campaigns">Campaigns page content goes here.</Page>;
const Store = () => <Page title="Store">Store page content goes here.</Page>;
const Referrals = () => <Page title="Referrals">Referrals page content goes here.</Page>;
const Help = () => <Page title="Help">Help page content goes here.</Page>;

export default function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/earn-credits" element={<EarnCredits />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/store" element={<Store />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}