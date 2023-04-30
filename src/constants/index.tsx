import { v4 as uuidv4 } from 'uuid';
uuidv4();

import {
  blog_01,
  blog_02,
  blog_03,
  admission_ads_img,
  about_1,
  about_2,
  about_3,
  about_4,
} from '../assets';

export const navLinks = [
  {
    id: uuidv4(),
    title: 'Home',
    link: '/',
  },
  {
    id: uuidv4(),
    title: 'About Us',
    link: '/about',
  },
  {
    id: uuidv4(),
    title: 'Blogs & News',
    link: '/blogs',
  },
  {
    id: uuidv4(),
    title: 'Scholars',
    link: '/scholars',
  },
  {
    id: uuidv4(),
    title: 'Projects',
    link: '/projects',
  },
  {
    id: uuidv4(),
    title: 'Humanitarian Aid',
    link: '/humanitarian-aid',
  },
];

export const navLinks2 = [
  {
    id: uuidv4(),
    title: 'Home',
    link: '/',
  },
  {
    id: uuidv4(),
    title: 'About Us',
    link: '/about',
  },
  {
    id: uuidv4(),
    title: 'Blogs & News',
    link: '/blogs',
  },
  {
    id: uuidv4(),
    title: 'Scholars',
    link: '/scholars',
  },
  {
    id: uuidv4(),
    title: 'Blogs & News Details',
    link: '/blogs/:postId',
  },
  {
    id: uuidv4(),
    title: 'About PLS',
    link: '/about-pls/:id',
  },
  {
    id: uuidv4(),
    title: 'Projects',
    link: '/projects',
  },
  {
    id: uuidv4(),
    title: 'Humanitarian Aid',
    link: '/humanitarian-aid',
  },


];

export const aboutPLS = [
  {
    id: 'scholarship-program-0001',
    title: 'SCHOLARSHIP PROGRAM',
    description:
      `<p>We would like to take a moment to share with you an initiative that has the potential to change the lives of underprivileged children. The SCHOLARSHIP PROGRAM is aimed at providing access to quality education to children who may not have the resources to do so otherwise.</p>
      <br />
      <p>Education is a fundamental right that should be accessible to all children, regardless of their financial or social background. Unfortunately, many children do not have access to quality education, and this limits their opportunities for growth and development.</p>
      <br />
      <p>By supporting the SCHOLARSHIP PROGRAM, you can help make a positive impact on the lives of these children. Your contribution can help provide them with the tools they need to succeed and reach their full potential.</p>
      <br />
      <p>Every child has the right to a quality education, and by supporting this program, you are not only investing in their future but also in the future of our society. Your donation can help create a better tomorrow for the underprivileged children in our communities.</p>
      <br />
      <p>We encourage you to consider supporting the SCHOLARSHIP PROGRAM and be a part of this movement towards empowering underprivileged children with the gift of education.</p>
      <br />
      <p>Thank you for your consideration and support.</p>`,
    highlights: `Support of education for underprivileged children to receive a quality education`,
    imgSrc: blog_01,
    imgAlt: 'SCHOLARSHIP PROGRAM | PLS Scholarship Alumni Association Inc.',
    link: '/about-pls/',
  },
  {
    id: 'pls-projects-0002',
    title: 'PLS PROJECTS',
    description: `<p>We are excited to share with you the important work that we're doing through the PLS PROJECTS. Our goal is to improve access to quality education and basic sanitation by constructing and renovating schools and sanitary facilities in underprivileged communities.</p>
    <br />
    <p>We believe that education is the key to breaking the cycle of poverty and creating brighter futures for individuals and communities. Unfortunately, many children in underprivileged areas are forced to attend schools in poor condition, without basic facilities like clean water and toilets.</p>
    <br />
    <p>By supporting the PLS PROJECTS, you can make a difference in the lives of these children and their communities. Your contribution can help provide them with a safe and healthy learning environment that they deserve.</p>
    <br />
    <p>Together, we can empower these communities and give children the opportunity to thrive. We invite you to join us in this important mission and make a positive impact on the lives of those in need.</p>
    <br />
    <p>Thank you for considering the PLS PROJECTS and for your support. Together, we can create a brighter future for all.</p>`,
    highlights: `Construction and renovation of schools and sanitary facilities`,
    imgSrc: blog_02,
    imgAlt: 'PLS PROJECTS | PLS Scholarship Alumni Association Inc.',
    link: '/about-pls/',
  },
  {
    id: 'humanitarian-aid-0003',
    title: 'HUMANITARIAN AID',
    description: `<p>We are writing to share with you an initiative that has the potential to make a real difference in the lives of those affected by natural disasters. The HUMANITARIAN AID program provides on-site help to local populations affected by natural disasters, including access to food, water, and shelter.</p>
    <br />
    <p>Natural disasters can have devastating effects on communities, leaving them without basic necessities and struggling to survive. The HUMANITARIAN AID program is committed to providing immediate relief and support to those affected, working alongside local communities to rebuild and recover.</p>
    <br />
    <p>By supporting this program, you can help provide life-saving resources to those in need, and be part of a collective effort to create positive change. Your contribution can help provide a glimmer of hope to those who have lost so much.</p>
    <br />
    <p>We invite you to consider supporting the HUMANITARIAN AID program and be a part of this important mission. Together, we can make a real impact and help those affected by natural disasters get back on their feet.</p>
    <br />
    <p>Thank you for your consideration and support. Together, we can make a difference in the lives of those in need.</p>`,
    highlights: `On-site help to local populations affected by natural disasters`,
    imgSrc: blog_03,
    imgAlt: 'HUMANITARIAN AID | PLS Scholarship Alumni Association Inc.',
    link: '/about-pls/',
  },
];

export const admissionAds = [
  {
    id: uuidv4(),
    txt_1: 'Accepting',
    txt_2: 'NEW',
    txt_3: 'Scholars',
    sy: 'SY 2022-2023',
    description: 'Full Scholarship for Students from Public Schools',
    imgSrc: admission_ads_img,
    imgAlt: 'Admission | PLS Scholarship Alumni Association Inc.',
    applyLink: '#',
    btnText: 'Apply Now',
    help_1: 'Looking for help? Get in touch with us:',
    help_2: '09267332616 | mail@philippinesluxembourgsociety.com',
  },
];



export const aboutUs = [
  {
    id: uuidv4(),
    txt_1: 'About Us',
    txt_2:
      'The Philippines–Luxembourg Society (PLS) is a non-governmental organisation with the aim of helping underprivileged people in the Philippines. The priority focus of PLS is supporting the education of disadvantaged children, reconstruction of schools and sanitary facilities, as well as providing humanitarian aid during natural catastrophes.',
    imgBg: '../../assets/images/team.jpg',
  },
];

export const whoWeAre = [
  {
    id: uuidv4(),
    years_in_service: `<div class="flex mb-4">
    <span class="text-indigo-600 text-2xl font-bold mb-0"><span class="counter-value text-6xl font-bold" data-target="36">36</span>+</span>
    <span class="self-end font-medium ml-2">Years <br> in service</span>
    </div>`,
    txt_1: 'Our History',
    txt_2: `<p>The Philippines–Luxembourg Society (PLS) was founded on 15th May 1986 through the initiative of Mrs Mita Terry, a Filipina living in Luxembourg at the time. With the help of the Filipino and Luxembourgish community, the PLS was launched with the initial goal of promoting friendship and cultural ties between the people of the Philippines and Luxembourg. Other initial activities of the PLS focused on managing charity projects in favour of the less privileged in the Philippines.</p>
    <br />
    <p>The charity component has grown in importance over the past years and now represents the main activity of the association, so that the main focus is educational projects in the Philippines.</p>`,
    imgSrc1: about_1,
    imgSrc2: about_2,
    imgSrc3: about_3,
    imgAlt: 'About Us | PLS Scholarship Alumni Association Inc.',
    link: '#',
    btnText: 'Contact us',
  },
];

export const whoWeAreTwo = [
  {
    id: uuidv4(),
    txt_1: ``,
    txt_2: `<p>The PLS is particularly aware of the need for adequate local infrastructure, and the projects aim to assist the wider community, where necessary creating the appropriate infrastructure in schools or villages like improving sanitary facilities, building and renovation of libraries in schools as well as donation of computers for classrooms.</p>
    <br />
    <p>On several occasions, the PLS has also organised emergency humanitarian support in the wake of natural disasters to local communities in need.</p>
    <br />
    <p>On January 2016, the Luxembourg Ministry of Foreign Affairs accredited PLS the status of a non-governmental organisation. This was an important step for PLS to maximize its help to underprivileged people in the Philippines through the co-funding of the Luxembourgish Government.</p>`,
    imgSrc: about_4,
    imgAlt: 'About Us | PLS Scholarship Alumni Association Inc.',
    link: '#',
  },
];

