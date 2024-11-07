import React from "react";
import {Code} from "@nexus-ds/react";

import {
  MoonIcon,
  MagicIcon,
  FlashIcon,
  DevicesIcon,
  ServerLinearIcon,
  TagUserLinearIcon,
  MouseCircleLinearIcon,
  CodeDocumentLinearIcon,
  HtmlLogoLinearIcon,
  CubesLinearIcon,
} from "@/components/icons";

export default {
  topFeatures: [
    {
      title: "Themeable",
      description:
        "Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.",
      icon: <MagicIcon className="text-blue-500" />,
    },
    {
      title: "Fast",
      description:
        "Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.",
      icon: <FlashIcon className="text-blue-500" />,
    },
    {
      title: "Light & Dark UI",
      description:
        "Automatic dark mode recognition, Nexus Design System automatically changes the theme when detects HTML theme prop changes.",
      icon: <MoonIcon className="text-blue-500" />,
    },
    {
      title: "Unique DX",
      description:
        "Nexus Design System is fully-typed to minimize the learning curve, and provide the best possible developer experience.",
      icon: <DevicesIcon className="text-blue-500" />,
    },
  ],
  fullFeatures: [
    {
      title: "React server components",
      description: (
        <>
          All Nexus Design System components already include the <Code>&quot;use client&quot;</Code> directive,
          which means you can import and use them directly in your RSC.
        </>
      ),
      icon: <ServerLinearIcon className="text-blue-500" />,
    },
    {
      title: "Accessible components",
      description:
        "Nexus Design System components follow the WAI-ARIA guidelines, provide keyboard support and sensible focus management.",
      icon: <TagUserLinearIcon className="text-blue-500" />,
    },
    {
      title: "Focus interactions",
      description:
        "Focus ring will appear only when user navigates with keyboard or screen reader.",
      icon: <MouseCircleLinearIcon className="text-blue-500" />,
    },
    {
      title: "Multiple packages",
      description:
        "Nexus Design System is divided into multiple packages, so you can install only the components you need.",
      icon: <CubesLinearIcon className="text-blue-500" />,
    },
    {
      title: "TypeScript based",
      description:
        "Build type safe applications, Nexus Design System has a fully-typed API to minimize the learning curve, and help you build applications.",
      icon: <CodeDocumentLinearIcon className="text-blue-500" />,
    },
    {
      title: "Override components tags",
      description: "A polymorphic `as` prop is included in all Nexus Design System components.",
      icon: <HtmlLogoLinearIcon className="text-blue-500" />,
    },
    {
      title: "No runtime styles",
      description:
        "Nexus Design System is based on Tailwind CSS, it means that there are no runtime styles, and no unnecessary classes in your bundle.",
      icon: <FlashIcon className="text-blue-500" />,
    },
    {
      title: "Beautifully designed",
      description:
        "Nexus Design System components are unique and are not tied to any visual trend or design rule, which makes us unique and of course your projects as well.",
      icon: <MagicIcon className="text-blue-500" />,
    },
  ],
  themingCode: `const { nexusui } = require("@nexus-ds/react");

module.exports = {
  // ...
  plugins: [
    nexusui({
      themes: {
        light: {
          colors: {
            primary: "#0072f5",
          }
        },
        dark: {
          colors: {
            primary: "#0072f5",
          }
        },
      },
    }),
  ],
};

module.exports = {
  // ...
  plugins: [
    nexusui({
      themes: {
        light: {
          colors: {
            primary: "#7828c8",
          }
        },
        dark: {
          colors: {
            primary: "#9353d3",
          }
        },
      },
    }),
  ],
};

module.exports = {
  // ...
  plugins: [
    nexusui({
      themes: {
        light: {
          colors: {
            primary: "#FFFFFF",
          }
        },
        dark: {
          colors: {
            primary: "#000000",
          }
        },
      },
    }),
  ],
};

module.exports = {
  // ...
  plugins: [
    nexusui({
      themes: {
        light: {
          colors: {
            primary: "#FFD34E",
            secondary: "#EE457E",
            background:"#F4E8D1"
          }
        },
        dark: {
          colors: {
            primary: "#FFD34E",
            secondary: "#EE457E",
            background: "#E1CA9E"
          }
        },
      },
    }),
  ],
};
`,

  darkModeCode: `import React from "react";
import {NexusUIProvider} from "@nexus-ds/react";

const Application = ({Component, pageProps}) => {
  return (
    <NexusUIProvider>
      <main className={isDark ? "dark" : "light"}>
        <Component {...pageProps} />
      </main>
    </NexusUIProvider>
  );
};

export default Application;  
`,
  customizationCode: `import React from 'react';
import {Button} from '@nexus-ds/react';
import confetti from 'canvas-confetti';

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({...});
  };

  return (
    <Button
      ref={buttonRef}
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Confetti Time
    </Button>
  );
};

export default CustomButton;
`,
  a11yExampleCode: `import {
  Button,
  Dropdown,
  DropdownSection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nexus-ds/react";

import {
  AddNoteBulkIcon,
  CopyDocumentBulkIcon,
  EditDocumentBulkIcon,
  DeleteDocumentBulkIcon,
} from "@nexus-ds/shared-icons";

const iconClasses = "text-2xl text-default-500 pointer-events-none flex-shrink-0";

export const Example = () => {
  return (
    <Dropdown className="shadow-xl" placement="bottom">
      <DropdownTrigger>
        <Button color="success" variant="flat">
          Actions
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect
        aria-label="Actions"
        color="default"
        variant="flat"
      >
        <DropdownSection title="Actions">
          <DropdownItem
            key="new"
            description="Create a new file"
            shortcut="⌘N"
            startContent={<AddNoteBulkIcon className={iconClasses} />}
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            description="Copy the file link"
            shortcut="⌘C"
            startContent={<CopyDocumentBulkIcon className={iconClasses} />}
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            description="Allows you to edit the file"
            shortcut="⌘⇧E"
            startContent={<EditDocumentBulkIcon className={iconClasses} />}
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            description="Permanently delete the file"
            shortcut="⌘⇧D"
            startContent={
              <DeleteDocumentBulkIcon
                className={clsx(iconClasses, "!text-danger")}
              />
            }
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
`,
  darkModeExampleCode: `import {Card, CardBody, Button, Image, Progress, CardProps} from "@nexus-ds/react";
import {useState, FC} from "react";
import {clsx} from "@nexus-ds/shared-utils";

import {
  PauseCircleBoldIcon,
  NextBoldIcon,
  PreviousBoldIcon,
  RepeatOneBoldIcon,
  ShuffleBoldIcon,
  HeartLinearIcon,
} from "your-icons-package";

export interface MusicPlayerProps extends CardProps {}

export const MusicPlayer: FC<MusicPlayerProps> = ({className, ...otherProps}) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      isBlurred
      className={clsx("border-none bg-background/60 dark:bg-default-100/50", className)}
      shadow="sm"
      {...otherProps}
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              classNames={{
                base: "shadow-black/20",
              }}
              height={200}
              shadow="lg"
              src="/images/album-cover.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-sm text-foreground/80">12 Tracks</p>
                <h1 className="text-lg font-medium mt-2">Jai Mata Di Bol</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartLinearIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="default"
                size="sm"
                value={33}
              />
              <div className="flex justify-between">
                <p className="text-sm">1:23</p>
                <p className="text-sm text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RepeatOneBoldIcon className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PreviousBoldIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PauseCircleBoldIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <NextBoldIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <ShuffleBoldIcon className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
`,
};
