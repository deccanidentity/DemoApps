import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { appsData, CATEGORIES, PLATFORMS } from '../src/data/apps.js';
import siteConfig from '../src/data/site.config.js';
import packages from '../src/data/packages.js';
import { testimonials } from '../src/data/testimonials.js';

describe('Mobile Apps Catalog Tests', () => {
  it('should contain all 12 mobile applications without duplicate IDs', () => {
    assert.ok(appsData.length >= 12, `Expected at least 12 apps, found ${appsData.length}`);
    const ids = appsData.map(a => a.id);
    const uniqueIds = new Set(ids);
    assert.strictEqual(ids.length, uniqueIds.size, 'Found duplicate app IDs in appsData');
  });

  it('each app should have all required fields and specifications', () => {
    for (const app of appsData) {
      assert.ok(app.id, `App missing id`);
      assert.ok(app.name, `App ${app.id} missing name`);
      assert.ok(app.tagline, `App ${app.id} missing tagline`);
      assert.ok(app.category, `App ${app.id} missing category`);
      assert.ok(app.categoryName, `App ${app.id} missing categoryName`);
      assert.ok(Array.isArray(app.platforms) && app.platforms.length > 0, `App ${app.id} has invalid platforms`);
      assert.ok(Array.isArray(app.techStack) && app.techStack.length > 0, `App ${app.id} has invalid techStack`);
      assert.ok(typeof app.rating === 'number' && app.rating >= 4.0, `App ${app.id} has invalid rating`);
      assert.ok(app.shortDescription, `App ${app.id} missing shortDescription`);
      assert.ok(app.fullDescription, `App ${app.id} missing fullDescription`);
      assert.ok(Array.isArray(app.features) && app.features.length >= 3, `App ${app.id} must have at least 3 features`);
      assert.ok(typeof app.specifications === 'object', `App ${app.id} specifications must be an object`);
      assert.ok(typeof app.storeLinks === 'object', `App ${app.id} storeLinks must be an object`);
    }
  });

  it('should verify official download links for EstateMark, Footmark, TapDID, and DeccanIDentity', () => {
    // 1. EstateMark
    const estateMark = appsData.find(a => a.id === 'estatemark');
    assert.ok(estateMark, 'EstateMark app not found');
    assert.match(estateMark.storeLinks.android, /play\.google\.com\/store\/apps\/details\?id=com\.estatemark\.app/);
    assert.match(estateMark.storeLinks.website, /estatemark\.app/);

    // 2. Footmark
    const footmark = appsData.find(a => a.id === 'footmark');
    assert.ok(footmark, 'Footmark app not found');
    assert.match(footmark.storeLinks.android, /play\.google\.com\/store\/apps\/details\?id=com\.deccanidentity\.mobile\.footmark/);
    assert.match(footmark.storeLinks.website, /footmark/);

    // 3. TapDID
    const tapdid = appsData.find(a => a.id === 'tapdid');
    assert.ok(tapdid, 'TapDID app not found');
    assert.match(tapdid.storeLinks.android, /play\.google\.com\/store\/apps\/details\?id=com\.tapdid/);
    assert.match(tapdid.storeLinks.website, /tapdid\.com/);

    // 4. DeccanIDentity Portal
    const deccanCompany = appsData.find(a => a.id === 'deccan-company');
    assert.ok(deccanCompany, 'DeccanIDentity Portal app not found');
    assert.match(deccanCompany.storeLinks.android, /play\.google\.com\/store\/apps\/developer\?id=DeccanIDentity/);
    assert.match(deccanCompany.storeLinks.website, /deccanidentity\.com/);
  });

  it('CATEGORIES count should accurately match appsData distribution', () => {
    const allCat = CATEGORIES.find(c => c.id === 'all');
    assert.ok(allCat, 'All categories item missing');
    assert.strictEqual(allCat.count, appsData.length, `Expected 'all' count to equal ${appsData.length}`);

    for (const cat of CATEGORIES) {
      if (cat.id === 'all') continue;
      const actualCount = appsData.filter(a => a.category === cat.id).length;
      assert.strictEqual(cat.count, actualCount, `Category ${cat.id} count mismatch: expected ${actualCount}, got ${cat.count}`);
    }
  });

  it('PLATFORMS should contain standard options', () => {
    assert.ok(PLATFORMS.some(p => p.id === 'all'));
    assert.ok(PLATFORMS.some(p => p.id === 'ios'));
    assert.ok(PLATFORMS.some(p => p.id === 'android'));
  });
});

describe('Site Configuration & Pricing Data Tests', () => {
  it('siteConfig should have valid contacts and offices', () => {
    assert.ok(siteConfig.brandName);
    assert.ok(siteConfig.companyLegalName);
    assert.ok(siteConfig.phone);
    assert.ok(siteConfig.email);
    assert.ok(siteConfig.whatsapp);
    assert.ok(siteConfig.whatsappLink);
    assert.ok(siteConfig.registeredOffice);
    assert.ok(Array.isArray(siteConfig.branches) && siteConfig.branches.length >= 2);
  });

  it('packages should contain valid pricing tiers with discount rates', () => {
    assert.ok(Array.isArray(packages) && packages.length >= 3);
    for (const pkg of packages) {
      assert.ok(pkg.id);
      assert.ok(pkg.name);
      assert.ok(typeof pkg.price === 'number' && pkg.price > 0);
      assert.ok(pkg.priceLabel);
      assert.ok(Array.isArray(pkg.features) && pkg.features.length > 0);
    }
  });

  it('testimonials should contain valid client entries', () => {
    assert.ok(Array.isArray(testimonials) && testimonials.length > 0);
    for (const item of testimonials) {
      assert.ok(item.name);
      assert.ok(item.company);
      assert.ok(item.location);
      assert.ok(item.industry);
    }
  });
});
