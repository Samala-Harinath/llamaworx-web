import React from 'react';
import Button from './Button';

const SwalAlert = ({icon,title,subTitle,handleLeftBtn,handleRightBtn,RightBtnText}) => {
    return (
        <div id="default-modal" tabindex="-1" className="overflow-y-auto overflow-x-hidden h-full fixed top-0 right-0 left-0 bottom-0 z-[1000] flex justify-center items-center w-full md:inset-0  max-h-full bg-[rgba(0,0,0,0.3)]">
            <div className="relative w-full max-w-sm max-h-full">
                <div className="relative bg-white rounded-3xl shadow p-5 border-2 border-[#D0D5DD]">
                    <div className="modal-content text-center  flex justify-center items-center gap-2 flex-col">
                        <img src={icon} className='w-14 h-14' />
                        <h3 className="text-lg font-medium ">{title}</h3>
                        <p className="text-[#475467]">{subTitle}</p>
                        <div className='justify-center flex'>
                            <Button name={"Dismiss"} className=" text-[#475467]" onClick={() => handleLeftBtn()} />
                            <Button name={RightBtnText} className=" text-[#6941C6]" onClick={() => handleRightBtn()} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SwalAlert