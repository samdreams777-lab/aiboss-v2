/**
 * Localization dictionary for AI B.O.S.S. V2
 *
 * Two locales:
 *   - "vi" — Vietnamese (default market)
 *   - "en" — English
 *
 * All visible strings live here — no inline copy in components.
 */

import type { Lang } from './lang'

// --- Navigation ---

export type NavDict = {
  solutions: string
  systems: string
  work: string
  journey: string
  knowledge: string
  about: string
  contact: string
  buildForBusiness: string
  openMenu: string
  closeMenu: string
  mainNavigation: string
}

// --- Hero ---

export type HeroDict = {
  eyebrow: string
  titlePre: string
  titleEm: string
  titlePost: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
}

// --- Solutions ---

export type SolutionsDict = {
  title: string
  subtitle: string
  cafes: string
  restaurants: string
  beautySpa: string
  dentalMedical: string
  realEstate: string
  hospitality: string
}

// --- Systems ---

export type SystemsDict = {
  title: string
  subtitle: string
  website: string
  qrMenu: string
  aiAssistant: string
  automation: string
  analytics: string
  loyalty: string
}

// --- Work ---

export type WorkDict = {
  title: string
  subtitle: string
  camonCoffee: string
  geumCha: string
  seoulKoreanCuisine: string
  lerinsNook: string
}

// --- Journey ---

export type JourneyDict = {
  title: string
  subtitle: string
  stepDiscover: string
  stepWebsite: string
  stepMenu: string
  stepContact: string
  stepVisit: string
  stepReview: string
  stepReturn: string
}

// --- Meta ---

export type MetaDict = {
  indexTitle: string
  indexDescription: string
}

// --- Footer ---

export type FooterDict = {
  tagline: string
  rights: string
  email: string
}

// --- Not Found ---

export type NotFoundDict = {
  title: string
  body: string
  goHome: string
}

// --- Full Dictionary Type ---

export type Dict = {
  nav: NavDict
  hero: HeroDict
  solutions: SolutionsDict
  systems: SystemsDict
  work: WorkDict
  journey: JourneyDict
  meta: MetaDict
  footer: FooterDict
  notFound: NotFoundDict
}

// ============ EN ============

const en: Dict = {
  nav: {
    solutions: 'Solutions',
    systems: 'Systems',
    work: 'Work',
    journey: 'Journey',
    knowledge: 'Knowledge',
    about: 'About',
    contact: 'Contact',
    buildForBusiness: 'Build This For My Business',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNavigation: 'Main navigation',
  },
  hero: {
    eyebrow: 'Digital Transformation · Vietnam',
    titlePre: 'Turn scattered touchpoints into',
    titleEm: 'one connected customer journey',
    titlePost: 'that just works',
    subtitle:
      'AI B.O.S.S. helps small and medium businesses across Vietnam connect Google, your website, menu, contact, visits and reviews into a single system — measurable, and improving every month.',
    primaryCta: 'Build This For My Business',
    secondaryCta: 'Explore the System',
  },
  solutions: {
    title: 'Solutions',
    subtitle: 'Choose your business type to see what AI B.O.S.S. can build for you.',
    cafes: 'Cafes',
    restaurants: 'Restaurants',
    beautySpa: 'Beauty & Spa',
    dentalMedical: 'Dental & Medical',
    realEstate: 'Real Estate',
    hospitality: 'Hospitality',
  },
  systems: {
    title: 'Systems',
    subtitle: 'Every touchpoint, connected.',
    website: 'Website',
    qrMenu: 'QR Menu',
    aiAssistant: 'AI Assistant',
    automation: 'Automation',
    analytics: 'Analytics',
    loyalty: 'Loyalty',
  },
  work: {
    title: 'Selected Work',
    subtitle: 'Digital experiences we have built.',
    camonCoffee: "Camon Coffee",
    geumCha: 'Geum Cha',
    seoulKoreanCuisine: 'Seoul Korean Cuisine',
    lerinsNook: "Lerin's Nook",
  },
  journey: {
    title: 'The Customer Journey',
    subtitle: 'Seven stages, one connected loop.',
    stepDiscover: 'Discover',
    stepWebsite: 'Website',
    stepMenu: 'Menu / Service',
    stepContact: 'Contact',
    stepVisit: 'Visit',
    stepReview: 'Review',
    stepReturn: 'Return',
  },
  meta: {
    indexTitle: 'AI B.O.S.S. — Digital transformation for Vietnamese businesses',
    indexDescription:
      'AI B.O.S.S. connects Google, your website, menu, contact, visits and reviews into one measurable customer journey for SMEs across Vietnam.',
  },
  footer: {
    tagline: 'Digital transformation for local businesses in Vietnam.',
    rights: 'All rights reserved.',
    email: 'hello@aiboss.vn',
  },
  notFound: {
    title: 'Page not found',
    body: "The page you're looking for doesn't exist or has been moved.",
    goHome: 'Go home',
  },
}

// ============ VI ============

const vi: Dict = {
  nav: {
    solutions: 'Giải pháp',
    systems: 'Hệ thống',
    work: 'Dự án',
    journey: 'Hành trình',
    knowledge: 'Kiến thức',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    buildForBusiness: 'Xây dựng cho doanh nghiệp tôi',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    mainNavigation: 'Điều hướng chính',
  },
  hero: {
    eyebrow: 'Chuyển đổi số · Việt Nam',
    titlePre: 'Biến những trải nghiệm rời rạc thành',
    titleEm: 'một hành trình khách hàng liền mạch,',
    titlePost: 'vận hành mượt mà.',
    subtitle:
      'AI B.O.S.S. giúp doanh nghiệp vừa và nhỏ tại Việt Nam kết nối Google, website, menu, liên hệ, lượt ghé thăm và đánh giá vào một hệ thống duy nhất — có thể đo lường và cải thiện mỗi tháng.',
    primaryCta: 'Xây dựng cho doanh nghiệp tôi',
    secondaryCta: 'Khám phá hệ thống',
  },
  solutions: {
    title: 'Giải pháp',
    subtitle: 'Chọn loại hình doanh nghiệp để xem AI B.O.S.S. có thể xây dựng gì cho bạn.',
    cafes: 'Cà phê',
    restaurants: 'Nhà hàng',
    beautySpa: 'Làm đẹp & Spa',
    dentalMedical: 'Nha khoa & Y tế',
    realEstate: 'Bất động sản',
    hospitality: 'Lưu trú',
  },
  systems: {
    title: 'Hệ thống',
    subtitle: 'Mọi điểm chạm, kết nối.',
    website: 'Website',
    qrMenu: 'Menu QR',
    aiAssistant: 'Trợ lý AI',
    automation: 'Tự động hoá',
    analytics: 'Phân tích',
    loyalty: 'Khách hàng thân thiết',
  },
  work: {
    title: 'Dự án đã chọn',
    subtitle: 'Những trải nghiệm số chúng tôi đã xây dựng.',
    camonCoffee: 'Camon Coffee',
    geumCha: 'Geum Cha',
    seoulKoreanCuisine: 'Seoul Korean Cuisine',
    lerinsNook: "Lerin's Nook",
  },
  journey: {
    title: 'Hành trình khách hàng',
    subtitle: 'Bảy giai đoạn, một vòng lặp kết nối.',
    stepDiscover: 'Khám phá',
    stepWebsite: 'Website',
    stepMenu: 'Menu / Dịch vụ',
    stepContact: 'Liên hệ',
    stepVisit: 'Ghé thăm',
    stepReview: 'Đánh giá',
    stepReturn: 'Quay lại',
  },
  meta: {
    indexTitle: 'AI B.O.S.S. — Chuyển đổi số cho doanh nghiệp Việt Nam',
    indexDescription:
      'AI B.O.S.S. kết nối Google, website, menu, liên hệ, lượt ghé thăm và đánh giá thành một hành trình khách hàng có thể đo lường cho doanh nghiệp vừa và nhỏ tại Việt Nam.',
  },
  footer: {
    tagline: 'Chuyển đổi số cho doanh nghiệp địa phương tại Việt Nam.',
    rights: 'Mọi quyền được bảo lưu.',
    email: 'hello@aiboss.vn',
  },
  notFound: {
    title: 'Trang không tìm thấy',
    body: 'Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.',
    goHome: 'Về trang chủ',
  },
}

// ============ Export ============

export const dictionary: Record<Lang, Dict> = { en, vi }
