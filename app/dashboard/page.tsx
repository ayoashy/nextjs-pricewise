import React from 'react';

const Dashboard = () => {
  return (
    <div className='flex w-full'>
      <div className='sticky top-16 w-[300px] w-0s duration-300 bg-purple-300  overflow-y-auto h-[calc(100vh-4.5rem)] z-10'>
        <div className='h-[700px] bg-green-300'>lmao</div>
        <div className='h-[700px] bg-yellow-300'>wetin</div>
      </div>
      <div className='w-full'>
        <div className='h-[700px] bg-blue-300'>lmao</div>
        <div className='h-[700px] bg-gray-300'>wetin</div>
        <div className='h-[700px] bg-green-300'>lmao</div>
        <div className='h-[700px] bg-yellow-300'>wetin</div>
      </div>
    </div>
  );
};

export default Dashboard;
