import React, { useState } from "react";

const Services = () => {
  const [selectedTab, setSelectedTab] = useState("SAP Service");

  const tabs = ["SAP Service", "Oracle Services", "AWS Services", "OS Services"];

  const renderContent = () => {
    switch (selectedTab) {
      case "SAP Service":
        return (
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="flex-1 bg-white shadow p-4 rounded border">
              <h2 className="text-2xl font-bold mb-2 text-blue-900">SAP Services <span className="inline-block">&rarr;</span></h2>
              <p className="text-gray-600 mb-4">
                A low-risk, high-quality, service framework designed to automate Cloud adoption and drive business transformation.
              </p>
              <div className="flex gap-8 text-center mb-6">
                <div>
                  <p className="text-2xl font-bold text-black">450+</p>
                  <p className="font-semibold text-black">Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-black">400+</p>
                  <p className="font-semibold text-black">Specialists</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-black">4000+</p>
                  <p className="font-semibold text-black">Years of collective experience</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Our Partners</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEfyxMDlVU_E5T-4DcfNQOmQA4L0XG8nmvA&s",
                  "data:image/png;base64,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",
                  "data:image/png;base64,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",                
                ].map((logo, idx) => (
                  <div key={idx} className="p-4 bg-gray-100 rounded">
                    <img src={`${logo}`} alt="partner logo" className="mx-auto h-10 object-contain" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/3 bg-white shadow p-4 rounded border">
              <h3 className="text-lg font-bold text-blue-900 mb-4">What We Offer</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
                <li>SAP Business One Implementation & Consulting</li>
                <li>SAP Consulting</li>
                <li>SAP Support</li>
                <li>SAP Upgradation</li>
                <li>SAP Business One Cloud</li>
                <li>SAP Business One HANA Solution</li>
              </ul>
            </div>
          </div>
        );
      case "Oracle Services":
        return (
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="flex-1 bg-white shadow p-4 rounded border">
                <h2 className="text-2xl font-bold mb-2 text-blue-900">Oracle Services <span className="inline-block">&rarr;</span></h2>
                <p className="text-gray-600 mb-4">
                  A low-risk, high-quality, service framework designed to automate Cloud adoption and drive business transformation.
                </p>
                <div className="flex gap-8 text-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-black">450+</p>
                    <p className="font-semibold text-black">Customers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black">400+</p>
                    <p className="font-semibold text-black">Specialists</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black">4000+</p>
                    <p className="font-semibold text-black">Years of collective experience</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Our Partners</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEfyxMDlVU_E5T-4DcfNQOmQA4L0XG8nmvA&s",
                    "data:image/png;base64,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",
                    "data:image/png;base64,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",                
                  ].map((logo, idx) => (
                    <div key={idx} className="p-4 bg-gray-100 rounded">
                      <img src={`${logo}`} alt="partner logo" className="mx-auto h-10 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/3 bg-white shadow p-4 rounded border">
                <h3 className="text-lg font-bold text-blue-900 mb-4">What We Offer</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
                  <li>Installation & Configuration</li>
                  <li>Database Upgrades & Migrations</li>
                  <li>Performance Tuning</li>
                  <li>Backup & Recovery Solutions</li>
                  <li>High Availability & Disaster Recovery</li>
                  <li>Security & Compliance</li>
                  <li>Managed Services</li>
                </ul>
              </div>
            </div>
          );
      case "AWS Services": 
      return (
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="flex-1 bg-white shadow p-4 rounded border">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">AWS Services <span className="inline-block">&rarr;</span></h2>
            <p className="text-gray-600 mb-4">
              A low-risk, high-quality, service framework designed to automate Cloud adoption and drive business transformation.
            </p>
            <div className="flex gap-8 text-center mb-6">
              <div>
                <p className="text-2xl font-bold text-black">450+</p>
                <p className="font-semibold text-black">Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">400+</p>
                <p className="font-semibold text-black">Specialists</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">4000+</p>
                <p className="font-semibold text-black">Years of collective experience</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Our Partners</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEfyxMDlVU_E5T-4DcfNQOmQA4L0XG8nmvA&s",
                "data:image/png;base64,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",
                "data:image/png;base64,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",                
              ].map((logo, idx) => (
                <div key={idx} className="p-4 bg-gray-100 rounded">
                  <img src={`${logo}`} alt="partner logo" className="mx-auto h-10 object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 bg-white shadow p-4 rounded border">
            <h3 className="text-lg font-bold text-blue-900 mb-4">What We Offer</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
              <li>AWS Deployment & Management</li>
              <li>AWS Security</li>
              <li>AWS Cost Optimization</li>
              <li>AWS Managed Services</li>
              <li>AWS Support</li>
              <li>AWS Migration</li>
            </ul>
          </div>
        </div>
      ); 
      case "OS Services": 
      return (
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="flex-1 bg-white shadow p-4 rounded border">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">OS Services <span className="inline-block">&rarr;</span></h2>
            <p className="text-gray-600 mb-4">
              A low-risk, high-quality, service framework designed to automate Cloud adoption and drive business transformation.
            </p>
            <div className="flex gap-8 text-center mb-6">
              <div>
                <p className="text-2xl font-bold text-black">450+</p>
                <p className="font-semibold text-black">Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">400+</p>
                <p className="font-semibold text-black">Specialists</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">4000+</p>
                <p className="font-semibold text-black">Years of collective experience</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Our Partners</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEfyxMDlVU_E5T-4DcfNQOmQA4L0XG8nmvA&s",
                "data:image/png;base64,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",
                "data:image/png;base64,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",                
              ].map((logo, idx) => (
                <div key={idx} className="p-4 bg-gray-100 rounded">
                  <img src={`${logo}`} alt="partner logo" className="mx-auto h-10 object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 bg-white shadow p-4 rounded border">
            <h3 className="text-lg font-bold text-blue-900 mb-4">What We Offer</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
              <li>Installation & Configuration</li>
              <li>System Hardening & Security</li>
              <li>Patch Management & Updates</li>
              <li>Performance Monitoring & Optimization</li>
              <li>User & Permission Management</li>
              <li>Backup & Recovery Planning</li>
              <li>OS Migration & Upgrades</li>
              <li>Remote & On-Site Support</li>
            </ul>
          </div>
        </div>
      ); 
      default:
        return <div className="text-gray-600">Content for {selectedTab}</div>;
    }
  };

  return (
    <div className="p-8">
        <div className="text-center">
        <h1 className="text-4xl font-bold !text-center text-blue-900 mb-2 inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">
            Our Services
        </h1>
        </div>
    
      {/* <div className="h-1 w-16 bg-red-500 mx-auto mb-8"></div> */}
      <div className="flex">
        <div className="w-48 flex flex-col space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-left p-3 border rounded ${
                selectedTab === tab ? "border-red-600 text-black" : "border-gray-200 text-gray-600"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-1 pl-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Services;