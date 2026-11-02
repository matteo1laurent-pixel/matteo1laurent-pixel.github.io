/*
  YOUR CONTENT LIVES HERE. You can edit this file without touching the rest of the site.

  To add a project: copy one block from { to }, paste it in the list, and change the text.
  To remove a project: delete its block.
  Category must be "data", "strategy" or "product".
  Leave link: "" if there is nothing to link to. The button then disappears.
*/

const PROFILE = {
    email: 'matteo1.laurent@edu.em-lyon.com',
    github: 'https://github.com/matteo1laurent-pixel',
    linkedin: 'https://www.linkedin.com/in/matteo-laurent-711558262/',
    cv: 'assets/CV_Matteo_Laurent.pdf',
};

const PROJECTS = [
    {
        title: 'AI in tax and audit for Forvis Mazars',
        category: 'strategy',
        context: 'In-company consulting project, January to June 2026',
        description:
            'I led a five-person team exploring how the firm could use AI more effectively. We interviewed senior partners, including the global R&D lead, and recommended n8n, a workflow automation platform hosted on EU-controlled infrastructure, with three pilot use cases and a 12-week roadmap.',
        tools: 'n8n, stakeholder interviews, workflow automation',
        resultValue: '~80%',
        resultLabel: 'projected cut in document verification time',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Demand forecasting for fresh produce',
        category: 'data',
        context: 'Operations & Decisions group project, 2026',
        description:
            'In a team of six, we compared a naive baseline with a Random Forest model across 10 products, then tested reorder points at 90% and 95% service levels.',
        tools: 'Python, Random Forest, inventory simulation',
        resultValue: '7–52%',
        resultLabel: 'lower forecast error than the baseline, by product',
        link: '',
        linkLabel: '',
    },
    {
        title: 'PulseUp customer analytics',
        category: 'data',
        context: 'Marketing Analytics project, 2026',
        description:
            'Used factor analysis, segmentation, regression, difference-in-differences, and logistic regression to understand customers and predict conversion, then turned the results into managerial recommendations.',
        tools: 'R, segmentation, predictive modeling',
        resultValue: '3,000',
        resultLabel: 'customer records analyzed',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Divvy bike-share analysis',
        category: 'data',
        context: 'SQL and dashboard project',
        description:
            'Used SQL to answer business questions on subscriber growth, usage intensity, and revenue, checked data quality, and identified top power users. I then built a Power BI dashboard showing acquisition peaks and year-over-year usage changes.',
        tools: 'SQL, Power BI, KPI and trend analysis',
        resultValue: '',
        resultLabel: '',
        link: 'https://harsh-earthworm-77d.notion.site/Project-Summary-2fc2117dfc918166ba46e19b8308ad34',
        linkLabel: 'Read the summary',
    },
    {
        title: 'Airbnb New York host dashboard',
        category: 'data',
        context: 'Business Intelligence group project, in progress',
        description:
            'A Power BI dashboard designed to help a director decide which New York hosts to keep or remove. The dashboard canvas, data model, and page mock-ups are complete.',
        tools: 'Power BI, KPI design, data modeling',
        resultValue: '',
        resultLabel: '',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Easy Walks Near Paris',
        category: 'product',
        context: 'Web Content Strategy project, 2026',
        description:
            'A WordPress travel site, built with a partner, for international students, expats, and tourists looking for nature walks reachable by public transport. It includes a custom AI skill for producing consistent walk pages.',
        tools: 'WordPress, SEO, UX writing, AI workflow design',
        resultValue: '',
        resultLabel: '',
        link: '',
        linkLabel: '',
    },
    {
        title: 'Smart Expiry',
        category: 'product',
        context: 'Started as an ESCP project, now in development',
        description:
            'A food expiry app with barcode scanning, reminders, and recipe suggestions for products that need using soon. I am now building it with Expo for the App Store and Google Play.',
        tools: 'Product design, Expo, React Native, TypeScript',
        resultValue: '',
        resultLabel: '',
        link: 'https://harsh-earthworm-77d.notion.site/Project-Summary-2fc2117dfc9181b0bf5aefbe952010e2',
        linkLabel: 'Read the summary',
    },
    {
        title: 'AI Fashion Lab',
        category: 'strategy',
        context: 'Project management dossier',
        description:
            'As team coordinator, I led execution planning for a virtual try-on and style-matching service for luxury startup brands, and built the training and support part of the cost baseline.',
        tools: 'WBS, critical path, Gantt chart, cost baseline',
        resultValue: '',
        resultLabel: '',
        link: 'https://harsh-earthworm-77d.notion.site/Project-Summary-1-2fc2117dfc91813b87d9cb9fb1179cae',
        linkLabel: 'Read the summary',
    },
    {
        title: 'Nike and adidas in tennis',
        category: 'strategy',
        context: 'Bachelor thesis, ESCP',
        description:
            'A comparative thesis on how Nike and adidas use storytelling to grow tennis fan engagement, comparing Instagram, TikTok, and X through engagement metrics and fan sentiment.',
        tools: 'Social media analytics, sports marketing',
        resultValue: '',
        resultLabel: '',
        link: 'https://harsh-earthworm-77d.notion.site/Thesis-summary-2fc2117dfc9181db9117f0b2937af991',
        linkLabel: 'Read the summary',
    },
];
