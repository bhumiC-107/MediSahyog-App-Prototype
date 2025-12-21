import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Textarea } from './ui/textarea';
import { Phone, MessageSquare, MapPin, Clock, Star, User, Heart } from 'lucide-react';

interface AshaWorkerProps {
  selectedLanguage: string;
}

const translations = {
  english: {
    title: 'ASHA Worker',
    callAsha: 'Call ASHA Worker',
    sendMessage: 'Send Message',
    emergencyCall: 'Emergency Call',
    yourAsha: 'Your Assigned ASHA',
    nearbyAsha: 'Nearby ASHA Workers',
    available: 'Available',
    busy: 'Busy',
    offline: 'Offline',
    experience: 'years experience',
    rating: 'Rating',
    lastVisit: 'Last Visit',
    nextVisit: 'Next Visit',
    services: 'Services',
    healthCheckup: 'Health Checkup',
    vaccination: 'Vaccination',
    pregnancy: 'Pregnancy Care',
    childcare: 'Child Care',
    familyPlanning: 'Family Planning',
    writeMessage: 'Write your message...',
    sendRequest: 'Send Request',
    callNow: 'Call Now',
    messageAsha: 'Message ASHA',
    scheduled: 'Scheduled',
    visitHistory: 'Visit History',
    requestVisit: 'Request Home Visit',
    away: 'away',
    today: 'Today',
    tomorrow: 'Tomorrow'
  },
  hindi: {
    title: 'आशा वर्कर',
    callAsha: 'आशा वर्कर को कॉल करें',
    sendMessage: 'संदेश भेजें',
    emergencyCall: 'आपातकालीन कॉल',
    yourAsha: 'आपकी निर्दिष्ट आशा',
    nearbyAsha: 'आस-पास के आशा वर्कर',
    available: 'उपलब्ध',
    busy: 'व्यस्त',
    offline: 'ऑफलाइन',
    experience: 'साल का अनुभव',
    rating: 'रेटिंग',
    lastVisit: 'अंतिम मुलाकात',
    nextVisit: 'अगली मुलाकात',
    services: 'सेवाएं',
    healthCheckup: 'स्वास्थ्य जांच',
    vaccination: 'टीकाकरण',
    pregnancy: 'गर्भावस्था देखभाल',
    childcare: 'बाल देखभाल',
    familyPlanning: 'परिवार नियोजन',
    writeMessage: 'अपना संदेश लिखें...',
    sendRequest: 'अनुरोध भेजें',
    callNow: 'अभी कॉल करें',
    messageAsha: 'आशा को संदेश',
    scheduled: 'निर्धारित',
    visitHistory: 'मुलाकात इतिहास',
    requestVisit: 'घर पर मुलाकात का अनुरोध',
    away: 'दूर',
    today: 'आज',
    tomorrow: 'कल'
  },
  punjabi: {
    title: 'ਆਸ਼ਾ ਵਰਕਰ',
    callAsha: 'ਆਸ਼ਾ ਵਰਕਰ ਨੂੰ ਕਾਲ ਕਰੋ',
    sendMessage: 'ਸੁਨੇਹਾ ਭੇਜੋ',
    emergencyCall: 'ਐਮਰਜੈਂਸੀ ਕਾਲ',
    yourAsha: 'ਤੁਹਾਡਾ ਨਿਯੁਕਤ ਆਸ਼ਾ',
    nearbyAsha: 'ਨੇੜਲੇ ਆਸ਼ਾ ਵਰਕਰ',
    available: 'ਉਪਲਬਧ',
    busy: 'ਵਿਅਸਤ',
    offline: 'ਆਫਲਾਈਨ',
    experience: 'ਸਾਲ ਦਾ ਤਜਰਬਾ',
    rating: 'ਰੇਟਿੰਗ',
    lastVisit: 'ਆਖਰੀ ਮੁਲਾਕਾਤ',
    nextVisit: 'ਅਗਲੀ ਮੁਲਾਕਾਤ',
    services: 'ਸੇਵਾਵਾਂ',
    healthCheckup: 'ਸਿਹਤ ਜਾਂਚ',
    vaccination: 'ਟੀਕਾਕਰਣ',
    pregnancy: 'ਗਰਭ ਅਵਸਥਾ ਦੇਖਭਾਲ',
    childcare: 'ਬੱਚਿਆਂ ਦੀ ਦੇਖਭਾਲ',
    familyPlanning: 'ਪਰਿਵਾਰ ਨਿਯੋਜਨ',
    writeMessage: 'ਆਪਣਾ ਸੁਨੇਹਾ ਲਿਖੋ...',
    sendRequest: 'ਬੇਨਤੀ ਭੇਜੋ',
    callNow: 'ਹੁਣੇ ਕਾਲ ਕਰੋ',
    messageAsha: 'ਆਸ਼ਾ ਨੂੰ ਸੁਨੇਹਾ',
    scheduled: 'ਨਿਰਧਾਰਿਤ',
    visitHistory: 'ਮੁਲਾਕਾਤ ਇਤਿਹਾਸ',
    requestVisit: 'ਘਰ ਮੁਲਾਕਾਤ ਦੀ ਬੇਨਤੀ',
    away: 'ਦੂਰ',
    today: 'ਅੱਜ',
    tomorrow: 'ਕੱਲ੍ਹ'
  }
};

export function AshaWorker({ selectedLanguage }: AshaWorkerProps) {
  const [message, setMessage] = useState('');
  const [selectedWorker, setSelectedWorker] = useState<number | null>(null);

  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;

  const assignedAsha = {
    id: 1,
    name: 'Sunita Devi',
    phone: '+91 98765 43210',
    experience: 8,
    rating: 4.9,
    status: 'available',
    area: 'Sector 15',
    distance: '0.3 km',
    lastVisit: 'Dec 20, 2024',
    nextVisit: 'Dec 30, 2024',
    image: 'https://images.unsplash.com/photo-1659353887797-9207a99b34cd?w=400&h=400&fit=crop&crop=face',
    services: ['healthCheckup', 'vaccination', 'pregnancy', 'childcare']
  };

  const nearbyWorkers = [
    {
      id: 2,
      name: 'Kamala Singh',
      phone: '+91 98765 43211',
      experience: 6,
      rating: 4.7,
      status: 'busy',
      area: 'Sector 12',
      distance: '1.2 km',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400&h=400&fit=crop&crop=face',
      services: ['familyPlanning', 'pregnancy', 'healthCheckup']
    },
    {
      id: 3,
      name: 'Radha Kumari',
      phone: '+91 98765 43212',
      experience: 10,
      rating: 4.8,
      status: 'available',
      area: 'Sector 18',
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1634272646918-939df73f2f93?w=400&h=400&fit=crop&crop=face',
      services: ['childcare', 'vaccination', 'healthCheckup']
    },
    {
      id: 4,
      name: 'Priya Sharma',
      phone: '+91 98765 43213',
      experience: 12,
      rating: 4.9,
      status: 'available',
      area: 'Sector 22',
      distance: '1.5 km',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400&h=400&fit=crop&crop=face',
      services: ['healthCheckup', 'vaccination', 'familyPlanning']
    }
  ];

  const visitHistory = [
    {
      date: 'Dec 20, 2024',
      service: t.healthCheckup,
      notes: 'Regular checkup completed'
    },
    {
      date: 'Dec 10, 2024',
      service: t.vaccination,
      notes: 'Iron tablets provided'
    },
    {
      date: 'Nov 25, 2024',
      service: t.pregnancy,
      notes: 'Pregnancy monitoring'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800';
      case 'offline':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return t.available;
      case 'busy':
        return t.busy;
      case 'offline':
        return t.offline;
      default:
        return t.offline;
    }
  };

  const getServiceName = (service: string) => {
    const serviceMap: Record<string, string> = {
      healthCheckup: t.healthCheckup,
      vaccination: t.vaccination,
      pregnancy: t.pregnancy,
      childcare: t.childcare,
      familyPlanning: t.familyPlanning
    };
    return serviceMap[service] || service;
  };

  return (
    <div className="p-2 sm:p-4 space-y-4 sm:space-y-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen">
      <div className="flex items-center gap-3 mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-lg text-white">
        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0" />
        <h1 className="text-lg sm:text-2xl font-semibold truncate">{t.title}</h1>
      </div>

      {/* Emergency Contact */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-red-100 to-orange-100 border-red-200">
        <CardContent className="p-3 sm:p-6 text-center">
          <Phone className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg text-red-700 mb-2 break-words">{t.emergencyCall}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 break-words">24/7 Emergency Support</p>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-sm">
            <Phone className="w-4 h-4 mr-2" />
            {t.callNow}
          </Button>
        </CardContent>
      </Card>

      {/* Your Assigned ASHA */}
      <Card className="shadow-sm">
        <CardHeader className="px-3 sm:px-6">
          <CardTitle className="text-pink-700 text-base sm:text-lg">{t.yourAsha}</CardTitle>
        </CardHeader>
        <CardContent className="px-3 sm:px-6">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Avatar className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
              <AvatarImage src={assignedAsha.image} alt={assignedAsha.name} />
              <AvatarFallback>
                <User className="w-6 h-6 sm:w-8 sm:h-8" />
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2 gap-2">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">{assignedAsha.name}</h3>
                <Badge className={`${getStatusColor(assignedAsha.status)} text-xs flex-shrink-0`}>
                  {getStatusText(assignedAsha.status)}
                </Badge>
              </div>
              
              <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    <span>{assignedAsha.rating}</span>
                  </div>
                  <div className="break-words">{assignedAsha.experience} {t.experience}</div>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                  <span className="break-words">{assignedAsha.area} • {assignedAsha.distance} {t.away}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2 sm:mt-3">
                {assignedAsha.services.map((service) => (
                  <Badge key={service} variant="secondary" className="text-xs break-words">
                    {getServiceName(service)}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4 text-center text-xs sm:text-sm">
            <div>
              <div className="text-gray-600 break-words">{t.lastVisit}</div>
              <div className="font-medium break-words">{assignedAsha.lastVisit}</div>
            </div>
            <div>
              <div className="text-gray-600 break-words">{t.nextVisit}</div>
              <div className="font-medium text-blue-600 break-words">{assignedAsha.nextVisit}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-sm">
              <Phone className="w-4 h-4 mr-2" />
              {t.callNow}
            </Button>
            <Button variant="outline" className="flex-1 text-sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              {t.messageAsha}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Send Message */}
      <Card className="shadow-sm">
        <CardHeader className="px-3 sm:px-6">
          <CardTitle className="text-blue-700 text-base sm:text-lg">{t.sendMessage}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6">
          <Textarea
            placeholder={t.writeMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="text-sm resize-none"
          />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            {t.sendRequest}
          </Button>
        </CardContent>
      </Card>

      {/* Visit History */}
      <Card className="shadow-sm">
        <CardHeader className="px-3 sm:px-6">
          <CardTitle className="flex items-center gap-2 text-purple-700 text-base sm:text-lg">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="truncate">{t.visitHistory}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-3 sm:px-6">
          {visitHistory.map((visit, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-800 text-sm sm:text-base break-words">{visit.service}</div>
                <div className="text-xs sm:text-sm text-gray-600 break-words">{visit.notes}</div>
                <div className="text-xs text-gray-500 mt-1 break-words">{visit.date}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Nearby ASHA Workers */}
      <Card className="shadow-sm">
        <CardHeader className="px-3 sm:px-6">
          <CardTitle className="text-green-700 text-base sm:text-lg">{t.nearbyAsha}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6">
          {nearbyWorkers.map((worker) => (
            <div key={worker.id} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
              <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <AvatarImage src={worker.image} alt={worker.name} />
                <AvatarFallback>
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <div className="font-medium text-gray-800 text-sm sm:text-base truncate">{worker.name}</div>
                  <Badge className={`${getStatusColor(worker.status)} text-xs flex-shrink-0`}>
                    {getStatusText(worker.status)}
                  </Badge>
                </div>
                
                <div className="text-xs sm:text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                      <span>{worker.rating}</span>
                    </div>
                    <div className="break-words">{worker.experience} {t.experience}</div>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                    <span className="break-words">{worker.area} • {worker.distance} {t.away}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {worker.services.map((service) => (
                    <Badge key={service} variant="secondary" className="text-xs break-words">
                      {getServiceName(service)}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs" disabled={worker.status === 'offline'}>
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {t.callNow}
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}