import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'english' | 'hindi' | 'punjabi' | 'tamil' | 'telugu' | 'bengali' | 'marathi' | 'gujarati';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStrings;
}

export interface TranslationStrings {
  // App Navigation
  appName: string;
  dashboard: string;
  videoConsultation: string;
  transport: string;
  medicine: string;
  ashaWorker: string;
  aiDetector: string;
  schemes: string;
  profile: string;
  logout: string;
  language: string;
  menu: string;
  
  // Login & Auth
  welcome: string;
  phoneLogin: string;
  enterPhone: string;
  enterOTP: string;
  sendOTP: string;
  verifyOTP: string;
  resendOTP: string;
  emergencyAccess: string;
  ussdCode: string;
  ivrNumber: string;
  
  // Profile
  createProfile: string;
  editProfile: string;
  fullName: string;
  age: string;
  gender: string;
  male: string;
  female: string;
  other: string;
  bloodGroup: string;
  address: string;
  emergencyContact: string;
  save: string;
  cancel: string;
  
  // Dashboard
  healthOverview: string;
  quickActions: string;
  recentActivity: string;
  upcomingAppointments: string;
  vaccinations: string;
  medications: string;
  allergies: string;
  medicalHistory: string;
  
  // Video Consultation
  bookConsultation: string;
  availableDoctors: string;
  specialty: string;
  schedule: string;
  startCall: string;
  endCall: string;
  
  // Transport
  bookAmbulance: string;
  pickupLocation: string;
  destination: string;
  emergencyType: string;
  bookNow: string;
  trackAmbulance: string;
  
  // Medicine
  medicineStock: string;
  searchMedicine: string;
  availability: string;
  available: string;
  outOfStock: string;
  requestMedicine: string;
  
  // ASHA Worker
  contactAsha: string;
  ashaWorkerName: string;
  callNow: string;
  sendMessage: string;
  
  // AI Detector
  symptomChecker: string;
  describeSymptoms: string;
  analyze: string;
  results: string;
  consultDoctor: string;
  
  // Health Schemes
  stateHealthSchemes: string;
  searchSchemes: string;
  selectState: string;
  allCategories: string;
  noSchemesFound: string;
  website: string;
  applyNow: string;
  helpline: string;
  benefits: string;
  eligibility: string;
  
  // Common
  loading: string;
  submit: string;
  back: string;
  next: string;
  confirm: string;
  yes: string;
  no: string;
  search: string;
  filter: string;
  date: string;
  time: string;
  status: string;
  details: string;
  view: string;
  edit: string;
  delete: string;
}

export const translations: Record<Language, TranslationStrings> = {
  english: {
    // App Navigation
    appName: 'MediSahyog',
    dashboard: 'Dashboard',
    videoConsultation: 'Video Call',
    transport: 'Transport',
    medicine: 'Medicine',
    ashaWorker: 'ASHA Worker',
    aiDetector: 'AI Detector',
    schemes: 'State Schemes',
    profile: 'Profile',
    logout: 'Logout',
    language: 'Language',
    menu: 'Menu',
    
    // Login & Auth
    welcome: 'Welcome to MediSahyog',
    phoneLogin: 'Phone Login',
    enterPhone: 'Enter your phone number',
    enterOTP: 'Enter OTP',
    sendOTP: 'Send OTP',
    verifyOTP: 'Verify OTP',
    resendOTP: 'Resend OTP',
    emergencyAccess: 'Emergency Access',
    ussdCode: 'USSD Code',
    ivrNumber: 'IVR Number',
    
    // Profile
    createProfile: 'Create Profile',
    editProfile: 'Edit Profile',
    fullName: 'Full Name',
    age: 'Age',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    bloodGroup: 'Blood Group',
    address: 'Address',
    emergencyContact: 'Emergency Contact',
    save: 'Save',
    cancel: 'Cancel',
    
    // Dashboard
    healthOverview: 'Health Overview',
    quickActions: 'Quick Actions',
    recentActivity: 'Recent Activity',
    upcomingAppointments: 'Upcoming Appointments',
    vaccinations: 'Vaccinations',
    medications: 'Medications',
    allergies: 'Allergies',
    medicalHistory: 'Medical History',
    
    // Video Consultation
    bookConsultation: 'Book Consultation',
    availableDoctors: 'Available Doctors',
    specialty: 'Specialty',
    schedule: 'Schedule',
    startCall: 'Start Call',
    endCall: 'End Call',
    
    // Transport
    bookAmbulance: 'Book Ambulance',
    pickupLocation: 'Pickup Location',
    destination: 'Destination',
    emergencyType: 'Emergency Type',
    bookNow: 'Book Now',
    trackAmbulance: 'Track Ambulance',
    
    // Medicine
    medicineStock: 'Medicine Stock',
    searchMedicine: 'Search Medicine',
    availability: 'Availability',
    available: 'Available',
    outOfStock: 'Out of Stock',
    requestMedicine: 'Request Medicine',
    
    // ASHA Worker
    contactAsha: 'Contact ASHA Worker',
    ashaWorkerName: 'ASHA Worker Name',
    callNow: 'Call Now',
    sendMessage: 'Send Message',
    
    // AI Detector
    symptomChecker: 'Symptom Checker',
    describeSymptoms: 'Describe your symptoms',
    analyze: 'Analyze',
    results: 'Results',
    consultDoctor: 'Consult Doctor',
    
    // Health Schemes
    stateHealthSchemes: 'State Health Schemes',
    searchSchemes: 'Search Schemes',
    selectState: 'Select State',
    allCategories: 'All Categories',
    noSchemesFound: 'No Schemes Found',
    website: 'Website',
    applyNow: 'Apply Now',
    helpline: 'Helpline',
    benefits: 'Benefits',
    eligibility: 'Eligibility',
    
    // Common
    loading: 'Loading...',
    submit: 'Submit',
    back: 'Back',
    next: 'Next',
    confirm: 'Confirm',
    yes: 'Yes',
    no: 'No',
    search: 'Search',
    filter: 'Filter',
    date: 'Date',
    time: 'Time',
    status: 'Status',
    details: 'Details',
    view: 'View',
    edit: 'Edit',
    delete: 'Delete',
  },
  
  hindi: {
    // App Navigation
    appName: 'हेल्थपिंड',
    dashboard: 'डैशबोर्ड',
    videoConsultation: 'वीडियो कॉल',
    transport: 'परिवहन',
    medicine: 'दवाई',
    ashaWorker: 'आशा वर्कर',
    aiDetector: 'एआई डिटेक्टर',
    schemes: 'पंजाब योजनाएं',
    profile: 'प्रोफाइल',
    logout: 'लॉगआउट',
    language: 'भाषा',
    menu: 'मेनू',
    
    // Login & Auth
    welcome: 'हेल्थपिंड में आपका स्वागत है',
    phoneLogin: 'फोन लॉगिन',
    enterPhone: 'अपना फोन नंबर दर्ज करें',
    enterOTP: 'OTP दर्ज करें',
    sendOTP: 'OTP भेजें',
    verifyOTP: 'OTP सत्यापित करें',
    resendOTP: 'OTP पुनः भेजें',
    emergencyAccess: 'आपातकालीन पहुंच',
    ussdCode: 'USSD कोड',
    ivrNumber: 'IVR नंबर',
    
    // Profile
    createProfile: 'प्रोफाइल बनाएं',
    editProfile: 'प्रोफाइल संपादित करें',
    fullName: 'पूरा नाम',
    age: 'उम्र',
    gender: 'लिंग',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    bloodGroup: 'रक्त समूह',
    address: 'पता',
    emergencyContact: 'आपातकालीन संपर्क',
    save: 'सहेजें',
    cancel: 'रद्द करें',
    
    // Dashboard
    healthOverview: 'स्वास्थ्य अवलोकन',
    quickActions: 'त्वरित कार्य',
    recentActivity: 'हाल की गतिविधि',
    upcomingAppointments: 'आगामी अपॉइंटमेंट',
    vaccinations: 'टीकाकरण',
    medications: 'दवाइया��',
    allergies: 'एलर्जी',
    medicalHistory: 'चिकित्सा इतिहास',
    
    // Video Consultation
    bookConsultation: 'परामर्श बुक करें',
    availableDoctors: 'उपलब्ध डॉक्टर',
    specialty: 'विशेषज्ञता',
    schedule: 'समय-सारणी',
    startCall: 'कॉल शुरू करें',
    endCall: 'कॉल समाप्त करें',
    
    // Transport
    bookAmbulance: 'एम्बुलेंस बुक करें',
    pickupLocation: 'पिकअप स्था',
    destination: 'गंतव्य',
    emergencyType: 'आपातकालीन प्रकार',
    bookNow: 'अभी बुक करें',
    trackAmbulance: 'एम्बुलेंस ट्रैक करें',
    
    // Medicine
    medicineStock: 'दवा स्टॉक',
    searchMedicine: 'दवा खोजें',
    availability: 'उपलब्धता',
    available: 'उपलब्ध',
    outOfStock: 'स्टॉक में नहीं',
    requestMedicine: 'दवा का अनुरोध करें',
    
    // ASHA Worker
    contactAsha: 'आशा वर्कर से संपर्क करें',
    ashaWorkerName: 'आशा वर्कर का नाम',
    callNow: 'अभी कॉल करें',
    sendMessage: 'संदेश भेजें',
    
    // AI Detector
    symptomChecker: 'लक्षण जांचकर्ता',
    describeSymptoms: 'अपने लक्षणों का वर्णन करें',
    analyze: 'विश्लेषण करें',
    results: 'परिणाम',
    consultDoctor: 'डॉक्टर से परामर्श लें',
    
    // Health Schemes
    stateHealthSchemes: 'राज्य स्वास्थ्य योजनाएं',
    searchSchemes: 'योजनाएं खोजें',
    selectState: 'राज्य चुनें',
    allCategories: 'सभी श्रेणियाँ',
    noSchemesFound: 'कोई योजना नहीं मिली',
    website: 'वेबसाइट',
    applyNow: 'अभी आवेदन करें',
    helpline: 'हेल्पलाइन',
    benefits: 'लाभ',
    eligibility: 'योग्यता',
    
    // Common
    loading: 'लोड हो रहा है...',
    submit: 'जमा करें',
    back: 'वापस',
    next: 'आगे',
    confirm: 'पुष्टि करें',
    yes: 'हां',
    no: 'नहीं',
    search: 'खोजें',
    filter: 'फ़िल्टर',
    date: 'तारीख',
    time: 'समय',
    status: 'स्थिति',
    details: 'विवरण',
    view: 'देखें',
    edit: 'संपादित करें',
    delete: 'हटाएं',
  },
  
  punjabi: {
    // App Navigation
    appName: 'ਹੈਲਥਪਿੰਡ',
    dashboard: 'ਡੈਸ਼ਬੋਰਡ',
    videoConsultation: 'ਵੀਡੀਓ ਕਾਲ',
    transport: 'ਟਰਾਂਸਪੋਰਟ',
    medicine: 'ਦਵਾਈ',
    ashaWorker: 'ਆਸ਼ਾ ਵਰਕਰ',
    aiDetector: 'ਏਆਈ ਡਿਟੈਕਟਰ',
    schemes: 'ਪੰਜਾਬ ਸਕੀਮਾਂ',
    profile: 'ਪ੍ਰੋਫਾਈਲ',
    logout: 'ਲਾਗਆਉਟ',
    language: 'ਭਾਸ਼ਾ',
    menu: 'ਮੀਨੂ',
    
    // Login & Auth
    welcome: 'ਹੈਲਥਪਿੰਡ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
    phoneLogin: 'ਫੋਨ ਲਾਗਇਨ',
    enterPhone: 'ਆਪਣਾ ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    enterOTP: 'OTP ਦਰਜ ਕਰੋ',
    sendOTP: 'OTP ਭੇਜੋ',
    verifyOTP: 'OTP ਤਸਦੀਕ ਕਰੋ',
    resendOTP: 'OTP ਦੁਬਾਰਾ ਭੇਜੋ',
    emergencyAccess: 'ਐਮਰਜੈਂਸੀ ਪਹੁੰਚ',
    ussdCode: 'USSD ਕੋਡ',
    ivrNumber: 'IVR ਨੰਬਰ',
    
    // Profile
    createProfile: 'ਪ੍ਰੋਫਾਈਲ ਬਣਾਓ',
    editProfile: 'ਪ੍ਰੋਫਾਈਲ ਸੰਪਾਦਿਤ ਕਰੋ',
    fullName: 'ਪੂਰਾ ਨਾਮ',
    age: 'ਉਮਰ',
    gender: 'ਲਿੰਗ',
    male: 'ਮਰਦ',
    female: 'ਔਰਤ',
    other: 'ਹੋਰ',
    bloodGroup: 'ਬਲੱਡ ਗਰੁੱਪ',
    address: 'ਪਤਾ',
    emergencyContact: 'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ',
    save: 'ਸੁਰੱਖਿਅਤ ਕਰੋ',
    cancel: 'ਰੱਦ ਕਰੋ',
    
    // Dashboard
    healthOverview: 'ਸਿਹਤ ਸੰਖੇਪ',
    quickActions: 'ਤੇਜ਼ ਕਾਰਵਾਈਆਂ',
    recentActivity: 'ਹਾਲੀਆ ਗਤੀਵਿਧੀ',
    upcomingAppointments: 'ਆਉਣ ਵਾਲੀਆਂ ਮੁਲਾਕਾਤਾਂ',
    vaccinations: 'ਟੀਕਾਕਰਨ',
    medications: 'ਦਵਾਈਆਂ',
    allergies: 'ਐਲਰਜੀ',
    medicalHistory: 'ਡਾਕਟਰੀ ਇਤਿਹਾਸ',
    
    // Video Consultation
    bookConsultation: 'ਸਲਾਹ ਬੁੱਕ ਕਰੋ',
    availableDoctors: 'ਉਪਲਬਧ ਡਾਕਟਰ',
    specialty: 'ਵਿਸ਼ੇਸ਼ਤਾ',
    schedule: 'ਸਮਾਂ-ਸਾਰਣੀ',
    startCall: 'ਕਾਲ ਸ਼ੁਰੂ ਕਰੋ',
    endCall: 'ਕਾਲ ਖਤਮ ਕਰੋ',
    
    // Transport
    bookAmbulance: 'ਐਂਬੂਲੈਂਸ ਬੁੱਕ ਕਰੋ',
    pickupLocation: 'ਪਿਕਅੱਪ ਸਥਾਨ',
    destination: 'ਮੰਜ਼ਿਲ',
    emergencyType: 'ਐਮਰਜੈਂਸੀ ਕਿਸਮ',
    bookNow: 'ਹੁਣੇ ਬੁੱਕ ਕਰੋ',
    trackAmbulance: 'ਐਂਬੂਲੈਂਸ ਟਰੈਕ ਕਰੋ',
    
    // Medicine
    medicineStock: 'ਦਵਾਈ ਸਟਾਕ',
    searchMedicine: 'ਦਵਾਈ ਖੋਜੋ',
    availability: 'ਉਪਲਬਧਤਾ',
    available: 'ਉਪਲਬਧ',
    outOfStock: 'ਸਟਾਕ ਵਿੱਚ ਨਹੀਂ',
    requestMedicine: 'ਦਵਾਈ ਦੀ ਬੇਨਤੀ ਕਰੋ',
    
    // ASHA Worker
    contactAsha: 'ਆਸ਼ਾ ਵਰਕਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
    ashaWorkerName: 'ਆਸ਼ਾ ਵਰਕਰ ਦਾ ਨਾਮ',
    callNow: 'ਹੁਣੇ ਕਾਲ ਕਰੋ',
    sendMessage: 'ਸੁਨੇਹਾ ਭੇਜੋ',
    
    // AI Detector
    symptomChecker: 'ਲੱਛਣ ਜਾਂਚਕਰਤਾ',
    describeSymptoms: 'ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਰਣਨ ਕਰੋ',
    analyze: 'ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ',
    results: 'ਨਤੀਜੇ',
    consultDoctor: 'ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ',
    
    // Health Schemes
    stateHealthSchemes: 'ਰਾਜਵਿਭਾਗ ਸਵਾਸਥਿਆ ਯੋਜਨਾਵਾਂ',
    searchSchemes: 'ਯੋਜਨਾਵਾਂ ਖੋਜੋ',
    selectState: 'ਰਾਜਵਿਭਾਗ ਚੁਣੋ',
    allCategories: 'ਸਾਰੇ ਵਰਗ',
    noSchemesFound: 'ਕੋਈ ਯੋਜਨਾ ਨਹੀਂ ਮਿਲੀ',
    website: 'ਵੈੱਬਸਾਈਟ',
    applyNow: 'ਹੁਣੇ ਆਵਡੇਨ ਕਰੋ',
    helpline: 'ਹੈਲਪਲਾਈਨ',
    benefits: 'ਲਾਭ',
    eligibility: 'ਯੋਗਿਤਾ',
    
    // Common
    loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
    submit: 'ਜਮ੍ਹਾਂ ਕਰੋ',
    back: 'ਵਾਪਸ',
    next: 'ਅੱਗੇ',
    confirm: 'ਪੁਸ਼ਟੀ ਕਰੋ',
    yes: 'ਹਾਂ',
    no: 'ਨਹੀਂ',
    search: 'ਖੋਜੋ',
    filter: 'ਫਿਲਟਰ',
    date: 'ਤਾਰੀਖ',
    time: 'ਸਮਾਂ',
    status: 'ਸਥਿਤੀ',
    details: 'ਵੇਰਵੇ',
    view: 'ਦੇਖੋ',
    edit: 'ਸੰਪਾਦਿਤ ਕਰੋ',
    delete: 'ਮਿਟਾਓ',
  },
  
  tamil: {
    // App Navigation
    appName: 'ஹெல்த்பிண்ட்',
    dashboard: 'டாஷ்போர்டு',
    videoConsultation: 'வீடியோ அழைப்பு',
    transport: 'போக்குவரத்து',
    medicine: 'மருந்து',
    ashaWorker: 'ஆஷா பணியாளர்',
    aiDetector: 'AI கண்டறிதல்',
    schemes: 'பஞ்சாப் திட்டங்கள்',
    profile: 'சுயவிவரம்',
    logout: 'வெளியேறு',
    language: 'மொழி',
    menu: 'பட்டி',
    
    // Login & Auth
    welcome: 'ஹெல்த்பிண்ட்-க்கு வரவேற்கிறோம்',
    phoneLogin: 'தொலைபேசி உள்நுழைவு',
    enterPhone: 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
    enterOTP: 'OTP-ஐ உள்ளிடவும்',
    sendOTP: 'OTP அனுப்பு',
    verifyOTP: 'OTP சரிபார்க்கவும்',
    resendOTP: 'OTP மீண்டும் அனுப்பு',
    emergencyAccess: 'அவசர அணுகல்',
    ussdCode: 'USSD குறியீடு',
    ivrNumber: 'IVR எண்',
    
    // Profile
    createProfile: 'சுயவிவரத்தை உருவாக்கு',
    editProfile: 'சுயவிவரத்தைத் திருத்து',
    fullName: 'முழு பெயர்',
    age: 'வயது',
    gender: 'பாலினம்',
    male: 'ஆண்',
    female: 'பெண்',
    other: 'மற்றவை',
    bloodGroup: 'இரத்த வகை',
    address: 'முகவரி',
    emergencyContact: 'அவசர தொடர்பு',
    save: 'சேமி',
    cancel: 'ரத்து செய்',
    
    // Dashboard
    healthOverview: 'சுகாதார கண்ணோட்டம',
    quickActions: 'விரைவு செயல்கள்',
    recentActivity: 'சமீபத்திய செயல்பாடு',
    upcomingAppointments: 'வரவிருக்கும் சந்திப்புகள்',
    vaccinations: 'தடுப்பூசிகள்',
    medications: 'மருந்துகள்',
    allergies: 'ஒவ்வாமைகள்',
    medicalHistory: 'மருத்துவ வரலாறு',
    
    // Video Consultation
    bookConsultation: 'ஆலோசனை முன்பதிவு',
    availableDoctors: 'கிடைக்கும் மருத்துவர்கள்',
    specialty: 'சிறப்பு',
    schedule: 'அட்டவணை',
    startCall: 'அழைப்பை தொடங்கு',
    endCall: 'அழைப்பை முடி',
    
    // Transport
    bookAmbulance: 'ஆம்புலன்ஸ் முன்பதிவு',
    pickupLocation: 'பிக்அப் இடம்',
    destination: 'இலக்கு',
    emergencyType: 'அவசர வகை',
    bookNow: 'இப்போது முன்பதிவு செய்',
    trackAmbulance: 'ஆம்புலன்ஸ் கண்காணி',
    
    // Medicine
    medicineStock: 'மருந்து இருப்பு',
    searchMedicine: 'மருந்து தேடு',
    availability: 'கிடைக்கும் தன்மை',
    available: 'கிடைக்கிறது',
    outOfStock: 'இருப்பில் இல்லை',
    requestMedicine: 'மருந்து கோரிக்கை',
    
    // ASHA Worker
    contactAsha: 'ஆஷா பணியாளரை தொடர்பு கொள்ளவும்',
    ashaWorkerName: 'ஆஷா பணியாளர் பெயர்',
    callNow: 'இப்போது அழைக்கவும்',
    sendMessage: 'செய்தி அனுப்பு',
    
    // AI Detector
    symptomChecker: 'அறிகுறி சரிபார்ப்பாளர்',
    describeSymptoms: 'உங்கள் அறிகுறிகளை விவரிக்கவும்',
    analyze: 'பகுப்பாய்வு செய்',
    results: 'முடிவுகள்',
    consultDoctor: 'மருத்துவரை ஆலோசிக்கவும்',
    
    // Health Schemes
    stateHealthSchemes: 'ராஜ்ய ஸ்வாஸ்த்ய திட்டங்கள்',
    searchSchemes: 'திட்டங்களை தேடு',
    selectState: 'ராஜ்யத்தைத் தெரியு',
    allCategories: 'எல்லா வகைகளும்',
    noSchemesFound: 'திட்டங்கள் காணப்படவில்லை',
    website: 'வெப்பாட்டியம்',
    applyNow: 'இப்போது பதிவு செய்',
    helpline: 'வார்த்துக்கோல்',
    benefits: 'பயன்பாடுகள்',
    eligibility: 'உருவாக்குதல்',
    
    // Common
    loading: 'ஏற்றுகிறது...',
    submit: 'சமர்ப்பி',
    back: 'பின்',
    next: 'அடுத்து',
    confirm: 'உறுதிப்படுத்து',
    yes: 'ஆம்',
    no: 'இல்லை',
    search: 'தேடு',
    filter: 'வடிகட்டி',
    date: 'தேதி',
    time: 'நேரம்',
    status: 'நிலை',
    details: 'விவரங்கள்',
    view: 'பார்',
    edit: 'திருத்து',
    delete: 'அழி',
  },
  
  telugu: {
    // App Navigation
    appName: 'హెల్త్‌పిండ్',
    dashboard: 'డాష్‌బోర్డ్',
    videoConsultation: 'వీడియో కాల్',
    transport: 'రవాణా',
    medicine: 'మందు',
    ashaWorker: 'ఆషా వర్కర్',
    aiDetector: 'AI డిటెక్టర్',
    schemes: 'పంజాబ్ పథకాలు',
    profile: 'ప్రొఫైల్',
    logout: 'లాగౌట్',
    language: 'భాష',
    menu: 'మెనూ',
    
    // Login & Auth
    welcome: 'హెల్త్‌పిండ్‌కు స్వాగతం',
    phoneLogin: 'ఫోన్ లాగిన్',
    enterPhone: 'మీ ఫోన్ నంబర్‌ను నమోదు చేయండి',
    enterOTP: 'OTPని నమోదు చేయండి',
    sendOTP: 'OTP పంపండి',
    verifyOTP: 'OTPని ధృవీకరించండి',
    resendOTP: 'OTPని మళ్లీ పంపండి',
    emergencyAccess: 'కటోకటీ ప్రవేశ',
    ussdCode: 'USSD కోడ్',
    ivrNumber: 'IVR నంబర్',
    
    // Profile
    createProfile: 'ప్రొఫైల్ సృష్టించండి',
    editProfile: 'ప్రొఫైల్ సవరించండి',
    fullName: 'పూర్తి పేరు',
    age: 'వయస్సు',
    gender: 'లింగం',
    male: 'పురుషుడు',
    female: 'స్త్రీ',
    other: 'ఇతర',
    bloodGroup: 'రక్త వర్గం',
    address: 'చిరునామా',
    emergencyContact: 'కటోకటీ సంప్రదింపు',
    save: 'సాచవో',
    cancel: 'రద్దు చేయండి',
    
    // Dashboard
    healthOverview: 'ఆరోగ్య సమీక్ష',
    quickActions: 'త్వరిత చర్యలు',
    recentActivity: 'ఇటీవలి కార్యాచరణ',
    upcomingAppointments: 'రాబోయే అపాయింట్‌మెంట్‌లు',
    vaccinations: 'టీకాలు',
    medications: 'మందులు',
    allergies: 'అలెర్జీలు',
    medicalHistory: 'వైద్య చరిత్ర',
    
    // Video Consultation
    bookConsultation: 'సంప్రదింపును బుక్ చేయండి',
    availableDoctors: 'అందుబాటులో ఉన్న వైద్యులు',
    specialty: 'ప్రత్యేకత',
    schedule: 'షెడ్యూల్',
    startCall: 'కాల్ ప్రారంభించండి',
    endCall: 'కాల్ ముగించండి',
    
    // Transport
    bookAmbulance: 'అంబులెన్స్ బుక్ చేయండి',
    pickupLocation: 'పికప్ స్థానం',
    destination: 'గమ్యం',
    emergencyType: 'కటోకటీ రకం',
    bookNow: 'ఇప్పుడు బుక్ చేయండి',
    trackAmbulance: 'అంబులెన్స్ ట్రాక్ చేయండి',
    
    // Medicine
    medicineStock: 'మందు స్టాక్',
    searchMedicine: 'మందు వెతకండి',
    availability: 'లభ్యత',
    available: 'అందుబాటులో ఉంది',
    outOfStock: 'స్టాక్ లో లేదు',
    requestMedicine: 'మందు అభ్యర్థన',
    
    // ASHA Worker
    contactAsha: 'ఆషా వర్కర్‌ను సంప్రదించండి',
    ashaWorkerName: 'ఆషా వర్కర్ పేరు',
    callNow: 'ఇప్పుడు కాల్ చేయండి',
    sendMessage: 'సందేశం పంపండి',
    
    // AI Detector
    symptomChecker: 'లక్షణ తనిఖీదారు',
    describeSymptoms: 'మీ లక్షణాలను వివరించండి',
    analyze: 'విశ్లేషించండి',
    results: 'ఫలితాలు',
    consultDoctor: 'వైద్యుడిని సంప్రదించండి',
    
    // Health Schemes
    stateHealthSchemes: 'రాజ్య స్వాస్థ్య పథకాలు',
    searchSchemes: 'పథకాలను వెతకండి',
    selectState: 'రాజ్యాన్ని ఎంపిక చేయండి',
    allCategories: 'అన్ని వర్గాలు',
    noSchemesFound: 'పథకాలు కనుగొనబడలేదు',
    website: 'వెబ్‌సైట్',
    applyNow: 'ఇప్పుడు పంపండి',
    helpline: 'హేల్ప్‌లైన్',
    benefits: 'ప్రత్యక్షాలు',
    eligibility: 'యోగ్యత',
    
    // Common
    loading: 'లోడ్ అవుతోంది...',
    submit: 'సమర్పించండి',
    back: 'వెనుకకు',
    next: 'తదుపరి',
    confirm: 'నిర్ధారించండి',
    yes: 'అవును',
    no: 'కాదు',
    search: 'వెతకండి',
    filter: 'ఫిల్టర్',
    date: 'తేదీ',
    time: 'సమయం',
    status: 'స్థితి',
    details: 'వివరాలు',
    view: 'చూడండి',
    edit: 'సవరించండి',
    delete: 'తొలగించండి',
  },
  
  bengali: {
    // App Navigation
    appName: 'হেলথপিন্ড',
    dashboard: 'ড্যাশবোর্ড',
    videoConsultation: 'ভিডিও কল',
    transport: 'পরিবহন',
    medicine: 'ওষুধ',
    ashaWorker: 'আশা ওয়ার্কার',
    aiDetector: 'এআই ডিটেক্টর',
    schemes: 'পাঞ্জাব স্কিম',
    profile: 'প্রোফাইল',
    logout: 'লগআউট',
    language: 'ভাষা',
    menu: 'মেনু',
    
    // Login & Auth
    welcome: 'হেলথপিন্ডে স্বাগতম',
    phoneLogin: 'ফোন লগইন',
    enterPhone: 'আপনার ফোন নম্বর লিখুন',
    enterOTP: 'OTP লিখুন',
    sendOTP: 'OTP পাঠান',
    verifyOTP: 'OTP যাচাই করুন',
    resendOTP: 'OTP পুনরায় পাঠান',
    emergencyAccess: 'জরুরি অ্যাক্সেস',
    ussdCode: 'USSD কোড',
    ivrNumber: 'IVR নম্বর',
    
    // Profile
    createProfile: 'প্রোফাইল তৈরি করুন',
    editProfile: 'প্রোফাইল সম্পাদনা করুন',
    fullName: 'পুরো নাম',
    age: 'বয়স',
    gender: 'লিঙ্গ',
    male: 'পুরুষ',
    female: 'মহিলা',
    other: 'অন্যান্য',
    bloodGroup: 'রক্তের গ্রুপ',
    address: 'ঠিকানা',
    emergencyContact: 'জরুরি যোগাযোগ',
    save: 'সংরক্ষণ করুন',
    cancel: 'বাতিল করুন',
    
    // Dashboard
    healthOverview: 'স্বাস্থ্য সংক্ষিপ্ত বিবরণ',
    quickActions: 'দ্রুত কর্ম',
    recentActivity: 'সাম্প্রতিক কার্যকলাপ',
    upcomingAppointments: 'আসন্ন অ্যাপয়েন্টমেন্ট',
    vaccinations: 'টিকাকরণ',
    medications: 'ওষুধসমূহ',
    allergies: 'অ্যালার্জি',
    medicalHistory: 'চিকিৎসা ইতিহাস',
    
    // Video Consultation
    bookConsultation: 'পরামর্শ বুক করুন',
    availableDoctors: 'উপলব্ধ ডাক্তার',
    specialty: 'বিশেষত্ব',
    schedule: 'সময়সূচী',
    startCall: 'কল শুরু করুন',
    endCall: 'কল শেষ করুন',
    
    // Transport
    bookAmbulance: 'অ্যাম্বুলেন্স বুক করুন',
    pickupLocation: 'পিকআপ স্থান',
    destination: 'গন্তব্য',
    emergencyType: 'জরুরি ধরন',
    bookNow: 'এখনই বুক করুন',
    trackAmbulance: 'অ্যাম্বুলেন্স ট্র্যাক করুন',
    
    // Medicine
    medicineStock: 'ওষুধ স্টক',
    searchMedicine: 'ওষুধ অনুসন্ধান করুন',
    availability: 'উপলব্ধতা',
    available: 'উপলব্ধ',
    outOfStock: 'স্টক শেষ',
    requestMedicine: 'ওষুধের অনুরোধ',
    
    // ASHA Worker
    contactAsha: 'আশা ওয়ার্কারের সাথে যোগাযোগ করুন',
    ashaWorkerName: 'আশা ওয়ার্কারের নাম',
    callNow: 'এখনই কল করুন',
    sendMessage: 'বার্তা পাঠান',
    
    // AI Detector
    symptomChecker: 'লক্ষণ পরীক্ষক',
    describeSymptoms: 'আপনার লক্ষণ বর্ণনা করুন',
    analyze: 'বিশ্লেষণ করুন',
    results: 'ফলাফল',
    consultDoctor: 'ডাক্তারের পরামর্শ নিন',
    
    // Health Schemes
    stateHealthSchemes: 'রাজ্য স্বাস্থ্য যোজনা',
    searchSchemes: 'যোজনা খুঁজুন',
    selectState: 'রাজ্য নির্বাচন করুন',
    allCategories: 'সব শ্রেণি',
    noSchemesFound: 'কোনো যোজনা পাওয়া যায়নি',
    website: 'ওয়েবসাইট',
    applyNow: 'এখনই আবেদন করুন',
    helpline: 'হেল্পলাইন',
    benefits: 'আয়োগ্য',
    eligibility: 'প্রায়োজনীয়তা',
    
    // Common
    loading: 'লোড হচ্ছে...',
    submit: 'জমা দিন',
    back: 'পিছনে',
    next: 'পরবর্তী',
    confirm: 'নিশ্চিত করুন',
    yes: 'হ্যাঁ',
    no: 'না',
    search: 'অনুসন্ধান করুন',
    filter: 'ফিল্টার',
    date: 'তারিখ',
    time: 'সময়',
    status: 'অবস্থা',
    details: 'বিবরণ',
    view: 'দেখুন',
    edit: 'সম্পাদনা করুন',
    delete: 'মুছুন',
  },
  
  marathi: {
    // App Navigation
    appName: 'हेल्थपिंड',
    dashboard: 'डॅशबोर्ड',
    videoConsultation: 'व्हिडिओ कॉल',
    transport: 'वाहतूक',
    medicine: 'औषध',
    ashaWorker: 'आशा वर्कर',
    aiDetector: 'एआय डिटेक्टर',
    schemes: 'पंजाब योजना',
    profile: 'प्रोफाइल',
    logout: 'लॉगआउट',
    language: 'भाषा',
    menu: 'मेनू',
    
    // Login & Auth
    welcome: 'हेल्थपिंड मध्ये स्वागत आहे',
    phoneLogin: 'फोन लॉगिन',
    enterPhone: 'तुमचा फोन नंबर टाका',
    enterOTP: 'OTP टाका',
    sendOTP: 'OTP पाठवा',
    verifyOTP: 'OTP सत्यापित करा',
    resendOTP: 'OTP पुन्हा पाठवा',
    emergencyAccess: 'आपत्कालीन प्रवेश',
    ussdCode: 'USSD कोड',
    ivrNumber: 'IVR नंबर',
    
    // Profile
    createProfile: 'प्रोफाइल तयार करा',
    editProfile: 'प्रोफाइल संपादित करा',
    fullName: 'पूर्ण नाव',
    age: 'वय',
    gender: 'लिंग',
    male: 'पुरुष',
    female: 'स्त्री',
    other: 'इतर',
    bloodGroup: 'रक्त गट',
    address: 'पत्ता',
    emergencyContact: 'आपत्कालीन संपर्क',
    save: 'जतन करा',
    cancel: 'रद्द करा',
    
    // Dashboard
    healthOverview: 'आरोग्य विहंगावलोकन',
    quickActions: 'द्रुत क्रिया',
    recentActivity: 'अलीकडील क्रियाकलाप',
    upcomingAppointments: 'येणाऱ्या भेटी',
    vaccinations: 'लसीकरण',
    medications: 'औषधे',
    allergies: 'ऍलर्जी',
    medicalHistory: 'वैद्यकीय इतिहास',
    
    // Video Consultation
    bookConsultation: 'सल्ला बुक करा',
    availableDoctors: 'उपलब्ध डॉक्टर',
    specialty: 'विशेषता',
    schedule: 'वेळापत्रक',
    startCall: 'कॉल सुरू करा',
    endCall: 'कॉल संपवा',
    
    // Transport
    bookAmbulance: 'रुग्णवाहिका बुक करा',
    pickupLocation: 'पिकअप स्थान',
    destination: 'गंतव्य',
    emergencyType: 'आपत्कालीन प्रकार',
    bookNow: 'आता बुक करा',
    trackAmbulance: 'रुग्णवाहिका ट्रॅक करा',
    
    // Medicine
    medicineStock: 'औषध साठा',
    searchMedicine: 'औषध शोधा',
    availability: 'उपलब्धता',
    available: 'उपलब्ध',
    outOfStock: 'स्टॉक संपला',
    requestMedicine: 'औषध विनंती',
    
    // ASHA Worker
    contactAsha: 'आशा वर्कर शी संपर्क साधा',
    ashaWorkerName: 'आशा वर्कर चे नाव',
    callNow: 'आता कॉल करा',
    sendMessage: 'संदेश पाठवा',
    
    // AI Detector
    symptomChecker: 'लक्षण तपासक',
    describeSymptoms: 'तुमची लक्षणे वर्णन करा',
    analyze: 'विश्लेष करा',
    results: 'परिणाम',
    consultDoctor: 'डॉक्टरांचा सल्ला घ्या',
    
    // Health Schemes
    stateHealthSchemes: 'राज्य स्वास्थ्य योजना',
    searchSchemes: 'योजना शोधा',
    selectState: 'राज्य निवडा',
    allCategories: 'सर्व श्रेणी',
    noSchemesFound: 'कोणतीही योजना मिळाली नाही',
    website: 'वेबसाइट',
    applyNow: 'आता आवेदन करा',
    helpline: 'हेल्पलाइन',
    benefits: 'लाभ',
    eligibility: 'योग्यता',
    
    // Common
    loading: 'लोड होत आहे...',
    submit: 'सबमिट करा',
    back: 'मागे',
    next: 'पुढे',
    confirm: 'खात्री करा',
    yes: 'होय',
    no: 'नाही',
    search: 'शोधा',
    filter: 'फिल्टर',
    date: 'तारीख',
    time: 'वेळ',
    status: 'स्थिती',
    details: 'तपशील',
    view: 'पहा',
    edit: 'संपादित करा',
    delete: 'हटवा',
  },
  
  gujarati: {
    // App Navigation
    appName: 'હેલ્થપિંડ',
    dashboard: 'ડેશબોર્ડ',
    videoConsultation: 'વીડિયો કૉલ',
    transport: 'પરિવહન',
    medicine: 'દવા',
    ashaWorker: 'આશા વર્કર',
    aiDetector: 'એઆઈ ડિટેક્ટર',
    schemes: 'પંજાબ યોજનાઓ',
    profile: 'પ્રોફાઇલ',
    logout: 'લૉગઆઉટ',
    language: 'ભાષા',
    menu: 'મેનુ',
    
    // Login & Auth
    welcome: 'હેલ્થપિંડમાં આપનું સ્વાગત છે',
    phoneLogin: 'ફોન લૉગિન',
    enterPhone: 'તમારો ફોન નંબર દાખલ કરો',
    enterOTP: 'OTP દાખલ કરો',
    sendOTP: 'OTP મોકલો',
    verifyOTP: 'OTP ચકાસો',
    resendOTP: 'OTP ફરીથી મોકલો',
    emergencyAccess: 'કટોકટી પ્રવેશ',
    ussdCode: 'USSD કોડ',
    ivrNumber: 'IVR નંબર',
    
    // Profile
    createProfile: 'પ્રોફાઇલ બનાવો',
    editProfile: 'પ્રોફાઇલ સંપાદિત કરો',
    fullName: 'પૂરું નામ',
    age: 'ઉંમર',
    gender: 'લિંગ',
    male: 'પુરુષ',
    female: 'સ્ત્રી',
    other: 'અન્ય',
    bloodGroup: 'રક્ત જૂથ',
    address: 'સરનામું',
    emergencyContact: 'કટોકટી સંપર્ક',
    save: 'સાચવો',
    cancel: 'રદ કરો',
    
    // Dashboard
    healthOverview: 'આરોગ્ય વિહંગાવલોકન',
    quickActions: 'ઝડપી ક્રિયાઓ',
    recentActivity: 'તાજેતરની પ્રવૃત્તિ',
    upcomingAppointments: 'આગામી મુલાકાતો',
    vaccinations: 'રસીકરણ',
    medications: 'દવાઓ',
    allergies: 'એલર્જી',
    medicalHistory: 'તબીબી ઇતિહાસ',
    
    // Video Consultation
    bookConsultation: 'પરામર્શ બુક કરો',
    availableDoctors: 'ઉપલબ્ધ ડોક્ટરો',
    specialty: 'વિશેષતા',
    schedule: 'સમયપત્રક',
    startCall: 'કૉલ શરૂ કરો',
    endCall: 'કૉલ સમાપ્ત કરો',
    
    // Transport
    bookAmbulance: 'એમ્બ્યુલન્સ બુક કરો',
    pickupLocation: 'પિકઅપ સ્થાન',
    destination: 'ગંતવ્ય',
    emergencyType: 'કટોકટી પ્રકાર',
    bookNow: 'હમણાં બુક કરો',
    trackAmbulance: 'એમ્બ્યુલન્સ ટ્રેક કરો',
    
    // Medicine
    medicineStock: 'દવા સ્ટૉક',
    searchMedicine: 'દવા શોધો',
    availability: 'ઉપલબ્ધતા',
    available: 'ઉપલબ્ધ',
    outOfStock: 'સ્ટૉકમાં નથી',
    requestMedicine: 'દવા વિનંતી',
    
    // ASHA Worker
    contactAsha: 'આશા વર્કરનો સંપર્ક કરો',
    ashaWorkerName: 'આશા વર્કરનું નામ',
    callNow: 'હમણાં કૉલ કરો',
    sendMessage: 'સંદેશ મોકલો',
    
    // AI Detector
    symptomChecker: 'લક્ષણ ચકાસનાર',
    describeSymptoms: 'તમારા લક્ષણોનું વર્ણન કરો',
    analyze: 'વિશ્લેષણ કરો',
    results: 'પરિણામો',
    consultDoctor: 'ડૉક્ટરની સલાહ લો',
    
    // Health Schemes
    stateHealthSchemes: 'રાજ્ય સ્વાસ્થ્ય યોજનાઓ',
    searchSchemes: 'યોજનાઓ શોધો',
    selectState: 'રાજ્ય પસંદ કરો',
    allCategories: 'સારી શ્રેણીઓ',
    noSchemesFound: 'કોઈ યોજના મળી નથી',
    website: 'વેબસાઇટ',
    applyNow: 'હમણાં આવેદન કરો',
    helpline: 'હેલ્પલાઇન',
    benefits: 'લાભો',
    eligibility: 'યોગ્યતા',
    
    // Common
    loading: 'લોડ થઈ રહ્યું છે...',
    submit: 'સબમિટ કરો',
    back: 'પાછળ',
    next: 'આગળ',
    confirm: 'પુષ્ટિ કરો',
    yes: 'હા',
    no: 'ના',
    search: 'શોધો',
    filter: 'ફિલ્ટર',
    date: 'તારીખ',
    time: 'સમય',
    status: 'સ્થિતિ',
    details: 'વિગતો',
    view: 'જુઓ',
    edit: 'સંપાદિત કરો',
    delete: 'કાઢી નાખો',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english');
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};