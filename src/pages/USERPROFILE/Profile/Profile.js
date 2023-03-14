import React, { useState } from 'react';
import ProfileImage from './ProfileImage';
import SkillModal from './SkillModal';
import UserInfo from './UserInfo';
import ExperienceModal from './ExperienceModal';
import EducationModal from './EducationModal';
import CertificateModal from './CertificateModal';
import { IoMdAddCircle } from 'react-icons/io';
import { SocialIcon } from 'react-social-icons';

export default function Profile( { userprofile } ) {

  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [skills, setSkills] = useState([]);

  console.log(userprofile);

  return (
    <div className='border-4  h-auto flex flex-col md:h-auto'>

      <div className='flex flex-col md:flex md:flex-row'>
        <div className='md:w-2/5'>
          <ProfileImage />
        </div>

        <div className='md:w-3/5'>
          <UserInfo />
          <SocialIcon className='mt-8 ml-2' url="https://twitter.com" />
          <SocialIcon className='mt-8 ml-2' url="https://google.com" />
          <SocialIcon className='mt-8 ml-2' url="https://instagram.com" />
          <SocialIcon className='mt-8 ml-2' url="https://facebook.com" />
        </div>
      </div>

      <div className='mt-2'>

        <div className='flex flex-col md:flex md:flex-row md:items-center md:ml-12 md:mr-12 mt-4'>

          {/* Skills */}
          <div className='h-screen bg-slate-300 border-[2px]  mb-2 w-full md:w-6/12 md:h-80'>
            <div className="mt-2 ml-2">
              SKILLS
              <button
                onClick={() => { setShowSkillModal(true) }}>
                <IoMdAddCircle className='ml-40 md:ml-96' />
              </button>
              <SkillModal skills={skills} isVisible={showSkillModal} onClose={() => setShowSkillModal(false)} />
              <div className='border-3 bg-white mt-2 w-5/6'>
                <ul className='border-3'>
                  {skills.map((skill) => {
                    return (
                      <li> {skill} </li>
                    )
                  })}
                </ul>
              </div>
              <p className='ml-2 mt-20'>Add your skills here</p>
            </div>
          </div>

          {/* Experience */}
          <div className='h-screen bg-slate-300 border-[2px] mb-2 w-full md:w-6/12 md:h-80 md:ml-3'>
            <div className="mt-2 ml-2">
              EXPERIENCE
              <button onClick={() => { setShowExperienceModal(true) }}>
                <IoMdAddCircle className='ml-40 md:ml-96' />
              </button>
              <ExperienceModal isVisible={showExperienceModal} onClose={() => setShowExperienceModal(false)} />
            </div>
            <p className='ml-2 mt-20'>Add your experience here</p>
          </div>

        </div>

        <div className='flex flex-col md:flex-row md:ml-12 md:mr-12 md:mt-24 mb-4'>

          {/* Education */}
          <div className='h-screen bg-slate-300 border-[2px] mb-2  w-full md:w-6/12 md:h-80'>
            <div className="mt-2 ml-2">
              EDUCATION
              <button onClick={() => { setShowEducationModal(true) }}>
                <IoMdAddCircle className='ml-40 md:ml-96' />
              </button>
              <EducationModal isVisible={showEducationModal} onClose={() => setShowEducationModal(false)} />
            </div>
            <p className='ml-2 mt-20'>Add your education here</p>
          </div>

          {/* Certificates */}
          <div className='h-screen bg-slate-300 border-[2px] w-full md:w-6/12 md:h-80 md:ml-3'>
            <div className="mt-2 ml-2">
              CERTIFICATE
              <button onClick={() => { setShowCertificateModal(true) }}>
                <IoMdAddCircle className='ml-40 md:ml-96' />
              </button>
              <CertificateModal isVisible={showCertificateModal} onClose={() => setShowCertificateModal(false)} />
            </div>
            <p className='ml-2 mt-20'>Add your certificates here</p>
          </div>
        </div>


      </div>

    </div>
  )
}
