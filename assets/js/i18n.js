/* Centralized English/Chinese dictionary for the academic homepage. */
(function () {
  'use strict';

  const STORAGE_KEY = 'zhiying-homepage-language';
  const translations = {
    en: {
      'meta.title': 'Zhiying Xiao, Ph.D. — Home',
      'meta.newsTitle': 'Zhiying Xiao, Ph.D. — News',
      'nav.home': 'Home',
      'nav.news': 'News',
      'sidebar.role': 'Director of R&amp;D Center, China Overseas Grand Oceans LowCarbon Technology Co., Ltd.',
      'sidebar.location': 'Shenzhen, China',
      'sidebar.org': 'COGO LowCarbon Technology',
      'sidebar.download': 'Download CV',
      'about.title': 'About Me',
      'about.body': 'I am Director of the R&amp;D Center at <strong>CHINA OVERSEAS GRAND OCEANS LOWCARBON TECHNOLOGY CO., LTD.</strong> (COGO LowCarbon Technology) in Qianhai, Shenzhen, where I joined in June 2026. I lead research and development in building energy saving and carbon reduction, renewable energy (photovoltaics and energy storage), and AI-integrated building energy management.<br><br>From February 2024 to May 2026, I was a Postdoctoral Researcher in Mechanical Engineering at the National Laboratory of the Rockies (NLR), formerly the National Renewable Energy Laboratory (NREL), where I worked on advanced building thermal technologies. I earned my Ph.D. in Civil Engineering from Worcester Polytechnic Institute (WPI). During my M.S. studies at Hunan University, I conducted research on the structural analysis of offshore wind turbine foundations.<br><br><strong>I welcome academic collaboration and knowledge exchange on building energy, low-carbon technologies, and related research initiatives.</strong>',
      'about.interestsTitle': 'My research interests include:',
      'about.interest.current': '<strong>Building Energy, Carbon &amp; AI:</strong> Building energy saving &amp; carbon reduction, renewable energy (PV &amp; storage), and AI-integrated building energy management',
      'about.interest.envelopes': '<strong>Dynamic Building Envelopes:</strong> passive/active thermal switches, adaptive thermal control',
      'about.interest.tes': '<strong>Thermal Energy Storage (TES):</strong> PCMs, solid-solid PCMs, sorbent thermal batteries.',
      'about.interest.cooling': '<strong>Radiative Cooling:</strong> daytime radiative cooling, thermo-optical and switchable coatings.',
      'about.interest.modeling': '<strong>Building Energy Modeling:</strong> EnergyPlus, building-scale simulation, techno-economic analysis.',
      'about.interest.insulation': '<strong>Advanced Building Insulation:</strong> cement-based insulation foams, porous thermal composites.',
      'about.interest.ai': '<strong>AI-Driven Building Thermal Management:</strong> ML-based energy prediction, surrogate modeling, data-driven analysis.',
      'highlight1.title': 'Highlight #1: Thermal Switches based Dynamic Building Envelopes',
      'highlight1.intro': 'We developed a passive thermal switch embedded in building insulation that automatically changes its heat-flow path based on ambient temperature. This technology enhances the effectiveness of PCMs in thermal energy storage, helping to reduce building heating and cooling loads.',
      'highlight1.point1': 'Passive, insertable thermal switches are developed and experimentally characterized.',
      'highlight1.point2': 'One switch per 100 in<sup>2</sup> of insulation provides a thermal conductivity switching ratio of 5.7.',
      'highlight1.point3': 'Switches enhance utilization of PCM-thermal storage and improve indoor thermal comfort.',
      'highlight2.title': 'Highlight #2: Thermo-optically responsive SS-PCM coatings',
      'highlight2.intro': 'Our thermo-optical solid–solid phase change material (SS-PCM) coatings absorb excess heat when the building is warm and release it when cooler, moderating indoor temperature swings and lowering HVAC energy demand. We applied a bioinspired surface-optimization approach and machine-learning-based design to develop porous SS-PCM coatings with enhanced optical and thermal performance for adaptive building envelopes.',
      'highlight2.point1': 'Thermo-optical solid–solid PCM exhibits switchable cooling and solar heating effects in response to the ambient temperature.',
      'highlight2.point2': 'The SS-PCM can achieve radiative cooling effect when integrated with Polydimethylsiloxane (PDMS) and Silver (Ag).',
      'highlight3.title': 'Highlight #3: Active thermal switch and AI+ building thermal management.',
      'highlight3.body': 'A journal paper is going to be submitted soon and a provisional US patent has been filed.',
      'highlight4.title': 'Highlight #4: Thermal storage embedded heat pump optimization',
      'highlight4.body': '(Ongoing)',
      'experience.title': 'Education and Work Experience',
      'experience.current': 'Director of R&amp;D Center, China Overseas Grand Oceans LowCarbon Technology Co., Ltd. (中宏低碳), Jun 2026 – present',
      'experience.nlr': 'Postdoctoral Researcher–Mechanical Engineering, National Laboratory of the Rockies (NLR, formerly NREL), Feb 2024 – May 2026',
      'experience.mentors': 'Mentors:',
      'experience.manager': 'Manager:',
      'experience.phd': 'PhD in Civil Engineering, Worcester Polytechnic Institute, Aug 2019 – Dec 2023',
      'experience.advisors': 'Advisors:',
      'experience.committee': 'Committee members:',
      'experience.powerchina': 'Structural Engineer, POWERCHINA Kunming Engineering Corporation Limited, Aug 2016 – Aug 2019',
      'experience.master': 'Master in Structural Engineering, Hunan University, Sep 2013 – Jun 2016',
      'experience.advisor': 'Advisor:',
      'experience.bachelor': 'Bachelor in Civil Engineering, Hunan University, Sep 2009 – Jun 2013',
      'publications.title': 'Publications',
      'peer.title': 'Peer Review',
      'peer.journal': 'Journal',
      'peer.conference': 'Conference',
      'peer.more': '(Open to review more)',
      'patent.title': 'Patent',
      'news.joinTitle': 'Joined COGO LowCarbon Technology as Director of the R&amp;D Center',
      'news.joinBody': '<strong>Jun 2026</strong><br>I joined CHINA OVERSEAS GRAND OCEANS LOWCARBON TECHNOLOGY CO., LTD. (中宏低碳建筑科技有限公司) in Qianhai, Shenzhen, as Director of the R&amp;D Center. I will lead research and development in building energy saving and carbon reduction, renewable energy (photovoltaics and energy storage), and AI-integrated building energy management. I look forward to collaborating with academic and industry partners on innovative low-carbon building technologies.',
      'news.nrelTitle': "News Release: Energy Department Renames NREL 'National Laboratory of the Rockies'",
      'news.nrelBody': '<strong>Dec. 1, 2025</strong><br>The U.S. Department of Energy today renamed the National Renewable Energy Laboratory (NREL) the National Laboratory of the Rockies. The renaming is effective immediately and will be reflected in all public communications and official correspondence.<br><br>“The energy crisis we face today is unlike the crisis that gave rise to NREL,” said Assistant Secretary of Energy (EERE) Audrey Robertson. “We are no longer picking and choosing energy sources. Our highest priority is to invest in the scientific capabilities that will restore American manufacturing, drive down costs, and help this country meet its soaring energy demand. The National Laboratory of the Rockies will play a vital role in those efforts.”<br><br>“For decades, this laboratory and its scientific capabilities have pushed the boundaries of what\'s possible and delivered impact to the nation,” said Jud Virden, laboratory director of the National Laboratory of the Rockies. “This new name embraces a broader applied energy mission entrusted to us by the Department of Energy to deliver a more affordable and secure energy future for all.”<br><br>Founded in response to the 1973 oil crisis, NREL spearheaded the development and integration of a broad array of technologies for every facet of the energy system, from generation to distribution to end use. The new name reflects the Trump administration\'s broader vision for the lab\'s applied energy research, which historically emphasized alternative and renewable sources of generation, and honors the natural splendor of the lab\'s surroundings in Golden, Colorado.',
      'footer.org': 'COGO LowCarbon Technology · R&amp;D Center'
    },
    zh: {
      'meta.title': '肖志颖博士 — 首页',
      'meta.newsTitle': '肖志颖博士 — 新闻动态',
      'nav.home': '首页',
      'nav.news': '新闻动态',
      'sidebar.role': '中宏低碳建筑科技有限公司研发中心主任',
      'sidebar.location': '中国深圳',
      'sidebar.org': '中宏低碳建筑科技有限公司',
      'sidebar.download': '下载简历',
      'about.title': '个人简介',
      'about.body': '我现任<strong>中宏低碳建筑科技有限公司</strong>（COGO LowCarbon Technology）研发中心主任，于2026年6月加入公司，工作地点位于深圳前海。目前负责建筑节能减碳、新能源（光伏与储能）以及人工智能与建筑能源管理相结合的研发工作。<br><br>2024年2月至2026年5月，我在落基山国家实验室（NLR，原美国国家可再生能源实验室 NREL）担任机械工程博士后研究员，主要从事先进建筑热工技术研究。我在伍斯特理工学院（WPI）获得土木工程博士学位；硕士就读于湖南大学期间，曾开展海上风力发电机基础结构分析研究。<br><br><strong>欢迎围绕建筑能源、低碳技术及相关研究方向开展科研合作与学术交流。</strong>',
      'about.interestsTitle': '我的研究方向包括：',
      'about.interest.current': '<strong>建筑能源、碳减排与人工智能：</strong>建筑节能减碳、新能源（光伏与储能），以及人工智能融合的建筑能源管理',
      'about.interest.envelopes': '<strong>动态建筑围护结构：</strong>被动式／主动式热开关、自适应热调控',
      'about.interest.tes': '<strong>热能储存（TES）：</strong>相变材料、固—固相变材料、吸附式热电池',
      'about.interest.cooling': '<strong>辐射制冷：</strong>日间辐射制冷、热光响应与可切换涂层',
      'about.interest.modeling': '<strong>建筑能源建模：</strong>EnergyPlus、建筑尺度仿真、技术经济分析',
      'about.interest.insulation': '<strong>先进建筑保温材料：</strong>水泥基保温泡沫、多孔热功能复合材料',
      'about.interest.ai': '<strong>人工智能驱动的建筑热管理：</strong>基于机器学习的能耗预测、代理模型与数据驱动分析',
      'highlight1.title': '研究亮点 #1：基于热开关的动态建筑围护结构',
      'highlight1.intro': '我们开发了一种嵌入建筑保温层的被动式热开关，可根据环境温度自动改变热流路径。该技术可提升相变材料（PCM）的蓄热效能，有助于降低建筑供暖与制冷负荷。',
      'highlight1.point1': '研发了可嵌入保温层的被动式热开关，并完成实验表征。',
      'highlight1.point2': '每 100 in<sup>2</sup> 保温层配置一个热开关，可实现 5.7 的导热系数切换比。',
      'highlight1.point3': '热开关可提升相变蓄热的利用效率，并改善室内热舒适性。',
      'highlight2.title': '研究亮点 #2：热光响应型固—固相变材料涂层',
      'highlight2.intro': '我们研发的热光响应型固—固相变材料（SS-PCM）涂层可在建筑温度较高时吸收多余热量，并在温度降低时释放热量，从而减小室内温度波动并降低暖通空调能耗。我们采用仿生表面优化方法与机器学习辅助设计，开发了兼具优异光学与热学性能的多孔 SS-PCM 涂层，用于自适应建筑围护结构。',
      'highlight2.point1': '热光响应型固—固相变材料可随环境温度变化，在制冷与太阳能加热效果之间切换。',
      'highlight2.point2': 'SS-PCM 与聚二甲基硅氧烷（PDMS）及银（Ag）集成后，可实现辐射制冷效果。',
      'highlight3.title': '研究亮点 #3：主动式热开关与 AI+ 建筑热管理',
      'highlight3.body': '相关期刊论文将于近期投稿，并已提交美国临时专利申请。',
      'highlight4.title': '研究亮点 #4：蓄热嵌入式热泵系统优化',
      'highlight4.body': '（进行中）',
      'experience.title': '教育与工作经历',
      'experience.current': '中宏低碳建筑科技有限公司研发中心主任，2026年6月至今',
      'experience.nlr': '落基山国家实验室（NLR，原 NREL）机械工程博士后研究员，2024年2月—2026年5月',
      'experience.mentors': '博士后导师：',
      'experience.manager': '部门负责人：',
      'experience.phd': '伍斯特理工学院土木工程博士，2019年8月—2023年12月',
      'experience.advisors': '博士导师：',
      'experience.committee': '博士论文委员会委员：',
      'experience.powerchina': '中国电建集团昆明勘测设计研究院有限公司结构工程师，2016年8月—2019年8月',
      'experience.master': '湖南大学结构工程硕士，2013年9月—2016年6月',
      'experience.advisor': '硕士导师：',
      'experience.bachelor': '湖南大学土木工程学士，2009年9月—2013年6月',
      'publications.title': '学术论文',
      'peer.title': '学术审稿',
      'peer.journal': '期刊',
      'peer.conference': '学术会议',
      'peer.more': '（欢迎更多期刊与学术会议邀请审稿）',
      'patent.title': '专利',
      'news.joinTitle': '加入中宏低碳，担任研发中心主任',
      'news.joinBody': '<strong>2026年6月</strong><br>我于2026年6月加入位于深圳前海的中宏低碳建筑科技有限公司（CHINA OVERSEAS GRAND OCEANS LOWCARBON TECHNOLOGY CO., LTD.），担任研发中心主任。未来将负责建筑节能减碳、新能源（光伏与储能）以及人工智能与建筑能源管理相结合的研发工作，并期待与学术界及产业界伙伴共同推进低碳建筑技术创新。',
      'news.nrelTitle': '新闻：美国能源部将 NREL 更名为“落基山国家实验室”',
      'news.nrelBody': '<strong>2025年12月1日</strong><br>美国能源部当日宣布将美国国家可再生能源实验室（NREL）更名为落基山国家实验室（National Laboratory of the Rockies）。更名即时生效，并体现在所有对外传播与正式公文中。<br><br>美国能源部能源效率与可再生能源办公室助理部长 Audrey Robertson 表示：“我们今天面临的能源危机，与催生 NREL 的那场危机并不相同。我们不再对不同能源进行取舍。我们的首要任务，是投资有助于重振美国制造业、降低成本并满足国家快速增长能源需求的科研能力。落基山国家实验室将在这些工作中发挥关键作用。”<br><br>落基山国家实验室主任 Jud Virden 表示：“数十年来，本实验室及其科研能力不断拓展技术边界，为国家创造了重要影响。新名称体现了美国能源部赋予我们的更广泛的应用能源使命，旨在为所有人提供更加经济、安全的能源未来。”<br><br>NREL 因1973年石油危机而创立，长期引领能源系统各环节技术的研发与集成，覆盖能源生产、输配和终端利用。新名称体现了特朗普政府对该实验室应用能源研究的更广泛愿景；相关研究历史上更侧重替代能源与可再生能源。新名称同时也致敬实验室所在地科罗拉多州戈尔登的自然风貌。',
      'footer.org': '中宏低碳 · 研发中心'
    }
  };

  function storedLanguage() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function applyLanguage(language) {
    const lang = language === 'zh' ? 'zh' : 'en';
    const dictionary = translations[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      const key = element.getAttribute('data-i18n');
      if (dictionary[key] !== undefined) {
        // Dictionary entries are trusted local content and may contain links, <strong>, or <sup>.
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll('[data-lang]').forEach(function (button) {
      const active = button.getAttribute('data-lang') === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      // Language switching still works when storage is unavailable.
    }
    return lang;
  }

  function init() {
    applyLanguage(storedLanguage() === 'zh' ? 'zh' : 'en');
    document.querySelectorAll('[data-lang]').forEach(function (button) {
      button.addEventListener('click', function () {
        applyLanguage(button.getAttribute('data-lang'));
      });
    });
  }

  window.siteI18n = { setLanguage: applyLanguage };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
