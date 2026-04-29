import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

/**
 * Sanity Client Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://www.sanity.io and create a new project
 * 2. Copy your Project ID from the project settings
 * 3. Create a .env file in apps/web/ with:
 *    VITE_SANITY_PROJECT_ID=your_project_id
 *    VITE_SANITY_DATASET=production
 *    VITE_SANITY_TOKEN=your_write_token (for report submissions)
 * 4. Deploy your Sanity Studio (apps/cms) with: npx sanity deploy
 */

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'placeholder';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const token = import.meta.env.VITE_SANITY_TOKEN || '';

const isConfigured = projectId !== 'placeholder';

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Write client for mutations (report submissions)
export const writeClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
});

// Image URL builder helper
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return '';
  return builder.image(source);
}

// Helper to warn if not configured
function checkConfig() {
  if (!isConfigured) {
    console.warn('[Sanity] Not configured. Set VITE_SANITY_PROJECT_ID in your .env file.');
    return false;
  }
  return true;
}

// ============================================
// NEWS Queries
// ============================================

/**
 * Fetch all published news articles, ordered by date
 */
export async function fetchNews(limit = 10) {
  if (!checkConfig()) return [];
  return client.fetch(
    `*[_type == "news"] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      body,
      category,
      "imageUrl": image.asset->url,
      publishedAt
    }`,
    { limit }
  );
}

/**
 * Fetch a single news article by slug
 */
export async function fetchNewsBySlug(slug) {
  if (!checkConfig()) return null;
  return client.fetch(
    `*[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      category,
      "imageUrl": image.asset->url,
      publishedAt
    }`,
    { slug }
  );
}

// ============================================
// INFORMATION Queries
// ============================================

/**
 * Fetch all information/articles
 */
export async function fetchInformation(limit = 20) {
  if (!checkConfig()) return [];
  return client.fetch(
    `*[_type == "information"] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      body,
      category,
      mediaType,
      mediaUrl,
      "imageUrl": image.asset->url,
      publishedAt
    }`,
    { limit }
  );
}

/**
 * Fetch a single information article by slug
 */
export async function fetchInformationBySlug(slug) {
  if (!checkConfig()) return null;
  return client.fetch(
    `*[_type == "information" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      category,
      mediaType,
      mediaUrl,
      "imageUrl": image.asset->url,
      publishedAt
    }`,
    { slug }
  );
}

/**
 * Fetch information filtered by category
 */
export async function fetchInformationByCategory(category, limit = 20) {
  if (!checkConfig()) return [];
  return client.fetch(
    `*[_type == "information" && category == $category] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      body,
      category,
      mediaType,
      mediaUrl,
      "imageUrl": image.asset->url,
      publishedAt
    }`,
    { category, limit }
  );
}

// ============================================
// REPORT Mutations
// ============================================

/**
 * Submit a new report to Sanity
 */
export async function submitReport({ name, phone, location, description, evidenceId }) {
  if (!checkConfig()) throw new Error('Sanity belum dikonfigurasi');
  
  const reportDoc = {
    _type: 'report',
    name: name || 'Anonim',
    phone: phone || '',
    location,
    description,
    status: 'Pending',
    submittedAt: new Date().toISOString(),
  };

  if (evidenceId) {
    reportDoc.evidence = {
      _type: 'file',
      asset: {
        _type: 'reference',
        _ref: evidenceId
      }
    };
  }

  return writeClient.create(reportDoc);
}

/**
 * Fetch all reports (admin)
 */
export async function fetchReports() {
  if (!checkConfig()) return [];
  return client.fetch(
    `*[_type == "report"] | order(submittedAt desc) {
      _id,
      name,
      phone,
      location,
      description,
      status,
      submittedAt,
      "evidenceUrl": evidence.asset->url
    }`
  );
}

/**
 * Update report status (admin)
 */
export async function updateReportStatus(id, status) {
  if (!checkConfig()) throw new Error('Sanity belum dikonfigurasi');
  return writeClient.patch(id).set({ status }).commit();
}
