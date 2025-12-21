import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Pill, Search, ShoppingCart, MapPin, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface MedicineStockProps {
  selectedLanguage: string;
}

const translations = {
  english: {
    title: 'Medicine Stock',
    searchMedicine: 'Search Medicine',
    nearbyPharmacies: 'Nearby Pharmacies',
    prescriptionRefill: 'Prescription Refill',
    currentStock: 'Current Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
    available: 'Available',
    orderOnline: 'Order Online',
    checkAvailability: 'Check Availability',
    addToCart: 'Add to Cart',
    distance: 'Distance',
    openNow: 'Open Now',
    closes: 'Closes',
    viewCart: 'View Cart',
    deliveryTime: 'Delivery Time',
    prescription: 'Prescription Required',
    generic: 'Generic Available',
    brand: 'Brand',
    price: 'Price',
    quantity: 'Quantity',
    tablets: 'tablets',
    capsules: 'capsules',
    syrup: 'syrup',
    away: 'away',
    min: 'min',
    refill: 'Refill'
  },
  hindi: {
    title: 'दवाई स्टॉक',
    searchMedicine: 'दवाई खोजें',
    nearbyPharmacies: 'आस-पास की फार्मेसी',
    prescriptionRefill: 'प्रिस्क्रिप्शन रिफिल',
    currentStock: 'वर्तमान स्टॉक',
    lowStock: 'कम स्टॉक',
    outOfStock: 'स्टॉक समाप्त',
    available: 'उपलब्ध',
    orderOnline: 'ऑनलाइन ऑर्डर करें',
    checkAvailability: 'उपलब्धता जांचें',
    addToCart: 'कार्ट में जोड़ें',
    distance: 'दूरी',
    openNow: 'अभी खुला',
    closes: 'बंद होता है',
    viewCart: 'कार्ट देखें',
    deliveryTime: 'डिलीवरी समय',
    prescription: 'प्रिस्क्रिप्शन आवश्यक',
    generic: 'जेनेरिक उपलब्ध',
    brand: 'ब्रांड',
    price: 'मूल्य',
    quantity: 'मात्रा',
    tablets: 'गोलियां',
    capsules: 'कैप्सूल',
    syrup: 'सिरप',
    away: 'दूर',
    min: 'मिनट',
    refill: 'रिफिल'
  },
  punjabi: {
    title: 'ਦਵਾਈ ਸਟਾਕ',
    searchMedicine: 'ਦਵਾਈ ਖੋਜੋ',
    nearbyPharmacies: 'ਨੇੜਲੀਆਂ ਫਾਰਮੇਸੀਆਂ',
    prescriptionRefill: 'ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਰੀਫਿਲ',
    currentStock: 'ਮੌਜੂਦਾ ਸਟਾਕ',
    lowStock: 'ਘੱਟ ਸਟਾਕ',
    outOfStock: 'ਸਟਾਕ ਖਤਮ',
    available: 'ਉਪਲਬਧ',
    orderOnline: 'ਆਨਲਾਈਨ ਆਰਡਰ ਕਰੋ',
    checkAvailability: 'ਉਪਲਬਧਤਾ ਚੈੱਕ ਕਰੋ',
    addToCart: 'ਕਾਰਟ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ',
    distance: 'ਦੂਰੀ',
    openNow: 'ਹੁਣੇ ਖੁੱਲ੍ਹਾ',
    closes: 'ਬੰਦ ਹੁੰਦਾ ਹੈ',
    viewCart: 'ਕਾਰਟ ਵੇਖੋ',
    deliveryTime: 'ਡਿਲੀਵਰੀ ਸਮਾਂ',
    prescription: 'ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਲੋੜੀਂਦਾ',
    generic: 'ਜੈਨਰਿਕ ਉਪਲਬਧ',
    brand: 'ਬ੍ਰਾਂਡ',
    price: 'ਕੀਮਤ',
    quantity: 'ਮਾਤਰਾ',
    tablets: 'ਗੋਲੀਆਂ',
    capsules: 'ਕੈਪਸੂਲ',
    syrup: 'ਸਿਰਪ',
    away: 'ਦੂਰ',
    min: 'ਮਿੰਟ',
    refill: 'ਰੀਫਿਲ'
  }
};

export function MedicineStock({ selectedLanguage }: MedicineStockProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<number>(0);

  const t = translations[selectedLanguage as keyof typeof translations] || translations.english;

  const currentMedicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      brand: 'Crocin',
      type: t.tablets,
      quantity: 15,
      totalQuantity: 30,
      status: 'low',
      prescriptionRequired: false,
      price: '₹25',
      refillDate: '2024-12-30'
    },
    {
      id: 2,
      name: 'Iron Tablets',
      brand: 'Feronia-XT',
      type: t.tablets,
      quantity: 25,
      totalQuantity: 30,
      status: 'available',
      prescriptionRequired: true,
      price: '₹120',
      refillDate: '2025-01-05'
    },
    {
      id: 3,
      name: 'Vitamin D3',
      brand: 'Uprise-D3',
      type: t.capsules,
      quantity: 0,
      totalQuantity: 20,
      status: 'out',
      prescriptionRequired: false,
      price: '₹180',
      refillDate: '2024-12-28'
    }
  ];

  const nearbyPharmacies = [
    {
      id: 1,
      name: 'Apollo Pharmacy',
      distance: '0.5 km',
      deliveryTime: '30 min',
      isOpen: true,
      closingTime: '10:00 PM',
      rating: 4.5,
      hasStock: true
    },
    {
      id: 2,
      name: 'MedPlus',
      distance: '1.2 km',
      deliveryTime: '45 min',
      isOpen: true,
      closingTime: '9:00 PM',
      rating: 4.2,
      hasStock: true
    },
    {
      id: 3,
      name: 'Local Medical Store',
      distance: '0.8 km',
      deliveryTime: '25 min',
      isOpen: false,
      closingTime: '8:00 PM',
      rating: 4.0,
      hasStock: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'low':
        return 'bg-yellow-100 text-yellow-800';
      case 'out':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return t.available;
      case 'low':
        return t.lowStock;
      case 'out':
        return t.outOfStock;
      default:
        return t.available;
    }
  };

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="p-4 space-y-6 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 min-h-screen">
      <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg text-white">
        <div className="flex items-center gap-3">
          <Pill className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-semibold">{t.title}</h1>
        </div>
        {cartItems > 0 && (
          <Button className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg">
            <ShoppingCart className="w-4 h-4 mr-2" />
            {t.viewCart}
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems}
            </Badge>
          </Button>
        )}
      </div>

      {/* Search Bar */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-indigo-100 to-purple-100">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder={t.searchMedicine}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Current Medicine Stock */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-100 to-cyan-100">
        <CardHeader>
          <CardTitle className="text-blue-700">{t.currentStock}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentMedicines.map((medicine) => (
            <div key={medicine.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Pill className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{medicine.name}</div>
                  <div className="text-sm text-gray-600">
                    {medicine.brand} • {medicine.type}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className={getStatusColor(medicine.status)}>
                      {getStatusText(medicine.status)}
                    </Badge>
                    {medicine.prescriptionRequired && (
                      <Badge variant="outline" className="text-xs">
                        {t.prescription}
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {medicine.quantity}/{medicine.totalQuantity} {medicine.type} • {medicine.price}
                  </div>
                </div>
              </div>
              <div className="text-right space-y-2">
                <Button
                  size="sm"
                  className={`${
                    medicine.status === 'out' 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : medicine.status === 'low'
                      ? 'bg-yellow-600 hover:bg-yellow-700'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                  onClick={addToCart}
                >
                  {medicine.status === 'out' ? t.orderOnline : t.addToCart}
                </Button>
                <div className="text-xs text-gray-500">
                  {t.refill}: {medicine.refillDate}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Nearby Pharmacies */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-green-100 to-emerald-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <MapPin className="w-5 h-5" />
            {t.nearbyPharmacies}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {nearbyPharmacies.map((pharmacy) => (
            <div key={pharmacy.id} className="p-4 border rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-medium text-gray-800">{pharmacy.name}</div>
                  <div className="text-sm text-gray-600 flex items-center gap-4 mt-1">
                    <span>{pharmacy.distance} {t.away}</span>
                    <span>{pharmacy.deliveryTime} {t.deliveryTime}</span>
                  </div>
                </div>
                <div className="text-right">
                  {pharmacy.isOpen ? (
                    <Badge className="bg-green-100 text-green-800">
                      {t.openNow}
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      {t.closes} {pharmacy.closingTime}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  {pharmacy.hasStock ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  )}
                  <span className={pharmacy.hasStock ? 'text-green-600' : 'text-red-600'}>
                    {pharmacy.hasStock ? t.available : t.outOfStock}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    {t.checkAvailability}
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={!pharmacy.hasStock}
                  >
                    {t.orderOnline}
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