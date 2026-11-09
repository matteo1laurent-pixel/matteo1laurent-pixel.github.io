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
        title: 'Interactive CV in Tableau',
        category: 'data',
        context: 'Personal project, 2026',
        description:
            'I turned my CV into an interactive Tableau dashboard, so recruiters can explore my education, experience, and skills instead of reading a static page.',
        tools: 'Tableau Desktop, Tableau Public, data visualization',
        resultValue: '',
        resultLabel: '',
        link: 'https://public.tableau.com/app/profile/matteo.laurent/viz/Matteo_Interactive_CV/CV',
        linkLabel: 'Open in Tableau Public',
    },
    {
        title: 'AI in tax and audit for Forvis Mazars',
        category: 'strategy',
        context: 'In-company consulting project, January to June 2026',
        description:
            'I led a five-person team exploring how the firm could use AI more effectively. We interviewed tax and audit leaders in four countries and recommended OpenClaw, an AI agent hosted on a secure EU server, with three pilot scenarios and a 12-week roadmap.',
        tools: 'OpenClaw, stakeholder interviews, workflow mapping',
        resultValue: '~80%',
        resultLabel: 'projected cut in document verification time',
        link: 'projects/forvis-mazars.html',
        linkLabel: 'Read the project',
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
        link: 'projects/demand-forecasting.html',
        linkLabel: 'Read the project',
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
        link: 'projects/pulseup.html',
        linkLabel: 'Read the project',
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
        link: 'projects/divvy.html',
        linkLabel: 'Read the project',
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
        link: 'projects/smart-expiry.html',
        linkLabel: 'Read the project',
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
        link: 'projects/ai-fashion-lab.html',
        linkLabel: 'Read the project',
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
        link: 'projects/nike-adidas-thesis.html',
        linkLabel: 'Read the project',
    },
];
