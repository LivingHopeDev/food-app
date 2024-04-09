import React from 'react'

function ListCard( {listImage, title}) {
  return (
    <div className='w-[168px] h-60 bg-[#FAFAFA] rounded-3xl flex flex-col justify-center items-center '>
    <div className='bg-white rounded-full  p-4'>
        <img src={listImage} alt=''/>
    </div>
    <p className='mt-5 text-primaryText'>{title}</p>
</div>  )
}

export default ListCard