import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import { useDeletePostMutation } from '@/redux/contactsSlice';
import Editcontact from './Editcontact';
import { Card } from '@prisma/client';
interface MenubarDemoProps {
  id:number; // Specify the type of 'id'
}
const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs'];

const MenubarDemo:React.FC<Card>=({id,name,email,title,company,phone}) => {
  const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);
  let [deleteid]=useDeletePostMutation()

let handeldelete=()=>{
  deleteid(id)
  
}

  return (
    <Menubar.Root className="flex  shadow-blackA7 absolute top-5 right-3">
      <Menubar.Menu>
        <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[13px] flex items-center justify-between gap-0.5 data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
         <img src={"menu.svg"} alt="" className='w-5 '/>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[120px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity] border-solid border border-violet11"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            
              {/* <img className='mr-2 ' src={"edit.svg"} alt="" />Edit{' '} */}
              <Editcontact id={id} name={name} phone={phone} title={title} email={email} company={company}/>
              
            
            <Menubar.Item className="group text-[14px]  text-violet11 rounded flex items-center h-[25px] px-[15px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none leading-4" onClick={handeldelete}>
            <img className='mr-2' src={"delete.svg"} alt="" />Delete{' '}
             
            </Menubar.Item>
           
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      
    </Menubar.Root>
  );
};

export default MenubarDemo;