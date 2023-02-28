# web3 nextjs template

This is a template for a web3 project using nextjs. It is a template for a project that uses the following technologies:

- nextjs13
- typescript
- tailwindcss
- ethersjs 5.4
- framer motion
- qnect 
- headlessui/react
- heroicons/react

## How to set up this template

1. git clone the repo to your local machine, to rename the name of the folder, use the following command:

    git clone link_to_repo <new_folder_name>

2. Run the init_script.py script with sudo on linux, and as administrator on windows (I think you can right-click the cmd-prompt in your windows menu and choose 'run as administrator'). 

## app/layout.tsx
Comment out the `QNectHandler` component from the layout, if you don't want to use qnect.

## Custom fonts
I don't know anymore how I added the custom Google font, I can't find where I import it... But I use it
in the tailwind.config.js file. I believe I import it somewhere in a header, not sure where.

## Structure
As example there are lottery-components in the project. You can delete them, or keep them as an example.
This might be useful to see how to use the custom Qnect components and hooks.

/app contains the pages, some components, and the "global" layout.tsx file,
/components contains most components, 
/hooks can be used to store custom hooks,
/utils/constants to store constants,
/utils/context contains the global context! ! Important !
/utils/contracts for icon -> store enums here for each contract containing all functions,
for evm -> store the abi's here,
/utils/qnect contains the qnect components and hooks, also a formataddress function that might be useful,