import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User, Card, Switch, useSwitch, VisuallyHidden, SwitchProps} from "@nexus-ds/react";
import {MoonFilledIcon, SunFilledIcon} from "@nexus-ds/shared-icons"

const AvatarBox = (props: SwitchProps) => {
    const {
      Component, 
      slots, 
      isSelected, 
      getBaseProps, 
      getInputProps, 
      getWrapperProps
    } = useSwitch(props);

    return (
    <Card className="w-full mt-3  px-5 py-5 flex flex-row place-content-between ">
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: "https://i.pravatar.cc/150?img=33",
                        }}
                        className="transition-transform"
                        description="@tonyreichert"
                        name="Tony Reichert"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Signed in as</p>
                        <p className="font-bold">@tonyreichert</p>
                    </DropdownItem>
                    <DropdownItem key="settings">
                        My Settings
                    </DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="analytics">
                        Analytics
                    </DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback">
                        Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <SunFilledIcon/> : <MoonFilledIcon/>}
          </div>
      </Component>
    </div>
    </Card>
    );
}

export default AvatarBox