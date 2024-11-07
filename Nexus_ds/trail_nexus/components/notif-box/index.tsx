import React from "react";
import {CircularProgress, Card, CardBody, CardFooter, Chip, Listbox, ListboxItem} from "@nexus-ds/react";
import {ChevronRightIcon} from "@nexus-ds/shared-icons";
import IconWrapper from "./icon-wrapper";
import ItemCounter from "./item-counter";
import {BookIcon,BugIcon,ChatIcon,LayoutIcon, PlayCircleIcon,PullRequestIcon,TagIcon,UsersIcon,WatchersIcon} from "@/icons"

const NotifBox = () => {
    return (
    <>
    
    <Card className="w-full h-[240px] mt-10 border-none bg-gradient-to-br from-violet-700 to-purple-900">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-white",
              track: "stroke-white/10",
              value: "text-3xl font-semibold text-white",
            }}
            value={70}
            strokeWidth={4}
            showValueLabel={true}
            />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
              base: "border-1 border-white/30",
              content: "text-white/90 text-small font-semibold",
            }}
            variant="bordered"
            >
          2800 Data points
        </Chip>
      </CardFooter>
    </Card>

    <Listbox
      aria-label="User Menu"
      onAction={(key) => alert(key)}
      className="mt-10 p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
      itemClasses={{
        base: "w-full px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem
        key="issues"
        endContent={<ItemCounter number={13} />}
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <BugIcon className="text-lg " />
          </IconWrapper>
        }
      >
        Issues
      </ListboxItem>
      <ListboxItem
        key="pull_requests"
        endContent={<ItemCounter number={6} />}
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            <PullRequestIcon className="text-lg " />
          </IconWrapper>
        }
      >
        Pull Requests
      </ListboxItem>
      <ListboxItem
        key="discussions"
        endContent={<ItemCounter number={293} />}
        startContent={
          <IconWrapper className="bg-secondary/10 text-secondary">
            <ChatIcon className="text-lg " />
          </IconWrapper>
        }
      >
        Discussions
      </ListboxItem>
      <ListboxItem
        key="actions"
        endContent={<ItemCounter number={2} />}
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <PlayCircleIcon className="text-lg " />
          </IconWrapper>
        }
      >
        Actions
      </ListboxItem>
      <ListboxItem
        key="projects"
        endContent={<ItemCounter number={4} />}
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
            <LayoutIcon className="text-lg " />
          </IconWrapper>
        }
      >
        Projects
      </ListboxItem>
      <ListboxItem
        key="releases"
        className="group h-auto py-3"
        endContent={<ItemCounter number={399} />}
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            <TagIcon className="text-lg" />
          </IconWrapper>
        }
        textValue="Releases"
      >
        <div className="flex flex-col gap-1">
          <span>Releases</span>
          <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
            <span className="text-tiny text-default-600">@nexus-ds/react@2.0.10</span>
            <div className="flex gap-2 text-tiny">
              <span className="text-default-500">49 minutes ago</span>
              <span className="text-success">Latest</span>
            </div>
          </div>
        </div>
      </ListboxItem>
      <ListboxItem
        key="contributors"
        endContent={<ItemCounter number={79} />}
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <UsersIcon />
          </IconWrapper>
        }
      >
        Contributors
      </ListboxItem>
      <ListboxItem
        key="watchers"
        endContent={<ItemCounter number={82} />}
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
            <WatchersIcon />
          </IconWrapper>
        }
      >
        Watchers
      </ListboxItem>
      <ListboxItem
        key="license"
        endContent={<span className="text-small text-default-400">MIT</span>}
        startContent={
          <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
            <BookIcon />
          </IconWrapper>
        }
      >
        License
      </ListboxItem>
    </Listbox>

    </>
  );
}

export default NotifBox