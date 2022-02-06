export const surnameFormConfig = {
  formInfo: {
    type: "name",
    labelName: "Surname",
    name: "lastName",
    id: "surname",
  },
  isRequired: true,
};

export const firstnameFormConfig = {
  formInfo: {
    type: "name",
    labelName: "First Name",
    name: "firstName",
    id: "firstname",
  },
  isRequired: true,
};

export const nameFormConfig = {
  formInfo: {
    type: "name",
    labelName: "Name",
    name: "name",
    id: "name",
  },
  isRequired: true,
};

export const codeFormConfig = {
  formInfo: {
    type: "name",
    labelName: "Code",
    name: "code",
    id: "code",
  },
  isRequired: true,
};

export const websiteUrlFormConfig = {
  formInfo: {
    type: "text",
    labelName: "Website Url",
    name: "website",
    id: "websiteUrl",
  },
  isRequired: true,
};

export const usernameFormConfig = {
  formInfo: {
    type: "test",
    labelName: "Username",
    name: "username",
    id: "prepended-input",
    className: "input-transparent",
    bsSize: "16",
    placeholder: "Username",
    iconClass: "fa fa-user",
  },
  isRequired: true,
};

export const passwordFormConfig = {
  formInfo: {
    type: "password",
    labelName: "Password",
    name: "password",
    id: "password-field",
    className: "input-transparent",
    bsSize: "16",
    placeholder: "Password",
    iconClass: "fa fa-lock",
  },
  isRequired: true,
};

export const staffIDFormConfig = {
  formInfo: {
    type: "name",
    labelName: "Staff ID",
    name: "matriculationId",
    id: "staffID",
  },
  isRequired: true,
};

export const enableUserFormConfig = {
  formInfo: {
    type: "checkbox",
    labelName: "Enable user",
    className: "ios",
    name: "enableUser",
    id: "enableUser",
  },
  isRequired: false,
};

export const activateLoginFormConfig = {
  formInfo: {
    type: "checkbox",
    labelName: "Activate Login",
    name: "activateLogin",
    id: "activateLogin",
    className: "ios",
  },
  isRequired: false,
};

export const othernameFormConfig = {
  formInfo: {
    type: "name",
    labelName: "Other Name",
    name: "othername",
    id: "othername",
  },
  isRequired: true,
};

export const dobFormConfig = {
  formInfo: {
    labelName: "Date Of Birth",
    viewMode: "days",
    timeFormat: false,
  },
  isRequired: true,
};

export const genderFormConfig = {
  formInfo: {
    labelName: "Gender",
    id: "gender",
  },
  isRequired: true,
  options: [
    { value: "Male", label: "Male", rating: "safe" },
    { value: "Female", label: "Female", rating: "good" },
    { value: "Other", label: "Other", rating: "wild" },
  ],
};

export const addressFormConfig = {
  formInfo: {
    type: "text",
    labelName: "Address",
    name: "address",
    id: "address",
  },
  isRequired: true,
};

export const descriptionFormConfig = {
  formInfo: {
    type: "text",
    labelName: "Description",
    name: "description",
    id: "description",
  },
  isRequired: true,
};

export const phoneNumberFormConfig = {
  formInfo: {
    type: "number",
    labelName: "Phone Number",
    name: "phone",
    id: "phone",
  },
  isRequired: true,
};

export const emailFormConfig = {
  formInfo: {
    type: "email",
    labelName: "Email",
    name: "email",
    id: "email",
  },
  isRequired: true,
};

export const corporateFormConfig = {
  formInfo: {
    labelName: "Corporate",
    id: "corporate",
  },
  isRequired: true,
  options: [
    { value: "Male", label: "Male", rating: "safe" },
    { value: "Female", label: "Female", rating: "good" },
    { value: "Other", label: "Other", rating: "wild" },
  ],
};

export const planFormConfig = {
  formInfo: {
    labelName: "Plan",
    id: "plan",
  },
  isRequired: true,
  options: [
    { value: "Male", label: "Male", rating: "safe" },
    { value: "Female", label: "Female", rating: "good" },
    { value: "Other", label: "Other", rating: "wild" },
  ],
};

export const providerFormConfig = {
  formInfo: {
    labelName: "Provider",
    id: "provider",
  },
  isRequired: true,
  options: [
    { value: "Male", label: "Male", rating: "safe" },
    { value: "Female", label: "Female", rating: "good" },
    { value: "Other", label: "Other", rating: "wild" },
  ],
};

export const tenorFormConfig = {
  formInfo: {
    labelName: "Tenor",
    id: "tenor",
  },
  isRequired: true,
  options: [
    { value: "Male", label: "Male", rating: "safe" },
    { value: "Female", label: "Female", rating: "good" },
    { value: "Other", label: "Other", rating: "wild" },
  ],
};

export const commencementDateFormConfig = {
  formInfo: {
    labelName: "Commencement Date",
    viewMode: "days",
    timeFormat: false,
  },
  isRequired: true,
};

export const religionFormConfig = {
  formInfo: {
    labelName: "Religion",
    id: "religion",
    name: "religion",
  },
  isRequired: true,
  options: [
    { value: "Christian", label: "Christian", rating: "safe" },
    { value: "Muslim", label: "Muslim", rating: "good" },
    { value: "Other", label: "Other", rating: "wild" },
  ],
};

export const appsFormConfig = {
  formInfo: {
    labelName: "App",
    id: "app",
    name: "appId",
  },
  isRequired: true,
  options: [
    { value: "1", label: "HMO", rating: "safe" },
    { value: "Muslim", label: "Muslim", rating: "good" },
    { value: "Other", label: "Other", rating: "wild" },
  ],
};

export const userTypeformConfig = {
  formInfo: {
    labelName: "User Type",
    id: "userType",
    name: "userType",
  },
  isRequired: true,
  options: [{ value: "HMO", label: "HMO", rating: "safe" }],
};

export const tenantTypeformConfig = {
  formInfo: {
    labelName: "Tenant Type",
    id: "tenantType",
    name: "tenantType",
  },
  isRequired: true,
  options: [
    { value: "HMO", label: "HMO", rating: "safe" },
    { value: "ADMIN", label: "ADMIN", rating: "safe" },
  ],
};

export const familynameFormConfig = {
  formInfo: {
    type: "name",
    labelName: "Family Name",
    name: "familyname",
    id: "familyname",
  },
  isRequired: true,
};

export const maritalStatusFormConfig = {
  formInfo: {
    labelName: "Marital Status",
    id: "maritalStatus",
  },
  isRequired: true,
  options: [
    { value: "Single", label: "Single", rating: "safe" },
    { value: "Married", label: "Married", rating: "good" },
  ],
};

export const stateFormConfig = {
  formInfo: {
    labelName: "State",
    id: "state",
  },
  isRequired: true,
  options: [
    { value: "Single", label: "Single", rating: "safe" },
    { value: "Married", label: "Married", rating: "good" },
  ],
};

export const locationFormConfig = {
  formInfo: {
    labelName: "Location",
    id: "location",
  },
  isRequired: true,
  options: [
    { value: "Single", label: "Single", rating: "safe" },
    { value: "Married", label: "Married", rating: "good" },
  ],
};

export const officialAddresstownFormConfig = {
  formInfo: {
    type: "text",
    labelName: "Official Address Town",
    name: "officialAddresstown",
    id: "officialAddresstown",
  },
  isRequired: true,
};

export const nextOfKinNameFormConfig = {
  formInfo: {
    type: "name",
    labelName: "Full Name of Next Of Kin",
    name: "nextOfKinName",
    id: "nextOfKinName",
  },
  isRequired: true,
};

export const nextOfKinPhoneFormConfig = {
  formInfo: {
    type: "number",
    labelName: "Next Of Kin Phone Number",
    name: "nextOfKinPhone",
    id: "nextOfKinPhone",
  },
  isRequired: true,
};

export const nextOfKinAddressFormConfig = {
  formInfo: {
    type: "text",
    labelName: "Next Of Kin Address",
    name: "nextOfKinAddress",
    id: "nextOfKinAddress",
  },
  isRequired: true,
};

export const relationshipFormConfig = {
  formInfo: {
    labelName: "Relationship",
    id: "relationship",
  },
  isRequired: true,
  options: [
    { value: "Aunt", label: "Aunt", rating: "safe" },
    { value: "Brother", label: "Brother", rating: "good" },
    { value: "Cousin", label: "Cousin", rating: "safe" },
    { value: "Daughter", label: "Daughter", rating: "good" },
    { value: "Father", label: "Father", rating: "safe" },
    { value: "Mother", label: "Mother", rating: "good" },
    { value: "Nephew", label: "Nephew", rating: "safe" },
    { value: "Niece", label: "Niece", rating: "good" },
  ],
};
