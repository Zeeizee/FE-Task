import React from 'react'
import SecondaryButton from './Buttons/SecondaryButton'
import UploadIcon from '../icons/UploadIcon'
import Select from './Dropdown/Select'
import ChevronDownIcon from '../icons/ChevronDownIcon'

const Header = () => {
  return (
    <div className='w-full h-auto gap-3 sm:h-16 border-b p-6 border-gray-300 flex flex-col sm:flex-row items-center justify-between'>
        <h1 className='text-xl font-semibold'>Comments</h1>
        <div className='w-full md:w-auto  flex flex-col sm:flex-row items-center gap-2'>
            <Select 
              textInput="All Pulse Surveys"
              icon={<ChevronDownIcon />}
              property="Default"
              filled="Default"
              showTextDescription={false}
              showLabel={false}
              showIcon={true}
              showIconLeft={false}              
              height={36}
              gap={8}
              options={[
                'All Pulse Surveys',
                'Survey 1',
                'Survey 2',
                'Survey 3'
              ]}
              placeholder="All Pulse Surveys"
              className='w-full sm:w-2/3  md:w-auto md:min-w-[326px]'

            />
            <SecondaryButton 
              text="Generate PDF"
              icon={<UploadIcon  />}
              size="Medium"
              property="Default"
              showIcon={true}
              showText={true}
              showIconRight={false}
            className='w-full sm:w-1/3  md:w-auto'
            />
        </div>
    </div>
  )
}

export default Header