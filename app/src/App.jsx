import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import"./App.css"

function App() {

    const [paymentMode, setPaymentMode] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [transactionScreenshot, setTransactionScreenshot] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [college, setCollege] = useState('');
    const [tshirtSize, setTshirtSize] = useState('');
    const [campus, setCampus] = useState('');
    const [paidTo, setPaidTo] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCampusChange = (event) => {
        const selectedCampus = event.target.value;
        setCampus(selectedCampus);

        // Set paidTo based on the selected campus
        if (selectedCampus === 'jadavpur') {
            setPaidTo('Supratick');
        } else if (selectedCampus === 'saltlake') {
            setPaidTo('Arindam Halder');
        } else {
            setPaidTo('');
        }

    }

    const handleTshirtSizeChange = (event) => {
        setTshirtSize(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleCollegeChange = (event) => {
        setCollege(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePaymentModeChange = (event) => {
        setPaymentMode(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };


    return (
        <div className=" h-screen w-full bg-gray-900 ">
            <div className="flex items-center justify-center bg-gray-900">
                {/* Grid background */}
                <div className="absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-125 ">
                    {/* row 1 */}
                    <div className="col-span-2 bg-gray-800 rounded overflow-hidden animate-pulse"></div>
                    <div className="col-span-5 bg-gray-800 rounded overflow-hidden "></div>
                    <div className="col-span-1 bg-gray-800 rounded overflow-hidden "></div>
                    <div className="col-span-4 bg-gray-800 rounded overflow-hidden "></div>

                    {/* row 2 */}
                    <div className="col-span-5 bg-gray-800 rounded"></div>
                    <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
                    <div className="col-span-2 bg-gray-800 rounded"></div>
                    <div className="col-span-2 bg-gray-800 rounded"></div>

                    {/* row 3 */}
                    <div className="col-span-4 bg-gray-800 rounded"></div>
                    <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
                    <div className="col-span-1 bg-gray-800 rounded"></div>

                    {/* row-4 */}
                    <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                    <div className="col-span-4 bg-gray-800 rounded"></div>
                    <div className="col-span-6 bg-gray-800 rounded animate-pulse"></div>

                    {/* row-5 */}
                    <div className="col-span-5 bg-gray-800 rounded animate-pulse "></div>
                    <div className="col-span-3 bg-gray-800 rounded "></div>
                    <div className="col-span-2 bg-gray-800 rounded animate-pulse "></div>
                    <div className="col-span-2 bg-gray-800 rounded "></div>

                    {/* row-6 */}
                    <div className="col-span-4 bg-gray-800 rounded"></div>
                    <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
                    <div className="col-span-1 bg-gray-800 rounded"></div>

                    <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                    <div className="col-span-7 bg-gray-800 rounded "></div>
                    <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

                    <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
                    <div className="col-span-7 bg-gray-800 rounded "></div>
                    <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

                    <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                    <div className="col-span-4 bg-gray-800 rounded"></div>
                    <div className="col-span-6 bg-gray-800 rounded animate-pulse"></div>
                    
                    <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
                    <div className="col-span-4 bg-gray-800 rounded"></div>
                    <div className="col-span-6 bg-gray-800 rounded animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="relative mb-10">
                    <h2 className="text-4xl text-white font-extrabold mb-10 mt-10">
                        Welcome to the <span className="text-purple-600">Merchandise</span> page
                    </h2>
                    <div className="glassmorphism-container">
                        <div className="relative h-auto overflow-hidden mt-5">
                            <form action="" className="mx-auto max-w-md">
                                {/* Name Feild */}
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-white">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Enter your full name"
                                        className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </div>
                                {/* Email Feild */}
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-white">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="Enter the email"
                                        className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                {/* Phone Number */}
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-white">Phone</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        required
                                        placeholder="Enter the phone number"
                                        className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                    />
                                </div>
                                {/* College Chapter 😊 */}
                                <div className="mb-4">
                                    <label htmlFor="college" className="block text-white">College</label>
                                    <select
                                        id="college"
                                        required
                                        className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        value={college}
                                        onChange={handleCollegeChange}
                                    >
                                        <option value="" disabled>Select your college</option>
                                        <option value="college1">Jadavpur Campus</option>
                                        <option value="college2">SaltLake Campus</option>
                                    </select>
                                </div>
                                {/* Department Chapter 😊 */}
                                <div className="mt-4">
                                    <label htmlFor="department" className="block text-white">Department</label>
                                    <input
                                        id="department"
                                        type="text"
                                        required
                                        placeholder="Enter your department"
                                        className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        value={department}
                                        onChange={handleDepartmentChange}
                                    />
                                </div>
                                {/* t-shirt Part 😊 */}
                                <div className="mt-4">
                                    <label htmlFor="tshirt-size" className="block text-white">T-shirt Size</label>
                                    <select
                                        id="tshirt-size"
                                        required
                                        className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        value={tshirtSize}
                                        onChange={handleTshirtSizeChange}
                                    >
                                        <option value="" disabled>Select T-shirt size</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="XXXL">XXXL</option>
                                    </select>
                                </div>
                                {/* Payment Method */}
                                <div className="mt-4">
                                    <label className="block text-white">Payment Mode</label>
                                    <div className="flex items-center">
                                        <input type="radio" id="upi" name="payment-mode" value="upi" className="mr-2" onChange={handlePaymentModeChange} />
                                        <label htmlFor="upi" className="text-white mr-8">UPI</label>
                                        <input type="radio" id="cash" name="payment-mode" value="cash" className="ml-10" onChange={handlePaymentModeChange} />
                                        <label htmlFor="cash" className="text-white">Cash</label>
                                    </div>
                                </div>

                                {paymentMode === 'upi' && (
                                    <div className="mt-4">
                                        <label className="block text-white">Transaction ID</label>
                                        <input
                                            type="text"
                                            value={transactionId}
                                            onChange={(e) => setTransactionId(e.target.value)}
                                            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        />
                                        <label className="block text-white mt-4">Transaction Screenshot</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => setTransactionScreenshot(e.target.files[0])}
                                            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        />
                                    </div>
                                )}
                                <div className="mb-4 ">
                                    <label htmlFor="campus" className="block text-white">Campus</label>
                                    <select
                                        id="campus"
                                        required
                                        className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                        value={campus}
                                        onChange={handleCampusChange}
                                    >
                                        <option value="" disabled>Select Campus</option>
                                        <option value="jadavpur">Jadavpur Campus</option>
                                        <option value="saltlake">SaltLake Campus</option>
                                    </select>

                                    {paidTo && (
                                        <div className="mt-4">
                                            <label htmlFor="paidTo" className="block text-white">Paid to</label>
                                            <input
                                                id="paidTo"
                                                type="text"
                                                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                                value={paidTo}
                                                readOnly
                                            />
                                        </div>
                                    )}
                                </div>
                                
                                    
                                        <div className="mb-2">
                                            <label htmlFor="password" className="block text-white">Password</label>
                                            <div className="relative">
                                                <input
                                                    id="password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={password}
                                                    required
                                                    placeholder="Enter your password"
                                                    className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-800"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                        <button className="btn">Hover Me!</button>
                                        </div>
                            </form>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;


