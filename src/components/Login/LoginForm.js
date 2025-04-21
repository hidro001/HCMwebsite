import { useState } from 'react';
import Logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/illustration.webp";

export default function HumanMaximizerSignin() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg max-w-6xl w-full">
        {/* Left side - Sign in form */}
        <div className="p-8 w-full md:w-1/2">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={Logo} 
              alt="Human Maximizer Logo" 
              className="h-10"
            />
          </div>
          
          {/* Sign in heading */}
          <h1 className="text-3xl font-bold mb-1">Sign in</h1>
          <p className="mb-6 text-gray-700">to access People</p>
          
          {/* Form */}
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Email address or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 mb-6">
            Next
          </button>
          
          {/* Alternative login options */}
          <div className="mb-6">
            <p className="text-gray-700 mb-4">Sign in using</p>
            <div className="flex space-x-2">
              <button className="p-2 rounded-md border border-gray-200 hover:bg-gray-50">
                <span className="text-2xl">G</span>
              </button>
              <button className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700">
                <span className="text-2xl">f</span>
              </button>
              <button className="bg-blue-800 p-2 rounded-md text-white hover:bg-blue-900">
                <span className="text-2xl">in</span>
              </button>
              <button className="bg-gray-800 p-2 rounded-md text-white hover:bg-gray-900">
                <img src="/api/placeholder/24/24" alt="Windows" className="w-6 h-6" />
              </button>
              <button className="bg-black p-2 rounded-md text-white hover:bg-gray-900">
                <span className="text-2xl">a</span>
              </button>
            </div>
          </div>
          
          {/* Sign up link */}
          <p className="text-gray-700">
            Don't have a Human Maximizer account? <a href="#" className="text-blue-500 hover:underline">Sign up now</a>
          </p>
        </div>
        
        {/* Right side - MFA information */}
        <div className="bg-gray-50 p-8 w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="mb-6">
            <img 
              src={illustration} 
              alt="MFA Illustration" 
              className="max-w-xs"
            />
          </div>
          
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">MFA for all accounts</h2>
            <p className="mb-4">
              Secure online accounts with OneAuth 2FA.
              Back up OTP secrets and never lose access to
              your accounts.
            </p>
            
            <button className="text-blue-500 hover:underline">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}