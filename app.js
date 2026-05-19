/* ==========================================================================
   PNW OFFICIAL WEBSITE - INTERACTION & WEBGL SYSTEM
   ========================================================================== */

// --- 1. LOCALIZATION DICTIONARY (Embedded to bypass local file protocol CORS) ---
const translations = {
  "en": {
    "nav_home": "Home",
    "nav_products": "Capabilities",
    "nav_fabrics": "Fabrics",
    "nav_services": "Services",
    "nav_about": "About",
    "nav_faq": "FAQ",
    "nav_contact": "Contact Us",
    "hero_title": "Premium Activewear Manufacturer for Growing Brands",
    "hero_subtitle": "Zero MOQ · Advanced Fabric · Fast Sampling",
    "hero_cta_quote": "Get a Quote",
    "hero_cta_sample": "Request Sample",
    "section_products_title": "Product Capabilities",
    "section_products_sub": "Sleek designs, high-end stitching, and customizable components built for performance.",
    "product_shorts_name": "Performance Gym Shorts",
    "product_shorts_desc": "Engineered for maximum mobility and breathability. Features laser-cut ventilation and optional zipper pocket integration.",
    "product_shorts_fabrics": "Nylon-Spandex Blend / Recycled Polyester",
    "product_shorts_custom": "Custom length, liner options, waistband printing, reflective logos",
    "product_leggings_name": "Sculpt High-Waist Leggings",
    "product_leggings_desc": "High-compression, squat-proof leggings with seamless construction for ultimate comfort and contouring.",
    "product_leggings_fabrics": "Interlock Nylon-Spandex / Brushed Polyester",
    "product_leggings_custom": "Waistband height, pocket addition, laser-cut patterns, seamless knit logos",
    "product_tee_name": "Premium Oversized Tee",
    "product_tee_desc": "Heavyweight active tee with dropped shoulders, built to survive intense workouts and casual street styling.",
    "product_tee_fabrics": "100% Premium Cotton / Pima-Cotton Blend / Polyester-Cotton",
    "product_tee_custom": "Fabric weight (GSM), neckline ribbing width, custom wash effects, screen print/embroidery",
    "product_hoodie_name": "Aesthetic Fleece Hoodie",
    "product_hoodie_desc": "High-density warmth with a structured modern drape, perfect for pre-workout warmups and lifestyle athleisure.",
    "product_hoodie_fabrics": "Cotton Fleece / Tech Fleece Blend / Recycled Polyester",
    "product_hoodie_custom": "Double-lined hood, hidden pockets, custom drawcords, premium high-build print",
    "spec_fabric": "Available Fabrics",
    "spec_custom": "Customizable Options",
    "section_fabrics_title": "Advanced Performance Fabrics",
    "section_fabrics_sub": "We source and develop innovative textiles that deliver top-tier feel, elasticity, and durability.",
    "fabric_nylon_name": "UltraShield Nylon Spandex",
    "fabric_nylon_desc": "Premium 4-way stretch fabric with high spandex ratio. Butter-soft hand feel, strong shape retention, and squat-proof opacity.",
    "fabric_nylon_tags": "Squat-Proof · Ultra-Soft · 4-Way Stretch",
    "fabric_poly_name": "EcoGlide Recycled Polyester",
    "fabric_poly_desc": "Sustainable performance fabric made from post-consumer recycled plastic bottles. High moisture-wicking and quick-drying capabilities.",
    "fabric_poly_tags": "Eco-Friendly · Dry-Tech · Lightweight",
    "fabric_knit_name": "FlexKnit Seamless Tech",
    "fabric_knit_desc": "Engineered seamless construction that maps compression zones to your body. Minimizes friction and maximizes breathability.",
    "fabric_knit_tags": "Frictionless · Zone Compression · Max Breathable",
    "section_services_title": "Our OEM Workflow",
    "section_services_sub": "From concept to delivery, our streamlined process ensures retail-ready garments at high speed.",
    "service_step_1": "01. Design & Tech Pack",
    "service_step_1_desc": "Submit your sketch, reference garment, or full Tech Pack. Our design team assists in refining blueprints and specs.",
    "service_step_2": "02. Fast Sampling",
    "service_step_2_desc": "We select the correct fabrics and produce your custom samples within 7-10 days, allowing you to test fit and texture.",
    "service_step_3": "03. Production",
    "service_step_3_desc": "State-of-the-art sewing machines and strict inline quality control guarantee that bulk orders match the approved sample.",
    "service_step_4": "04. Global Delivery",
    "service_step_4_desc": "We package to your retail specifications and ship globally using fast air freight or reliable sea logistics.",
    "section_story_title": "Behind the Craft",
    "section_story_sub": "Combining advanced textile tech with expert manufacturing practices to empower activewear brands.",
    "section_story_desc": "At PNW, we believe manufacturing shouldn't be a black box. Our facility features modern machinery, specialized seamstresses, and rigorous QC protocols. Watch our factory tour to see how your vision becomes reality.",
    "section_about_title": "Why Partner With PNW?",
    "section_about_sub": "Built to scale with modern brands, solving the common bottlenecks of garment manufacturing.",
    "about_feature_moq_title": "Zero MOQ Limits",
    "about_feature_moq_desc": "We support growing brands and private labels by eliminating rigid minimum order quantities. Start your line with confidence.",
    "about_feature_focus_title": "Activewear Specialists",
    "about_feature_focus_desc": "Unlike general factories, we only build performance activewear and premium athleisure. We know the details that matter.",
    "about_feature_quality_title": "Reliable & Transparent",
    "about_feature_quality_desc": "Transparent communication, on-time delivery commitments, and consistent product sizing across batches.",
    "section_faq_title": "Frequently Asked Questions",
    "section_faq_sub": "Everything you need to know about starting an OEM partnership with PNW.",
    "faq_q1": "What is your Minimum Order Quantity (MOQ)?",
    "faq_a1": "We offer Zero MOQ limits for initial launch collections. This allows you to test the market with various sizes and styles without heavy inventory risk.",
    "faq_q2": "How long does the custom sampling process take?",
    "faq_a2": "Standard activewear samples take 7 to 10 working days, depending on fabric availability and complexity of the design.",
    "faq_q3": "Can you source custom fabrics or colors?",
    "faq_a3": "Yes. We work closely with leading fabric mills to source specific technical specs or dye custom Pantone colors for your brand.",
    "faq_q4": "Do you provide labels, tags, and packaging customization?",
    "faq_a4": "Absolutely. We offer full private label branding: custom woven labels, heat-transfer neck tags, hang tags, and branded biodegradable polybags.",
    "section_contact_title": "Start Your Project",
    "section_contact_sub": "Tell us about your brand goals. Our activewear experts will respond within 24 hours.",
    "contact_form_name": "Full Name",
    "contact_form_email": "Business Email",
    "contact_form_brand": "Brand Name",
    "contact_form_message": "Project Details (Styles, fabrics, estimated quantities...)",
    "contact_form_submit": "Submit Inquiry",
    "contact_form_or": "Or reach out directly via",
    "contact_form_success": "Thank you! Your inquiry has been sent successfully. We will get back to you shortly.",
    "footer_rights": "All Rights Reserved.",
    "footer_disclaimer": "All product images are interactive vector representations for OEM design reference. Real fabric samples available upon request."
  },
  "zh": {
    "nav_home": "首頁",
    "nav_products": "代工品項",
    "nav_fabrics": "面料科技",
    "nav_services": "服務流程",
    "nav_about": "品牌優勢",
    "nav_faq": "常見問題",
    "nav_contact": "聯絡我們",
    "hero_title": "為新創與成熟品牌打造的頂級運動服飾製造商",
    "hero_subtitle": "零起訂量限制 · 高階機能面料 · 快速樣衣打樣",
    "hero_cta_quote": "獲取報價",
    "hero_cta_sample": "申請樣衣",
    "section_products_title": "製造與代工能力",
    "section_products_sub": "極簡美學設計、高規車縫工藝與全方位可定制細節，為運動表現而生。",
    "product_shorts_name": "機能訓練短褲",
    "product_shorts_desc": "專為高活動度與透氣性設計。可整合雷射切割排風孔及隱形拉鍊口袋。",
    "product_shorts_fabrics": "尼龍氨綸混紡 / 再生聚酯纖維",
    "product_shorts_custom": "客製褲長、內襯配置、彈性腰帶印花、反光Logo",
    "product_leggings_name": "塑形高腰緊身褲",
    "product_leggings_desc": "高塑形雙面針織防透光面料，搭配無縫結構，提供極致親膚的包覆與修飾效果。",
    "product_leggings_fabrics": "雙面尼龍氨綸 / 磨毛聚酯纖維",
    "product_leggings_custom": "腰帶高度客製、增加口袋、雷射雕花孔洞、無縫緹花Logo",
    "product_tee_name": "高磅寬版運動短Tee",
    "product_tee_desc": "高磅數落肩短Tee，兼顧重訓強韌度與日常街頭穿搭剪裁。",
    "product_tee_fabrics": "100% 精梳棉 / 頂級皮馬棉混紡 / 聚酯纖維混紡棉",
    "product_tee_custom": "面料克重（GSM）、領口螺紋寬度、水洗做舊效果、絲網印刷/刺繡",
    "product_hoodie_name": "重磅保暖運動連帽衫",
    "product_hoodie_desc": "高密度刷毛面料提供出色的挺度與保暖性，是運動前熱身與日常運動風穿搭的理想單品。",
    "product_hoodie_fabrics": "棉質刷毛 / 科技太空棉 / 再生聚酯纖維",
    "product_hoodie_custom": "雙層立體帽沿、隱形插手口袋、客製抽繩、高立體感印刷",
    "spec_fabric": "推薦適用面料",
    "spec_custom": "可客製化細節",
    "section_fabrics_title": "頂級機能面料展示",
    "section_fabrics_sub": "我們採購並共同研發創新的面料科技，確保絕佳的手感、彈性與耐用度。",
    "fabric_nylon_name": "UltraShield 頂級尼龍氨綸",
    "fabric_nylon_desc": "高比例氨綸的四面彈面料。如奶油般親膚柔軟，具有極強的塑形回彈力且防透光。",
    "fabric_nylon_tags": "深蹲不透光 · 極致親膚 · 四面高彈力",
    "fabric_poly_name": "EcoGlide 環保再生聚酯",
    "fabric_poly_desc": "採用回收寶特瓶製成的永續機能面料。擁有極佳的吸濕排汗效能，輕盈乾爽。",
    "fabric_poly_tags": "綠色環保 · 吸濕排汗 · 輕量乾爽",
    "fabric_knit_name": "FlexKnit 無縫一體成型科技",
    "fabric_knit_desc": "透過精密無縫針織將不同壓縮比的織法融為一體，減少身體摩擦，達到最佳透氣性。",
    "fabric_knit_tags": "減少摩擦 · 區域壓力分佈 · 極致透氣",
    "section_services_title": "我們的代工服務流程",
    "section_services_sub": "從概念設計到全球交付，標準化的高效流程確保產品完美落地。",
    "service_step_1": "01. 設計研發與工藝單",
    "service_step_1_desc": "提供手稿、樣衣或完整的 Tech Pack（設計細節包）。我們的設計團隊將協助細化產品規格。",
    "service_step_2": "02. 快速打樣（7-10天）",
    "service_step_2_desc": "確認面料並製作實體樣衣，供您測試版型、車工、手感與穿著反饋。",
    "service_step_3": "03. 大貨量產與品管",
    "service_step_3_desc": "配備先進縫紉設備與嚴格的產線即時品檢，保證最終批量產品與確認樣衣品質一致。",
    "service_step_4": "04. 全球物流配送",
    "service_step_4_desc": "依據您的品牌零售規範進行包裝，並提供快捷空運或穩定的海運全球配送。",
    "section_story_title": "匠心製造",
    "section_story_sub": "融合前沿紡織技術與匠心縫紉工藝，為您的運動品牌保駕護航。",
    "section_story_desc": "在 PNW，我們堅信製造不該是黑箱作業。我們的廠區配備了最先進的特種車車縫設備與專業職人。透過影片，您可以親眼見證您的設計如何化為實體。",
    "section_about_title": "為什麼選擇 PNW？",
    "section_about_sub": "專為現代運動服飾品牌量身定制，打破傳統成衣代工的限制與痛點。",
    "about_feature_moq_title": "零最低起訂量限制",
    "about_feature_moq_desc": "為了大力扶持新創品牌與設計師品牌，我們提供無 MOQ 門檻的首發代工，讓您能輕資產測試市場。",
    "about_feature_focus_title": "專注於 Activewear 代工",
    "about_feature_focus_desc": "與雜食性工廠不同，我們只做高彈性運動服飾與高階運動休閒服裝，深知細節與工法之所在。",
    "about_feature_quality_title": "高度可靠與高透明度",
    "about_feature_quality_desc": "即時且透明的雙語溝通，精準的交期承諾，以及不同批次間始終如一的尺寸穩定性。",
    "section_faq_title": "常見問題解答",
    "section_faq_sub": "在這裡您可以找到與 PNW 展開 OEM / 私人標籤合作的常見問題。",
    "faq_q1": "你們的最低起訂量（MOQ）是多少？",
    "faq_a1": "我們針對首發或測試性系列提供零起訂量限制（Zero MOQ）。這能讓您在初期推出多種尺碼與版型，無需承擔龐大的庫存風險。",
    "faq_q2": "客製打樣一般需要多久？",
    "faq_a2": "標準運動服飾打樣需要 7 到 10 個工作天，具體時程會取決於面料現貨狀況與款式設計的複雜度。",
    "faq_q3": "可以幫忙採購特定面料或染特定顏色嗎？",
    "faq_a3": "可以。我們與領先的面料供應商有長期共同開發關係，可以協助開發特定功能性面料，或根據潘通色卡（Pantone）為您的品牌定制專屬染印。",
    "faq_q4": "你們提供領標、吊牌與客製包裝嗎？",
    "faq_a4": "提供。我們提供全套的私人品牌（Private Label）定制：包括布標、無感熱轉印洗標、吊牌、以及客製印刷的生物可降解包裝袋。",
    "section_contact_title": "開啟您的專案",
    "section_contact_sub": "留下您的想法，我們的運動服飾代工專家將在 24 小時內與您取得聯繫。",
    "contact_form_name": "聯絡人姓名",
    "contact_form_email": "商務電子郵件",
    "contact_form_brand": "品牌名稱",
    "contact_form_message": "專案需求細節 (款式、材質、預估數量...)",
    "contact_form_submit": "送出諮詢",
    "contact_form_or": "或者直接透過以下方式聯繫我",
    "contact_form_success": "感謝您的諮詢！我們已收到您的需求，專人將會盡快與您聯繫。",
    "footer_rights": "版權所有。",
    "footer_disclaimer": "本站所有產品圖片均為 3D 視覺互動展示。實體面料樣品可應要求寄送。"
  },
  "zh-cn": {
    "nav_home": "首页",
    "nav_products": "代工品类",
    "nav_fabrics": "面料科技",
    "nav_services": "服务流程",
    "nav_about": "品牌优势",
    "nav_faq": "常见问题",
    "nav_contact": "联系我们",
    "hero_title": "为新创与成熟品牌打造的顶级运动服饰制造商",
    "hero_subtitle": "零起订量限制 · 高阶功能面料 · 快速样衣打样",
    "hero_cta_quote": "获取报价",
    "hero_cta_sample": "申请样衣",
    "section_products_title": "制造与代工能力",
    "section_products_sub": "极简美学设计、高规缝纫工艺与全方位可定制细节，为运动表现而生。",
    "product_shorts_name": "功能训练短裤",
    "product_shorts_desc": "专为高活动度与透气性设计。可整合激光切割排风孔及隐形拉链口袋。",
    "product_shorts_fabrics": "尼龙氨纶混纺 / 再生聚酯纤维",
    "product_shorts_custom": "定制裤长、内衬配置、弹性腰带印花、反光Logo",
    "product_leggings_name": "塑形高腰紧身裤",
    "product_leggings_desc": "高塑形双面针织防透光面料，搭配无缝结构，提供极致亲肤的包覆与修饰效果。",
    "product_leggings_fabrics": "双面尼龙氨纶 / 磨毛聚酯纤维",
    "product_leggings_custom": "腰带高度定制、增加口袋、激光雕花孔洞、无缝提花Logo",
    "product_tee_name": "高磅宽版运动短Tee",
    "product_tee_desc": "高磅数落肩短Tee，兼顾重训强韧度与日常街头穿搭剪裁。",
    "product_tee_fabrics": "100% 精梳棉 / 顶级皮马棉混合 / 聚酯纤维混合棉",
    "product_tee_custom": "面料克重（GSM）、领口螺纹宽度、水洗做旧效果、丝网印刷/绣",
    "product_hoodie_name": "重磅保暖运动连帽衫",
    "product_hoodie_desc": "高密度抓绒面料提供出色的挺度与保暖性，是运动前热身与日常运动风穿搭的理想单品。",
    "product_hoodie_fabrics": "棉质抓绒 / 科技太空棉 / 再生聚酯纤维",
    "product_hoodie_custom": "双层立体帽沿、隐形插手口袋、定制抽绳、高立体感印刷",
    "spec_fabric": "推荐适用面料",
    "spec_custom": "可定制细节",
    "section_fabrics_title": "顶级功能面料展示",
    "section_fabrics_sub": "我们采购并共同研发创新的面料科技，确保绝佳的手感、弹性与耐用度。",
    "fabric_nylon_name": "UltraShield 顶级尼龙氨纶",
    "fabric_nylon_desc": "高比例氨纶的四面弹面料。如奶油般亲肤柔软，具有极强的塑形回弹力且防透光。",
    "fabric_nylon_tags": "深蹲不透光 · 极致亲肤 · 四面高弹力",
    "fabric_poly_name": "EcoGlide 环保再生聚酯",
    "fabric_poly_desc": "采用回收塑料瓶制成的永续功能面料。拥有极佳的吸湿排汗效能，轻盈干爽。",
    "fabric_poly_tags": "绿色环保 · 吸湿排汗 · 轻量干爽",
    "fabric_knit_name": "FlexKnit 无缝一体成型科技",
    "fabric_knit_desc": "通过精密无缝针织将不同压缩比的织法融为一体，减少身体摩擦，达到最佳透气性。",
    "fabric_knit_tags": "减少摩擦 · 区域压力分布 · 极致透气",
    "section_services_title": "我们的代工服务流程",
    "section_services_sub": "从概念设计到全球交付，标准化的高效流程确保产品完美落地。",
    "service_step_1": "01. 设计研发与工艺单",
    "service_step_1_desc": "提供手稿、样衣或完整的 Tech Pack（设计细节包）。我们的设计团队将协助细化产品规格。",
    "service_step_2": "02. 快速打样（7-10天）",
    "service_step_2_desc": "确认面料并制作实体样衣，供您测试版型、缝工、手感与穿着反馈。",
    "service_step_3": "03. 大货量产与品控",
    "service_step_3_desc": "配备先进缝纫设备与严格的产线即时品检，保证最终批量产品与确认样衣质量一致。",
    "service_step_4": "04. 全球物流配送",
    "service_step_4_desc": "依据您的品牌零售规范进行包装，并提供快捷空运或稳定的海运全球配送。",
    "section_story_title": "匠心制造",
    "section_story_sub": "融合前沿纺织技术与匠心缝纫工艺，为您的运动品牌保驾护航。",
    "section_story_desc": "在 PNW，我们坚信制造不该是黑箱作业。我们的厂区配备了最先进的特种缝纫设备与专业职人。通过视频，您可以亲眼见证您的设计如何化为实体。",
    "section_about_title": "为什么选择 PNW？",
    "section_about_sub": "专为现代运动服饰品牌量身定制，打破传统成衣代工的限制与痛点。",
    "about_feature_moq_title": "零最低起订量限制",
    "about_feature_moq_desc": "为了大力扶持新创品牌与设计师品牌，我们提供无 MOQ 门槛的首发代工，让您能轻资产测试市场。",
    "about_feature_focus_title": "专注于 Activewear 代工",
    "about_feature_focus_desc": "与杂食性工厂不同，我们只做高弹性运动服饰与高阶运动休闲服装，深知细节与工法之所在。",
    "about_feature_quality_title": "高度可靠与高透明度",
    "about_feature_quality_desc": "即时且透明的双语沟通，精准的交期承诺，以及不同批次间始终如一的尺寸稳定性。",
    "section_faq_title": "常见问题解答",
    "section_faq_sub": "在这里您可以找到与 PNW 展开 OEM / 私人标签合作的常见问题。",
    "faq_q1": "你们的最低起订量（MOQ）是多少？",
    "faq_a1": "我们针对首发或测试性系列提供零起订量限制（Zero MOQ）。这能让您在初期推出多种尺码与版型，无需承担庞大的库存风险。",
    "faq_q2": "定制打样一般需要多久？",
    "faq_a2": "标准运动服饰打样需要 7 到 10 个工作天，具体时程会取决于面料现货状况与款式设计的复杂度。",
    "faq_q3": "可以帮忙采购特定面料或染特定颜色吗？",
    "faq_a3": "可以。我们与领先的面料供应商有长期共同开发关系，可以协助开发特定功能性面料，或根据潘通色卡（Pantone）为您的品牌定制专属染色。",
    "faq_q4": "你们提供领标、吊牌与定制包装吗？",
    "faq_a4": "提供。我们提供全套的私人品牌（Private Label）定制：包括织标、无感热转印洗标、吊牌、以及定制印刷的生物可降解包装袋。",
    "section_contact_title": "开启您的项目",
    "section_contact_sub": "留下您的想法，我们的运动服饰代工专家将在 24 小时内与您取得联系。",
    "contact_form_name": "联系人姓名",
    "contact_form_email": "商务电子邮件",
    "contact_form_brand": "品牌名称",
    "contact_form_message": "项目需求细节 (款式、材质、预估数量...)",
    "contact_form_submit": "提交咨询",
    "contact_form_or": "或者直接通过以下方式联系我",
    "contact_form_success": "感谢您的咨询！我们已收到您的需求，专人将会尽快与您联系。",
    "footer_rights": "版权所有。",
    "footer_disclaimer": "本站所有产品图片均为 3D 视觉互动展示。实体面料样品可应要求寄送。"
  }
};

let currentLang = "en";

// --- 2. INITIALIZATION & LOCALIZATION HANDLER ---
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initMobileMenu();
  initFaqAccordion();
  initContactForm();
  initFactoryVideo();
  initActiveLinks();
  
  // Initialize WebGL/Three.js Animations
  initHeroBackground();
  initProductShowcase();
  initFabricShowcase();
});

// Sync Translation text
function updateLocalization() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      // If it's an input or textarea, translate placeholder
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", translations[currentLang][key]);
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });
  
  // Update button language display to show the NEXT language in cycle:
  // en -> zh (shows "繁中")
  // zh -> zh-cn (shows "简中")
  // zh-cn -> en (shows "EN")
  const langBtnText = document.querySelector("#lang-switcher .lang-text");
  if (langBtnText) {
    if (currentLang === "en") {
      langBtnText.textContent = "繁中";
    } else if (currentLang === "zh") {
      langBtnText.textContent = "简中";
    } else {
      langBtnText.textContent = "EN";
    }
  }
  
  // Set html element lang attribute
  document.documentElement.setAttribute("lang", currentLang);
}

function initLanguage() {
  const langSwitcher = document.getElementById("lang-switcher");
  
  // Attempt to read from browser language
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith("zh")) {
    if (browserLang.toLowerCase().includes("cn") || browserLang.toLowerCase().includes("hans")) {
      currentLang = "zh-cn";
    } else {
      currentLang = "zh";
    }
  } else {
    currentLang = "en";
  }
  
  updateLocalization();

  if (langSwitcher) {
    langSwitcher.addEventListener("click", () => {
      // Cycle through 3 languages: en -> zh -> zh-cn -> en
      if (currentLang === "en") {
        currentLang = "zh";
      } else if (currentLang === "zh") {
        currentLang = "zh-cn";
      } else {
        currentLang = "en";
      }
      updateLocalization();
    });
  }
}

// --- 3. UI ELEMENTS ACTIONS ---

// Mobile navigation menu toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll(".nav-link, .btn-nav");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggleBtn.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
}

// FAQ Accordion
function initFaqAccordion() {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true";
      const answer = question.nextElementSibling;

      // Close all other items
      questions.forEach(otherQuestion => {
        if (otherQuestion !== question) {
          otherQuestion.setAttribute("aria-expanded", "false");
          otherQuestion.nextElementSibling.style.maxHeight = null;
        }
      });

      // Toggle current
      question.setAttribute("aria-expanded", !isExpanded);
      if (!isExpanded) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
}

// Contact form simulated submission
function initContactForm() {
  const form = document.getElementById("oem-contact-form");
  const feedback = document.getElementById("form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Select input elements
      const name = document.getElementById("client-name").value;
      const email = document.getElementById("client-email").value;
      const brand = document.getElementById("client-brand").value;
      const message = document.getElementById("client-message").value;

      console.log("Form Submission Data:", { name, email, brand, message });

      // Simulated success feedback
      feedback.classList.remove("hide");
      form.reset();

      setTimeout(() => {
        feedback.classList.add("hide");
      }, 5000);
    });
  }
}

// Factory story video trigger
function initFactoryVideo() {
  const poster = document.getElementById("video-poster");
  const video = document.getElementById("factory-video");

  if (poster && video) {
    poster.addEventListener("click", () => {
      poster.style.opacity = "0";
      poster.style.pointerEvents = "none";
      video.play();
      video.controls = true;
    });
  }
}

// Dynamic header navigation highlight on scroll
function initActiveLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120; // offset header height
      const sectionId = section.getAttribute("id");
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}


// --- 4. PROCEDURAL CANVASES GENERATION (CAD Outlines for Products & Fabrics) ---
function createGarmentTexture(type) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 384;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#0c0c0c";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Technical blueprint grid lines
  ctx.strokeStyle = "#1a1a1a";
  ctx.lineWidth = 1;
  const gridSpacing = 32;
  for (let x = 0; x < canvas.width; x += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Draw central crosshair
  ctx.strokeStyle = "#2c2c2c";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();

  // Draw Vector Garment Outline
  ctx.strokeStyle = "#c5a880"; // Metallic Accent Gold
  ctx.lineWidth = 3.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  
  // Blueprint aesthetic glowing shadow
  ctx.shadowColor = "rgba(197, 168, 128, 0.4)";
  ctx.shadowBlur = 10;

  const cx = canvas.width / 2;
  const cy = canvas.height / 2 + 10;

  if (type === "shorts") {
    // Waistband
    ctx.beginPath();
    ctx.moveTo(cx - 70, cy - 60);
    ctx.quadraticCurveTo(cx, cy - 65, cx + 70, cy - 60);
    // Left hip
    ctx.lineTo(cx + 85, cy + 30);
    // Left leg hem
    ctx.lineTo(cx + 20, cy + 35);
    // Crotch
    ctx.lineTo(cx, cy - 10);
    // Right leg hem
    ctx.lineTo(cx - 20, cy + 35);
    // Right hip
    ctx.lineTo(cx - 85, cy + 30);
    ctx.closePath();
    ctx.stroke();

    // Elastic drawcord
    ctx.strokeStyle = "#86868b";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 5, cy - 63);
    ctx.bezierCurveTo(cx - 15, cy - 40, cx - 8, cy - 35, cx - 12, cy - 20);
    ctx.moveTo(cx + 2, cy - 63);
    ctx.bezierCurveTo(cx + 12, cy - 40, cx + 5, cy - 35, cx + 8, cy - 20);
    ctx.stroke();

  } else if (type === "leggings") {
    // High waistband
    ctx.beginPath();
    ctx.moveTo(cx - 45, cy - 80);
    ctx.quadraticCurveTo(cx, cy - 84, cx + 45, cy - 80);
    ctx.lineTo(cx + 40, cy - 30);
    ctx.lineTo(cx - 40, cy - 30);
    ctx.closePath();
    ctx.stroke();

    // Leggings legs
    ctx.beginPath();
    ctx.moveTo(cx - 40, cy - 30);
    // Outer hip/thigh
    ctx.quadraticCurveTo(cx - 50, cy + 20, cx - 20, cy + 90);
    // Ankle cuff left
    ctx.lineTo(cx - 8, cy + 88);
    // Inner crotch
    ctx.lineTo(cx, cy - 10);
    // Ankle cuff right
    ctx.lineTo(cx + 8, cy + 88);
    // Outer hip/thigh right
    ctx.quadraticCurveTo(cx + 50, cy + 20, cx + 40, cy - 30);
    ctx.stroke();

  } else if (type === "tee") {
    // Collar
    ctx.beginPath();
    ctx.moveTo(cx - 30, cy - 65);
    ctx.quadraticCurveTo(cx, cy - 50, cx + 30, cy - 65);
    ctx.stroke();

    // Full Tee outline
    ctx.beginPath();
    ctx.moveTo(cx - 30, cy - 65);
    // Shoulder left
    ctx.lineTo(cx - 85, cy - 55);
    // Sleeve sleeve hem left
    ctx.lineTo(cx - 100, cy - 10);
    // Sleeve inner armpit left
    ctx.lineTo(cx - 65, cy - 5);
    // Side seam left
    ctx.lineTo(cx - 60, cy + 70);
    // Bottom hem
    ctx.quadraticCurveTo(cx, cy + 73, cx + 60, cy + 70);
    // Side seam right
    ctx.lineTo(cx + 65, cy - 5);
    // Sleeve inner armpit right
    ctx.lineTo(cx + 100, cy - 10);
    // Shoulder right
    ctx.lineTo(cx + 30, cy - 65);
    ctx.stroke();

  } else if (type === "hoodie") {
    // Hood folds
    ctx.beginPath();
    ctx.moveTo(cx - 35, cy - 45);
    ctx.bezierCurveTo(cx - 40, cy - 95, cx + 40, cy - 95, cx + 35, cy - 45);
    ctx.quadraticCurveTo(cx, cy - 30, cx - 35, cy - 45);
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(cx - 35, cy - 45);
    // Shoulder & sleeve left
    ctx.lineTo(cx - 95, cy - 35);
    ctx.lineTo(cx - 110, cy + 40);
    ctx.lineTo(cx - 95, cy + 45);
    ctx.lineTo(cx - 60, cy + 5);
    ctx.lineTo(cx - 55, cy + 75);
    // Bottom rib hem
    ctx.quadraticCurveTo(cx, cy + 78, cx + 55, cy + 75);
    ctx.lineTo(cx + 60, cy + 5);
    ctx.lineTo(cx + 95, cy + 45);
    ctx.lineTo(cx + 110, cy + 40);
    ctx.lineTo(cx + 95, cy - 35);
    ctx.lineTo(cx + 35, cy - 45);
    ctx.stroke();

    // Front kangaroo pouch pocket
    ctx.beginPath();
    ctx.moveTo(cx - 35, cy + 70);
    ctx.lineTo(cx - 25, cy + 35);
    ctx.lineTo(cx + 25, cy + 35);
    ctx.lineTo(cx + 35, cy + 70);
    ctx.closePath();
    ctx.stroke();
  }

  // Label tags
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#86868b";
  ctx.font = "10px monospace";
  ctx.fillText("PNW SPEC / WEBGL ENGINE", 24, 30);
  ctx.fillText("SCALE: 1:1.25", 24, 45);
  ctx.fillText("PNWUSA CORP.", 390, 350);

  return canvas;
}

// Fabric canvas procedural texture creation
function createFabricTexture(type) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext("2d");

  const w = canvas.width;
  const h = canvas.height;

  // Render patterns based on fabric properties
  if (type === "nylon") {
    // Clean deep diagonal carbon weave
    ctx.fillStyle = "#0c0d0f";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#161c22";
    ctx.lineWidth = 4;
    for (let i = -w; i < w * 2; i += 16) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + h, h);
      ctx.stroke();
    }
  } else if (type === "poly") {
    // Micro honeycomb tech grid
    ctx.fillStyle = "#080b08";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#111812";
    ctx.lineWidth = 2;
    const size = 16;
    for (let y = 0; y < h + size; y += size * 1.5) {
      for (let x = 0; x < w + size; x += size * Math.sqrt(3)) {
        const offset = (Math.floor(y / (size * 1.5)) % 2) * (size * Math.sqrt(3) / 2);
        ctx.beginPath();
        for (let s = 0; s < 6; s++) {
          const angle = (s * Math.PI) / 3;
          ctx.lineTo(
            x + offset + size * Math.sin(angle),
            y + size * Math.cos(angle)
          );
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  } else if (type === "knit") {
    // Knitted ribbed stripes texture
    ctx.fillStyle = "#0d0a0d";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#1f141f";
    ctx.lineWidth = 8;
    for (let x = 0; x < w; x += 24) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
      
      // Knit stitches pattern loops
      ctx.strokeStyle = "#140e14";
      ctx.lineWidth = 2;
      for (let y = 0; y < h; y += 12) {
        ctx.beginPath();
        ctx.arc(x + 6, y + 6, 4, 0, Math.PI);
        ctx.stroke();
      }
    }
  }

  // Draw technical label on fabrics
  ctx.fillStyle = "rgba(197, 168, 128, 0.7)";
  ctx.font = "bold 11px monospace";
  ctx.fillText("PNW HIGH-PERFORMANCE LAB / TEXTILE SAMPLE", 20, 30);
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  ctx.fillText(`CODE: ${type.toUpperCase()}_SPEC_2026`, 20, 48);

  return canvas;
}


// --- 5. THREE.JS GLOWING PARTICLES HERO BACKGROUND ---
function initHeroBackground() {
  const container = document.getElementById("hero-canvas-container");
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Generate particle geometry points
  const particleCount = 750;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Generate particles in a wide spatial field
    positions[i] = (Math.random() - 0.5) * 15;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 8;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  // Point texture (custom procedural glowing point)
  const pCanvas = document.createElement("canvas");
  pCanvas.width = 16;
  pCanvas.height = 16;
  const pCtx = pCanvas.getContext("2d");
  const grad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
  grad.addColorStop(0, "rgba(255, 255, 255, 1)");
  grad.addColorStop(0.3, "rgba(197, 168, 128, 0.8)"); // Soft titanium gold
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  pCtx.fillStyle = grad;
  pCtx.fillRect(0, 0, 16, 16);
  const pTexture = new THREE.CanvasTexture(pCanvas);

  const material = new THREE.PointsMaterial({
    size: 0.12,
    map: pTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const pointsMesh = new THREE.Points(geometry, material);
  scene.add(pointsMesh);

  camera.position.z = 5;

  // Track Mouse Interaction for particle wave response
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  window.addEventListener("mousemove", (e) => {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.8;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.8;
  });

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Wave animation for particles
    const positionsArr = pointsMesh.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const x = positionsArr[idx];
      const z = positionsArr[idx + 2];
      
      // Floating sinusoidal motion
      positionsArr[idx + 1] += Math.sin(elapsedTime * 0.8 + x * 0.5 + z * 0.3) * 0.002;
    }
    pointsMesh.geometry.attributes.position.needsUpdate = true;

    // Follow mouse coordinates smoothly (lerp)
    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    pointsMesh.rotation.y = elapsedTime * 0.02 + currentMouseX;
    pointsMesh.rotation.x = elapsedTime * 0.01 + currentMouseY;

    renderer.render(scene, camera);
  }

  animate();

  // Resize handler
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}


// --- 6. THREE.JS PRODUCT BLUEPRINT LIQUID SHADER EFFECT ---
function initProductShowcase() {
  const canvases = document.querySelectorAll(".webgl-product-canvas");

  canvases.forEach(canvas => {
    const type = canvas.getAttribute("data-type");
    const container = canvas.parentElement;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Create texture dynamically
    const dynamicCanvas = createGarmentTexture(type);
    const texture = new THREE.CanvasTexture(dynamicCanvas);

    // Liquid displacement custom shader
    const customShaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uHover: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform float uHover;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          
          if (uHover > 0.01) {
            // Radial distance from mouse
            vec2 toMouse = uv - uMouse;
            float dist = length(toMouse);
            
            // Warp strength increases closer to mouse, scaling with hover state
            float force = smoothstep(0.45, 0.0, dist) * uHover * 0.07;
            
            // Flow angle pointing away from cursor
            vec2 direction = normalize(toMouse + vec2(0.001)); 
            
            // Fluid undulating wave
            float wave = sin(dist * 20.0 - uTime * 6.0) * force;
            uv += direction * wave;
          }
          
          vec4 texColor = texture2D(uTexture, uv);
          gl_FragColor = texColor;
        }
      `
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), customShaderMaterial);
    scene.add(mesh);

    // Interaction controls
    let isHovered = false;
    let hoverVal = 0;
    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const currentMouse = new THREE.Vector2(0.5, 0.5);

    container.addEventListener("mouseenter", () => {
      isHovered = true;
    });

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      targetMouse.x = (e.clientX - rect.left) / rect.width;
      // Invert Y to match UV space (0,0 bottom-left)
      targetMouse.y = 1.0 - (e.clientY - rect.top) / rect.height;
    });

    container.addEventListener("mouseleave", () => {
      isHovered = false;
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      customShaderMaterial.uniforms.uTime.value = elapsedTime;

      // Smoothly animate hover uniform value
      hoverVal += ((isHovered ? 1.0 : 0.0) - hoverVal) * 0.1;
      customShaderMaterial.uniforms.uHover.value = hoverVal;

      // Interpolate mouse coordinates smoothly
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.15;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.15;
      customShaderMaterial.uniforms.uMouse.value.copy(currentMouse);

      renderer.render(scene, camera);
    }

    animate();

    // Handle resizing correctly
    window.addEventListener("resize", () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  });
}


// --- 7. THREE.JS WAVING TECH CLOTH FABRIC RENDER ---
function initFabricShowcase() {
  const canvases = document.querySelectorAll(".webgl-fabric-canvas");

  canvases.forEach(canvas => {
    const type = canvas.getAttribute("data-fabric");
    const container = canvas.parentElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Create fabric base texture
    const dynamicCanvas = createFabricTexture(type);
    const texture = new THREE.CanvasTexture(dynamicCanvas);

    // Geometry: High vertex grid mesh to make physical fabric folds
    const geometry = new THREE.PlaneGeometry(3.6, 2.2, 30, 20);

    // Matte premium cloth material with texture mapping
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 2.4;

    // Hover variables
    let isHovered = false;
    let waveAmplitude = 0.08;

    container.addEventListener("mouseenter", () => {
      isHovered = true;
    });
    container.addEventListener("mouseleave", () => {
      isHovered = false;
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      
      // Target wave intensity increases when hovered
      const targetAmp = isHovered ? 0.16 : 0.05;
      waveAmplitude += (targetAmp - waveAmplitude) * 0.05;

      // Update mesh vertex Z positions to simulate folding wind wave
      const position = geometry.attributes.position;
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);

        // Sinusoidal wave equations simulating lightweight floating silk/mesh
        const z = Math.sin(x * 1.5 + elapsedTime * 2.5) * waveAmplitude + 
                  Math.cos(y * 1.2 + elapsedTime * 2.0) * (waveAmplitude * 0.5);
        position.setZ(i, z);
      }
      position.needsUpdate = true;
      geometry.computeVertexNormals();

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  });
}
