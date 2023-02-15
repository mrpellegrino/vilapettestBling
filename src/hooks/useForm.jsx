"use client"
import { useState } from 'react';
import UserForm from '../components/UserForm';
import PetForm from '../components/PetForm';
import CaseForm from '../components/CaseForm';
import Thanks from '../components/Thanks';

export default function useForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formState, setFormState] = useState({})

    function handleChangeField(field, value) {
        setFormState((prevState) => ({ ...prevState, [field]: value }))
    }

    const formComponents =
        [
            <UserForm handleChangeField={handleChangeField} formState={formState} key='UserForm' />,
            <PetForm handleChangeField={handleChangeField} formState={formState} key='PetForm' />,
            <CaseForm handleChangeField={handleChangeField} formState={formState} key='CaseForm' />,
            <Thanks key='Thanks' />
        ];

    function changeStep(i, e) {
        if (e) e.preventDefault();

        if (i < 0 || i >= formComponents.length) return;

        setCurrentStep(i);
    }


    return {
        currentStep,
        currentComponent: formComponents[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === formComponents.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
        handleChangeField,
        formState
    }
}