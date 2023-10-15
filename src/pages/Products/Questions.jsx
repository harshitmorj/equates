import React, { useState } from 'react';
import astronaut from '../../assets/questions.png';

const Questions = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [productOfInterest, setProductOfInterest] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { firstName, lastName, businessEmail, company, phoneNumber, productOfInterest, comments });
    setFirstName('');
    setLastName('');
    setBusinessEmail('');
    setCompany('');
    setPhoneNumber('');
    setProductOfInterest('');
    setComments('');
  };

  return (
    <div style={{ background: 'linear-gradient(360deg, rgba(152, 21, 214, 0.8) 0%, rgba(152, 21, 214, 0) 100%)' }} className="relative p-10 md:p-20">
      <h2 className="text-3xl md:text-6xl font-bold mb-4">Questions?</h2>
      <h2 className="text-xl md:text-5xl mb-4 md:pb-10">Connect to us today!</h2>

      <div className="bg-gray-300 p-5 md:p-10 w-full md:w-1/2 container rounded-md md:rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="mb-2 md:w-1/2 md:pr-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-2 md:w-1/2 md:pl-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700">
              Business Email
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row mb-4">
            <div className="mb-2 md:w-1/2 md:pr-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-2 md:w-1/2 md:pl-2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="productOfInterest" className="block text-sm font-medium text-gray-700">
              Product of Interest
            </label>
            <select
              id="productOfInterest"
              name="productOfInterest"
              value={productOfInterest}
              onChange={(e) => setProductOfInterest(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="Product1">Product 1</option>
              <option value="Product2">Product 2</option>
              {/* Add more product options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
            />
          </div>

          <div className="text-right">
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div
        className="hidden md:block absolute right-0 bottom-0 w-3/5 h-[140vh] z-10"
        style={{
          backgroundImage: `url(${astronaut})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
};

export default Questions;
