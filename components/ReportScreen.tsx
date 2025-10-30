
import React, { useState, useRef } from 'react';
import type { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Spinner from './Spinner';
import Icon from './Icon';

interface ReportScreenProps {
  language: Language;
}

const ReportScreen: React.FC<ReportScreenProps> = ({ language }) => {
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = TRANSLATIONS[language];

  const handleLocation = () => {
    setIsGettingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setIsGettingLocation(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        setIsGettingLocation(false);
        alert('Could not get location. Please enable permissions.');
      }
    );
  };
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        setPhoto(e.target.files[0]);
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    // Simulate API call
    setTimeout(() => {
      // Mock success/failure
      if (description && photo && location) {
        setSubmitStatus('success');
        setDescription('');
        setPhoto(null);
        setLocation(null);
      } else {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.report_issue}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">{t.issue_description}</label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            className="hidden"
            required
          />
          <button type="button" onClick={triggerFileInput} className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Icon name="camera" className="w-5 h-5 mr-2 text-gray-500"/>
            {photo ? photo.name : t.add_photo}
          </button>
        </div>
         <div>
          <button type="button" onClick={handleLocation} disabled={isGettingLocation} className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-200">
             {isGettingLocation ? <Spinner /> : <Icon name="location" className="w-5 h-5 mr-2 text-gray-500" />}
            {isGettingLocation ? t.getting_location : (location ? `Location Captured` : t.get_location)}
          </button>
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400">
          {isSubmitting ? <Spinner /> : t.submit_report}
        </button>
      </form>
      {submitStatus === 'success' && (
        <div className="mt-4 p-3 rounded-md bg-green-100 text-green-800 text-center">{t.report_submitted}</div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 rounded-md bg-red-100 text-red-800 text-center">{t.report_failed}</div>
      )}
    </div>
  );
};

export default ReportScreen;
