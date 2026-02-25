import React, { useState } from 'react'
import SearchInput from './SearchInput'
import Select from './Dropdown/Select'
import SecondaryButton from './Buttons/SecondaryButton'
import CollapseIcon from '../icons/CollapseIcon'
import CheckmarkIcon from '../icons/CheckmarkIcon'
import FilterIcon from '../icons/FilterIcon'
import AISummaryIcon from '../icons/AISummaryIcon'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import SortIcon from '../icons/SortIcon'

const SecondaryHeader = ({ viewAiSummary, setViewAiSummary }) => {
    const [searchValue, setSearchValue] = useState('')
    const [selectedSort, setSelectedSort] = useState('Newest')


    const sortOptions = [
        'Newest',
        'Oldest',
        'Most Recent',
        'Alphabetical'
    ]

    const handleSortChange = (value) => {
        setSelectedSort(value)
    }

    return (
        <div className="w-full bg-white border-b border-gray-200 px-6 py-2">
            <div className="flex flex-col md:flex-row items-stretch lg:items-center gap-3">
                {/* Search Bar */}
                <div className="flex-1 flex flex-col lg:flex-row gap-2 flex-wrap sm:flex-nowrap ">
                    <SearchInput
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-full min-w-[200px] md:max-w-[326px] max-w-full"

                    />
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">

                        <Select
                            textInput={`Sort by: ${selectedSort}`}
                            icon={<ChevronDownIcon />}
                            leftIcon={<SortIcon />}
                            property="Default"
                            filled="Default"
                            showTextDescription={false}
                            showLabel={false}
                            showIcon={true}
                            showIconLeft={false}
                            height={36}
                            gap={8}
                            options={sortOptions.map(opt => `Sort by: ${opt}`)}
                            placeholder="Sort by: Newest"
                            value={`Sort by: ${selectedSort}`}
                            onChange={(value) => {
                                const selected = value.replace('Sort by: ', '')
                                handleSortChange(selected)
                            }}
                            className="min-w-[160px]"
                        />

                        <SecondaryButton
                            text="Collapse all"
                            icon={<CollapseIcon />}
                            size="Medium"
                            property="Default"
                            showIcon={true}
                            showText={true}
                            showIconRight={false}
                            className="whitespace-nowrap"
                        />


                        <SecondaryButton
                            text="Mark all read"
                            icon={<CheckmarkIcon />}
                            size="Medium"
                            property="Default"
                            showIcon={true}
                            showText={true}
                            showIconRight={false}
                            className="whitespace-nowrap"
                        />
                    </div>
                </div>


                <div className='flex  gap-1 items-center'>


                    <div className="flex flex-wrap items-center gap-2 ">
                        <SecondaryButton
                            text="Filters"
                            icon={<FilterIcon />}
                            size="Medium"
                            property="Default"
                            showIcon={true}
                            showText={true}
                            showIconRight={false}
                            className="whitespace-nowrap"
                        />

                        {/* AI summary Button - Active/Selected State */}
                        <SecondaryButton
                            text="AI summary (2)"
                            icon={<AISummaryIcon />}
                            size="Medium"
                            property="Default"
                            showIcon={true}
                            showText={true}
                            showIconRight={false}
                            onClick={() => setViewAiSummary(true)}
                            className={`whitespace-nowrap ${viewAiSummary
                                ? 'bg-gray-50 border-gray-400'
                                : ''
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondaryHeader
