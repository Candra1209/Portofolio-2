import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownLink() {
    return (
    <Menu as="div" className="relative inline-block text-left">
        <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full border-0 px-10 py-2 text-base md:text-lg lg:text-2xl font-satisfy text-white ring-1 ring-inset ring-gray-300 hover:bg-emerald-700">
            Links
        </Menu.Button>
        </div>

        <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Project
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Contact
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-white' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    About me
                    </a>
                )}
                </Menu.Item>
            </div>
            </Menu.Items>
        </Transition>
        </Menu>
    )
}