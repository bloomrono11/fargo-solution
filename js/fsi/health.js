$(document).ready(function () {

    health.initialize();
});

let health = {

    headerContent:['Can COVID-19 be transmitted at the workplace?',
    'What is the risk of contracting COVID-19 in the workplace?',
    'How can people assess the risk for exposure to COVID-19 in their workplace and plan for preventive measures?',
    'Who should carry out the workplace risk assessment?',
    'What are the key considerations for the workplace risk assessment?',
    'How should employers decide when to open, close or re-open workplaces and/or suspend or downscale work activities?',
    'What key measures to protect against COVID-19 should be undertaken in ALL workplaces?',
    'What additional measures should be taken at workplaces and for jobs at medium risk?',
    'What additional measures should be taken at workplaces and for jobs at high risk?',
    'What should be taken into consideration when setting a physical distance at the workplace?',
    'What are the rights, duties and responsibilities of employers?',
    'What are the rights, duties and responsibilities of workers?',
    'How can workplaces plan for the prevention and mitigation of COVID-19?',
    'Can the return to the workplace be immediate after public measures are lifted?',
    'Does WHO recommend thermal testing of people entering a workplace?',
    'Does WHO recommend workers wear masks at the workplace (office or others)? If yes, what type of masks?',
    'Are there any directives on office ventilation and air conditioning use?',
    'What mental health and psychosocial support should be provided to workers during COVID-19?'

    ],
    bodyContent:[
        '<p>COVID-19 spreads primarily through respiratory droplets or contact with contaminated surfaces. Exposure can occur at the workplace, while travelling to work, during work-related travel to an area with local community transmission, as well as on the way to and from the workplace</p>',

        '<p>The risk of exposure to COVID-19 in the workplace depends on the likelihood of coming within 1 metre of others, in having frequent physical contact with people who may be infected with COVID-19, and through contact with contaminated surfaces and objects.</p>',


        '<p>Managers with the support of an occupational health and safety advisor should carry out rapid risk assessments to determine the possibility of exposure risk in order to put in place preventive measures. This should be done for each specific work setting and each job.</p>\n' +
        '\n' +
        '<p class="header-parah">Low exposure risk</p>\n' +
        '<p>Jobs or work without frequent, close contact with the general public or others. Workers in this group have minimal occupational contact with the public and other co-workers. Examples of such jobs may include remote workers (i.e., working from home), office workers without frequent close contact with others and workers providing teleservices.</p>\n' +
        '\n' +
        '<p class="header-parah">Medium exposure risk</p>\n' +
        '<p>Jobs or tasks with close, frequent contact with the general public or others. This risk level may apply to workers who have frequent and close contact with the people in high-population-density work environments (e.g. food markets, bus stations, public transport, and other work activities where physical distancing of at least 1 metre may be difficult to observe), or tasks that require close and frequent contact between co-workers. This may also include frequent contact with people returning from areas with community transmission. Examples of such jobs may include frontline workers in retail, home deliveries, accommodation, construction, police and security, public transport, and water and sanitation.</p>\n' +
        '\n' +
        '<p class="header-parah">High exposure risk</p>\n' +
        '<p>Jobs or tasks with close contact with people who may be more likely to have COVID-19, as well as contact with objects and surfaces possibly contaminated with the virus. Examples include transporting people known or suspected to have COVID-19 without separation between the driver and the passenger, providing domestic services or home care for people with COVID-19, and having contact with the deceased who were known or suspected of having COVID-19 at the time of their death. Jobs that may fall under this category include domestic workers, social care workers, personal transport  and home delivery providers and home repair technicians (plumbers, electricians) who have to provide services in the homes of people with COVID-19.</p>',


        '<p>Employers and managers, in consultation with workers, should carry out and regularly update the risk assessment for work-related exposure to COVID-19, preferably with the support of occupational health services.</p>',

        '<p>For each risk assessment, consider the environment, the task, the threat, resources available, such as personal protective equipment, and the feasibility of protective measures. The risk assessment should also extend to collective accommodation provided by the employer for workers, such as dormitories.  Essential public services, such as security and police, food retail, accommodation, public transport, deliveries, water and sanitation, and other frontline workers may be at an increased risk of exposure to occupational hazards for health and safety. Workers who may be at higher risk of developing severe COVID-19 illness because of age or pre-existing medical conditions should be considered in the risk assessment for individuals.</p>',

        '<p>Deciding to close or re-open a workplace or suspend or downscale work activities should rely on the risk assessment, the capacity to put in place protective measures and the level of compliance, and recommendations of national authorities.</p>',

        '<p>Measures to prevent transmission of COVID-19 that apply to all workplaces and all people at the workplace include frequent hand-washing or disinfection with alcohol based hand sanitizer, respiratory hygiene such as covering coughs, physical distancing of at least 1 metre or more according to the national recommendations, wearing of masks where distancing is not possible, regular environmental cleaning and disinfection, and limiting unnecessary travel. Clear policies and messages, training, and education for staff and managers to increase awareness of COVID-19 are essential. The management of people with COVID-19 or their contacts is also critical e.g. requiring workers who are unwell or who develop symptoms to stay at home, self isolate and contact a medical professional or the local COVID-19 information line for advice on testing and referral.</p>',

        '<p>Workplaces for jobs at medium risk require daily cleaning and disinfection at least two times a day of objects and surfaces that are touched regularly, including all shared rooms, surfaces, floors, bathrooms, and changing rooms. Consider suspending any activity where physical distancing of at least 1 metre cannot be implemented in full. If this is not possible, increase ventilation, implement enhanced regular hand hygiene, and require staff to wear appropriate face masks, goggles, gloves and work clothes during cleaning procedures that generate splashes, providing training on their use. Organize changing and washing of work clothes at the workplace, so that workers to do take them home.</p>',

        '<p>In work areas at high risk, assess the possibility of suspending the activity; enhance regular hand hygiene; provide medical masks, disposable gowns, gloves, and eye protection for workers who must work in the homes of people who are suspected or known to have COVID-19; train workers in infection prevention and control practices and use of personal protective equipment; avoid assigning tasks with high risk to workers who have pre-existing medical conditions, are pregnant, or older than 60 years of age.</p>',


        '<p>WHO recommends keeping a physical distance of at least 1 metre between each person in all settings, including in workplaces. Because transmission can occur in crowded workplaces, WHO recommends providing sufficient space, at least 10 square meters, for every worker. National recommendations for physical distancing may require greater physical distance and should be complied with.</p>\n' +
        '\n' +
        '<p>In order to support compliance with national or local recommendations, implement physical distance guidelines in a way that is practical and feasible in the context of work tasks, and which is acceptable to both workers and employers. Stimulate workers to comply with physical distancing norms also at events outside the workplace, in the community, and in dormitories.</p>\n' +
        '\n' +
        '<p>Risk assessment and consultation between employers and workers is very important for setting up and implementing physical distancing measures at the workplace. This may require modification of workstations, changing the use of common spaces and transport vehicles, staggered work shifts, split teams and other measures to reduce social mixing at the workplace.</p>\n' +
        '\n' +
        '<p>If physical distancing measures at the workplace are not feasible for specific work tasks, consider whether the work can be suspended, and if this is not possible, apply additional protective measures, such as the use of screens, sneeze guards,  face masks, enhanced hand hygiene, ventilation and disinfection.</p>\n' +
        '\n' +
        '<p>Physical distancing alone can’t prevent COVID-19 transmission, it is important that it is combined with other public health measures, such as hand and respiratory hygiene, environmental clean-up and disinfection of commonly touched surfaces and objects, ventilation, wearing face masks and a policy of staying at home if unwell.</p>',


        '<p>Employers, workers, and their organizations should collaborate with health authorities to prevent and control COVID-19. Cooperation between management and workers and their representatives is essential for workplace‐related prevention measures. International labour standards on the rights and responsibilities of workers and employers in occupational safety and health should be fully respected.\n' +
        '\n' +
        '<p>Employers, in consultation with workers and their representatives, should plan and implement measures to prevent and mitigate COVID-19 at the workplace through engineering and administrative controls, and provide personal protective equipment and clothing according to the risk assessment. Such measures should not involve any expenditure on the part of the workers.\n' +
        '\n' +
        '<p>Special measures are needed to protect workers at higher risk of developing severe disease, such as those age 60 and over, or with underlying medical conditions, upon recommendation of the occupational health services. Workers in the informal economy and digital labour platforms, those in small enterprises, domestic and migrant workers should not be left behind in the protection of their health and safety at work and their livelihood.  \n' +
        '\n' +
        '<p>There should be no social stigma or discrimination at the workplace for any reason, including access to information and protection from COVID-19, occupational health services and mental health and psychosocial support.</p>\n' +
        '\n' +
        '<p>If COVID-19 is contracted through occupational exposure, it could be considered an occupational disease and, if so determined, should be reported and compensated according to the international labour standards and the national schemes for employment injury benefits.</p>',


        '<p>Workers are responsible to follow the measures for occupational safety and health and infection prevention and control established for their workplace, and to participate in training provided by the employer. Workers should report to their supervisor any situation which may present an imminent and serious danger to their life or health. Workers have the right to remove themselves from any work situation that they have reasonable justification to believe presents an imminent and serious danger to their life or health, and should be protected from any undue consequences as a result of exercising this right.</p>',

        '<p>Workplaces should develop action plans to prevent and mitigate COVID-19 as part of the business continuity plan and according to the results of the risk assessments and the epidemiological situation.</p>\n' +
        '\n' +
        '<p>The action plan and preventive measures should be regularly monitored and updated. Workers and their representatives should be consulted and should participate in the development, monitoring and updating of the workplace COVID-19. It is very important to monitor the effectiveness of preventive measures, and the compliance of workers, visitors, customers, clients and sub-contractors with the measures. The plans should be updated when someone with known or suspected COVID-19 is at the workplace.</p>',

        '<p>The return to work premises should be carefully planned ahead, with preventive measures put in place according to the risk assessment of the different jobs and work tasks. All possible risks for safety and health should be assessed, such as risks resulting from reduced maintenance of machines and facilities during the closure period.  If a return to work is rushed and not done in a phased and cautious manner, it puts lives at risk, and threatens to undermine efforts to restore social and economic activity.</p>',

        '<p>Temperature screening cannot detect all cases of COVID-19, since infected individuals may not have fever early in the course of infection or illness, such as during the incubation period or just before other symptoms begin, even though they may already be infectious. Some people may reduce fever with a fever-reducing medication if they are concerned about the possible consequences of not coming to work. Relying on temperature screening alone will not stop the spread of COVID-19 at work.</p>' +
        '<p>Thermal screening at the workplace can be considered part of a package of measures to prevent and control COVID-19 at the workplace. Workers should be encouraged to self-monitor their health, possibly with the use of questionnaires, and take their own temperature regularly at home. Workplaces should adopt “stay at home if unwell” and flexible sick leave policies to discourage workers with symptoms consistent with COVID-19 from coming to the workplaces.</p>',

        '<p>Wearing masks depends on the risk assessment. For jobs and tasks that carry a medium or high risk, for people aged 60 and older, and for those with underlying health conditions, a medical mask and other personal protective equipment should be provided. Fabric masks or face coverings are currently recommended for younger people and those with no symptoms where physical distancing is not achievable. This prevents the spread of virus from the wearer (who could have COVID-19 but no symptoms) to others. The policy on wearing a mask or face covering in low risk workplaces should be in line with national or local guidelines. Masks may carry some risks if not used properly.<p>',

        '<p>There should be fresh, clean air in all workplaces. For jobs and work tasks at medium or high risk of exposure, WHO recommends an increased ventilation rate through natural aeration or artificial ventilation, preferably without re-circulation of the air. In case of air recirculation, filters should be cleaned regularly.</p>',

        '<p>COVID-19 is associated with a range of concerns, such as fear of falling ill and dying, of being socially excluded, placed in quarantine, or losing a livelihood. Symptoms of anxiety and depression are common reactions for people in the context of COVID-19. Mental health and psychosocial support should be made available to all workers. Comprehensive risk assessments can help identify and mitigate related occupational hazards for mental health </p>\n' +
        '<p>Full Guideline Document Considerations for public health and social measures in the workplace in the context of COVID-19 can be found <a target="_blank" href="https://www.who.int/publications/i/item/considerations-for-public-health-and-social-measures-in-the-workplace-in-the-context-of-covid-19">here</a></p>'
    ],
    headerIdTemplate:'accordionHeader',
    bodyIdTemplate:'accordionBody',
    initialize: function () {

        $('div#healthContent div').append(this.createAccordion());
    },

    /**
     * This method is to create the entire accordion of an html page as a string and return
     * @returns {string}
     */
    createAccordion:function() {

        let html='';
        if(this.headerContent.length !== this.bodyContent.length && this.headerContent.length<1) return;

        let parentId ='accordionEx';
        html+=' <div class="accordion md-accordion accordion-2" id="'+parentId+'" role="tablist" aria-multiselectable="true">';

        for(let i=0; i<this.headerContent.length;i++){
            html+=
                ' <!-- Accordion card -->\n' +
                '                        <div class="card">';
            html+=this.getAccordionHeader(parentId, this.headerIdTemplate+i,this.bodyIdTemplate+i,this.headerContent[i]);
            html+=this.getAccordionBody(parentId,this.headerIdTemplate+i,this.bodyIdTemplate+i,this.bodyContent[i])
            html+='</div><!-- Accordion-->';

        }
        html+='</div><!-- Accordion wrapper -->';
        return html;
    },
    /**
     * This method is to get the html template string of each accordion  item's header part
     * @param parentId
     * @param headerId
     * @param bodyId
     * @param content
     * @returns {string}
     */
    getAccordionHeader: function ( parentId,headerId,bodyId, content) {

        let html =
            '<!-- Card header -->\n' +
            '                            <div class="card-header rgba-stylish-strong z-depth-1" role="tab" id="'+headerId+'">\n' +
            '                                <a class="collapsed" data-toggle="collapse" data-parent="#'+parentId+'" href="#'+bodyId+'" aria-expanded="false"\n' +
            '                                   aria-controls="'+bodyId+'">\n' +
            '                                    <h5 class="mb-0 white-text">\n';

        html+=content;
         html +=
            '                                        <i class="fas fa-angle-down rotate-icon"></i>\n' +
            '                                    </h5>\n' +
            '                                </a>\n' +
            '                            </div>';

        return html;
    },
    /**
     * This method is to get the html template string of each accordion  item's body part
     * @param headerId
     * @param bodyId
     * @param content
     * @returns {string}
     */
    getAccordionBody: function (parentId,headerId,bodyId, content) {

        let html =
            '<!-- Card body -->\n' +
            '                            <div id="' + bodyId + '" class="collapse" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#'+parentId+'">\n' +
            '                                <div class="card-body  rgba-grey-light white-text">\n';

        html += content;
        html += '                                </div>\n' +
            '                            </div>';
        return html;
    }

};