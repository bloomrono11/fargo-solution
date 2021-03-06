$(document).ready(function () {
    service.initialize();
});

let service = {

    //Note to change the css for the service menu use the ids as ref from here then go to service.scss to customize
    containerIds: ['technologyContainer', 'accountingContainer', 'engineeringContainer', 'scienceContainer', 'healthCareContainer', 'professionalContainer',
        'websiteDevelopmentContainer', 'educationContainer'],

    listContainerIds: ['technologyListContainer', 'accountingListContainer', 'engineeringListContainer', 'scienceListContainer', 'healthCareListContainer',
        'professionalListContainer', 'websiteDevelopmentListContainer', 'educationListContainer'],

    headers: ['Information Technology (IT) Staffing', 'Accounting & Finance Staffing', 'Engineering Staffing', 'Scientific Staffing',
        'HealthCare Staffing', 'Administrative Professional Staffing', 'Website Development', 'Education Recruitment'],

    technologyCenterParah: [
        'Your business needs technology to stay ahead, and we provide the people who make technology possible.'],
    technologyParahs: [
        'A decade of working experience with technology leaders like you, and we have learned one thing that is one size doesn’t fit all. That’s why when you partner with Fargo Solutions you will find a tailored approach for all your technology objectives. Whether you are looking for a few resources for a short-term engagement, an end to end project deliverable or expert consulting, we have a solution to fit your need.',
        'Our technology recruiters are adept at sourcing both active and passive candidates.',
        'Don’t let identifying and acquiring the right talent act as a distraction when delivering on IT projects that support your key business initiatives. Focus on your core while we deliver the right talent – when, where and how you need. Talk to our information technology talent consultants.',
        '<strong>From Short-term engagement to full-time hires we provide skilled candidates across a wide range of technologies. Some of the recently placed resources:</strong>'],
    technologyList: ['Application Development',
        'Application Maintenance',
        'Business Analyst',
        'Business Intelligence (BI)',
        'Business Process Consultant',
        'CRM (all major technologies)',
        'Data Modeler',
        'Database Administrator',
        'Developers (range of technologies)',
        'Enterprise Architect',
        'ERP (all major technologies)',
        'Help Desk',
        'Infrastructure Architect',
        'IT Security',
        'Network Administrator',
        'Network Support',
        'LAN/WAN Manager',
        'Project Analyst',
        'Project Management',
        'Quality Assurance',
        'SAN Administrator',
        'Software Development',
        'Solution Architect',
        'Storage Consultant',
        'Strategy Consultant',
        'System Administrator',
        'Technical Support',
        'Testing/Validation'],

    accountingCenterParah: [
        'In today’s complex financial and regulatory environment, access to on-demand experienced accounting and finance professionals is essential for your business.'],
    accountingParahs: ['Fargo Solutions Accounting and Finance Center understands the criticality of this function and how global rules, regulations, and reporting requirements have made it increasingly complex.',
        'Leveraging our 40 global locations and specialized accounting and finance talent recruiters, we provide you the right talent which is essential for your productivity and bottom-line.',
        'Reduce the amount of time spent and focus on managing your departments and workload by utilizing our temporary, contract-to-hire, and direct hire accounting and financial staffing services across all industries.',
        'Contact us for a consultative, flexible approach for strategic, transactional, operational, technical and administrative finance and accounting professionals.',
        '<strong>Some of the recent positions we have filled.</strong>'],
    accountingList: ['Accounts Associate',
        'Accounts Payable Analyst',
        'Accounts Payable/Receivable',
        'CFO',
        'Compliance Officer',
        'Corporate Senior Payroll Specialist',
        'Cost Accountant',
        'Financial Analyst',
        'Mortgage Oversight Specialist',
        'Payroll Accountant',
        'Staff Accountant',
        'Sr. Associate Project Manager'],

    engineeringCenterParah: [],
    engineeringParahs: ['Connect, engage, and retain the best engineering talent across telecom, manufacturing, aerospace, defense, energy, medical devices, and electronics. Fargo Solutions has matched countless skilled engineers and technical specialists for our clients globally. Our recruiting team has a deep understanding of key industries and your business that enables us to align the right resource for the role, every time to keep you moving forward.',
        'Don’t let identifying and acquiring the best talent act as a distraction when delivering on critical projects that support your key business initiatives. Focus on your core while we get the right talent – when, where and how you need.',
        '<strong> Fargo Solutions Engineering Resources focuses on providing highly specialized engineering and support professionals across all related positions, disciplines, and industries, including: </strong>'],
    engineeringList: ['Aerospace',
        'Automotive',
        'Bio/Chemical',
        'Civil/Structural',
        'Designers/Drafters',
        'Electrical/Electronics',
        'Engineering Technicians',
        'Energy Management',
        'Heath, Safety & Environmental',
        'Industrial',
        'Instrumentation/Controlsrem',
        'Manufacturing/Processing',
        'Mechanical',
        'Nuclear',
        'Petroleum',
        'Plant/Facilities',
        'Quality/LEAN/Six Sigma',
        'R&D',
        'Sustainability',
        'Technical Writing',
        'Telecom',
        'Testing/Validation'],

    scienceCenterParah: [],
    scienceParahs: ['With immense opportunities, pricing pressures, regulatory changes, emerging innovations, and patient-centric models are the way life sciences, pharmaceutical, biotech, clinical research, genomics and medical devices companies are shaping themselves. Our years of experience in this field empowers us to understand the criticality of skilled and trained candidates. Be it supervisory duties or direct involvement in scientific projects we provide highly trained and experienced scientific resources.',

        '<strong>The Scientific Resource has been a primary segment at Fargo Solutions with consistent growth and success, and our various supplier excellence award substantiates it.</strong>',

        'Our qualified and knowledgeable talent hunters provide well-qualified, properly-vetted scientific resources in all related positions, disciplines, and industries including:'],
    scienceList: [
        'Associate Scientist',
        'Biologist',
        'Chemist',
        'Clinical Affairs/Medical Affairs Manager',
        'Clinical Data Manager',
        'Clinical Project Scientist',
        'Clinical Project/Program Manager',
        'Clinical Research Associate',
        'Clinical Studies Specialist',
        'Clinical Study manager',
        'Clinical Trial Manager',
        'Drug Safety Associate',
        'Lab tech',
        'Medical Information Specialist',
        'Medical Writer',
        'Microbiologist',
        'Pharmacovigilance Specialist',
        'Project Manager- Scientific II',
        'Project Physician',
        'Regulatory Affairs Specialist',
        'Research Associate',
        'Scientific Process Operator',
        'Scientist – Cell Biologist',
        'Technical Writer – Scientific',
        'Trial Supply Manager'
    ],

    healthCareCenterParah: [
        'Regulation and liability are the two most significant challenges with regards employing clinical resources.'],
    healthCareParahs: ['Sourcing candidates that are competent, certified and experienced is critical and that is where we excel. Using our growing network of clinical professionals, social connects and our consistent effort to maintain a pipeline of the candidates you need we respond quickly and effectively to your clinical talent needs.',
        'Our well established clinical talent recruiters who come from the scientific background have profound knowledge in FDA and other industry regulations. We speak your language and can provide you with highly-specialized, licensed and qualified clinical resources.',
        '<strong> From short-term engagement to full-time hires we provide skilled, vetted and qualified candidates across technologies. Some of recently placed resources: </strong>'],

    healthCareList: ['Biostatistician',
        'Clinical Data Analyst',
        'Clinical Data Coordinator',
        'Clinical Director',
        'Clinical Research',
        'Clinical Research Project Manager',
        'Clinical Scientist',
        'Clinical Study Manager',
        'Document Review Specialist',
        'Drug Safety Specialist',
        'Heath, Safety & Environmental',
        'Nurse',
        'Medical Affairs',
        'Medical Information Specialist',
        'Medical Technologists',
        'Medical Writer',
        'Quality Assurance',
        'Patient Care',
        'Patient Recruiters',
        'Regulatory Affairs',
        'R&D',
        'Technical Writer',
        'Clinical Resources provides other clinical / healthcare professionals at the LPN, RN, BS, MS, Ph.D. and MD levels'],

    professionalCenterParah: [
        'Working in an office, you know that things wouldn’t get done right on time if it weren’t for the administrative professionals.'],
    professionalParahs: ['Positions filled vary in industry and discipline and have included information technology specialists, research scientists, plant engineers, design engineers, technical management personnel, administrative managers, human resources personnel, sales and marketing professionals, and software development professionals.',
        'The Sourcing for this variety of talent is carried out by a diverse and specialized team of recruiters who leverage both the active and passive talent channels.',
        '<strong>We specialize in providing contract, contract-to-hire and direct professionals in all administrative functions including</strong>'],

    websiteDevelopmentList: ['Administration',
        'Benefits',
        'Compliance',
        'Corporate affairs',
        'Investor Relations',
        'Environmental/Facilities',
        'Human Resource',
        'Insurance',
        'Legal',
        'Marketing',
        'Customer Support',
        'Logistics',
        'Clerical',
        'Support Staff',
        'Paralegal',
        'Creative',
        'Diversity/Inclusion/li>',
        'Quality'],

    websiteDevelopmentCenterParah: [
        'Working in an office, you know that things wouldn’t get done right on time if it weren’t for the administrative professionals.'],
    websiteDevelopmentParahs: ['Positions filled vary in industry and discipline and have included information technology specialists, research scientists, plant engineers, design engineers, technical management personnel, administrative managers, human resources personnel, sales and marketing professionals, and software development professionals.',
        'The Sourcing for this variety of talent is carried out by a diverse and specialized team of recruiters who leverage both the active and passive talent channels.',
        '<strong>We specialize in providing contract, contract-to-hire and direct professionals in all administrative functions including</strong>'],

    professionalList: ['Administration',
        'Benefits',
        'Compliance',
        'Corporate affairs',
        'Investor Relations',
        'Environmental/Facilities',
        'Human Resource',
        'Insurance',
        'Legal',
        'Marketing',
        'Customer Support',
        'Logistics',
        'Clerical',
        'Support Staff',
        'Paralegal',
        'Creative',
        'Diversity/Inclusion/li>',
        'Quality'],

    educationCenterParah: [],
    educationParah: ['<span>Our Educational Staffing specializes in connecting K-12 schools and districts, colleges and universities and other education-related organizations with local, national and global talent to manage and grow their organizations to serve their students and communities.</span>',
        '<span>We focus on providing a range of well-qualified, properly-vetted personnel across all educational environments and positions, including highly-specialized instructional designers and instructional staff, as well as all levels and types non-instructional staff, with deep domain experience in online education.</span>'],
    educationList: [],


    industryListIconHtml: '<i class="fas fa-check pr-2"></i>',
    initialize: function () {
        for (let i = 0; i < this.containerIds.length; i++) {
            let id = this.containerIds[i];
            let html = this.createContainerParahs(id);
            id = $('#' + id);
            if (id !== undefined && id.length > 0) {
                id.prepend(html);
            }
            // console.log(html);
        }

        //note create container header
        for (let i = 0; i < this.headers.length; i++) {
            let id = this.headers[i];
            let html = this.createContainerHeader(this.headers[i]);
            id = $('#' + this.containerIds[i]);
            if (id !== undefined && id.length > 0) {
                id.prepend(html);
            }
            // console.log(html);
        }

        for (let i = 0; i < this.listContainerIds.length; i++) {
            let id = this.listContainerIds[i];
            let html = this.createListContainers(id);
            id = $('#' + id);
            if (id !== undefined && id.length > 0) {
                id.append(html);
            }
            // console.log(html);
        }
    },
    /**
     * The classes names here can be found in {@file ../scss/industry.scss}
     * @param headerName
     * @returns {string|string}
     */
    createContainerHeader: function (headerName) {
        let html = '';
        html += '\n<!-- note Header Container-->\n<div class="service-header mb-5">\n' +
            '<h2 class="service-heading">' + headerName + '</h2>\n' +
            '</div>';
        return html;
    },

    createContainerParahs: function (containerName) {
        //Note in future want to add customizations
        let html = '', options = '';
        html += '<!-- note open row -->\n<div class="row">\n';
        switch (containerName) {

            case 'technologyContainer': {


                html = this.createCenterParahHtml(this.technologyCenterParah, html, options);
                html += '</div><!-- note close row -->';

                html += '<!-- note open row -->\n<div class="row pb-4">\n';
                html = this.createParahHtml(this.technologyParahs, html, options);

                break;
            }
            case 'accountingContainer': {
                html = this.createCenterParahHtml(this.accountingCenterParah, html, options);
                html += '</div><!-- note close row -->';

                html += '<!-- note open row -->\n<div class="row">\n';
                html = this.createParahHtml(this.accountingParahs, html, options);
                break;
            }
            case 'engineeringContainer': {
                html = this.createCenterParahHtml(this.engineeringCenterParah, html, options);
                html += '</div><!-- note close row -->';

                html += '<!-- note open row -->\n<div class="row">\n';
                html = this.createParahHtml(this.engineeringParahs, html, options);
                break;
            }
            case 'scienceContainer': {
                html = this.createCenterParahHtml(this.scienceCenterParah, html, options);
                html += '</div><!-- note close row -->';

                html += '<!-- note open row -->\n<div class="row">\n';
                html = this.createParahHtml(this.scienceParahs, html, options);
                break;
            }
            case 'healthCareContainer': {
                html = this.createCenterParahHtml(this.healthCareCenterParah, html, options);
                html += '</div><!-- note close row -->';

                html += '<!-- note open row -->\n<div class="row">\n';
                html = this.createParahHtml(this.healthCareParahs, html, options);
                break;
            }
            case 'professionalContainer': {
                html = this.createCenterParahHtml(this.professionalCenterParah, html, options);
                html += '</div><!-- note close row -->';

                html += '<!-- note open row -->\n<div class="row">\n';
                html = this.createParahHtml(this.professionalParahs, html, options);
                break;
            }
            case'websiteDevelopmentContainer': {
                html = this.createCenterParahHtml(this.websiteDevelopmentCenterParah, html, options);
                html += '</div><!-- note close row -->';

                html += '<!-- note open row -->\n<div class="row">\n';
                html = this.createParahHtml(this.websiteDevelopmentParahs, html, options);
                break;

            }
            case 'educationContainer': {
                html = this.createCenterParahHtml(this.engineeringCenterParah, html, options);
                html += '</div><!-- note close row -->';

                html += '<!-- note open row -->\n<div class="row">\n';
                html = this.createParahHtml(this.educationParah, html, options);
                break;
            }
        }
        html += '</div><!-- note close row -->';
        return html;
    },

    createListContainers: function (containerName) {
        //Note in future want to add customizations
        let html = '', options = '';
        html += '<!-- note open row -->\n<div class="row">\n';
        switch (containerName) {

            case 'technologyListContainer': {
                html = this.createListHtml(this.technologyList, html, options);
                break;
            }
            case 'accountingListContainer': {
                html = this.createListHtml(this.accountingList, html, options);
                break;
            }
            case 'engineeringListContainer': {
                html = this.createListHtml(this.engineeringList, html, options);
                break;
            }
            case 'scienceListContainer': {
                html = this.createListHtml(this.scienceList, html, options);
                break;
            }
            case 'healthCareListContainer': {
                html = this.createListHtml(this.healthCareList, html, options);
                break;
            }
            case 'professionalListContainer': {
                html = this.createListHtml(this.professionalList, html, options);
                break;
            }
            case'websiteDevelopmentListContainer': {
                html = this.createListHtml(this.websiteDevelopmentList, html, options);
                break;

            }
            case 'educationListContainer': {
                html = this.createListHtml(this.educationList, html, options);
                break;
            }
        }
        html += '</div><!-- note close row -->';
        return html;
    },

    createParahHtml: function (dataList, html, options) {
        let attr;
        for (let i = 0; i < dataList.length; i++) {
            html += '<div class="col-md-12 col-sm-12">\n';

            if (dataList[i].startsWith('<strong>') === true) {
                // console.log(dataList[i]);
                attr = ' class="space-parah"';
            } else if (dataList[i].startsWith('<span>') === true) {
                // console.log(dataList[i]);
                attr = ' class="space-parah"';
            } else {
                attr = options;
            }
            html += '<p ' + attr + ' >';
            html += dataList[i];
            html += '</p>';
            html += '</div><!-- note close col -->\n';
        }

        return html;
    },

    createListHtml: function (dataList, html, options) {

        for (let i = 0; i < dataList.length; i++) {
            html += '<div class="col-md-6 col-sm-12">\n';
            html += '<div>';
            html += this.industryListIconHtml;
            html += '<span ' + options + ' >';
            html += dataList[i];
            html += '</span>';
            html += '</div>\n</div><!-- note close col -->\n';

            if (i > 0 && i < (dataList.length - 1) && i % 2 !== 0) {
                html += '</div><!-- note close row -->\n\n';
                html += '<!-- note open row -->\n<div class="row">\n';
            }
        }
        return html;
    },


    createCenterParahHtml: function (dataList, html, options) {

        options = options === '' ? ' class="space-parah"' : options;
        for (let i = 0; i < dataList.length; i++) {
            html += '<div class="col-md-12 col-sm-12 text-center font-weight-bold">\n';

            html += '<p ' + options + ' >';
            html += dataList[i];
            html += '</p>';
            html += '</div><!-- note close col -->\n';

        }
        return html;

    },
};