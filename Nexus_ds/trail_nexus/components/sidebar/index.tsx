"use client";
import React from 'react';
import { Listbox, ListboxItem } from '@nexus-ds/listbox';
import {User} from '@nexus-ds/shared-icons';

interface SidebarProps {
//   items: string[];
}

const Sidebar: React.FC<SidebarProps> = () => {
    const items = [
        {
          key: "home",
          label: "Home",
        },
        {
          key: "economy",
          label: "Economy",
        },
        {
          key: "blockchain",
          label: "Blockchain",
        },
        {
          key: "logout",
          label: "Logout",
          startContent: <User fill='#c0161c'size={20}/>,
        }
      ];
  return (
    <div className="bg-default-100/60 h-screen w-[15%] px-4 pt-4 fixed">
      <div className="flex items-center justify-center mt-8">
        <span className="text-white text-2xl font-semibold uppercase">
          NEXUS UI
        </span>
      </div>

      <Listbox 
      items={items} 
      onAction={(key) => alert(key)} 
      itemClasses={{
        base: "py-3 px-2 text-lg first:mt-10 rounded-10 gap-3 ",
      }}>
        
      {(item) => (
          <ListboxItem
            key={item.key}
            color={item.key === "logout" ? "danger" : "default"}
            className={item.key === "logout" ? "text-danger text-5xl top-[580px] " : "text-5xl data-[hover=true]:bg-default-100"}
            startContent={item.startContent}
          >
            {item.label}
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
};

export default Sidebar;
