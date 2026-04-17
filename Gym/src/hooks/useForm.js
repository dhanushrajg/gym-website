/*
  ENNA PANROM: Custom Hook — useForm.
  YEN: Patha code la Book.jsx la form logic (useState, handleChange, handleSubmit) 
  ellam oru component la eh irunduchu — "fat component" problem.
  Custom hook la extract pannaa:
  1. Logic reusable — vera forms la eppodhum use pannalam.
  2. Component clean aagum — UI mattum irukum, logic separate aagum.
  3. Testing easy — hook ah separate ah test pannalam.
  
  React rule: Hook always 'use' la start aaganum — useForm ✅
*/

import { useState } from 'react';

const useForm = (initialValues) => {

  const [formData, setFormData] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /*
    ENNA PANROM: Generic handleChange — oru function, ella inputs ku.
    YEN: e.target.name use pannrom — input la 'name' attribute irunthal
    automatically correct field update aagum.
  */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  /*
    ENNA PANROM: Basic required field validation.
    YEN: Patha code la validation eh illa — user empty form submit pannalum aagum.
    Ippo required fields check pannrom.
  */
  const validate = (requiredFields = []) => {
    const newErrors = {};
    requiredFields.forEach(field => {
      if (!formData[field] || String(formData[field]).trim() === '') {
        newErrors[field] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e, requiredFields = []) => {
    e.preventDefault();
    if (validate(requiredFields)) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData(initialValues);
    setSubmitted(false);
    setErrors({});
  };

  return { formData, submitted, errors, handleChange, handleSubmit, resetForm };
};

export default useForm;
