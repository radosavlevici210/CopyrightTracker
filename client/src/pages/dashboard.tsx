import { useEffect } from "react";
import BiometricDashboard from "@/components/BiometricDashboard";

export default function Dashboard() {
  useEffect(() => {
    // Set page title
    document.title = "Neural AI Biometric Security Dashboard - © 2025 Ervin Remus Radosavlevici";
  }, []);

  return (
    <div className="min-h-screen">
      <BiometricDashboard />
    </div>
  );
}
