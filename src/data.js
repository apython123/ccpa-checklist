export const steps = [
  {
    id: 'are-you-impacted',
    title:'Are you impacted?',
    items: [,
      {
        id: 1,
        title: 'My company is for-profit, conducts business in California, collects personal data of California residents and determines the purposes and means of processing consumers\' personal information.',
        role: ['company'],
        description: 'Contrary to popular opinion the CCPA does not only affect California-based companies. Any company that does business in California, and thereby potentially possesses a Californian’s personal data. Just like with GDPR, companies must adhere to the CCPA regardless of where they are based.',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (c) - (1)",
            href: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article="
          }
        ]
      },
      {
        id: 2,
        title: 'My company has annual gross revenues in excess of $25 million OR possesses the personal information of 50,000 or more consumers, households & devices OR earns more than half of its annual revenue from selling consumers\' personal information.',
        role: ['company'],
        description: 'Devices are included when they can be linked to a consumer or a household.',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (c) - (1) - (A)-(C)",
            href: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article="
          }
        ]
      }
    ]
  },
  {
    id: 'exceptions',
    title:'Exceptions',
    items: [,
      {
        id: 1,
        title: 'My company processes medical information collected by a covered entity governed by the Health Insurance Portability and Accountability Act (HIPAA) or California Confidentiality of Medical Information Act (CMIA), entities subject to HIPAA or CMIA or information collected as part of a clinical trial.',
        role: ['company'],
        description: '',
          links: [
          { 
            title: "Cal. Civil Code - Section 1798.145 - (c)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 2,
        title: 'My company processes personal information collected, processed, sold, or disclosed pursuant to the Gramm-Leach-Bliley Act or California Financial Privacy Information Act.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.145 - (e)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 3,
        title: 'My company processes information collected, processed, sold, or disclosed pursuant to the Driver’s Privacy Protection Act of 1994.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.145 - (f)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 4,
        title: 'My company takes part in a sale of personal information to or from a consumer reporting agency to be reported in or used to generate a consumer report.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.145 - (d)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 5,
        title: 'My company takes part in efforts to comply with federal, state, or local law; a civil, criminal, or regulatory investigation; or a subpoena or summons that are contrary to the CCPA regulation.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.145 - (a) - (1)-(2)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 6,
        title: 'My company cooperates with law enforcement agencies or exercises/defends legal claims that are contrary to the CCPA regulation.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.145 - (a) - (3)-(4)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      }
    ]
  },
  {
    id: 'types-of-data',
    title:'Types of data',
    items: [,
      {
        id: 1,
        title: 'My company processes data such as name, address, personal identifier, IP address, email address, account name, Social Security number, driver’s license number, and passport number.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (A)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 2,
        title: 'My company processes personal information under California’s Records Destruction Law (Cal. Civ. Code § 1798.80(e)), which additionally includes the signature, physical characteristics or description, telephone number, insurance policy number, education, employment, employment history, or financial account information.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (B)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 3,
        title: 'My company processes characteristics of protected classifications under California or federal law.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (C)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 4,
        title: 'My company processes commercial information, including records of personal property, products or services purchased, obtained or considered, or other purchasing or consuming histories or tendencies.',
        role: ['company'],
        description: '',
        links: [
          {   
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (D)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 5,
        title: 'My company processes biometric information.',
        role: ['company'],
        description: '“Biometric information” means an individual’s physiological, biological or behavioral characteristics, including an individual’s deoxyribonucleic acid (DNA), that can be used, singly or in combination with each other or with other identifying data, to establish individual identity. Biometric information includes, but is not limited to, imagery of the iris, retina, fingerprint, face, hand, palm, vein patterns, and voice recordings, from which an identifier template, such as a faceprint, a minutiae template, or a voiceprint, can be extracted, and keystroke patterns or rhythms, gait patterns or rhythms, and sleep, health, or exercise data that contain identifying information.',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (b)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (E)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 6,
        title: 'My company processes internet or other electronic network activity, such as browsing history, search history, and information regarding a consumer’s interaction with a website, application, or advertisement.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (F)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 7,
        title: 'My company processes geolocation data.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (G)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 8,
        title: 'My company processes audio, electronic, visual, thermal, olfactory, or similar information.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (H)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 9,
        title: 'My company processes professional or employment-related information.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (I)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 10,
        title: 'My company processes education information that is not publicly available personally identifiable information, as defined in the Family Educational Rights and Privacy Act (20 USC § 1232(g), 34 CFR Part 99).',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (J)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 11,
        title: 'My company inferences drawn from any of the information listed above to create a profile about a consumer reflecting the consumer’s preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.',
        role: ['company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.140 - (o) - (1) - (K)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      }
    ]
  },
  {
    id: 'internal-processes',
    title:'Internal processes',
    items: [,
      {
        id: 1,
        title: 'When requested, your company has to inform the consumer what categories and which specific pieces of personal information you have collected about them.',
        role: [ 'company'],
        description: 'You need to specify the categories of sources from which personal information is collected, the business or commercial purpose for collecting or selling personal information, the categories of third parties with whom you share personal information, the specific pieces of personal information you have collected about the consumer, and the categories of the consumer’s personal information that were sold or disclosed for business purposes in the 12 months preceding the consumer’s verifiable request.',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.100. - (a)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Cal. Civil Code - Section 1798.110. - (a)-(c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Cal. Civil Code - Section 1798.115. - (a)-(c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Morgan Lewis",
              href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
            }
        ]
      },
      {
        id: 2,
        title: 'Your company has to verify the identity of consumers who request to access or delete their personal information.',
        role: [ 'company'],
        description: 'If you are unable to verify a request, you may deny the request, but you must comply to the greatest extent you can. For example, you must treat a request to delete as a request to opt-out.',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.100. - (c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Cal. Civil Code - Section 1798.105. - (c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Morgan Lewis",
              href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
            }
        ]
      },
      {
        id: 3,
        title: 'Your company has to inform the consumer before the point of collection about the categories of personal information you collect and the purposes for which the categories of personal information shall be used.',
        role: [ 'company'],
        description: '',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.100. - (b)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Morgan Lewis",
              href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
            }
        ]
      },
      {
        id: 4,
        title: 'Your company has to deliver information to consumers free of charge within 45 days, by mail or electronically.',
        role: [ 'company'],
        description: 'You may provide personal information to a consumer at any time. The time period to provide the required information may be extended once by an additional 45 days when reasonably necessary, provided the consumer is provided notice of the extension within the first 45-day period. You shall not be required to provide personal information to a consumer more than twice in a 12-month period. The disclosure shall cover the 12-month period preceding the business’s receipt of the verifiable request and shall be made in writing and delivered through the consumer’s account with your company, if the consumer maintains an account with you, or by mail or electronically at the consumer’s option if the consumer does not maintain an account with your company, in a readily useable format that allows the consumer to transmit this information from one entity to another entity without hindrance.',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.100. - (d)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Cal. Civil Code - Section 1798.130. - (a) - (2)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Morgan Lewis",
            href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
          }
        ]
      },
      {
        id: 5,
        title: 'The information your company has to deliver is portable, to the extent technically feasible, in a readily useable format that allows consumers to transmit this information to another entity “without hindrance”.',
        role: [ 'company'],
        description: 'There is an exception for personal information that is collected for “single, one-time transactions.”',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.100. - (d)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Morgan Lewis",
            href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
          }
        ]
      },
      {
        id: 6,
        title: 'your company has to delete personal information when consumers request it.',
        role: ['company'],
        description: 'You need to delete the consumer’s personal information from your records and direct any service providers to delete the consumer’s personal information from their records. For exceptions see Civil Code - SECTION 1798.105. - (d) - (1)-(9). Note that each deletion request needs to be followed up by a formal response.',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.105. - (a) & (c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Cal. Civil Code - Section 1798.105. - (d) - (1)-(9)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Morgan Lewis",
              href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
            }
        ]
      },
      {
        id: 7,
        title: 'Your company has to create a process and to identify individuals responsible for consumers to opt-out and therefore not selling their data to third parties in response to such a request.',
        role: [ 'company'],
        description: 'Exceptions to such requests include where retention of the consumer’s personal information is necessary to complete a transaction for which the personal information was collected, provide goods and services to the consumer, or otherwise perform a contract with theconsumer, to detect security incidents, fraud, or illegal activity, to exercise free speech, or ensure the right of another consumer to exercise his or her right of free speech, to Enable internal uses that are reasonably aligned with the expectations of the consumer based on the consumer’s relationship with the business, to comply with a legal obligation or to  use the consumer’s personal information internally and in a lawful manner that is compatible with the context in which the consumer provided the information. Note that each opt-out request needs to be followed up by a formal response.',
        links: [ 
          { 
              title: "Cal. Civil Code - Section 1798.120 - (a)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Morgan Lewis",
            href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
          }
        ]
      },
      {
        id: 8,
        title: 'By default, your company should not sell consumers\' personal information when they are between 13 & 16 years of age. Nevertheless, your company has to create a process to allow them to opt-in.',
        role: [ 'company'],
        description: 'To opt-in the consumer, in the case of consumers between 13 and 16 years of age, or the consumer’s parent or guardian, in the case of consumers who are less than 13 years of age, has affirmatively authorized the sale of the consumer’s personal information. A business that willfully disregards the consumer’s age shall be deemed to have had actual knowledge of the consumer’s age.',
        links: [ 
          { 
              title: "Cal. Civil Code - Section 1798.120 - (c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Morgan Lewis",
            href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
          }
        ]
      },
      {
        id: 9,
        title: 'Your company has to provide consumers the right to equal services and prices.',
        role: ['company'],
        description: 'The law prohibits businesses from discriminating against consumers who exercise their rights under the CCPA. A business is specifically prohibited from denying goods or services to a consumer, charging a consumer a different price or rate for goods or services including through the use of discounts or other benefits, imposing penalties on a consumer, providing a consumer with a different level of quality or service, and suggesting a consumer will receive a different price or rate or different level of quality of goods or services.',
        links: [
          { 
              title: "Cal. Civil Code - Section 1798.125 - (a)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Morgan Lewis",
            href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
          }
        ]
      },
      {
        id: 10,
        title: 'Your company has to make available two or more designated methods for the consumer to request their information, including, at a minimum, a toll-free telephone number and website address (if the business maintains a website).',
        role: [ 'company'],
        description: 'A business that operates exclusively online and has a direct relationship with a consumer is only required to provide an email address for submitting requests. Consumers have the right to make such requests twice in any 12-month period.',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.130. - (a) - (1)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Morgan Lewis",
              href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
            }
        ]
      },
      {
        id: 11,
        title: 'Your company has to train and inform dedicated personnel to properly process new requests to exercise privacy rights.',
        role: ['company'],
        description: 'Businesses must ensure that personnel responsible for handling consumer inquiries regarding these new privacy rights are informed of the applicable requirements and know how to direct consumers to exercise those rights.',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.135 - (a) - (3)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Morgan Lewis",
            href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
          }
        ]
      }
    ]
  },
  {
    id: 'external-communication',
    title:'External communication',
    items: [,
      {
        id: 1,
        title: 'Your company has to disclose the consumer’s rights to request the deletion of their personal information.',
        role: ['company'],
        description: '',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.105 - (b)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Morgan Lewis",
              href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
            }
        ]
      },
      {
        id: 2,
        title: 'In case your company sells consumers\' personal information you have to inform your customers that their information may be sold and that they have the “right to opt-out” of the sale of their personal information.',
        role: [ 'company'],
        description: '',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.120 - (b)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Morgan Lewis",
            href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
          }
        ]
      },
      {
        id: 3,
        title: 'In case your company offers financial incentives for the collection, the sale, or the deletion of personal information, you need to disclose those financial incentives to your consumers.',
        role: [ 'company'],
        description: 'You need to explain how you calculate the value of the personal information and how the incentive is permitted under the CCPA.',
        links: [
          { 
            title: "Cal. Civil Code - Section 1798.125 - (b)",
            href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          },
          { 
            title: "Morgan Lewis",
            href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
          }
        ]
      },
      {
        id: 4,
        title: 'Your homepage website has to include a link to inform consumers that they have the right to opt-out of their personal information sale.',
        role: [ 'company'],
        description: 'In order to comply with this right to opt out, a business must post a “clear and conspicuous link” on its website’s home page titled “Do Not Sell My Personal Information,” and describe the right and include a link to the “Do Not Sell My Personal Information” page in its online privacy policy',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.135 - (a)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Morgan Lewis",
              href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
            }
        ]
      },
      {
        id: 5,
        title: 'Your company has to disclose in its online privacy policy a description of consumer\'s rights and the categories of consumer\'s personal information collected and/or sold in the preceding 12 months.',
        role: ['company'],
        description: '',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.130 - (a) - (5)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Morgan Lewis",
              href: 'https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C'
            }
        ]
      }
    ]
  },
  {
    id: 'recommendations',
    title:'Recommendations',
    items: [,
      {
        id: 1,
        title: 'Your company has to ensure that agreements with service providers are CCPA compliant.',
        role: ['company'],
        description: 'The CCPA allows businesses to share personal information with third parties or service providers for business purposes, so long as there is a written contract prohibiting the third party or service provider from selling the personal information or “retaining, using, or disclosing the personal information for any purpose other than for the specific purpose of performing the services specified in the contract. The CCPA defines “business purpose” as “the use of personal information for the business’s or service provider’s operational purposes, or other notified purposes, provided that the use of personal information shall be reasonably necessary and proportionate to achieve the operational purpose for which it was collected.” The CCPA enumerates categories of activities that constitute “business purposes,” including auditing; detecting security incidents; performing services, such as maintaining or servicing accounts, providing customer service, processing payments, fulfilling orders and transactions, and providing analytic services; and undertaking internal research for technological development and demonstration. WithoutaCCPA-compliantserviceprovider agreement, the disclosure of personal information to a vendor may constitute a sale of personal information that triggers the consumer’s opt-out right.',
        links: [
          {
            title: 'Morgan Lewis Recommendation',
            href: "https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C"
          }
        ]
      },
      {
        id: 2,
        title: 'Your company has to create and maintain a robust incident response plan.',
        role: ['company'],
        description: 'While implementing a robust incident response plan has been a best practice for some time, the CCPA’s new statutory damages and civil penalties further underscore the need for a thoughtful and comprehensive approach to breach response because the act will almost certainly lead to a spike in data breach–related litigation in California.',
        links: [
          {
            title: 'Morgan Lewis Recommendation',
            href: "https://www.morganlewis.com/-/media/files/document/2019/california-consumer-privacy-act-checklist.ashx?la=en&hash=0A8A3C710055C4F888204D0D58B3CC89E7FBB41C"
          }
        ]
      },
      {
        id: 3,
        title: 'Your company has to maintain records of requests and how you responded for 24 months in order to demonstrate your compliance.',
        role: ['company'],
        description: 'Companies that collect, buy, or sell the personal information of more than 4 million consumers have additional record-keeping and training obligations.',
        links: [
          {
            title: 'CCPA Fact Sheet',
            href: "https://oag.ca.gov/system/files/attachments/press_releases/CCPA%20Fact%20Sheet%20%2800000002%29.pdf"
          }
        ]
      }
    ]
  },
  {
    id: 'amendments',
    title:'Amendments',
    items: [,
      {
        id: 1,
        title: 'In case you are a Data Broker company, you need to register annually with the Attorney General and provide information about how consumers may opt out of the sale of their personal information',
        role: ['company'],
        description: 'Data broker is defined as a business that knowingly collects and sells to third parties the personal information of a consumer with whom the business does not have a direct relationship.',
        links: [
          { 
            title: "Assembly Bill No. 1202",
            href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201920200AB1202&firstNav=tracking"
          },
          {
            title: "Data Broker Registration Center",
            href: "https://oag.ca.gov/data-broker/register"
          }
        ]
      }
    ]
  },
  {
    id: 'consumer-rights',
    title:'Consumer Rights',
    items: [,
      {
        id: 1,
        title: 'Right to access: When you request it, the company has to inform you what categories and which specific pieces of personal information they have collected about you.',
        role: ['consumer'],
        description: 'The companies need to specify the categories of sources from which personal information is collected, the business or commercial purpose for collecting or selling personal information, the categories of third parties with whom they share personal information, the specific pieces of personal information they have collected about you, and the categories of your personal information that were sold or disclosed for business purposes in the 12 months preceding the your verifiable request.',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.100. - (a)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Cal. Civil Code - Section 1798.110. - (a)-(c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Cal. Civil Code - Section 1798.115. - (a)-(c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            }
        ]
      },
      {
        id: 2,
        title: 'Right to notice: The company has to inform you before the point of collection about the categories of personal information they collect and the purposes for which the categories of personal information shall be used.',
        role: ['consumer'],
        description: '',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.100. - (b)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            }
        ]
      },
      {
        id: 3,
        title: 'Right to be forgotten: The company has to delete your data when you request it.',
        role: ['consumer'],
        description: 'The companies need to delete your personal information from their records and direct any service providers to delete your personal information from their records. For exceptions see Civil Code - SECTION 1798.105. - (d) - (1)-(9).',
        links: [
            { 
              title: "Cal. Civil Code - Section 1798.105. - (a) & (c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            },
            { 
              title: "Cal. Civil Code - Section 1798.105. - (d) - (1)-(9)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
            }
        ]
      },
      {
        id: 4,
        title: 'Right to opt-out: The company has to make sure you can opt-out from them selling your personal data to third parties when you request it.',
        role: ['consumer'],
        description: 'Exceptions to such requests include where retention of your personal information is necessary to complete a transaction for which the personal information was collected, provide goods and services to you, or otherwise perform a contract with you, to detect security incidents, fraud, or illegal activity, to exercise free speech, or ensure the right of another consumer to exercise his or her right of free speech, to Enable internal uses that are reasonably aligned with your expectations based on your relationship with the business, to comply with a legal obligation or to  use your personal information internally and in a lawful manner that is compatible with the context in which you provided the information.',
        links: [ 
          { 
              title: "Cal. Civil Code - Section 1798.120 - (a)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 5,
        title: 'Right to opt-in: By default, the company should not sell your personal information when you are between 13 & 16 years of age. Nevertheless, the company needs to create a process to allow you to opt-in if you would like to.',
        role: ['consumer'],
        description: 'To opt-in, in the case you are between 13 and 16 years of age, or your parent or guardian, in the case you are less than 13 years of age, has affirmatively authorized the sale of the your personal information. A company that willfully disregards your age shall be deemed to have had actual knowledge of your age.”',
        links: [ 
          { 
              title: "Cal. Civil Code - Section 1798.120 - (c)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      },
      {
        id: 6,
        title: 'Right to equal services and prices: The company has to provide you the right to equal services and prices.',
        role: ['consumer'],
        description: 'The law prohibits companies from discriminating against you who exercise your rights under the CCPA. A company is specifically prohibited from denying goods or services to you, charging you a different price or rate for goods or services including through the use of discounts or other benefits, imposing penalties on you, providing you with a different level of quality or service, and suggesting you will receive a different price or rate or different level of quality of goods or services.',
        links: [
          { 
              title: "Cal. Civil Code - Section 1798.125 - (a)",
              href: 'https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='
          }
        ]
      }
    ]
  }
]

export const roles = {
  'company': 'Company',
  'consumer': 'Consumer',
}
