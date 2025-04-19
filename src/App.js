
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import SapBusiness from "./pages/SAPPages/SapBusiness";
import SapConsulting from "./pages/SAPPages/SapConsulting";
import SapSupport from "./pages/SAPPages/SapSupport";
import SapUpgradation from "./pages/SAPPages/SapUpgradation";
import SapBusinessOneCloud from "./pages/SAPPages/SapBusinessOneCloud";
import SapHanaSolution from "./pages/SAPPages/SapHanaSolution";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AWSDeploymentManagement from './pages/AWSPages/AWSDeploymentManagement';
import AWSSecurity from './pages/AWSPages/AWSSecurity';
import AWSCostOptimization from './pages/AWSPages/AWSCostOptimization';
import AWSManagedServices from './pages/AWSPages/AWSManagedServices';
import AWSSupport from './pages/AWSPages/AWSSupport';
import AWSMigration from './pages/AWSPages/AWSMigration';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import OsService from './pages/OsServicePages/OsService';
import OracleServices from './pages/OraclePages/OracleService';

function App() {
  return (
    <Router>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/career" element={<Career />} />

                  
                    <Route path="/services/sap-business" element={<SapBusiness />} />
                    <Route path="/services/sap-consulting" element={<SapConsulting />} />
                    <Route path="/services/sap-support" element={<SapSupport />} />
                    <Route path="/services/sap-upgradation" element={<SapUpgradation />} />
                    <Route path="/services/sap-business-one-cloud" element={<SapBusinessOneCloud />} />
                    <Route path="/services/sap-hana-solution" element={<SapHanaSolution />} />


                    <Route path="/services/oracle-service" element={<OracleServices />} />

                    <Route path="/services/os-service" element={<OsService />} />


                    <Route path="/services/aws-deployment-management" element={<AWSDeploymentManagement />} />
                    <Route path="/services/aws-security" element={<AWSSecurity />} />
                    <Route path="/services/aws-cost-optimization" element={<AWSCostOptimization />} />
                    <Route path="/services/aws-managed-services" element={<AWSManagedServices />} />
                    <Route path="/services/aws-support" element={<AWSSupport />} />
                    <Route path="/services/aws-migration" element={<AWSMigration />} />
                </Routes>
                <Footer />
            </div>
        </Router>
  );
}

export default App;
