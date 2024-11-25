import React, { useState, useRef } from 'react';
import {useToast } from '@chakra-ui/react';
import jsPDF from 'jspdf';
import '../css/BikeRentalForm.css';
import success from "../success.json";
import Lottie from "lottie-react";
import { LuBike } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
//import { addUser } from "../service/api.js"; 
import { addUserFormA} from '../service/api.js'; 
import Swal from 'sweetalert2';
const BookingForm = ({ bike, onClose }) => {
  const toast = useToast();
  const today = new Date().toISOString().split('T')[0];

  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    pickupDate: today,
    dropDate: '',
    brand: bike.name,
    basePrice: bike.price,
    price: bike.price,
    aadharNumber: '',
    licenseNumber: '',
    couponCode: '',
    aadharImage: null,
    licenseImage: null,
  });
  
  const [submitted, setSubmitted] = useState(false);

  // Refs for validation
  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const pickupDateRef = useRef(null);
  const dropDateRef = useRef(null);
  const aadharNumberRef = useRef(null);
  const licenseNumberRef = useRef(null);
  const aadharImageRef = useRef(null);
  const licenseImageRef = useRef(null);

  // Input handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === 'mobile') {
      if (!/^\d*$/.test(value)) {
        toast({
          title: 'Error',
          description: 'Mobile number should only contain digits.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      setFormData({ ...formData, mobile: value.slice(0, 10) });
      if (errors.mobile) 
        setErrors((formData) => ({ ...formData, mobile: "" }));
    } 
    else if (name === 'name') {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        toast({
          title: 'Error',
          description: 'Name should only contain letters and spaces.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      setFormData({ ...formData, name: value });
      if (errors.name) 
        setErrors((formData) => ({ ...formData, name: "" }));

    }
    else if (name === 'email') {
      //const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(value)) {
        setErrors((formData) => ({ ...formData,
          //email: 'Email must end with @gmail.com',
          email: 'Please enter a valid email address'
        }));
      } 
      else {
        setErrors((formData) => ({ ...formData,email:""}));
      }
      setFormData({ ...formData,email: value });
    }

    else if (name === 'aadharNumber') {
      const formattedValue = formatAadharNumber(value);
      setFormData({ ...formData, aadharNumber: formattedValue });
      if (errors.aadharNumber) 
        setErrors((formData) => ({ ...formData, aadharNumber: "" }));
    }
    else if (name === 'licenseNumber') {
      const formattedValue = formatLicenseNumber(value);
      setFormData({ ...formData, licenseNumber: formattedValue });
      if (errors.licenseNumber) 
        setErrors((formData) => ({ ...formData, licenseNumber: "" }));
    } 
    else if (name === 'couponCode') {
      const updatedData = { ...formData, couponCode: value.toUpperCase() };
      const basePrice = calculateBasePrice(updatedData.pickupDate, updatedData.dropDate);
      const discountedPrice = applyCoupon(basePrice, value.toUpperCase());
      setFormData({
        ...updatedData,
        basePrice: basePrice,
        price: discountedPrice,
      });
    } 
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const todayDate = new Date().toISOString().split('T')[0];

    if (name === 'pickupDate' && new Date(value) < new Date(todayDate)) {
      toast({
        title: 'Error',
        description: 'Pickup date cannot be before today.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ ...formData, pickupDate: '' });
      
      return;
    }

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      if (updatedData.pickupDate && updatedData.dropDate) {
        const basePrice = calculateBasePrice(updatedData.pickupDate, updatedData.dropDate);
        const discountedPrice = applyCoupon(basePrice, updatedData.couponCode);
        updatedData.basePrice = basePrice;
        updatedData.price = discountedPrice;
      }
      if (errors.dropDate) 
        setErrors((formData) => ({ ...formData, dropDate: "" }));
      return updatedData;
    });
    
  };
  const handleaadharImageChange = (e) => {
    const file = e.target.files[0]; 
    const name = e.target.name;

    if (file) {
      setFormData({ ...formData, [name]: file });
      setErrors({ ...errors, aadharImage: '' });
      } 
  };
  const handlelicenseImageChange = (e) => {
    
    const file = e.target.files[0]; 
    const name = e.target.name;
    if (file) {
      setFormData({ ...formData, [name]: file });
      setErrors({ ...errors, licenseImage: '' });
       } 
  };
 /* const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };*/

  const formatAadharNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };

  const formatLicenseNumber = (value) => {
    const alphanumeric = value.replace(/[^A-Za-z0-9]/g, '');
    return alphanumeric.replace(/(.{4})(.{4})(.{7})/, '$1 $2 $3').trim();
  };

  const calculateBasePrice = (pickupDate, dropDate) => {
    const pickup = new Date(pickupDate);
    const drop = new Date(dropDate);
    if (drop >= pickup) {
      let days = Math.ceil((drop - pickup) / (1000 * 60 * 60 * 24));
      days = days === 0 ? 1 : days + 1;
      return days * bike.price;
    } else {
      toast({
        title: 'Error',
        description: 'Please enter a valid date range.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ ...formData, dropDate: '' });
      return 0;
    }
  };

  const applyCoupon = (basePrice, couponCode) => {
    if (basePrice >= 1000 && basePrice < 2500 && couponCode === 'RIDERS10') {
      return basePrice * 0.9;
    } else if (basePrice >= 2500 && basePrice < 5000 && couponCode === 'RIDERS20') {
      return basePrice * 0.8;
    } else if (basePrice >= 5000 && couponCode === 'RIDERS30') {
      return basePrice * 0.7;
    }
    return basePrice;
  };
const generatePDF = (formData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 10;
  const headingHeight = 10; // Height of the heading background
  const headingOffset = 3; // Offset for text above the background
  //const tableMargin = 5; // Margin inside table cells
  const textIndent = 1; // Set to 1px for alignment

  // Colors
  const backgroundColor = [255, 215, 0]; // Deep yellow for background
  const headingColor = [139, 69, 19]; // Brown color for headings

  // Get current date and time
  const now = new Date();
  const formattedDate = now.toLocaleDateString(); // Format the date
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); // Format the time with AM/PM

  // Add watermark
  const watermarkImg = new Image();
  watermarkImg.src = 'logo.png'; // Make sure this path is correct
  watermarkImg.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = watermarkImg.width;
      canvas.height = watermarkImg.height;
      ctx.globalAlpha = 0.1; 
      ctx.drawImage(watermarkImg, 0, 0, watermarkImg.width, watermarkImg.height);
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 15, 70, 180, 190);    

      // Add top-right logo
      const logoImg = new Image();
      logoImg.src = 'logo.png'; // Path to the top-right logo
      logoImg.onload = function () {
          const logoWidth = 40; // Adjust logo width as needed
          const logoHeight = 40; // Adjust logo height as needed
          doc.addImage(logoImg, 'PNG', pageWidth - logoWidth - margin, margin, logoWidth, logoHeight);

          // Add header text
          const startY = 30;
          const companyName = 'RIDERS';
          const companyService = 'Bike & Scooter Rental Service';
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(22);
          doc.setFont("Times-new-roman", "bold");
          doc.text(companyName, pageWidth / 2, startY, { align: 'center' });

          doc.setFontSize(14);
          doc.setFont("helvetica", "normal");
          doc.text(companyService, pageWidth / 2, startY + 10, { align: 'center' });

          doc.setLineWidth(0.5);
          doc.line(margin, startY + 20, pageWidth - margin, startY + 20);

          // Adjusted vertical position for date and time
          const dateY = startY + 25; // Move date up
          const timeY = startY + 30; // Move time up

          // Add date and time with 1px indentation
          doc.setFontSize(12);
          doc.setFont("helvetica", "normal");
          doc.text(`Date: ${formattedDate}`, margin + textIndent, dateY);
          doc.text(`Time: ${formattedTime}`, margin + textIndent, timeY);

          let yPosition = startY + 50; // Increased space after the header and date/time

          // Draw table function
          const drawTable = (title, data, startY) => {
              doc.setFontSize(16);
              doc.setFont("helvetica", "bold");
              doc.setFillColor(...backgroundColor);
              doc.rect(margin, startY - headingHeight, pageWidth - margin * 2, headingHeight, 'F');
              doc.setTextColor(...headingColor);
              // Center the title text
              doc.text(title, pageWidth / 2, startY - headingOffset, { align: 'center' });
          
              // Draw table rows
              const cellHeight = 10;
              const headerWidth = (pageWidth - margin * 2) / 2;
              const textMargin = 5; // Margin for text within cells
              let rowY = startY;
          
              data.forEach((row) => {
                  doc.setFontSize(12);
                  doc.setFont("helvetica", "normal");
                  doc.setTextColor(0, 0, 0);
          
                  // Split text if needed
                  const textOptions = { maxWidth: headerWidth - textMargin * 2 };
                  const labelLines = doc.splitTextToSize(row.label, textOptions.maxWidth);
                  const value = typeof row.value === 'number' ? `${row.value.toFixed(2)}` : row.value; // Format number values
                  const valueLines = doc.splitTextToSize(value, textOptions.maxWidth);
          
                  // Determine height needed for text
                  const maxLines = Math.max(labelLines.length, valueLines.length);
                  const currentCellHeight = cellHeight * maxLines;
          
                  // Draw cells with variable height
                  doc.rect(margin, rowY, headerWidth, currentCellHeight);
                  doc.rect(margin + headerWidth, rowY, headerWidth, currentCellHeight);
          
                  // Draw text inside cells
                  doc.text(labelLines, margin + textMargin, rowY + cellHeight / 2, { align: 'left', baseline: 'middle' });
                  doc.text(valueLines, margin + headerWidth + textMargin, rowY + cellHeight / 2, { align: 'left', baseline: 'middle' });
          
                  // Adjust row position for the next row
                  rowY += currentCellHeight;
              });
          };

          // Customer's Information Table
          const custInfoData = [
            { label: 'Name', value: formData.name },
            { label: 'Mobile', value: formData.mobile },
            { label: 'Email', value: formData.email },
            { label: 'Aadhar Number', value: formData.aadharNumber },
            { label: 'License Number', value: formData.licenseNumber } // Added License Number
          ];
          drawTable("Customer's Information", custInfoData, yPosition);

          yPosition += (custInfoData.length + 1) * 10 + 10; // Increased space between tables

          // Item's Information Table
          const itemInfoData = [
            { label: "Brand's Name", value: formData.brand },
            { label: 'Base Price', value: formData.basePrice },
            { label: 'Discounted Price', value: formData.price },
            { label: 'Pickup Date', value: formData.pickupDate },
            { label: 'Drop Date', value: formData.dropDate }
          ];
          drawTable("Item's Information", itemInfoData, yPosition);

          yPosition += (itemInfoData.length + 1) * 10 + 10; // Increased space between tables

          // Summary Table
          const summaryData = [
            { label: 'Total Base Price', value: formData.basePrice },
            { label: 'Discount Applied', value: (formData.basePrice - formData.price).toFixed(2) },
            { label: 'Final Price', value: formData.price }
          ];
          drawTable("Summary", summaryData, yPosition);

          yPosition += (summaryData.length + 1) * 10 + 10; // Increased space between tables

          // Footer
          const footerY = pageHeight - margin;
          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0);
          doc.setFont("Times-new-roman");
          doc.text('Thank you for choosing Riders777', pageWidth / 2, footerY - 20, { align: 'center' });
          doc.setFontSize(15);
          doc.setTextColor(255, 0, 0);
          doc.setFont("Times-new-roman", "bold");
          doc.text('Please bring these documents along with your ID proof at the time of pickup.', pageWidth / 2, footerY - 10, { align: 'center' });
          doc.setFontSize(12);
          doc.setTextColor(0, 0, 0);
          doc.setFont("Times-new-roman", "normal");
          doc.text('Visit us at: www.riders777.com', pageWidth / 2, footerY - 3, { align: 'center' });

          // Add border
          doc.setLineWidth(0.5);
          doc.rect(margin, margin, pageWidth - margin * 2, pageHeight - margin * 2);

          // Save PDF
         // doc.save(`RIDERS-${formData.brand}.pdf`);
          doc.save(`RIDERS-${formData.brand}-${formData.name}-${formData.mobile}.pdf`);
      };
  };
};
  const speakConfirmation = () => {
    const confirmation = new SpeechSynthesisUtterance(`Thank you for choosing us... have a safe ride with ${bike.name}`);
    window.speechSynthesis.speak(confirmation);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
    const isTermsAccepted = await handleTermsAndConditions();
    
    // Check if all required fields are filled before proceeding
    const { name, mobile, email, pickupDate, dropDate, aadharNumber, licenseNumber, aadharImage, licenseImage } = formData;
    //if (validateForm()) {
    if (isTermsAccepted) {
    if (!name || !mobile || !email || !pickupDate || !dropDate || !aadharNumber || !licenseNumber || !aadharImage || !licenseImage) {
      toast({
        title: 'Error',
        description: 'Please fill all required fields before submitting.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      
      return;
    }else{
      const formdata = new FormData()
      formdata.append('licenseImage', formData.licenseImage, formData.licenseImage.name)
      formdata.append('aadharImage', formData.aadharImage, formData.aadharImage.name)
      formdata.append('name', formData.name)
      formdata.append('mobile', formData.mobile)
      formdata.append('email', formData.email)
      formdata.append('pickupDate',formData.pickupDate)
      formdata.append('dropDate', formData.dropDate)
      formdata.append('brand', formData.brand)
      formdata.append('basePrice', formData.basePrice)
      formdata.append('price', formData.price)
      formdata.append('aadharNumber', formData.aadharNumber)
      formdata.append('licenseNumber', formData.licenseNumber)
      formdata.append('couponCode', formData.couponCode)    
    
    

      try {
        const res = await addUserFormA(formdata);
        console.log('API Response:', res);  // Log response for debugging
  
        if (res.status === 201) {
          
          setSubmitted(true);
          generatePDF(formData);
          speakConfirmation();
          setTimeout(() => {
            onClose();
          }, 3000);
         }else {
          throw new Error('Form submission failed.');
        }
      } catch (error) {
        console.error('Form submission error:', error);  // Log error for debugging
        toast({
          title: 'Error',
          description: 'An error occurred while submitting the form. Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } 
    }} 
    else {
      Swal.fire('You need to agree with the terms and conditions before submitting.');
    }
  }
  };
  async function handleTermsAndConditions() {
    
    const { value: accept } = await Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 0,
      inputPlaceholder: `
        I agree with the Privacy Policy
      `,
      confirmButtonText: `
        Continue&nbsp;<i class="fa fa-arrow-right" ></i>
      `,
      inputValidator: (result) => {
        return !result && "You need to agree with Privacy Policy";
      }
    });
  
    if (accept) {
      Swal.fire({title:"You agreed with T&C :)",
                 timer: 2000,});
      return true;
    } 
    else {
      return false; 
    }

  }
  const [errors, setErrors] = useState({});
  const handleReset = () => {
    setFormData({
      name: '',
      mobile: '',
      email: '',
      pickupDate: today,
      dropDate: '',
      aadharNumber: '',
      licenseNumber: '',
      couponCode: '',
      aadharImage: null,
      licenseImage: null,
      
    });
    setErrors({});
    setSubmitted(false);
  };
 const validateForm = () => {
    
  const errors = {};

    if (!formData.name) {
        errors.name = "Name is required";
        
    }
    if (!formData.mobile) {
        errors.mobile = "Contact number is required";
       
    } else if (formData.mobile.length !== 10) {
        errors.mobile = "Contact number must be exactly 10 digits";
        
    }
        if (!formData.email) {
          errors.email = "Email is required";
          
      }
      if (!formData.pickupDate) {
        errors.pickupDate = "Pickup Date is required";
        
    }
    if (!formData.dropDate) {
      errors.dropDate = "Drop Date is required";
      
  }
  if (!formData.aadharNumber) {
    errors.aadharNumber = "Aadhar Number is required";
    
}
if (!formData.licenseNumber) {
  errors.licenseNumber = "License Number is required";
  
}
//let hasErrors = false;
    //const newErrors = { image1: '', image2: '' };

if (!formData.aadharImage) {
  errors.aadharImage = "Aadhar Image is required";
  
}
if (!formData.licenseImage) {
  errors.licenseImage = "License Image is required";
  
}
/*
if (!formData.aadharImage) {
  newErrors.aadharImage = 'Aadhar Image is required';
}

if (!formData.licenseImage) {
  newErrors.licenseImage = 'License Image is required';
}
/*
if (!formData.aadharImage) {
  errors.image1 = 'Please select an image for Image 1.';
  
}
if (!formData.licenseImage) {
  errors.image2 = 'Please select an image for Image 2.';

}*/

//setErrors(newErrors);
//return !hasErrors;

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
 
 
  return (
    
      <div className="booking-form-overlay">
        <div className="booking-form-container">
          <h2>
          {bike.name} 
            <LuBike className="icon" style={{  }} />          
        </h2>
        {submitted ? (
          <div>
            <div className="confirmation-message">
              <Lottie animationData={success} /> 
              <b>
                <p>Thank you for your booking!</p>
                <p>We will contact you soon with further details.</p>
              </b>
            </div>
          </div>
          ) : (
            <form onSubmit={handleSubmit}>
          <MdOutlineCancel  className="cross" style={{}} onClick={onClose} />

            <label isInvalid={!!errors.name}>
            <span style={{color:"red"}}>*</span>
            <span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Name:</span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                ref={nameRef}
                  value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </label>
            <label isInvalid={!!errors.mobile}>
            <span style={{color:"red"}}>*</span><span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Mobile:</span>
              <input
                type="text"
                name="mobile"
                placeholder="Enter Your Contact No."
                maxLength="10"
                minLength={10}
                ref={mobileRef}
                  value={formData.mobile}
                onChange={handleInputChange}
                pattern='\d{10}'
                required
              />
              {errors.mobile && <p className="error-message">{errors.mobile}</p>}
            </label>
            <label isInvalid={!!errors.email}>
            <span style={{color:"red"}}>*</span><span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Email:</span>
              <input
                type="email"
                  name="email"
                  placeholder="Enter Your Email ID"
                  ref={emailRef}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </label>
            <label isInvalid={!!errors.pickupDate}>
            <span style={{color:"red"}}>*</span><span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Pickup Date:</span>
              <input
                type="date"
                name="pickupDate"
                ref={pickupDateRef}
                  value={formData.pickupDate}
                  onChange={handleDateChange}
                required
              />
              {errors.pickupDate && <p className="error-message">{errors.pickupDate}</p>}
            </label>
            <label isInvalid={!!errors.dropDate}>
            <span style={{color:"red"}}>*</span><span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Drop Date:</span>
              <input
                type="date"
                name="dropDate"
                ref={dropDateRef}
                  value={formData.dropDate}
                  onChange={handleDateChange}
                required
              />
              {errors.dropDate && <p className="error-message">{errors.dropDate}</p>}
            
            </label>
            <label>
            <span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Brand:</span>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                readOnly
              />
            </label>
            <label>
            <span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Base Price:</span>
              <input
                type="text"
                name="basePrice"
                value={formData.basePrice}
                readOnly
              />
            </label>
            <label>
            <span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Price:</span>
              <input
                type="text"
                name="price"
                value={formData.price}
                readOnly
              />
            </label>
            <label isInvalid={!!errors.aadharNumber}>
            <span style={{color:"red"}}>*</span><span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Aadhaar Card Number:</span>
              <input
                type="text"
                name="aadharNumber"
                ref={aadharNumberRef}
                  value={formData.aadharNumber}
                  onChange={handleInputChange}
                maxLength="14"
                placeholder="Enter Your Aadhaar No."
                required
              />
              {errors.aadharNumber && <p className="error-message">{errors.aadharNumber}</p>}
            </label>
            <label isInvalid={!!errors.licenseNumber}>
            <span style={{color:"red"}}>*</span><span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>License Number:</span>
              <input
                type="text"
                name="licenseNumber"
                ref={licenseNumberRef}
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                maxLength="17"
                placeholder="Enter Your License No."
                required
              />
              {errors.licenseNumber && <p className="error-message">{errors.licenseNumber}</p>}
            </label>
            <label isInvalid={!!errors.couponCode}>
            <span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Coupon Code:</span>
              <div className="coupon-section">
              <div className="coupon-item">RIDERS10: 10% off on ₹1000 to ₹2499</div>
              <div className="coupon-item">RIDERS20: 20% off on ₹2500 to ₹4999</div>
              <div className="coupon-item">RIDERS30: 30% off on ₹5000 and above</div>
              </div>
              <input
                type="text"
                name="couponCode"
                value={formData.couponCode}
                  onChange={handleInputChange}
                placeholder="Enter Coupon Code"
              />
              {errors.couponCode && !['RIDERS10', 'RIDERS20', 'RIDERS30'].includes(formData.couponCode) && (
                <p className="error-message">Invalid coupon code</p>
              )}
            </label>
            <label isInvalid={!!errors.aadharImage}>
            <span style={{color:"red"}}>*</span><span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>Aadhaar Image:</span>
              <input
                  type="file"
                  name="aadharImage"
                  accept="image/*"
                  ref={aadharImageRef}
                  onChange={handleaadharImageChange}
                  required
                />
          
              {errors.aadharImage && <p className="error-message">{errors.aadharImage}</p>}
            </label>
            <label isInvalid={!!errors.licenseImage}>
            <span style={{color:"red"}}>*</span><span style={{color:"white",textShadow:"rgba(0, 0, 0, 0.7) 0px 3px 8px"}}>License Image:</span>
              <input
                  type="file"
                  name="licenseImage"
                  accept="image/*"
                  ref={licenseImageRef}
                  onChange={handlelicenseImageChange}
                  required
                />
          
              {errors.licenseImage && <p className="error-message">{errors.licenseImage}</p>}
            </label>
              <div className="button-container">
              <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
              <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
            </form>
          )}
        </div>
      </div>

   
  );
};

export default BookingForm;
