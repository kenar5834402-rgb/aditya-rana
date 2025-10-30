
import type { Bin, Schedule, Reward } from './types';

export const MOCK_BINS: Bin[] = [
  { id: 1, location: 'Park Street, Sector 5', level: 95, status: 'Full' },
  { id: 2, location: 'Market Square', level: 60, status: 'Good' },
  { id: 3, location: 'Residential Block A', level: 82, status: 'Needs Attention' },
  { id: 4, location: 'Lakeview Road', level: 30, status: 'Good' },
];

export const MOCK_SCHEDULE: Schedule = {
  day: 'Today',
  time: '8:00 AM - 11:00 AM',
  area: 'Sector 5 & 6',
};

export const MOCK_REWARDS: Reward[] = [
  { id: 1, title: '₹50 Shopping Voucher', points: 500 },
  { id: 2, title: 'Plant a Tree in Your Name', points: 1000 },
  { id: 3, title: 'Recycled Goods Hamper', points: 750 },
  { id: 4, title: '1 Month Free Compost Service', points: 1500 },
];

export const TRANSLATIONS = {
  en: {
    title: 'WasteTracker AI',
    home: 'Home',
    report: 'Report',
    track: 'Track',
    rewards: 'Rewards',
    collection_schedule: 'Collection Schedule',
    nearby_bins: 'Nearby Bins',
    get_recycling_tip: 'Get Recycling Tip',
    generating_tip: 'Generating tip...',
    report_issue: 'Report an Issue',
    issue_description: 'Describe the issue (e.g., bin overflowing)',
    add_photo: 'Add a Photo',
    get_location: 'Get Current Location',
    getting_location: 'Getting location...',
    submit_report: 'Submit Report',
    submitting: 'Submitting...',
    report_submitted: 'Report submitted successfully!',
    report_failed: 'Failed to submit report. Please try again.',
    track_vehicle: 'Track Collection Vehicle',
    driver: 'Driver',
    vehicle_no: 'Vehicle No.',
    eta: 'ETA',
    your_points: 'Your Points',
    available_rewards: 'Available Rewards',
    redeem: 'Redeem',
    language: 'Language',
    english: 'English',
    hindi: 'Hindi'
  },
  hi: {
    title: 'वेस्टट्रैकर एआई',
    home: 'होम',
    report: 'रिपोर्ट',
    track: 'ट्रैक',
    rewards: 'इनाम',
    collection_schedule: 'संग्रह अनुसूची',
    nearby_bins: 'आस-पास के डिब्बे',
    get_recycling_tip: 'रीसाइक्लिंग टिप प्राप्त करें',
    generating_tip: 'टिप बना रहा है...',
    report_issue: 'समस्या की रिपोर्ट करें',
    issue_description: 'समस्या का वर्णन करें (जैसे, बिन ओवरफ्लो हो रहा है)',
    add_photo: 'एक तस्वीर जोड़ें',
    get_location: 'वर्तमान स्थान प्राप्त करें',
    getting_location: 'स्थान प्राप्त हो रहा है...',
    submit_report: 'रिपोर्ट सबमिट करें',
    submitting: 'सबमिट हो रहा है...',
    report_submitted: 'रिपोर्ट सफलतापूर्वक सबमिट की गई!',
    report_failed: 'रिपोर्ट सबमिट करने में विफल। कृपया फिर से प्रयास करें।',
    track_vehicle: 'संग्रह वाहन को ट्रैक करें',
    driver: 'चालक',
    vehicle_no: 'गाड़ी नं.',
    eta: 'अनुमानित आगमन समय',
    your_points: 'आपके अंक',
    available_rewards: 'उपलब्ध पुरस्कार',
    redeem: 'रिडीम',
    language: 'भाषा',
    english: 'अंग्रेजी',
    hindi: 'हिंदी'
  },
};
