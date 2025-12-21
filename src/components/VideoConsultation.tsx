import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Video, Star, Phone, WifiOff, VideoOff, GraduationCap, MapPin, Languages, Award, Stethoscope } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoConsultationProps {
  selectedLanguage: string;
}

const translations = {
  english: {
    title: 'Video Consultation',
    freeConsultation: 'Free Consultation',
    expertConsultation: 'Expert Consultation',
    freeConsultationDesc: 'Connect instantly with general physicians at no cost',
    expertConsultationDesc: 'Book specialized consultations with experienced doctors',
    availableNow: 'Available Now',
    bookAppointment: 'Book Appointment',

    availableDoctors: 'Expert Doctors',
    freeVideoCall: 'Start Free Video Call',
    connectNow: 'Connect Now - Free',
    generalPhysician: 'General Physician',
    gynecologist: 'Gynecologist',
    pediatrician: 'Pediatrician',
    cardiologist: 'Cardiologist',
    dermatologist: 'Dermatologist',
    experience: 'years experience',
    rating: 'Rating',
    consultationFee: 'Consultation Fee',
    startConsultation: 'Start Video Call',
    startAudioCall: 'Start Audio Call',
    switchToAudio: 'Switch to Audio',
    reschedule: 'Reschedule',
    today: 'Today',
    tomorrow: 'Tomorrow',
    connecting: 'Connecting you to available doctor...',
    waitTime: 'Average wait time: 2-5 minutes',
    poorConnection: 'Poor Internet? Switch to Audio Call',
    education: 'Education',
    languages: 'Languages',
    location: 'Location',
    specializations: 'Specializations',
    awards: 'Awards & Certifications',
    about: 'About Doctor',
    patientReviews: 'Patient Reviews'
  },
  hindi: {
    title: 'वीडियो परामर्श',
    freeConsultation: 'मुफ्त परामर्श',
    expertConsultation: 'विशेषज्ञ परामर्श',
    freeConsultationDesc: 'बिना किसी लागत के सामान्य चिकित्सकों से तुरंत जुड़ें',
    expertConsultationDesc: 'अनुभवी डॉक्टरों के साथ विशेष परामर्श बुक करें',
    availableNow: 'अभी उपलब्ध',
    bookAppointment: 'अपॉइंटमेंट बुक करें',

    availableDoctors: 'विशेषज्ञ डॉक्टर',
    freeVideoCall: 'मुफ्त वीडियो कॉल शुरू करें',
    connectNow: 'अभी जुड़ें - मुफ्त',
    generalPhysician: 'सामान्य चिकित्सक',
    gynecologist: 'स्त्री रोग विशेषज्ञ',
    pediatrician: 'बाल रोग विशेषज्ञ',
    cardiologist: 'हृदय रोग विशेषज्ञ',
    dermatologist: 'त्वचा रोग विशेषज्ञ',
    experience: 'साल का अनुभव',
    rating: 'रेटिंग',
    consultationFee: 'परामर्श शुल्क',
    startConsultation: 'वीडियो कॉल शुरू करें',
    startAudioCall: 'ऑडियो कॉल शुरू करें',
    switchToAudio: 'ऑडियो पर स्विच करें',
    reschedule: 'पुनर्निर्धारित करें',
    today: 'आज',
    tomorrow: 'कल',
    connecting: 'आपको उपलब्ध डॉक्टर से जोड़ा जा रहा है...',
    waitTime: 'औसत प्रतीक्षा समय: 2-5 मिनट',
    poorConnection: 'कमजोर इंटरनेट? ऑडियो कॉल पर स्विच करें',
    education: 'शिक्षा',
    languages: 'भाषाएं',
    location: 'स्थान',
    specializations: 'विशेषज्ञताएं',
    awards: 'पुरस्कार और प्रमाणन',
    about: 'डॉक्टर के बारे में',
    patientReviews: 'मरीजों की समीक्षा'
  },
  punjabi: {
    title: 'ਵੀਡੀਓ ਸਲਾਹ',
    freeConsultation: 'ਮੁਫਤ ਸਲਾਹ',
    expertConsultation: 'ਮਾਹਰ ਸਲਾਹ',
    freeConsultationDesc: 'ਬਿਨਾਂ ਕਿਸੇ ਲਾਗਤ ਦੇ ਆਮ ਡਾਕਟਰਾਂ ਨਾਲ ਤੁਰੰਤ ਜੁੜੋ',
    expertConsultationDesc: 'ਤਜਰਬੇਕਾਰ ਡਾਕਟਰਾਂ ਨਾਲ ਵਿਸ਼ੇਸ਼ ਸਲਾਹ ਬੁੱਕ ਕਰੋ',
    availableNow: 'ਹੁਣ ਉਪਲਬਧ',
    bookAppointment: 'ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ',

    availableDoctors: 'ਮਾਹਰ ਡਾਕਟਰ',
    freeVideoCall: 'ਮੁਫਤ ਵੀਡੀਓ ਕਾਲ ਸ਼ੁਰੂ ਕਰੋ',
    connectNow: 'ਹੁਣ ਜੁੜੋ - ਮੁਫਤ',
    generalPhysician: 'ਆਮ ਡਾਕਟਰ',
    gynecologist: 'ਔਰਤਾਂ ਦੇ ਰੋਗ ਮਾਹਰ',
    pediatrician: 'ਬੱਚਿਆਂ ਦੇ ਡਾਕਟਰ',
    cardiologist: 'ਦਿਲ ਦੇ ਡਾਕਟਰ',
    dermatologist: 'ਚਮੜੀ ਦੇ ਡਾਕਟਰ',
    experience: 'ਸਾਲ ਦਾ ਤਜਰਬਾ',
    rating: 'ਰੇਟਿੰਗ',
    consultationFee: 'ਸਲਾਹ ਫੀਸ',
    startConsultation: 'ਵੀਡੀਓ ਕਾਲ ਸ਼ੁਰੂ ਕਰੋ',
    startAudioCall: 'ਆਡੀਓ ਕਾਲ ਸ਼ੁਰੂ ਕਰੋ',
    switchToAudio: 'ਆਡੀਓ ਤੇ ਸਵਿਚ ਕਰੋ',
    reschedule: 'ਮੁੜ ਨਿਰਧਾਰਿਤ ਕਰੋ',
    today: 'ਅੱਜ',
    tomorrow: 'ਕੱਲ੍ਹ',
    connecting: 'ਤੁਹਾਨੂੰ ਉਪਲਬਧ ਡਾਕਟਰ ਨਾਲ ਜੋੜਿਆ ਜਾ ਰਿਹਾ ਹੈ...',
    waitTime: 'ਔਸਤ ਉਡੀਕ ਸਮਾਂ: 2-5 ਮਿੰਟ',
    poorConnection: 'ਕਮਜ਼ੋਰ ਇੰਟਰਨੇਟ? ਆਡੀਓ ਕਾਲ ਤੇ ਸਵਿਚ ਕਰੋ',
    education: 'ਸਿੱਖਿਆ',
    languages: 'ਭਾਸ਼ਾਵਾਂ',
    location: 'ਸਥਾਨ',
    specializations: 'ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
    awards: 'ਪੁਰਸਕਾਰ ਅਤੇ ਪ੍ਰਮਾਣ ਪੱਤਰ',
    about: 'ਡਾਕਟਰ ਬਾਰੇ',
    patientReviews: 'ਮਰੀਜ਼ਾਂ ਦੀਆਂ ਸਮੀਖਿਆਵਾਂ'
  }
};

export function VideoConsultation({ selectedLanguage }: VideoConsultationProps) {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionType, setConnectionType] = useState<'video' | 'audio'>('video');
  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;

  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: t.generalPhysician,
      experience: 15,
      rating: 4.8,
      fee: '₹500',
      available: true,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
      education: 'MBBS, MD (Internal Medicine)',
      languages: ['Hindi', 'English', 'Punjabi'],
      location: 'Delhi, India',
      specializations: ['General Medicine', 'Diabetes', 'Hypertension'],
      awards: ['Best Doctor Award 2023', 'Excellence in Patient Care'],
      about: 'Experienced general physician with 15+ years in treating common health conditions.',
      reviews: [
        { patient: 'Rajesh S.', rating: 5, comment: 'Very professional and caring doctor.' },
        { patient: 'Priya M.', rating: 4, comment: 'Good consultation, explained everything well.' }
      ]
    },
    {
      id: 2,
      name: 'Dr. Priya Mehta',
      specialty: t.gynecologist,
      experience: 12,
      rating: 4.9,
      fee: '₹700',
      available: true,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      education: 'MBBS, MS (Obstetrics & Gynecology)',
      languages: ['Hindi', 'English'],
      location: 'Mumbai, India',
      specializations: ['Women\'s Health', 'Pregnancy Care', 'Menstrual Disorders'],
      awards: ['Women\'s Health Excellence Award', 'Best Gynecologist 2022'],
      about: 'Specialist in women\'s health with focus on comprehensive reproductive care.',
      reviews: [
        { patient: 'Sunita K.', rating: 5, comment: 'Excellent doctor, very understanding.' },
        { patient: 'Meera P.', rating: 5, comment: 'Great experience, highly recommend.' }
      ]
    },
    {
      id: 3,
      name: 'Dr. Amit Singh',
      specialty: t.pediatrician,
      experience: 10,
      rating: 4.7,
      fee: '₹600',
      available: true,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face',
      education: 'MBBS, MD (Pediatrics)',
      languages: ['Hindi', 'English', 'Punjabi'],
      location: 'Chandigarh, India',
      specializations: ['Child Health', 'Vaccination', 'Growth & Development'],
      awards: ['Child Care Excellence Award'],
      about: 'Dedicated pediatrician committed to providing excellent care for children.',
      reviews: [
        { patient: 'Ravi K.', rating: 5, comment: 'Great with kids, very patient.' },
        { patient: 'Neha S.', rating: 4, comment: 'Professional and knowledgeable.' }
      ]
    },
    {
      id: 4,
      name: 'Dr. Sarah Williams',
      specialty: t.cardiologist,
      experience: 18,
      rating: 4.9,
      fee: '₹800',
      available: true,
      image: 'https://images.unsplash.com/photo-1594824406852-58db70b1b5e3?w=100&h=100&fit=crop&crop=face',
      education: 'MBBS, MD (Cardiology), FACC',
      languages: ['English', 'Hindi'],
      location: 'Bangalore, India',
      specializations: ['Heart Disease', 'Cardiac Surgery', 'Preventive Cardiology'],
      awards: ['Excellence in Cardiology', 'International Heart Award'],
      about: 'Leading cardiologist with expertise in advanced cardiac procedures.',
      reviews: [
        { patient: 'Arjun T.', rating: 5, comment: 'Saved my life, excellent surgeon.' },
        { patient: 'Kavya R.', rating: 5, comment: 'Outstanding care and expertise.' }
      ]
    },
    {
      id: 5,
      name: 'Dr. Anita Sharma',
      specialty: t.dermatologist,
      experience: 14,
      rating: 4.8,
      fee: '₹650',
      available: true,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=100&h=100&fit=crop&crop=face',
      education: 'MBBS, MD (Dermatology)',
      languages: ['Hindi', 'English'],
      location: 'Pune, India',
      specializations: ['Skin Care', 'Acne Treatment', 'Cosmetic Dermatology'],
      awards: ['Best Dermatologist Award', 'Skin Care Excellence'],
      about: 'Expert dermatologist specializing in comprehensive skin care solutions.',
      reviews: [
        { patient: 'Deepika M.', rating: 5, comment: 'Amazing results, very professional.' },
        { patient: 'Rohit L.', rating: 4, comment: 'Good treatment and advice.' }
      ]
    }
  ];



  const handleFreeConsultation = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      // Here you would typically redirect to video call interface
      alert(`Connecting you to a general physician via ${connectionType}...`);
    }, 3000);
  };

  const handleDoctorConsultation = (doctorId: number, type: 'video' | 'audio') => {
    const doctor = doctors.find(d => d.id === doctorId);
    if (doctor) {
      alert(`Starting ${type} consultation with ${doctor.name}...`);
    }
  };

  return (
    <div className="p-2 sm:p-4 space-y-4 sm:space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <Video className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
        <h1 className="text-lg sm:text-2xl text-gray-800 truncate">{t.title}</h1>
      </div>

      {/* Free Consultation Section */}
      <Card className="shadow-sm border-green-200 bg-green-50">
        <CardHeader className="px-3 sm:px-6">
          <CardTitle className="flex items-center gap-2 text-green-700 text-base sm:text-lg">
            <Stethoscope className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">{t.freeConsultation}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 sm:px-6">
          <p className="text-gray-600 mb-4 text-sm break-words">{t.freeConsultationDesc}</p>
          
          {/* Connection Type Toggle */}
          <div className="flex items-center gap-2 mb-4 p-2 bg-gray-100 rounded-lg">
            <Button
              size="sm"
              variant={connectionType === 'video' ? 'default' : 'ghost'}
              onClick={() => setConnectionType('video')}
              className="flex-1 text-xs sm:text-sm"
            >
              <Video className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Video
            </Button>
            <Button
              size="sm"
              variant={connectionType === 'audio' ? 'default' : 'ghost'}
              onClick={() => setConnectionType('audio')}
              className="flex-1 text-xs sm:text-sm"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Audio
            </Button>
          </div>

          {connectionType === 'audio' && (
            <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 text-orange-700">
                <WifiOff className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-words">{t.poorConnection}</span>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs sm:text-sm text-gray-500 break-words">
              {t.waitTime}
            </div>
            <Button 
              onClick={handleFreeConsultation}
              disabled={isConnecting}
              className="bg-green-600 hover:bg-green-700 text-sm flex-shrink-0"
            >
              {connectionType === 'video' ? (
                <Video className="w-4 h-4 mr-2" />
              ) : (
                <Phone className="w-4 h-4 mr-2" />
              )}
              <span className="truncate">{isConnecting ? t.connecting : t.connectNow}</span>
            </Button>
          </div>
          {isConnecting && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 text-blue-700">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
                <span className="text-xs sm:text-sm break-words">{t.connecting}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>





      {/* Expert Doctors */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-green-700">{t.availableDoctors}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                selectedDoctor === doctor.id 
                  ? 'border-blue-500 bg-blue-50 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedDoctor(selectedDoctor === doctor.id ? null : doctor.id)}
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback>{doctor.name.charAt(3)}{doctor.name.charAt(4)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg text-gray-800">{doctor.name}</h3>
                    {doctor.available && (
                      <Badge className="bg-green-100 text-green-800 px-3 py-1">
                        {t.availableNow}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-blue-600 mb-2">{doctor.specialty}</div>
                  
                  <div className="flex items-center gap-4 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{doctor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4 text-gray-500" />
                      <span>{doctor.experience} {t.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-xl text-green-600">{doctor.fee}</div>
                    <span className="text-sm text-gray-500">consultation fee</span>
                  </div>
                </div>
              </div>
              
              {selectedDoctor === doctor.id && (
                <div className="mt-6 space-y-4 border-t pt-4">
                  {/* Doctor Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        {t.education}
                      </h4>
                      <p className="text-sm text-gray-600">{doctor.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                        <Languages className="w-4 h-4" />
                        {t.languages}
                      </h4>
                      <p className="text-sm text-gray-600">{doctor.languages.join(', ')}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">{t.specializations}</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specializations.map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {t.awards}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.awards.map((award, index) => (
                        <Badge key={index} className="bg-yellow-100 text-yellow-800 text-xs">
                          {award}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">{t.about}</h4>
                    <p className="text-sm text-gray-600">{doctor.about}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">{t.patientReviews}</h4>
                    <div className="space-y-2">
                      {doctor.reviews.map((review, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium">{review.patient}</span>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      disabled={!doctor.available}
                      onClick={() => handleDoctorConsultation(doctor.id, 'video')}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      {doctor.available ? t.startConsultation : t.bookAppointment}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-orange-300 text-orange-700 hover:bg-orange-100"
                      disabled={!doctor.available}
                      onClick={() => handleDoctorConsultation(doctor.id, 'audio')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t.startAudioCall}
                    </Button>
                  </div>
                  
                  {!doctor.available && (
                    <div className="text-center">
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {t.bookAppointment}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}