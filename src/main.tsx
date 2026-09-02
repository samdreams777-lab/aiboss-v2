import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router'
import './index.css'

// Pages
import HomePage from './pages/HomePage'
import { SolutionsPage } from './pages/SolutionsPage'
import { SystemsPage } from './pages/SystemsPage'
import { WorkPage } from './pages/WorkPage'
import { JourneyPage } from './pages/JourneyPage'
import { KnowledgePage } from './pages/KnowledgePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { RootLayout } from './components/RootLayout'
import { PlaceholderPage } from './components/PlaceholderPage'
import { DesignSystemPage } from './pages/DesignSystemPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="solutions" element={<SolutionsPage />} />
      <Route path="solutions/cafes" element={<PlaceholderPage title="Cafes" />} />
      <Route path="solutions/restaurants" element={<PlaceholderPage title="Restaurants" />} />
      <Route path="solutions/beauty-spa" element={<PlaceholderPage title="Beauty & Spa" />} />
      <Route path="solutions/dental-medical" element={<PlaceholderPage title="Dental & Medical" />} />
      <Route path="solutions/real-estate" element={<PlaceholderPage title="Real Estate" />} />
      <Route path="solutions/hospitality" element={<PlaceholderPage title="Hospitality" />} />
      <Route path="systems" element={<SystemsPage />} />
      <Route path="systems/website" element={<PlaceholderPage title="Website" />} />
      <Route path="systems/qr-menu" element={<PlaceholderPage title="QR Menu" />} />
      <Route path="systems/ai-assistant" element={<PlaceholderPage title="AI Assistant" />} />
      <Route path="systems/automation" element={<PlaceholderPage title="Automation" />} />
      <Route path="systems/analytics" element={<PlaceholderPage title="Analytics" />} />
      <Route path="systems/loyalty" element={<PlaceholderPage title="Loyalty" />} />
      <Route path="work" element={<WorkPage />} />
      <Route path="work/camon-coffee" element={<PlaceholderPage title="Camon Coffee" />} />
      <Route path="work/geum-cha" element={<PlaceholderPage title="Geum Cha" />} />
      <Route path="work/seoul-korean-cuisine" element={<PlaceholderPage title="Seoul Korean Cuisine" />} />
      <Route path="work/lerins-nook" element={<PlaceholderPage title="Lerin's Nook" />} />
      <Route path="journey" element={<JourneyPage />} />
      <Route path="knowledge" element={<KnowledgePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="design-system" element={<DesignSystemPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
