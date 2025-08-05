import { Calendar, Clock } from 'iconsax-reactjs';
import React from 'react';
import ButtonSimpleFilled from '../buttons/ButtonSimpleFilled';

/**
 * AppointmentPopup Component
 *
 * Props:
 * - title: string
 * - date: string
 * - time: string
 * - callLink: string (URL)
 * - candidate: { name: string; role: string; avatar: string }
 * - hiringTeam: Array<{ name: string; role: string; avatar: string }>
 * - instruction: string
 */
const AppointmentPopup = ({
  title = 'Interview with User Experience Design candidates',
  date = 'Wednesday, 07 Jun 2022',
  time = '10:30 AM - 12:30 PM (2 Hours)',
  callLink = 'https://meet.google.com/fmv-rttt',
  candidate = { name: 'Cameron Williamson', role: 'User Experience Designer', avatar: '/assets/pfp.jpg' },
  hiringTeam = [
    { name: 'Ralph Edwards', role: 'User Experience Designer', avatar: '/assets/pfp.jpg' }
  ],
  instruction = 'Submit interview result immediately to hiring manager'
}) => {
  return (
    <div className="font-manrope inline-flex flex-col items-center gap-3 p-6 ">
      {/* Title & Schedule */}
      <div className="flex w-full flex-col items-start gap-1.5">
        <p className="text-black text-sm font-semibold leading-6">{title}</p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-[#92929D]" />
            <span className="text-[#92929D] text-xs font-medium leading-5">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#92929D]" />
            <span className="text-[#92929D] text-xs font-medium leading-5">{time}</span>
          </div>
        </div>
      </div>

      {/* Call Link */}
      <div className="flex flex-col w-full justify-between items-start">
        <h2 className=' font-semibold text-sm leading-6 text-black'>Interview Call Link</h2>
        <div className='flex flex-row w-full self-stretch items-center  justify-between '>

        <div className="flex items-center gap-2 px-4 py-2.5   bg-[#F5F5F8] rounded-lg">
<img src='/assets/meet.svg' className='w-3 h-2.5' alt='google meet'/>          
            
          <span className="text-[#92929D] text-[13px] font-medium leading-5 text-nowrap ">{callLink.replace(/^https?:\/\//, '')}</span>
        </div>
        <ButtonSimpleFilled onClick={() => window.open(callLink, '_blank')} className="px-4 py-2 text-nowrap" childClassName="text-white text-sm font-semibold leading-6">
          Go To Call Room
        </ButtonSimpleFilled>
      </div>
        </div>

      <div className="w-full h-px bg-[#F1F1F5]" />

      {/* Candidate */}
      <div className="flex w-full items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-primary-500 overflow-hidden flex-shrink-0">
          <img src={candidate.avatar} alt={candidate.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-black text-sm font-semibold leading-6">{candidate.name}</p>
          <p className="text-[#92929D] text-xs font-medium leading-5">{candidate.role}</p>
        </div>
      </div>

      {/* Hiring Team */}
      <div className="flex w-full flex-col items-start gap-2">
        <p className="text-[#44444F] text-sm font-semibold leading-6">Hiring Team</p>
        {hiringTeam.map((member, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary-500 overflow-hidden flex-shrink-0">
              <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#44444F] text-sm font-semibold leading-6">{member.name}</p>
              <p className="text-[#92929D] text-xs font-medium leading-5">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-[#F1F1F5]" />

      {/* Instruction */}
      <div className="flex w-full flex-col gap-1">
        <p className="text-[#44444F] text-sm font-semibold leading-6">Instruction</p>
        <p className="text-[#92929D] text-xs font-medium leading-5">{instruction}</p>
      </div>
    </div>
  );
};

export default AppointmentPopup;