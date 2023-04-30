import { v4 as uuidv4 } from 'uuid';
uuidv4();

import {
  blog_04,
  blog_05,
  blog_06,
  blog_07,
} from '../assets';

export const blogsText = [
  {
    id: uuidv4(),
    txt_1: 'Blogs & News',
    txt_2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    imgBg:  '../../assets/images/blog/bg.jpg',
  },
];

export const blogsAndNews = [
  {
    id: 'ING-Solidarity-Awards-2017',
    title: 'ING Solidarity Awards 2017',
    short_description: '',
    description: `<p>Through the votes of our members, volunteers and supporters, the PLS won a generous sum of 1000€ from the ING Bank Luxembourg during its yearly ING Solidarity awards night.</p>
    <br />
    <p>In addition to this, we won an additional sum of 5000€ for our new project in Oquendo, to build four water pumps in four local primary schools. These water pumps will provide hundreds of children and parents access to clean water.</p>
    <br />
    <p>A huge thank you to ING Bank Luxembourg and to all our supporters!</p>`,
    highlights: `On 23rd November, PLS was awarded 6000€ by the ING Bank Luxembourg during their ING Solidarity awards night..`,
    imgSrc: blog_04,
    imgAlt: 'ING Solidarity Awards 2017 | PLS Scholarship Alumni Association Inc.',
    link: '/blogs/',
    date_posted: '2017-11-24 10:10:39.000'
  },
  {
    id: 'Banque-Raiffeisen-Donation-2018',
    title: 'Banque Raiffeisen Donation 2018',
    short_description: '',
    description:`<p>The Banque Raiffeisen regularly gives donations to local organisations and NGOs as part of their Corporate Social Responsibility (CSR) program. On 28th May 2018, the bank generously donated 5000€ to PLS.</p>
    <br />
    <p>This money went towards the Gerona North Central Elementary School SPED (special education) Center, a school that provides special education, protects and promotes the welfare of all learners who are unprivileged due to a disability. The donation covered the costs of the school’s new Model House. A part of the learning center was converted into a model house with a living room, bedroom, dining room, kitchen and bathroom. The aim of this project is to equip these children with the skills and familiarise them with the ambiance of their home, resulting in their empowerment and independence.</p>
    <br />
    <p>A huge thank you to the Banque Raiffeisen!</p>`,
    highlights: `On 28th May, PLS was awarded 5000€ by the Raiffeisen Bank Luxembourg.`,
    imgSrc: blog_05,
    imgAlt: 'Banque Raiffeisen Donation 2018 | PLS Scholarship Alumni Association Inc.',
    link: '/blogs/',
    date_posted: '2018-05-30 10:11:32.000'
  },
  {
    id:  'Congratulations-to-our-2022-graduates',
    title: 'Congratulations to our 2022 graduates',
    short_description: '',
    description:`<p>The selection criteria for candidates to benefit from a scholarship offered by the PLS is not only the financial situation of the child’s family but also the candidate’s intellectual ability and motivation needed to succeed in his/her studies. </p>
    <br />
    <p>As of 2022, PLS has a new scholarship program representative in the Philippines, Arlene Brucelas, who is monitoring the scholars and is in constant contact with them.</p>`,
    highlights: `PLS currently supports 16 scholars for the school year 2022-2023.`,
    imgSrc: blog_06,
    imgAlt: 'Congratulations to our 2022 graduates | PLS Scholarship Alumni Association Inc.',
    link: '/blogs/',
    date_posted: '2022-04-27 06:45:11.000'
  },
  {
    id:  'Festival-des-Nation-2022-in-Grevenmacher',
    title: 'Festival des Nations 2022 in Grevenmacher',
    short_description: '',
    description: `Great to be back after a long break due to the pandemic.`,
    highlights: `The rain didn’t stop us to have a great time at the Festival des Nations.`,
    imgSrc: blog_07,
    imgAlt: 'Festival des Nations 2022 in Grevenmacher | PLS Scholarship Alumni Association Inc.',
    link: '/blogs/',
    date_posted: '2022-05-01 10:58:31.000'
  },
];
